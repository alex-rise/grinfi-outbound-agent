# Outbound email infrastructure

A reference, not a mode: the email counterpart to `metrics.md`.

Why it exists: the most common failure in cold email is a team rewriting
subject lines for three weeks while the mail is simply not delivered. Copy
cannot fix delivery. Nothing in the sequence-architect or copywriter
skills is worth scheduling until this checklist passes.

## 1. Before the first email

| Requirement | Why |
|---|---|
| Separate sending domains, never the main company domain: 3 to 5 domains, 2 to 3 mailboxes each | a burned domain is permanent; the main domain carries your real mail |
| Each sending domain resolves to a page or redirects to the main site | a domain with nothing behind it looks disposable |
| SPF, DKIM, DMARC on every sending domain, DMARC at least `p=quarantine` moving to `p=reject` | a hard requirement at the major providers now |
| Ramp-up 3 to 4 weeks with real sends: 5 a day in week 1, 10 in week 2, 15-20 in week 3, from week 4 up to 30 on Google and 20 on Microsoft, follow-ups counted | a new mailbox is judged by its age and history; volume from a cold one is the fastest way to a permanent block |
| No paid warm-up network (mailboxes writing to each other) | Google's API policy forbids apps that use many accounts to get past spam filters, and since 2023 warm-up over the Gmail API has been shut down; the only published gains come from the vendors selling it. A "pre-warmed" mailbox is worth its age, not its bot traffic |
| Every address verified before the first send; a mailbox pauses itself above 2% bounce on its last 200 sends or on any 5.7.x rejection | bounces and blocks compound; a paused mailbox recovers, a burned one does not |
| The list validated with two services, bounce under 2% | bounces are the strongest negative reputation signal |
| Open tracking off: no pixel, no redirect domain | the number is noise and the tracking costs deliverability |
| Signature: two lines, plus a physical address and an opt-out for US recipients | CAN-SPAM |
| One shared suppression list across every domain, campaign and client | an opt-out honoured on one domain and not another is the same violation |

## 2. Sender rules that changed the math

| When | What changed |
|---|---|
| Feb 2024 | Google and Yahoo: senders of 5,000+ a day to personal addresses need SPF, DKIM, DMARC and one-click unsubscribe; complaints under 0.3%, recommended under 0.1% |
| May 2025 | Microsoft extended the same requirements to outlook.com, hotmail.com, live.com; non-compliant mail is filed as spam, moving toward outright rejection (`550 5.7.15`) |
| Late 2025 | Gmail tightened toward outright rejection of non-compliant traffic; treat the exact threshold as a moving target and check before quoting it to a client |
| Jan 2026 | AI sorting inside Gmail: a second gate after delivery. Mail can arrive and still not be shown, because sorting favours correspondents the person actually exchanges mail with |
| Sep 2026 | Microsoft: a new tenant sends only 10% of the normal outbound quota for its first 30 days and 25% until day 60 |
| Dec 2026 | Exchange Online turns off password (basic) SMTP login by default: Microsoft mailboxes connect through OAuth |

Delivered no longer means seen. Volume stopped being a lever; precision of
timing became one. That is the argument for anchors rather than for
bigger lists.

## 3. Capacity

```
mailboxes x 25 emails/day x 20 working days = monthly send ceiling
monthly send ceiling / emails per sequence = contacts per month
```

Three mailboxes on a five-email sequence is about 300 contacts a month,
not 3,000. Every conversion percentage in a plan is calculated against
this number. If the segment is larger than capacity, cut the segment or
add infrastructure first, and adding infrastructure means 3 to 4 weeks of
ramp-up with real sends before it carries anything. 25 to 30 per mailbox per
day is the working ceiling on Google and 20 on Microsoft, with at most 3
mailboxes and 90 cold emails a day per domain; older playbooks say 40,
written before the 2024-2026 rules.

## 4. What not to do

- Open tracking.
- Images, attachments or any link in the first email: the phone preview
  is the subject plus about 40 characters, none of it is visible anyway,
  and all of it costs deliverability.
- Spintax: it carries its own statistical fingerprint; filters weigh
  authentication, reputation and engagement, not text overlap.
- Sending from the main domain "just for the good accounts".
- Buying volume before the ramp-up finishes.
- Paying for a warm-up network. Corrected 09.2026: this file used to say
  "warm-up 2 to 4 weeks" without saying how. The part that works is the
  ramp with real sends to real prospects; the part that does not is bots
  writing to each other, which the major providers treat as filter
  evasion.

## 5. Seed testing

Put a handful of your own mailboxes (Gmail, Outlook, one corporate Google
Workspace or Microsoft 365) into every list. Check weekly: did it arrive,
primary or promotions or spam, does it render with no images and no link.
This is the only honest read on placement without open tracking.

## 6. Legal notes

US (CAN-SPAM): a physical postal address and a working opt-out in every
message, honoured promptly. UK and EU: limited companies are corporate
subscribers, and cold B2B email to them can rest on legitimate interest;
sole traders and partnerships are treated as individuals and need the
stricter basis. Objections are executed immediately. This is a working
summary, not legal advice.

## 7. Pre-launch checklist

```
[ ] Sending domains separate from the main domain, 2-3 mailboxes each
[ ] Each domain resolves to a page or redirects
[ ] SPF, DKIM, DMARC configured and verified on every domain
[ ] DMARC policy at least p=quarantine
[ ] Ramp-up complete: 3-4 weeks of real sends, mailboxes at 25-30 a day (Google) or 20 (Microsoft)
[ ] Auto-pause set: above 2% bounce on the last 200 sends, or any 5.7.x rejection
[ ] List validated by two services, projected bounce under 2%
[ ] Open tracking disabled
[ ] Signature: two lines, address and opt-out for US recipients
[ ] Shared suppression list connected across all domains and campaigns
[ ] Seed mailboxes added to the list
[ ] Capacity calculated; the segment fits inside it
[ ] Someone reads the inbox every working day
```

The last line is a launch blocker. A sequence that produces replies
nobody answers the same day is worse than not sending.

## 8. Troubleshooting

| Symptom | Where to look |
|---|---|
| Bounce above 2% | list quality; stop and re-validate |
| `550 5.7.15` or similar hard rejections | authentication or policy compliance at the receiving provider |
| Replies near zero on 500+ sends in 14 days | delivery or the list, not copy |
| Delivered to seeds but zero engagement | the second gate: tighten the anchor and the segment, not the wording |
| Sudden drop after a volume increase | the ramp was too fast; drop back for two weeks |
| Complaints above 0.1% | stop that domain; check the list source and how clearly the opt-out is presented |

In Grinfi: `list_mailboxes` and `diagnose_mailbox` for the state of each
mailbox, `check_sender_status` for whether a sender can dispatch on both
channels right now.
