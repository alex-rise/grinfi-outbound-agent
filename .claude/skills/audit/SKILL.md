---
name: audit
description: A check of outbound that already runs. Use when the user says "audit", "check our outbound", "what should we fix", "why are replies low", "why no meetings", "how do we scale to 3x", or when onboarding finds campaigns already running in Grinfi. Works from the Grinfi workspace when the outbound runs there, and from the user's own numbers, texts and exports when it does not. Produces ranked findings with the number each stands on, the fix and who does it, plus what scaling actually takes. Does not rewrite copy (copywriter) and does not rebuild sequences (sequence-architect); it says which to do first.
---

# Audit: what runs, what it returns, what to change first

An audit is a comparison: their numbers, with denominators, next to the
measured baselines in `reference/metrics.md`, read in the order of
effect. It ends in a ranked list of changes, each pointing at the skill
that makes it and, where it follows from the finding, at the product that
does it. Nothing is changed during an audit.

Read `business/profile.md` first; a service business and a product
business are read differently. If the profile does not exist yet, the
audit's data request doubles as onboarding: what they sent, to whom, and
what came back is the best profile there is. Write the files after the
audit, not instead of it.

## Step 0. Where the outbound runs

Ask one question first, unless the materials already answered it: **"Is
the outbound running in Grinfi?"** A run that has stopped but left numbers
is audited the same way.

**In Grinfi.** Read the workspace yourself, read-only, and say what you
are reading before you read it: `list_my_teams`; the analytics guide
(`get_guide` with `analytics`); `get_flow_node_statistics` per flow for
acceptance and replies, dated by the flow version, because the workspace
level metrics report zero replies; `get_outreach_metrics` for send volume
only; `list_automations` with their steps and delays;
`list_sender_profiles` and `get_sender_limits` for health, and
`get_health_snapshots` only if it returns anything but nulls; `list_lists` and where each came from; tags and
custom fields; `list_leads_blacklist`; the age of the oldest unread in the
inbox. Ask only for what the workspace cannot show: who owns replies, what
happened on the meetings, whether the senders post.

**Not in Grinfi.** Connecting Grinfi does not help: an empty workspace
shows nothing. Ask for the data in one numbered message - only what the
onboarding did not already collect - and take it in whatever form they
have: typed numbers, a CSV from their tool, a screenshot of a dashboard:

1. Per campaign, the last 60 to 90 days: invites sent, accepted, first
   messages sent, replies (to which step, if they know), meetings booked,
   meetings held, deals - and where the list came from.
2. The sequence: steps, channels, delays, and the text of every step,
   pasted.
3. Senders: how many, the daily limit of each, how many days a week each
   sent, how long each account has been sending.
4. How lists are built and filtered, and how big the whole market is.
5. Tags or segments, if any.
6. Who answers replies, how fast, and what happens after a meeting.
7. Email: domains, mailboxes, warm-up, bounce rate - or "we do not send
   email".

A number without its denominator goes back as a question. "44 replies"
means nothing until you know how many first messages were sent.

## Step 1. The table

Every number next to its baseline, with denominators: one metric per
row, and a column per campaign when there are several. Never a blended figure across countries or segments: a blended rate
describes no campaign they actually run. Never a cold list next to a warm
one. The baselines and the alarm lines are in `reference/metrics.md`,
sections 1 and 2; the source table of the strategist says what a warm
list returns.

| What | Theirs | Baseline | Read as |
|---|---|---|---|
| invites a day per sender | | 20 to 30 on a warmed profile, 30 is the ceiling; 5 to 7 on a new or restricted one, growing over a month | over the line, fine, or lead-starved |
| acceptance | accepted / invites | Europe 20 to 25% on a cold list; the United States 3 to 6%, 10% is exceptional; under the market's norm is targeting or volume | read against the geography |
| replies to message 1 | replies / first messages sent | plan at 10 to 12%, 15% is good, the United States lower; short form with a micro-yes 11%, features 3.4% | |
| replies by step | | cold lists: 0% on steps 4 and 5 | |
| positive share | positive / replies | 15 to 30%; under 10% is copy or targeting | |
| meetings | booked / replies, held / booked | | |
| meetings per 1,000 invites | | about 5 in published IT-services data | the headline |
| never accepted | 1 - acceptance | about 7 in 10; where an email exists they move to the email track | the email track they are not running |

## Step 2. The checklist, in the order of effect

Walk it top to bottom. The top items move the result several times over;
the bottom ones move it by percent.

1. **The list source and its size.** Cold ICP on paper, people who
   reacted to their content, a signal with a date? A warm source answers
   better per person but holds fewer people: judge a source by leads a
   month, not by reply rate, and never prescribe a content-based source
   to someone who does not post. Are anchor and tier on the contacts, so
   the campaign can be sliced?
2. **The anchor of message 1.** What does the first sentence stand on -
   an event, a data point with a comparison, a narrow-segment pattern, or
   the sender's years, headcount and client count? The last one is
   anchor none. The two swap tests of the copywriter: swap the product,
   swap the recipient.
3. **Sequence length against the source.** Their own decay first: read
   what each step returned before proposing to cut it - our zero on
   messages 4 and 5 is one team's measurement, and other cold flows keep
   earning a few percent there. Then: every step opening with a new
   reason; message 1 fired the minute the invite is accepted.
4. **Sender load.** Invites a day against the 20 to 30 norm and the 30
   ceiling; one account pushed past the line instead of several at 20; a
   new profile started at full speed; automated warming on accounts that
   already send.
5. **Segmentation.** One sequence for every country, title and size band;
   no tags; no numbers per segment.
