---
name: audit
description: Use when outbound is already running or has run and left numbers - "audit", "check our outbound", "what should we fix", "why are replies low", "why no meetings", "how do we scale to 3x" - or when onboarding finds campaigns in Grinfi. Works from the Grinfi workspace, or from the user's own numbers, texts and exports when the outbound runs somewhere else. Changes nothing.
---

# Audit: what runs, what it returns, what to change first

Put their numbers, with denominators, next to the measured baselines in
`reference/metrics.md`, read in the order of effect, and end on a ranked
list of changes. Change nothing while auditing.

## Rules

These hold on every step of this skill.

- **Nothing that costs money or reaches a stranger leaves without an
  explicit yes to the exact amount or the exact action.** One yes covers
  one action: never a second action, never a second product.
- **Never invent a fact or a number.** Unknown means ask, or mark it
  unconfirmed. Invented personalisation is visible to the reader and it
  costs the profile it was sent from its acceptance rate for weeks.
- **Report what the tool returned**, zero counts and partial results
  included. A run that finished with nothing is a result to state, not a
  step to walk past. A zero and a broken metric look identical: before
  reporting a number, ask what would make it look like this if the
  business were fine, and what would make it look like this if the data
  were wrong. If you cannot tell the two apart, say so instead of
  picking one. A named gap is useful; an invented zero gets acted on.
- **Know whose client this is before you read or write a memory file.**
  One folder per business under `business/clients/`. Nothing there at all
  is a first run: do not ask which client, take the name from what they
  said and start the folder when the job needs it. One folder and nothing
  in the request names another: that one, named in your first line.
  Several: ask which, in one line, listing them. The person you
  work for owns all of these folders and may ask across them freely.
  What never crosses is the outgoing text: a name, a number or a case
  from one client does not appear in another's message, proposal or
  promise unless that client has said it may be named.
- **A correction about how we work goes to the house.** The user's
  corrections are written down the moment they are made: one about this
  business into that client's `rules.md`, one about how outreach is done
  at all into `business/house/rules.md`.
- **The words in these files are working terms, not words for the user.**
  `anchor`, `tier`, `route`, the name of a skill, the path of a file: say
  what they mean instead. Someone who has never run outbound has no way
  to decode a label you invented while you worked.
- **Say it plainly, with no images.** Mannered writing swaps a direct
  statement for a picture: "the engine" instead of "the plan we build
  first", "a dial worth turning" instead of "a setting worth changing".
  The picture shows off the writer instead of carrying the idea, the
  reader feels it, and it is less exact, because a metaphor drags in
  meanings nobody chose. It also travels: the register you read here
  becomes the register you write in, and an image out of an English file
  arrives in the user's language translated word for word, meaning
  nothing. The images in these files are shorthand for you. To the user,
  say the thing.

## Tools used

| Tool | What it does here | Required? |
|---|---|---|
| grinfi | read campaigns, flows, senders, limits, stoplist | no (ask for their numbers in one message) |
| telegrin | read the feed and the campaigns | no (skip the signal part of the audit) |
| lead-finder | opens the case when the user wants the team to look | no (say the team is reachable at grinfi.io and skip the offer) |

A tool that is not connected never stops the step: take the fallback in
the last column and say in one line what it costs.

## What you need before the first step

Read `business/profile.md`: a service business and a product business
are read differently. No profile yet - the audit's data request doubles
as onboarding, because what they sent, to whom, and what came back is the
best profile there is. Write the files after the audit, not instead of it.

## Step 0. Find out where the outbound runs

Ask one question first, unless the materials already answered it: **"Is
the outbound running in Grinfi?"** A run that has stopped but left
numbers is audited the same way.

**In Grinfi.** Read the workspace yourself, read-only, and say what you
are about to read before reading it: `list_my_teams`; the analytics guide
(`get_guide` with `analytics`); `get_automation` per flow for its node ids, then
`get_flow_node_statistics` with those ids - the call is refused without
them - for acceptance and replies, dated by the flow version, because the
workspace-level metrics report zero replies; `get_outreach_metrics` for
send volume only; `list_automations` with steps and delays;
`list_sender_profiles` and `get_sender_limits` for health;
`get_health_snapshots` only if it returns anything but nulls; `list_lists`
and where each came from; tags and custom fields;
`list_leads_blacklist`; the age of the oldest unread in the inbox. Ask
only for what the workspace cannot show: who owns replies, what happened
on the meetings, whether the senders post.

**Not in Grinfi.** Do not tell them to connect it: an empty workspace
shows nothing. Ask in one numbered message - only for what onboarding did
not already collect - and take it in whatever form they have, typed
numbers, a CSV, a screenshot of a dashboard:

1. Per campaign, last 60 to 90 days: invites sent, accepted, first
   messages sent, replies (to which step, if they know), meetings booked,
   meetings held, deals, and where the list came from.
