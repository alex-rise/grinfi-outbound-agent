# Outbound metrics: what to count and what the numbers mean

A reference, not a mode. Any skill reads it when a number is involved.
Covers LinkedIn and email.

## 0. Before any number means anything

**Fix the denominator.** Published benchmarks differ up to eight times for
the same metric, almost always because they count different things.

| Term | Definition |
|---|---|
| Reply | a human reply from the addressee; auto-responders, "I no longer work here" and out-of-office do not count |
| Reply rate denominator | messages actually sent, not contacts, not accepted |
| Positive reply | a reply that moves the conversation forward, including a pseudo-refusal that hands you a route; "don't contact me" is not one |
| Acceptance rate | accepted invites divided by invites actually sent |
| Meeting | a call that was booked and took place |

A campaign report that does not state its denominators is not comparable
to anything, including your own previous campaign.

**Your own baseline beats any published benchmark.** Outbound numbers vary
by geography, industry, seniority and offer far more than by copy
quality. In the same published dataset IT services see about 10% replies
on LinkedIn, outsourcing about 4%, the US and UK around 6%. Who you write
to matters roughly seven times more than who writes. Segment your reporting
by geography and industry from day one; a blended rate across four regions
describes no campaign you are actually running.

## 1. Our measured LinkedIn baseline

Our own flows, September 2026, one product, one team: 3,812 invites sent,
1,095 first messages. Acceptance denominator: invites with a closed task
(actually sent). Reply denominator: first messages actually sent.

| Audience source | Anchor in practice | Invites | Acceptance | First messages | Replies to message 1 |
|---|---|---|---|---|---|
| Reacted to our own content | warm intent | 1,244 | 60.7% | 561 | 16.0% |
| Wrote a post on our topic | A, signal | 623 | 44.1% | 225 | 29.3% |
| Cold list matching the ICP | C, segment | 1,945 | 21.3% | 309 | 6.8% |

Reply decay by step, the same three flows:

| Flow | msg 1 | msg 2 | msg 3 | msg 4 | msg 5 |
|---|---|---|---|---|---|
| Post authors | 29.3% | 8.2% | 6.0% | 5.1% | 1.3% |
| Post engagement | 16.0% | 7.1% | 6.7% | 4.4% | 4.0% |
| Cold list | 6.8% | 5.0% | 2.6% | 0% | 0% |

What it says: the audience source moves the reply rate about four times
with the same product, team and copy skeleton; acceptance follows the
same order and blows past the "25 to 30% typical" reference on warm
sources; the step that dies is message 4 and 5 on cold lists, while on
warm lists the tail still returns 4 to 5%. Sequence length should not be
the same for both.

Form of message 1 on the same cold audience, same senders:

| Form | Sent | Replies |
|---|---|---|
| 250-340 characters, thanks for connecting, one line why you, one concrete asset, "want the link?" | 979 | 11.0% |
| Article with link sent straight away, no question | 309 | 6.8% |
| Product as a list of features, 700-890 characters | 859 | 3.4% |

**How to pull these numbers in Grinfi:** `get_automation` for the node
ids, then `get_flow_node_statistics` for the flow: acceptance = accepted
divided by closed on the connection-request node; replies per message
node from `replied` divided by `closed`. That is the same data the web UI
shows. `get_outreach_metrics` gives the workspace-level view by period;
`get_unread_conversations` is unread only and says nothing about totals.

## 2. Core LinkedIn metrics

| Metric | Formula | Reference (verify against your own data) | Investigate below |
|---|---|---|---|
| Acceptance | accepted / invites sent | 25-30% on cold, 40-60% on warm sources | 20% |
| Reply rate | replies / first messages sent | 5-11% cold, 15-30% warm or signal | 3% |
| Positive share | positive replies / all replies | 15-30% | 10% |
| Meetings per 1,000 invites | meetings / invites x 1,000 | about 5 in published IT-services data | - |

Acceptance is a gate metric, not the goal metric. Around 80% of people
who accept never reply to anything; that is the channel, not the copy.
Reply rates on invites fall year over year across large samples; a flat
rate against a falling market is an improvement.

Volume per account is a practice, not a guess. A warmed profile sends 20 to
30 invites a day, six days a week - about 120 a week, 450 to 500 a month;
30 a day is the ceiling. A new or freshly restricted profile starts at 5 to
7 a day with random pauses and grows over a month. Several senders at 20
beat one pushed past 30: an account over the line gets restricted and the
whole channel stops. Read the live limits before planning.

### By geography

Acceptance and replies move with the market more than with the copy, so
read every number against its geography and never blend regions in one
campaign. Europe: 20% acceptance is normal, 25% with a precise audience
and a good connection note. The United States: 3 to 6% acceptance is a
normal result and 10% is exceptional; replies around 8%. Other regions
run their own way - some Central Asian and Middle Eastern markets answer
far more often than Europe. Plan replies at 10 to 12% and treat 15% as
good. Test each geography and niche separately before comparing them.

