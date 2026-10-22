#!/usr/bin/env node
// Checks the plugin's read-only list and its hook. No dependencies.
//
//   node hooks/check-allowlist.mjs
//   node hooks/check-allowlist.mjs --source lead-finder=<dir> --source telegrin=<dir> --source grinfi=<dir>
//
// Without --source it checks the list's shape, the version, and what the
// hook answers. With --source it also reads that server's code and fails
// when a listed tool is not registered there or is not marked read-only.
import { spawnSync } from 'node:child_process';
import { copyFileSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HOOKS = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(HOOKS);
const SERVERS = ['lead-finder', 'telegrin', 'grinfi'];
// Names the hook must never let through, listed or not.
const NEVER = {
  'lead-finder': ['confirm_request', 'continue_request', 'create_request', 'lookup', 'refresh_base', 'find_profiles_by_email',
    'create_topup', 'set_spend_limit', 'set_auto_topup', 'grant_free_leads', 'register_source', 'erase_person', 'stop_request',
    'deliver_to_grinfi', 'connect_grinfi', 'sync_client_base', 'escalate_request', 'repeat_search', 'edit_portrait', 'update_context'],
  telegrin: ['send_lead_message', 'approve_signal', 'start_history_scan', 'start_chat_search', 'probe_keywords',
    'create_v2_campaign', 'update_v2_campaign', 'delete_lead', 'pause_campaign', 'resume_v2_campaign', 'archive_signal',
    'set_feed_verdict', 'handoff_signal_to_grinfi', 'check_campaign_understanding', 'estimate_history_scan'],
  grinfi: ['call_tool', 'report_issue'],
};

const failures = [];
const fail = (msg) => failures.push(msg);
const say = (msg) => console.log(msg);

function readList(file) {
  const entries = [];
  readFileSync(file, 'utf8').split('\n').forEach((raw, i) => {
    const line = raw.replace(/\r$/, '');
    if (line === '' || line.startsWith('#')) return;
    const m = /^(lead-finder|telegrin|grinfi) ([a-z0-9_]+)$/.exec(line);
    if (!m) return fail(`read-only-tools.txt:${i + 1}: not "<server> <tool>": ${JSON.stringify(line)}`);
    entries.push({ server: m[1], tool: m[2] });
  });
  return entries;
}

function runHook(hook, input) {
  const r = spawnSync('bash', [hook], { input, encoding: 'utf8' });
  return { code: r.status, out: (r.stdout ?? '').trim() };
}
const event = (name, toolInput = {}) =>
  JSON.stringify({ session_id: 's', cwd: '/tmp', hook_event_name: 'PreToolUse', tool_name: name, tool_input: toolInput, tool_use_id: 't' });
const fq = (server, tool) => `mcp__plugin_outbound-agent_${server}__${tool}`;
function isAllow(out) {
  try {
    const o = JSON.parse(out).hookSpecificOutput;
    return o.hookEventName === 'PreToolUse' && o.permissionDecision === 'allow';
  } catch {
    return false;
  }
}

// 1. Shape, versions, names.
const list = readList(join(HOOKS, 'read-only-tools.txt'));
const seen = new Set();
for (const { server, tool } of list) {
  const key = `${server} ${tool}`;
  if (seen.has(key)) fail(`listed twice: ${key}`);
  seen.add(key);
}
const plugin = JSON.parse(readFileSync(join(ROOT, '.claude-plugin/plugin.json'), 'utf8'));
const market = JSON.parse(readFileSync(join(ROOT, '.claude-plugin/marketplace.json'), 'utf8'));
const hooksJson = readFileSync(join(HOOKS, 'hooks.json'), 'utf8');
const version = readFileSync(join(ROOT, 'VERSION'), 'utf8').trim();
if (plugin.version !== version) fail(`plugin.json version ${plugin.version} differs from VERSION ${version}`);
if (plugin.name !== 'outbound-agent') fail(`plugin name is ${plugin.name}; the hook expects outbound-agent`);
if (market.plugins?.[0]?.name !== plugin.name) fail('marketplace entry names another plugin');
const matcher = new RegExp(JSON.parse(hooksJson).hooks.PreToolUse[0].matcher);
for (const { server, tool } of list) {
  if (!matcher.test(fq(server, tool))) fail(`hooks.json matcher misses ${server} ${tool}`);
}
for (const other of ['mcp__lead-finder__get_balance', 'mcp__plugin_other_lead-finder__get_balance', 'Bash']) {
  if (matcher.test(other)) fail(`hooks.json matcher also catches ${other}`);
}
const perServer = Object.fromEntries(SERVERS.map((s) => [s, list.filter((e) => e.server === s).length]));
say(`list: ${list.length} tools (${SERVERS.map((s) => `${s} ${perServer[s]}`).join(', ')}); version ${version} = plugin.json ${plugin.version}`);

// 2. Every listed tool is allowed, and passes the hook's own never-list.
const hook = join(HOOKS, 'allow-read-only.sh');
let allowed = 0;
for (const { server, tool } of list) {
  const r = runHook(hook, event(fq(server, tool)));
  if (r.code === 0 && isAllow(r.out)) allowed += 1;
  else fail(`listed but not allowed: ${server} ${tool} (exit ${r.code}, out ${JSON.stringify(r.out)})`);
}
say(`hook: ${allowed} of ${list.length} listed tools answer allow`);

// 3. The never-list: nothing, both with the real list and with a list that names them.
const never = Object.entries(NEVER).flatMap(([server, tools]) => tools.map((tool) => ({ server, tool })));
for (const { server, tool } of never) {
  if (seen.has(`${server} ${tool}`)) fail(`never-list tool is in the list: ${server} ${tool}`);
  const r = runHook(hook, event(fq(server, tool)));
  if (r.code !== 0 || r.out !== '') fail(`never-list tool not left to the prompt: ${server} ${tool}`);
}
const poisoned = mkdtempSync(join(tmpdir(), 'allowlist-'));
try {
  copyFileSync(hook, join(poisoned, 'allow-read-only.sh'));
  writeFileSync(join(poisoned, 'read-only-tools.txt'), never.map((e) => `${e.server} ${e.tool}`).join('\n') + '\n');
  for (const { server, tool } of never) {
    const r = runHook(join(poisoned, 'allow-read-only.sh'), event(fq(server, tool)));
    if (r.out !== '') fail(`hook allows a never-list tool when the list names it: ${server} ${tool}`);
  }
} finally {
  rmSync(poisoned, { recursive: true, force: true });
}
say(`hook: ${never.length} never-list tools get no answer, even from a list that names them`);

// 4. Inputs that must get no answer.
const sample = list[0] ? fq(list[0].server, list[0].tool) : fq('lead-finder', 'get_balance');
const hostile = {
  'tool_name repeated inside tool_input': event(fq('grinfi', 'call_tool'), { toolset: 'crm', tool_name: sample, tool_input: {} }),
  'another plugin': event(sample.replace('plugin_outbound-agent_', 'plugin_other_')),
  'the same server outside the plugin': event('mcp__lead-finder__get_balance'),
  'an unknown server': event('mcp__plugin_outbound-agent_other__get_balance'),
  'a longer name': event(`${sample}_x`),
  'a shorter name': event(sample.slice(0, -1)),
  'upper case': event(sample.toUpperCase()),
  'a space in the name': event(`${sample} `),
  'a raw line break inside the name': '{"tool_name":"mcp__plugin_outbound-agent_grinfi__get_\nguide"}',
  'a NUL inside the name': '{"tool_name":"mcp__plugin_outbound-agent_grinfi__get_\u0000guide"}',
  'not JSON': 'tool_name get_balance',
  'empty input': '',
  'no tool_name': JSON.stringify({ hook_event_name: 'PreToolUse', tool_input: {} }),
};
for (const [label, input] of Object.entries(hostile)) {
  const r = runHook(hook, input);
  if (r.code !== 0 || r.out !== '') fail(`answered on ${label}: ${JSON.stringify(r.out)}`);
}
const pretty = runHook(hook, JSON.stringify(JSON.parse(event(sample)), null, 2));
if (!isAllow(pretty.out)) fail('pretty-printed input for a listed tool was not allowed');
say(`hook: ${Object.keys(hostile).length} hostile or broken inputs get no answer; pretty-printed input still works`);

// 5. Optional: the servers' own code.
function sourceFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...sourceFiles(p));
    else if (/\.(ts|js|mjs)$/.test(name) && !/\.(spec|test)\./.test(name)) out.push(p);
  }
  return out;
}
function registrations(dir) {
  const tools = new Map();
  for (const file of sourceFiles(dir)) {
    const src = readFileSync(file, 'utf8');
    const hits = [...src.matchAll(/(?:registerTool|\.tool)\(\s*(['"`])([a-z0-9_]+)\1/g)];
    hits.forEach((m, i) => {
      const segment = src.slice(m.index, hits[i + 1]?.index ?? src.length);
      tools.set(m[2], /readOnlyHint\s*:\s*true/.test(segment));
    });
  }
  return tools;
}
const args = process.argv.slice(2);
for (let i = 0; i < args.length; i += 1) {
  if (args[i] !== '--source') continue;
  const [server, dir] = (args[i + 1] ?? '').split(/=(.*)/s);
  if (!SERVERS.includes(server) || !dir) {
    fail(`--source wants <server>=<dir>, got ${args[i + 1]}`);
    continue;
  }
  const tools = registrations(dir);
  const mine = list.filter((e) => e.server === server);
  const missing = mine.filter((e) => !tools.has(e.tool)).map((e) => e.tool);
  const notReadOnly = mine.filter((e) => tools.get(e.tool) === false).map((e) => e.tool);
  if (missing.length) fail(`${server}: listed but not registered in the code: ${missing.join(', ')}`);
  if (notReadOnly.length) fail(`${server}: listed but not marked readOnlyHint: true: ${notReadOnly.join(', ')}`);
  say(`source ${server}: ${tools.size} tools in the code; ${mine.length - missing.length - notReadOnly.length} of ${mine.length} listed are registered and marked read-only`);
}
if (!args.includes('--source')) say('source: not given, names not checked against the servers\' code');

if (failures.length) {
  for (const f of failures) console.error(`FAIL ${f}`);
  process.exit(1);
}
say('ok');
