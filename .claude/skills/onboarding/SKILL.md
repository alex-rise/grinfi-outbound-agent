---
name: onboarding
description: First run and profile updates. Use when business/profile.md is missing, or when the user says "set up", "onboarding", "update my profile", "tell you about my business", adds a product, or adds a sender. Learns the business from its website and from Grinfi, asks only about the gaps, and writes the files in business/.
---

# Onboarding: meet the business before writing a word

The old way was a 19 KB template the user had to fill in by hand. Nobody
did. The new way: you do the reading, the user answers five to seven
questions about what you could not find, and the result is written into
files that every later session reads.

Run this when `business/profile.md` does not exist, or when the user asks
to update the profile. Do not skip it because the user "just wants a quick
message": a message for a business you have not met is a generic message.

If some of the files already exist, keep them: fill in only the missing
ones, and never overwrite a file the user has confirmed without asking
first.

## Partial onboarding: ask for the job in front of you

The eleven questions below are the full set, for a user who wants the
whole pass. When the user asked for one job, take only its part and leave
the rest for later:

| The job | What it needs |
|---|---|
| a sequence or a first message | what is sold, in what form, at what price; who buys; the first step offered; what may be quoted as proof; whose profiles send |
| a list or a portrait | who buys and who is definitely not a client; the countries; the volumes |
| signals | who the buyer is and who is not, in the user's words; the markets |
| an audit | their numbers, and what is sold to whom |

Write what you learn into the files as usual and mark the rest
"(not asked yet)", so the next session knows the difference between a
gap and a blank.

## Step 1. The address and the materials

First message, short: the website address, and everything they already
have - a deck, old sequences or message texts, collected audiences or
exports from their tool, a client list. "Send it as it is, I will sort it
out." Then read (steps 2 and 3) before asking anything: the site says
what is sold, the sequences say how it was offered, the audiences say to
whom, and the numbers say what worked.

## Step 1a. Ask only what the materials did not answer

Eleven questions at most, one numbered message, only the ones still
open after reading. No product talk here: which tools are connected was
said in the first message and does not belong in an intake. No website yet, or no address given: skip the
reading and say the profile stands on the user's words. Nothing about languages, limits, budgets, tools or a
meetings target: those are decided at the steps that need them.

**The product**
1. What exactly is sold and in what form - a subscription, a project, a
   service by the hour - and the price or the range, if the site hides
   it.
2. If there are several products, which one goes through outreach first.

**The segments**
3. Who has bought so far: what kind of companies, and who inside them.
   Three to five real clients as the sample.
4. Who they tried to sell to and it did not work.

**The offer**
5. How the offer sounds today, in the first message or on the site.
6. What the first step is: a demo, an audit, a trial, a call.

**What already exists**
7. Old sequences or message texts, and what they returned, if they
   remember.
8. Collected audiences or exports from their tool: which worked, which
   did not.

**The limits**
9. Who is definitely not a client: types of companies, current clients,
   partners, competitors - the stoplist.
10. Whose profiles the messages go out from: how many, whose, in which
    roles, whether they are premium, and whether their owners post on
    LinkedIn. One profile sells nothing to anyone; the volume comes from
    several profiles connected in Grinfi, and the plan is built on that.
11. Proof that may be quoted to a stranger: a number, a named client, a
    result - or "none yet", which the copy then respects.

The answer to "is outbound running today, and where?" usually comes with
the materials; if not, ask it last. It picks the entrance: something
running means the `audit` comes right after these files; nothing running
and a known audience means `segments` or `signals`; nothing running and
no audience yet means the strategist's picker.

## Step 2. Read the website

Fetch the home page, pricing, about, cases or customers, and the two or
three most-linked product pages. Take from them, with the page you saw it
on:

- what the product or service is, in one sentence a stranger understands;
- the pricing model (per seat, per month, per project, on request);
- proof that can be quoted: numbers, named clients, case results;
- claims you can see but not verify (mark them "site says");
- what the company visibly does not do;
- competitors or alternatives the site itself names.

Never fill a gap with a guess. A blank line marked "not found" is fine.

## Step 3. Read the Grinfi workspace

If Grinfi is connected, read what is already there. It says more about the
business than any form:

- `list_my_teams` - which workspace you are in.
- `list_sender_profiles` - who sends, and `list_linkedin_browsers` for the
  state of their LinkedIn seats.