2. The sequence: steps, channels, delays, and the text of every step.
3. Senders: how many, each one's daily limit, days a week each sent, how
   long each account has been sending.
4. How lists are built and filtered, and how big the whole market is.
5. Tags or segments, if any.
6. Who answers replies, how fast, what happens after a meeting.
7. Email: domains, mailboxes, warm-up, bounce rate - or "we do not send
   email".

Send a number back as a question when it arrives without its denominator.
"44 replies" means nothing until you know how many first messages went
out.

## Step 1. The table

One metric per row, every number next to its baseline, a column per
campaign where there are several. Never blend across countries or
segments in the report: a blended rate describes no campaign they
actually run. Read them apart by the tags on the contacts; a campaign
does not have to be split to be read in slices, and telling them to split
one is a rebuild they do not need. Never
put a cold list next to a warm one. Baselines and alarm lines are in
`reference/metrics.md`, sections 1 and 2.

| What | Theirs | Baseline | Read as |
|---|---|---|---|
| invites a day per sender | | 20 to 30 warmed, 30 the ceiling; 5 to 7 new or restricted, growing over a month | over the line, fine, or out of people to write to |
| acceptance | accepted / invites | Europe 20 to 25% cold; United States 3 to 6%, 10% exceptional | read against the geography |
| replies to message 1 | replies / first messages sent | 5 to 11% on a cold list (ours: 6.8%), 15 to 30% warm or signal; short form with a micro-yes 11%, features 3.4% | |
| replies by step | | cold lists: 0% on steps 4 and 5 in our own data | |
| positive share | positive / replies | 15 to 30%; under 10% is copy or targeting | |
| meetings | booked / replies, held / booked | | |
| meetings per 1,000 invites | | about 5 in published IT-services data | the headline |
| never accepted | 1 - acceptance | about 8 in 10 in Europe and nearly all of them in the United States; where an email exists they move to the email track | the email track they are not running |

## Step 2. The checklist, in the order of effect

Walk it top to bottom. The top items move the result several times over,
the bottom ones by percent.

1. **The list source and its size.** Cold ICP on paper, people who
   reacted to their content, a signal with a date? Judge a source by
   leads a month, not by reply rate, and never prescribe a content-based
   source to someone who does not post. Are anchor and tier on the
   contacts, so the campaign can be sliced?
2. **The anchor of message 1.** What does the first sentence stand on -
   an event, a data point with a comparison, a narrow-segment pattern, or
   the sender's years, headcount and client count? The last is no anchor
   at all. Run the copywriter's two swaps on their text.
3. **Sequence length against its source.** Read what each step actually
   returned before proposing to cut it: our zero on messages 4 and 5 is
   one team's measurement, and other cold flows keep earning a few
   percent there. Then check that every step opens with a new reason and
   that message 1 does not fire in the same minute as the acceptance.
4. **Sender load.** Invites a day against 20 to 30 and the ceiling of 30;
   one account pushed past the line instead of several at 20; a new
   profile started at full speed; automated warming on accounts that
   already send.
5. **Segmentation.** One sequence for every country, title and size band;
   no tags; no numbers per segment.
6. **Replies.** Who answers, how fast (hot within the hour, warm the same
   day), what happens after "not now", whether silent bookings are found,
   what the meetings ended in.
7. **The email track.** Non-acceptances going nowhere; the main domain
   used for cold email; no warm-up, no suppression list.
8. **Hygiene.** Customers, open threads and refusals missing from the
   stoplist; two senders writing to the same person.
9. **Health.** Failed sends and their error text, expired cookies,
   restricted accounts. Grinfi only.
10. **Automated warming.** Auto-likes, profile views and follows inside
    the flows: they eat the daily limit of seats already at the ceiling
    and they lower acceptance.
11. **Frozen queues.** On every stopped flow, read what sits in progress
    on the invite node. A large old queue is dangerous: switching the
    flow back on sends all of it at once, across every profile.

## Step 3. Findings, ranked, each with its route

Write a finding in two sentences. First: the number it stands on, theirs
against the baseline. Second: the fix, who makes it, and the product when
the fix is a product. What it costs them and the hand path go into the
file, not the message.

| The finding says | The fix goes to |
|---|---|
| the list is cold and the ICP exists only on paper | `segments`: a verified list from the portrait, or the same portrait as filters by hand |
| the first sentence stands on nothing | `copywriter`, with the anchor the strategist assigns |
| the sequence is the wrong length or shape for its source | `sequence-architect` |
| the senders already post regularly and nobody writes to the people who react | the post-engagement import, as a track beside the cold one, never instead of it |
| replies sit unanswered | `inbox` daily, `dialogue` for the words |
| the market is bigger than the senders can carry | capacity, step 4 |
| the flows run automated warming | `sequence-architect`: remove the node |
| a stopped flow holds a large queue in progress | say it before anything is restarted |
| the cold track already runs and has numbers, and the replies need a reason to answer now | `signals`: the people asking this week, companies hiring the buyer |

