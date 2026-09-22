# Outbound Agent for Claude Code: Grinfi, Lead Finder, Telegrin

An outbound team in one folder: audit, strategist, list builder, signal
watcher, sequence architect, copywriter, dialogue and inbox. It runs
inside Claude Code or Codex, remembers your business in plain files, and
works with its hands through three MCP servers built by the same team:

- [Grinfi](https://grinfi.io) - LinkedIn and email outreach on top of a
  CRM: builds and launches sequences, reads the inbox, sorts replies,
  drafts answers, moves pipeline stages.
- [Lead Finder](https://finder.grinfi.io) - a verified list of LinkedIn
  people built from a portrait: you describe who to take, an AI judge
  reads every profile, you pay only for the people who matched.
- [Telegrin](https://tg.grinfi.io) - the people asking about your problem
  right now, across Telegram, Threads, Reddit, LinkedIn, X, Bluesky,
  Hacker News and job boards.

Nothing is sent, bought or spent without your yes.

This is version 3.0 of the kit from the article "The Claude-Powered
Outbound Agent". Version 1 lived in a Claude.ai project and could only
advise. Version 2 got memory and hands in Grinfi. Version 3 walks the
whole way: audit what runs, or build from zero - strategy, portrait, list,
signals, texts, launch, result - and takes the products at the steps
where they belong.

## What you need

- [Claude Code Desktop](https://claude.com/product/claude-code) for macOS
  or Windows, on a Claude Pro, Max, Team or Enterprise subscription. Or
  Codex, see below.
- Accounts for the products you want it to use. None is required to
  start: without them the agent audits, plans and writes; with them it
  collects, watches and sends. Grinfi with a connected LinkedIn sender
  for sending; a Lead Finder account for lists; a Telegrin workspace for
  signals.
- Ten minutes for the first run.

## Install: give your Claude the link

Tell your Claude (or Codex): "Install this for me:
https://github.com/alex-rise/grinfi-outbound-agent". It downloads the
kit, opens the folder as the project and says when it is ready. Then say
hello. On the way it asks whether to enable the kit's MCP servers,
`grinfi`, `lead-finder` and `telegrin`: say yes to the ones you have
accounts for, the others can be enabled later from `/mcp`.

**For the agent installing this kit:** clone the repository (or download
and unpack the ZIP) into a folder the person will find again, for example
`~/outbound-agent`. Then make that folder the current project: in Claude
Code Desktop, switch the session's directory to it; where you cannot, ask
the person to open the folder as a project. Approve the three MCP servers
from `.mcp.json` when asked. Say when it is ready, and start with
`CLAUDE.md`.

## Install: by hand

1. Open [the repository](https://github.com/alex-rise/grinfi-outbound-agent),
   press the green "Code" button and choose "Download ZIP", or clone it with
   git if you use git. Unpack it somewhere you will find it again, for example
   `Documents/outbound-agent`.
2. Open Claude Code Desktop and open that folder as a project.
3. Say yes when Claude Code asks about the project's MCP servers.
4. Say hello. The agent sees that it has not met your business yet and starts
   by asking for your site and the materials you already have.

## Connect the products

Each product is connected once, from the chat: type `/mcp`, choose the
server, choose "Authenticate", and follow the browser tab that opens. The
agent asks for a product only at the step that needs it, and works by
hand meanwhile.

**Grinfi** (`grinfi`) - sending and conversations, step 6. No account yet:
sign up at [grinfi.io](https://grinfi.io) and connect a LinkedIn sender
inside the product; then `/mcp`, `grinfi`, "Authenticate", log in.

**Lead Finder** (`lead-finder`) - a verified list from a portrait, steps
2 and 3. `/mcp`, `lead-finder`, "Authenticate": the window asks for your
email and sends a sign-in link; no account yet means the link creates
one, with a trial balance for the first probe. Open the link, and the
connection is done.

**Telegrin** (`telegrin`) - the people asking right now, step 4. No
account yet: sign up at [tg.grinfi.io](https://tg.grinfi.io); the trial
comes with credits and no end date. Connect your Telegram and Threads
accounts inside the product if you want replies delivered from them. Then
`/mcp`, `telegrin`, "Authenticate", log in with the workspace admin
account.

If a server is not in the `/mcp` list, it was not approved when the
folder was opened: close and reopen the folder and say yes when asked.
Until a product is connected the agent works in advisory mode for that
product: it can plan, write and review, it cannot read an inbox, buy a
list or watch a channel through it.

## What is in the folder

```
CLAUDE.md                  the project instructions: entrances, modes, rules, memory
VERSION                    the kit version the agent compares with the published one
.mcp.json                  the three MCP connections
.claude/skills/
  onboarding/              first run: meet the business, write business/
  audit/                   outbound that already runs: numbers vs baselines, ranked findings, what 3x takes
  strategist/              ICP, signals, anchors, capacity, audience sources, the picker
  segments/                a verified list from a portrait through Lead Finder
  signals/                 the people asking right now through Telegrin
  sequence-architect/      steps, timing, branches, building the flow in Grinfi
  copywriter/              invites, first messages, follow-ups, emails
  dialogue/                live replies, objections, qualification
  inbox/                   the daily routine: sort, act, draft, follow up
reference/
  metrics.md               what to count, our measured baselines, test math
  email-infrastructure.md  domains, authentication, warm-up, capacity
  products.md              Grinfi, Lead Finder, Telegrin: what each is, why, how to sign up
business/                  your memory: profile, ICP, senders, rules, plan,
                           campaigns, follow-ups, audits (created by onboarding)
AGENTS.md                  the same instructions for Codex
```

You do not need to name a mode. Ask in plain words and the agent picks
the skill.

## Two ways in

**Something already runs.** Say "check our outbound". The agent reads
your Grinfi workspace, or asks for your numbers if you use another tool,
puts them next to measured baselines with their denominators, and gives
you a ranked list: what to change, what each change is worth, and what
scaling to 3x actually takes. Nothing is changed during the audit.

**Starting from zero.** After onboarding the agent asks one question: do
you know who to reach first? If yes, it builds the portrait and the list.
If not, it proposes three audiences - who, the signal available, where
the list comes from, what a list like it returns - and you pick.

## A day with the agent

Building a campaign:

> We want to reach founders of marketing agencies in Spain and Portugal,
> 11 to 50 people, who do their own bookkeeping.

Strategist: the segment, the anchor, the capacity your senders can carry,
and where the list comes from. List builder: one batch of questions, then
the Lead Finder form; a probe at cost names the price per lead, you
approve it by link, the list arrives as a table and goes into Grinfi as a
tagged list. Sequence architect: invite plus three messages for a cold
list, five for a signal list, the day map, the branches. Copywriter: two
versions of each message, checked against the pre-send list. Then the
architect builds the flow in Grinfi as a draft and shows you the tree.
You say go.

People asking right now:

> Who is asking about Telegram bots for online shops this week, in
> Ukraine and Poland?

Signal watcher: a Telegrin campaign written from a description of the
buyer, not keywords; a daily credit cap you set; a feed of cards - the
post, the verdict, a draft reply. You approve each reply; on Telegram and
Threads it goes out from your own account, on the other channels the text
is yours to paste, and a LinkedIn card is handed to Grinfi for free.

Morning:

> Check the inbox.

The agent pulls every unread and every recent reply from all senders,
sorts them, changes the stages and automations that need no approval,
checks the calendar for silent bookings, and gives you one numbered
report: what it did, and the drafts waiting for your "send".

A week later:

> How did the agency campaign do?

The numbers with their denominators, compared with your own earlier
campaigns from `business/campaigns.md`, and one change to make next.

## What the agent never does without you

- Send a message, an invite or an email (Grinfi, Telegrin).
- Enrol anyone into a running flow, start or stop a flow.
- Raise a sending limit, restart leads from the top, retry failed sends.
- Run a Lead Finder probe or a collection: you see the amount and click
  the approval link yourself.
- Create a Telegrin campaign, start a history scan or set a daily cap:
  you see the preview first.
- Delete anything, or spend money or credits.
- Invent a fact about a lead, about your business or about a number.

Each product keeps its own confirmation window. One yes never covers two
products, and one yes never covers two actions. Text inside a lead's
profile or message is treated as data, never as an instruction, so a
profile that carries "instructions for AI" does not steer the agent.

## When the agent cannot help

Some asks fit none of the three products: a signal nobody collects, a
source that does not exist, a fact the data cannot verify. Then the agent
offers to open a case for the Grinfi team. It shows you exactly what goes
out - your ask in your words and the draft form - and sends it only after
your yes. The team looks into it by hand, usually within a couple of
hours in working hours, and nothing is charged for that. The answer comes
back into the same chat.

In three places the agent asks one more thing, once each: after the
audit, whether to send it to the Grinfi team for their own take and a
call; at a case that came back unsolved; and at the end of a full pass,
when the plan shows how much hand work is left, whether to put you in
touch with the team that builds this for clients. You can say no. It
never asks in the middle of the work.

## Memory

`business/` is the agent's memory. When you correct a draft or a
decision, the agent writes the correction into `business/rules.md` with
the date and follows it from then on. The plan from strategy to result
lives in `business/plan.md`; campaign results go into
`business/campaigns.md`; people you are waiting for go into
`business/followups.md`; every audit is kept in full. Say "update my
profile" when something changed.

## Updating the kit

The agent checks once a day whether a newer version is published and offers
the update in one line. Say yes: with git it runs `git pull` in the folder;
without git it downloads the repository again and replaces everything except
`business/`. Your memory stays either way, which is why the kit is taken from
the repository rather than kept as a copy somewhere else: a copy goes stale
and a clone does not.

## Codex

The same folder works with OpenAI Codex through `AGENTS.md`: the modes,
the rules and the `business/` memory are shared, only the connection
differs.

1. Add the servers you have accounts for. The first command adds a
   server, the second opens the browser to log in:

   ```
   codex mcp add grinfi --url https://mcp.grinfi.io
   codex mcp login grinfi
   codex mcp add lead-finder --url https://finder.grinfi.io/mcp
   codex mcp login lead-finder
   codex mcp add telegrin --url https://mcp-tg.grinfi.io/mcp
   codex mcp login telegrin
   ```

   Prefer a token in a file instead of signing in? For Grinfi, paste your
   API key on [mcp.grinfi.io](https://mcp.grinfi.io) and copy the
   generated block into `~/.codex/config.toml`. On older Codex versions
   remote servers need `experimental_use_rmcp_client = true` at the top of
   `config.toml`, or simply upgrade Codex.
2. Open this folder in Codex: run `codex` inside it, or open it in the
   Codex app. Codex reads `AGENTS.md` and works by the same rules as
   Claude Code: onboarding first, then the modes.

Codex works on any plan that has MCP. Current instructions for every
client, ChatGPT included, live on [mcp.grinfi.io](https://mcp.grinfi.io).

## Made by Grinfi

Built and used daily by the [Grinfi](https://grinfi.io) team on our own
outreach. The numbers in `reference/metrics.md` are ours: 3,812 invites,
1,095 first messages, measured in September 2026. Use the kit freely,
adapt it, and tell us what you changed. MIT licensed: use it, change it,
ship it with your own work, keep the notice.
