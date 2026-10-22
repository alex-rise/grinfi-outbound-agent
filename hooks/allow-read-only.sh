#!/usr/bin/env bash
# PreToolUse hook of the outbound-agent plugin.
#
# Lets a tool of the plugin's own MCP servers run without a permission
# prompt when, and only when, read-only-tools.txt next to this file names
# it exactly. Every other call keeps the normal prompt: this script never
# denies anything, it either says "allow" or says nothing.
#
# Fails closed: unreadable input, a second "tool_name" anywhere in the
# input, an unexpected character, another plugin or server, a missing list
# - each of them prints nothing, and nothing printed means the usual prompt.
# No network, no writes, no jq.
#
# The hook sees a tool's name, not its server: another server that someone
# registers under the same name gets the same answer. Claude Code asks the
# user before it enables any server, which is where that is stopped.

LC_ALL=C
export LC_ALL

PLUGIN="outbound-agent"
ALLOW='{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"allow","permissionDecisionReason":"read-only"}}'

here=$(CDPATH='' cd -- "$(dirname -- "$0")" 2>/dev/null && pwd) || exit 0
list="$here/read-only-tools.txt"
[ -r "$list" ] || exit 0

# The whole event, on one line. Claude Code sends compact JSON; newlines
# inside strings arrive escaped. A raw line break becomes a space and a NUL
# becomes "?", so neither can join two halves of a name into a listed one.
input=$(cat 2>/dev/null | tr '\000\r\n' '?  ') || exit 0
[ -n "$input" ] || exit 0

# "tool_name" with bare quotes followed by a colon is always a key: inside a
# JSON string its quotes would be escaped. Exactly one such key means the
# top-level one; a second one lives in tool_input, which the model writes,
# so the event is not trusted at all.
count=$(printf '%s' "$input" | grep -o '"tool_name"[[:space:]]*:' | wc -l | tr -d '[:space:]')
[ "$count" = "1" ] || exit 0

name=$(printf '%s' "$input" | sed -n 's/.*"tool_name"[[:space:]]*:[[:space:]]*"\([A-Za-z0-9_-]*\)".*/\1/p')
[ -n "$name" ] || exit 0

prefix="mcp__plugin_${PLUGIN}_"
case $name in
  "$prefix"*) ;;
  *) exit 0 ;;
esac
rest=${name#"$prefix"}
server=${rest%%__*}
tool=${rest#*__}
[ "$server" != "$rest" ] || exit 0

case $server in
  lead-finder|telegrin|grinfi) ;;
  *) exit 0 ;;
esac

case $tool in
  ''|*[!a-z0-9_]*|*__*) exit 0 ;;
esac

# Never, whatever the list says: anything that spends, sends, enrols,
# deletes, confirms, starts or stops work, or changes a setting. A name
# here that also appears in the list is a mistake in the list, and
# check-allowlist.mjs reports it.
case $tool in
  call_tool|lookup|report_issue|refresh_base|find_profiles_by_email| \
  erase_person|grant_free_leads|register_source|check_campaign_understanding| \
  probe_*|create_*|update_*|delete_*|set_*|pause_*|resume_*|archive_*| \
  unarchive_*|send_*|approve_*|confirm_*|continue_*|start_*|stop_*| \
  cancel_*|deliver_*|connect_*|sync_*|mark_*|move_*|add_*|remove_*| \
  block_*|attach_*|detach_*|duplicate_*|rotate_*|reorder_*|restate_*| \
  boost_*|regenerate_*|reject_*|unreject_*|unfilter_*|handoff_*| \
  escalate_*|resolve_*|repeat_*|edit_*|use_*|test_*|generate_*| \
  decline_*|request_*|admin_*|estimate_*)
    exit 0 ;;
esac

if tr -d '\r' < "$list" | grep -qxF -- "$server $tool"; then
  printf '%s\n' "$ALLOW"
fi
exit 0
