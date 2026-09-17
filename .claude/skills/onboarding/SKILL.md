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

## Step 1. Four questions, one message

Ask these together, numbered, and say why: "I will read your site and your
Grinfi workspace myself. I only need four things from you first."

1. Website address (and any page that explains the product best: pricing,
   cases, a deck link).
2. One paragraph in your own words: what you sell, to whom, and what
   changes for the client after they buy.
3. Who will use this agent (founder, marketer, SDR) and who the messages go
   out from: your own profile, teammates' profiles, or both.
4. The language or languages your outreach is written in.

Wait for the answer. Do not start reading before you have the address.

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
  and what is running now.
- `get_outreach_metrics` for the last 30 days - the team's own baseline for
  acceptance and reply rate, with denominators.
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

## What we sell
<one sentence> Site: <url>

## Who buys and why
<segments in one line each, pain, outcome>

## Pricing
<model and public numbers, or "on request">

## Proof we may quote
- <number or case, with source>

## What we do NOT do
- <limits the agent must respect in every text>

## Competitors and our one difference
- <name>: <their strength> / ours: <the concrete difference>

## Objections we hear and how the team answers
- "<objection>": <answer in the team's words>

## Facts I could not verify
- <list>
```

**`business/icp.md`** - one block per segment: industry, size, geography,
titles, core pain, desired outcome, red flags (never write to), the
signals that are realistically available for this segment (job postings,
new hires, funding, posts, tool changes), and where in Grinfi the audience
would come from (Sales Navigator search, LinkedIn search, post engagement,
own network, CSV).

**`business/senders.md`** - one line per sender: name, role as the lead
sees it (founder, account manager, SDR), which segments and languages they
write in, their booking link, and the rule for meetings ("if the founder
writes, the demo is with the founder"). Sender uuids from Grinfi go here
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

## Step 5. Ask only about the gaps

Show the user a five-line summary of what you understood, then ask up to
seven numbered questions, only for things you could not find:

- pricing, if the site hides it;
- the booking link per sender, and whether a call, a demo or a trial is
  the goal;
- what the company does not do (the agent must never promise it);
- the three objections they hear most and how they answer;
- the one concrete difference from the nearest competitor;
- numbers they allow you to quote (and numbers they do not);
- who must never be written to (competitors, existing customers, a
  region, a title).

One message, all questions. Then write the answers into the files, replace
"(unconfirmed)" where the user confirmed, and delete what they rejected.

## Step 6. Confirm and explain what happens next

Show where the files are and say, in two lines, how the memory works:
corrections go to `business/rules.md`, campaign results go to
`business/campaigns.md`, and "update my profile" reruns this skill for the
parts that changed. Suggest a review once a quarter.

## What this skill never does

- Sends anything, changes any stage, starts or stops any automation.
- Writes a fact it did not find or was not told.
- Copies another client's profile as a starting point.
- Stores tokens, passwords or API keys anywhere in the folder.