- `list_pipeline_stages` - the stage names the team actually uses. Use
  their names in every later file; do not rename them.
- `list_lists` and `list_automations` (status "on") - what audiences exist
  and what is running now. Running automations with numbers behind them
  mean the `audit` skill comes next, whatever the user answered.
- The analytics guide first (`get_guide` with `analytics`), then
  `get_outreach_metrics` with an explicit 30-day window (`schedule_at_after`
  and `schedule_at_before`; without a window it scans all time): the team's
  own baseline for acceptance and reply rate, with denominators.
- `list_ai_variables` and the templates guide - which variables the
  templates already use.

Then ask one permission question: "May I read your last 30 inbound
conversations to learn how your team writes and which objections come up?
Nothing is sent and nothing is changed." Only after a yes:
`list_linkedin_messages` with `type: "inbox"`, newest first, and note the
tone, the recurring questions and the recurring refusals.

## Step 4. Draft the files

Write drafts, mark every unverified line with "(unconfirmed)", and keep
them short. Templates:

**`business/profile.md`**

```
# <Company> - profile
Updated: <date> by onboarding

## What we sell, in what form, at what price
<one sentence a stranger understands; the form; the price or range> Site: <url>
## The product that goes through outreach first
<which, and why>

## Who has bought so far
- <type of company, who inside decided>: <three to five real clients>
## Who did not buy
- <segment tried, what happened>

## The offer today
<how it sounds in the first message or on the site>
## The first step we offer
<demo / audit / trial / call, and what happens after>

## What already exists
- Sequences: <file, what it returned>
- Audiences: <file or export, worked / did not>

## Who is definitely not a client
- <types, current clients, partners, competitors - the stoplist>

## Who writes
- <profiles: how many, whose, the role each has for the lead>

## Proof we may quote
- <number or case, with source>

## Facts I could not verify
- <list>
```

**`business/icp.md`** - one block per segment: industry, size, geography,
titles, red flags (never write to), the signals that are realistically
available for this segment (job postings, new hires, funding, posts, tool
changes), and where the audience would come from (Lead Finder, Telegrin,
a Grinfi import). Core pain, desired outcome and "why now" are the
strategist's: it asks for them when it writes the brief, if the profile
does not say.

**`business/senders.md`** - one line per sender: name, role as the lead
sees it (founder, account manager, SDR), which segments they write to,
their booking link, and the rule for meetings ("if the founder writes, the
demo is with the founder"). The language each sender writes in is added
when the first sequence is written, not here. Sender uuids from Grinfi go here
too, so later sessions do not have to look them up.

**`business/rules.md`** - start it with the header below and leave it
empty. It fills up from corrections.

```
# House rules
One line per correction, dated, in the user's words. Read before writing.
```

**`business/campaigns.md`** - a header and an empty table: date, campaign,
audience source, anchor, invites, accepted, first messages, replies,
meetings, verdict.

**`business/followups.md`** - a header and an empty table: date, who
(name and Grinfi link), waiting for (reply, booking, meeting, hold),
ping on, pings so far, sender, language, context.

**`business/plan.md`** - the pass from strategy to result, seven lines,
all "not started":

```
# Plan
Updated: <date>
1. Strategy - not started
2. Portrait - not started
3. List - not started
4. Signals - not started
5. Texts - not started
6. Launch - not started
7. Result - not started
```

Every skill that finishes a step rewrites its line with the date and a
link to what it produced.

## Step 5. Close the gaps

Show the user a five-line summary of what you understood from the
materials and the answers. If any of the ten questions is still open,
ask it now, in one message; if all are closed, ask nothing. Then write
the answers into the files, replace "(unconfirmed)" where the user
confirmed, and delete what they rejected.

## Step 6. Confirm and name the next step

Show where the files are and say, in two lines, how the memory works:
corrections go to `business/rules.md`, campaign results go to
`business/campaigns.md`, the plan lives in `business/plan.md`, and
"update my profile" reruns this skill for the parts that changed. Suggest
a review once a quarter.

Then name the entrance in one line and start it in the same session:
"Your outbound is running, so the audit comes first"; "You know who to
reach - the list comes first"; "Let me propose three audiences to choose
from".

## What this skill never does

- Sends anything, changes any stage, starts or stops any automation.
- Writes a fact it did not find or was not told.
- Copies another client's profile as a starting point.
- Stores tokens, passwords or API keys anywhere in the folder.