## 3. Core email metrics

| Metric | Formula | Reference | Investigate |
|---|---|---|---|
| Bounce rate | bounced / sent | under 2% | above 2%: stop and re-validate the list |
| Reply rate | human replies / sent | 0.5-4% by anchor and market | see the stop rule |
| Positive share | positive / all replies | 15-30% | under 10% |
| Meetings from sent | meetings / emails sent | 0.3-0.5% | double-digit promises are a sales pitch |
| Spam complaints | complaints / delivered | under 0.1% | above 0.3% is an emergency |

Open rate is no longer a metric: mail privacy features load the tracking
pixel whether or not the person opened anything, and the pixel plus the
redirect domain cost deliverability. Turn open tracking off. What
replaces it: bounce rate, first-touch reply rate, and a seed test with
your own mailboxes in the list.

Email expectations by anchor, observed in an email-led IT-services
context: anchor A 4 to 8% replies, readable from 150 contacts; anchor B
2 to 3%, from 300; anchor C 1 to 1.5%, from 1,000. Do not plan a LinkedIn
campaign from this table: LinkedIn numbers run four to seven times higher
(section 1).

## 4. Campaign size pulls conversion down

Up to 50 contacts, about 5.8% replies; 500 or more, about 2.1%. Observed
across several independent reports. Three tight campaigns beat one merged
one, and campaigns are compared at similar size, not similar dates.

## 5. Test math

| Question | Answer |
|---|---|
| Minimum per variant for a B2B comparison | 500 contacts; 300 reads as direction only |
| To see a 20% lift at a 3% reply base | 1,500 to 2,000 sends per variant |
| How long a round runs | 2 to 6 weeks; replies arrive over 5 to 7 working days after each touch |
| What to test | ICP x anchor x offer, one hypothesis at a time, its own campaign |
| What not to test | subject lines and micro-copy on one small list: two replies against three is noise |

**Stop rule:** 500 or more sends over 14 days with under 0.3% replies
means delivery or the list. The copy is not the cause.

**One-change rule:** never change the segment, the copy and the sender at
the same time.

## 6. When a metric drops

- Acceptance under 20%: the sender looks inactive or low-trust, or the
  target is wrong. The difference between senders is a few points; the
  difference between recipient industries is 20 or more. Check targeting
  before rebuilding the profile.
- Reply rate below your own baseline: the anchor is wrong for the
  segment, or the follow-ups are reminders. Check that each follow-up
  carries a number or the asset (copywriter), and that the anchor was real
  (strategist).
- Positive share under 10%: the offer or the company stage. Strategist on
  segmentation, copywriter on the angle.
- Meetings low while positives are healthy: the call is asked too early,
  or the asset never got delivered (dialogue).
- Bounces above 2% or complaints above 0.1%: stop the domain, re-validate
  the list, see `email-infrastructure.md`.

## 7. LinkedIn account health

Signs of risk: a warning about unusual activity, a sudden acceptance drop
with no change in targeting or volume, invites that stop delivering.
Prevention: consistent daily volume, gradual warm-up of new accounts (start
at 30 to 40% of the target and add 20 to 25% a week), an account that
looks like a real active professional. Automated liking, profile viewing
and following of prospects is measured as counter-productive. In Grinfi:
`get_health_snapshots` for the fleet, `diagnose_linkedin_browser` for one
seat, `get_sender_limits` for the live limits (the snapshot lags a day).

## 8. Multichannel attribution

Record two fields on every contact: channel of the first touch, channel of
the reply. A report sliced by platform without them double-counts the
person. Track separately the replies recovered by email from contacts who
never accepted the invite: that number is the whole argument for running
both channels.

## 9. Optimisation cycle and the weekly table

Weeks 1 to 2 launch and change nothing. Week 3 first review: acceptance
and bounces, then replies. Week 4 one change. Weeks 5 to 6 observe. Repeat.

Weekly table, one per geography and industry segment, never blended:
week, invites, accepted, acceptance %, first messages, replies, reply %,
positive, meetings. Email: week, sent, bounced, bounce %, human replies,
reply %, positive, meetings. Append the verdict to `business/campaigns.md`.

## 10. Reading results

| Symptom | Most likely cause | Who |
|---|---|---|
| Low acceptance, decent replies from those who accept | targeting or the profile, targeting first | strategist |
| Good acceptance, low replies | anchor or copy | copywriter |
| Good replies, low positive share | ICP or offer mismatch | strategist and copywriter |
| Good positives, few meetings | the call asked too early, or the asset never delivered | dialogue |
| Zero positives on 1,000+ sends | who you are writing to, not the subject line | strategist |
| Email replies near zero while LinkedIn is healthy | deliverability, not copy | `email-infrastructure.md` |