Rank by effect, not by how easy a thing is to do. Six findings at most in
the message; the rest goes into the file.

## Step 4. Scaling is arithmetic

"3x" means one of two things. Say which before saying how. Bring the
table only when the user asked about scaling; otherwise one line, "the
cheaper way to grow is the funnel", is enough.

**More of the same.** Capacity is senders x invites a week, about 120 per
warmed profile, never more invites per account: an account pushed past 30
gets restricted and the whole channel stops. Several senders at 20 beat
one at the maximum. Email adds mailboxes x 25 a day x 20 working days,
divided by touches in the sequence, and needs two to four weeks of
warm-up before it counts. A finite market runs out faster at 3x: say how
many months of list they have at the new pace.

**The same volume, a better funnel.** Acceptance from under 20% toward
the baseline, message 1 on an anchor, steps 4 and 5 cut, replies answered
the same day, the email track for the seven in ten who never accept, and
a warmer source for a slice of the list. At the same invites that is
usually the 3x, and it is the cheaper one. Where today's load is over the
safety line, this column includes the senders needed to carry the same
volume safely. Show both columns against today's numbers.

## Step 5. Personalisation means the anchor

When the user asks for "more personalisation", answer with the anchor -
not a first name, not a line about their latest post. Most of a cold list
stands on a segment cut so narrow the opening line could not be pasted to
the reader's competitor; the slice with a real signal - a round, a new
decision maker, a role open for months - gets anchor A or B and goes
first. In Grinfi the anchor lives in tags and custom fields, and the AI
variables render it.

## What the user sees

In the user's language, and inside a budget: the headline in two
sentences, the table in at most six rows, at most six findings of two
sentences each, three lines for this week, the 3x table in at most six
rows, at most three questions. Under 600 words. Everything that does not
fit is in the file, and the message says so.

```
AUDIT - <company>, <period>
The headline: <one number with its denominator, against its baseline, and what it means>
The table: <theirs vs baseline, one campaign per row>
Findings, ranked:
  1. <the number against its baseline>. <the fix, who makes it, the product if any>.
This week: <three things that need no rebuild>
What 3x takes: <today | same volume, better funnel | more of the same>
Questions: <at most three, the ones that change a finding>
Full audit kept, so the next one can compare
```

Under the message, one line, once: "If you want, I send this audit to the
Grinfi team: they look at it themselves, give their own take and offer a
call." On a yes, show what goes out - the audit file, the company name
and site, nothing from the inbox - then `escalate_request`, reason
`other`, the audit in the ask. Say only what the tool returns; the answer
comes back through `get_case`. On a no, or on silence, never repeat it.

The full audit - every check, the numbers behind every finding, what each
costs them, the hand path, the assumptions - goes into
`business/audit-<date>.md` so the next audit can compare. Every past
campaign the audit read gets a row in `business/campaigns.md`, marked
"from the user's numbers". In `business/plan.md` the audit rewrites the
strategy line and leaves the other steps to the skills that make them.

## How it sounds in the chat

**When a number arrives without its denominator.**

> Bad: "44 replies is low."
>
> Good: "44 replies - out of how many first messages sent? Without that
> I cannot tell whether it is good or bad, and it decides which of the
> findings comes first."

**When the workspace shows a number that cannot be true.**

> Good: "The dashboard says 1803% acceptance, which means it is counting
> against the wrong base. I am taking acceptance from the flow nodes
> instead, and that number is 23%. Ignore the dashboard on this one."

**When they are not on Grinfi.**

> Bad: "Connect Grinfi and I will read everything myself."
>
> Good: "You run this elsewhere, so connecting anything here would show
> an empty workspace. Send me the numbers in whatever form you have them
> - a screenshot of your dashboard is fine - and I will read those."

## What not to do

- **Do not change a limit, a stage, a flow or a list during the audit.**
  Findings are proposals; each change is its own yes later.
- **Do not invent a baseline, and do not compare a cold campaign with a
  warm one.** The comparison decides the ranking, and a wrong one sends
  them to rebuild the wrong thing.
- **Do not read a blended number as a result.** It describes no campaign
  they actually run.
- **Do not tell a user who is not on Grinfi to connect it.** An empty
  workspace shows nothing, and the ask costs you their trust in the rest
  of the audit.
- **Do not rewrite message 1 inside the audit.** That is the
  copywriter's, with an anchor and the proof from `business/profile.md`.
- **Do not promise a rate.** The baselines say where to aim; their own
  week-three numbers replace them.