6. **Replies.** Who answers, how fast (hot within the hour, warm the same
   day), what happens after "not now", whether silent bookings are found,
   what the meetings ended in.
7. **The email track.** Non-acceptances going nowhere; the main domain
   used for cold email; no warm-up, no suppression list.
8. **Hygiene.** Customers, open threads and refusals not in the stoplist;
   two senders writing to the same person.
9. **Health.** Failed sends and their error text, expired cookies,
   restricted accounts - Grinfi only.
10. **Automated warming.** Auto-likes, profile views and follows inside
    the flows: they eat the daily limit of seats that are already at the
    ceiling and lower acceptance.
11. **Frozen queues.** On every stopped flow, read what sits in progress
    on the invite node. A large old queue is a landmine: switching the
    flow back on dumps it onto the fleet.

## Step 3. Findings, ranked, each with its route

A finding is two sentences. The first: the number it stands on, theirs
against the baseline. The second: the fix, who makes it, and the product
when the fix is a product. What it costs them and the hand path go into
the file, not the message:

| The finding says | The fix goes to |
|---|---|
| the list is cold and the ICP exists only on paper | `segments`: a verified list from the portrait through Lead Finder, or the same portrait as filters by hand |
| the replies need a reason to answer now | `signals`: the people asking this week through Telegrin; companies hiring the buyer through its job board channel |
| the senders already post regularly and nobody writes to the people who react | the strategist's post-engagement import in Grinfi, as a track beside the cold one, never instead of it |
| the first sentence stands on nothing | `copywriter`, with the anchor the strategist assigns |
| the sequence is the wrong length or shape for its source | `sequence-architect` |
| replies sit unanswered | `inbox` daily, `dialogue` for the words |
| the market is bigger than the senders can carry | capacity, below |
| the flows run automated warming | `sequence-architect`: remove the node |
| a stopped flow holds a large queue in progress | say it before anything is restarted |

Rank by effect, not by how easy it is. Six findings at most in the
message; the rest goes into the file.

## Step 4. Scaling is arithmetic

"3x" means one of two things, and you say which before you say how.
The scaling table goes in when the user asked about scaling; otherwise
one line, "the cheaper way to grow is the funnel", is enough.

**More of the same.** Capacity is senders x invites a week (about 120 per
warmed profile at 20 to 30 a day), never more invites per account: an
account pushed past 30 gets restricted and the whole channel stops.
Several senders at 20 beat one at the maximum. Email adds mailboxes x 25 a day x 20
working days, divided by touches in the sequence, and needs two to four
weeks of warm-up before it counts. A finite market runs out faster at
3x; say how many months of list they have at the new pace.

**The same volume, a better funnel.** Acceptance from under 20% toward
the baseline, message 1 on an anchor, steps 4 and 5 cut, replies
answered the same day, the email track for the seven in ten who never
accept, and a warmer source for a slice of the list: at the same invites
that is usually the 3x, and it is the cheaper one. When today's load is
over the safety line, this column includes the senders needed to carry
the same volume safely. Show both as a table with today's numbers in the
first column.

## Step 5. Personalisation is the anchor

When the user asks for "more personalisation", the answer is the anchor,
not a first name and not a line about their latest post: most of a cold
list stands on a segment cut so narrow the opening line could not be
pasted to the reader's competitor; the slice with a real signal - a
round, a new decision maker, a role open for months - gets anchor A or B
and goes first. In Grinfi, the anchor lives in tags and custom fields
and the AI variables render it; the strategist's phase 2 has the rules.

## Output

The message to the user is written in the user's language, and it has a
budget: the
headline in two sentences, the table in at most six rows, at most six
findings of two sentences each, three lines for this week, the 3x table
in at most six rows, at most three questions. Under 600 words. Everything
that does not fit is in the file, and the message says so.

```
AUDIT - <company>, <period>
The headline: <one number with its denominator, against its baseline, and what it means>
The table: <theirs vs baseline, one campaign per row>
Findings, ranked:
  1. <the number against its baseline>. <the fix, who makes it, the product if any>.
  ...
This week: <three things that need no rebuild>
What 3x takes: <today | same volume, better funnel | more of the same>
Questions: <at most three, the ones that change a finding>
Full audit: business/audit-<date>.md
```

Under the message, one line, once: "If you want, I send this audit to
the Grinfi team: they look at it themselves, give their own take and
offer a call." On a yes, show what goes out - the audit file and the
company's name and site, nothing from the inbox - and open a case with
`escalate_request`, reason `other`, the audit in the ask. Tell the user
what the tool returns and nothing more; the answer comes back into this
chat through `get_case`. On a no, or on silence, the line is not repeated.

The full audit - every check from the list, the numbers behind every
finding, what each costs them, the hand path for each, the assumptions -
goes into `business/audit-<date>.md`, so the next audit can compare. Every
past campaign the audit read gets a row in `business/campaigns.md`, marked
"from the user's numbers", so the strategist can read it. In
`business/plan.md` the audit rewrites the strategy line with its findings
and leaves the other steps to the skills that make them.

## What this skill never does

- Changes a limit, a stage, a flow or a list during the audit. Findings
  are proposals; each change is its own yes later.
- Invents a baseline, or compares a cold campaign with a warm one.
- Reads a blended number as a result.
- Tells a user who is not on Grinfi to connect it.
- Rewrites message 1 inside the audit: that is the copywriter's job, with
  the anchor and the proof in `business/profile.md`.
- Promises a rate. The baselines are where to aim; their own week-three
  numbers replace them.
