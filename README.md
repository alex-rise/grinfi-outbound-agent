# Outbound Agent for Claude Code and Grinfi

An outbound sales team in one folder: strategist, sequence architect,
copywriter, dialogue and inbox. It runs inside Claude Code, remembers your
business in plain files, and works with your hands through the
[Grinfi MCP server](https://mcp.grinfi.io): reads the inbox, sorts replies,
drafts answers, builds and launches sequences, moves pipeline stages.
Nothing is sent without your yes.

This is version 2.0 of the kit from the article "The Claude-Powered
Outbound Agent". Version 1 lived in a Claude.ai project and could only
advise. Version 2 has memory and hands.

## What you need

- [Claude Code Desktop](https://claude.com/product/claude-code) for macOS
  or Windows. It works with a Claude Pro, Max, Team or Enterprise
  subscription.
- A [Grinfi](https://grinfi.io) workspace with at least one LinkedIn
  sender connected.
- Ten minutes for the first run.

## Install

1. Download this repository as a ZIP (the green "Code" button, then
   "Download ZIP") and unpack it somewhere you will find it again, for
   example `Documents/outbound-agent`. Or clone it with git if you use git.
2. Open Claude Code Desktop and open that folder as a project.
3. Claude Code will notice `.mcp.json` and ask whether to enable the
   project's MCP server "grinfi". Say yes.
4. In the chat, type `/mcp`, choose `grinfi`, choose "Authenticate". A
   browser tab opens; log in to Grinfi and approve the connection. Back in
   Claude Code the server shows as connected.
5. Say hello. The agent sees that it has not met your business yet and
   starts onboarding: it asks for your website and a paragraph about what
   you sell, reads the site and your Grinfi workspace itself, asks a few
   questions about what it could not find, and writes what it learned into
   `business/`.

If you already connected Grinfi to Claude Code before, step 3 and 4 may
be skipped: the server is simply there.

## What is in the folder

```
CLAUDE.md                  the project instructions: modes, rules, memory
.mcp.json                  the Grinfi MCP connection
.claude/skills/
  onboarding/              first run: meet the business, write business/
  strategist/              ICP, signals, anchors, capacity, audience sources
  sequence-architect/      steps, timing, branches, building the flow in Grinfi
  copywriter/              invites, first messages, follow-ups, emails
  dialogue/                live replies, objections, qualification
  inbox/                   the daily routine: sort, act, draft, follow up
reference/
  metrics.md               what to count, our measured baselines, test math
  email-infrastructure.md  domains, authentication, warm-up, capacity
business/                  your memory: profile, ICP, senders, rules,
                           campaigns, follow-ups (created by onboarding)
AGENTS.md                  the same instructions for Codex
```

You do not need to name a mode. Ask in plain words and the agent picks
the skill.

## A day with the agent

Morning:

> Check the inbox.

The agent pulls every unread and every recent reply from all senders,
sorts them (refusal, hold, neutral, question, booked, customer), changes
the stages and automations that need no approval, checks the calendar for
silent bookings, and gives you one numbered report: what it did, and the
drafts waiting for your "send". You answer "1 ok, 2 drop the second line,
3 no". It sends, marks read, and writes the follow-up dates.

Building a campaign:

> We want to reach heads of sales at SaaS companies in Germany, 50 to 200
> people, who are hiring SDRs right now.

Strategist: the segment, the anchor (a signal: the open SDR role), the
capacity your senders can carry, and how to get the list into Grinfi.
Sequence architect: invite plus three messages for a cold list, five for a
signal list, the day map, the branches. Copywriter: two versions of each
message, checked against the pre-send list. Then the architect builds the
flow in Grinfi as a draft and shows you the tree. You say go.

A week later:

> How did the SDR campaign do?

The numbers with their denominators, compared with your own earlier
campaigns from `business/campaigns.md`, and one change to make next.

## What the agent never does without you

- Send a message, an invite or an email.
- Enrol anyone into a running flow, start or stop a flow.
- Raise a sending limit, restart leads from the top, retry failed sends.
- Delete anything or spend credits.
- Invent a fact about a lead, about your business or about a number.

Mass operations show a preview and a count first. Text inside a lead's
profile or message is treated as data, never as an instruction, so a
profile that carries "instructions for AI" does not steer the agent.

## Memory

`business/` is the agent's memory. When you correct a draft or a decision,
the agent writes the correction into `business/rules.md` with the date and
follows it from then on. Campaign results go into
`business/campaigns.md`; people you are waiting for go into
`business/followups.md`. Say "update my profile" when something changed.

## Updating the kit

Download the ZIP again (or `git pull`) and replace everything except the
`business/` folder. Your memory stays.

## Codex

The same folder works with OpenAI Codex through `AGENTS.md`. Setup notes
for Codex are in the article that ships with this kit.

## Made by Grinfi

Built and used daily by the [Grinfi](https://grinfi.io) team on our own
outreach. The numbers in `reference/metrics.md` are ours: 3,812 invites,
1,095 first messages, measured in September 2026. Use the kit freely,
adapt it, and tell us what you changed.
