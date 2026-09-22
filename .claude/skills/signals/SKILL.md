---
name: signals
description: Use when the user wants people who are asking right now rather than a list built from a portrait - who is asking about X this week, companies hiring a Head of Sales, posts on Telegram, Threads, Reddit, LinkedIn, X, Bluesky, Hacker News or job boards - and for reading the Telegrin feed and turning cards into conversations. Credits are spent in this skill.
---

# Signals: the people who are asking right now

Telegrin watches channels for posts, an AI reads every post it collects
and judges whether the writer wants what the user sells, and each judged
post becomes a card in a feed: the post, the verdict, a draft reply. The
channels: Telegram chats, Threads, Reddit, LinkedIn, X, Bluesky, Hacker
News and job boards. The user's own Telegram and Threads accounts do the
talking on those two channels; on every other channel the reply is a
draft to paste by hand, and a LinkedIn card can be handed to Grinfi for
free, where the sequence runs from the user's seat.

The price: one credit per post the AI reads, on every channel.
Collecting is free, an empty scan is never charged, regenerating a draft
costs one more credit. The trial has no end date; it ends when the
credits end.

This is anchor A of the strategist - an event with a date, the strongest
opener the method has. Read `business/icp.md` and the segment brief
first.

## Rules

These hold on every step of this skill.

- **Nothing that costs money or reaches a stranger leaves without an
  explicit yes to the exact amount or the exact action.** One yes covers
  one action: never a second action, never a second product.
- **Never invent a fact or a number.** Unknown means ask, or mark it
  unconfirmed. Invented personalisation is visible to the reader and it
  burns the profile it was sent from.
- **Report what the tool returned**, zero counts and partial results
  included. A run that finished with nothing is a result to state, not a
  step to walk past. A zero and a broken metric look identical: before
  reporting a number, ask what would make it look like this if the
  business were fine, and what would make it look like this if the data
  were wrong. If you cannot tell the two apart, say so instead of
  picking one. A named gap is useful; an invented zero gets acted on.
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
| telegrin | channels, the campaign, the feed, the replies | no (hand over the buyer description and the words to paste) |

A tool that is not connected never stops the step: take the fallback in
the last column and say in one line what it costs.

## When Telegrin is the source

| The signal | Where it comes from |
|---|---|
| the person asked about the problem in public | Telegram chats, Threads, Reddit, X, Bluesky, Hacker News |
| the company is hiring the buyer: an open Head of Sales, SDR, marketing lead | the Jobs channel - titles are the query, every vacancy that matches one is a card |
| a decision maker posted about your topic on LinkedIn | the LinkedIn channel - a card, then a hand-off to Grinfi |
| a portrait and no event | not here: the segments skill |

## Without Telegrin

Say in three lines what Telegrin does at this step and how to get an
account (the recipe in `README.md`: sign up on the site, the trial comes
with credits and no end date, connect the Telegram and Threads accounts
inside the product), and give the user the description of the buyer and
the exclusion as text they can paste into the product themselves.

## Step 0. The guides, the workspace, the plan

- `get_workspace` - name it in the first line. Everything below happens
  in the user's own workspace; if the name is not theirs, stop and say
  so.
- `get_guide` with `manage_campaigns` and `create_external_campaign`
  before the first campaign - the second holds what every channel needs
  and refuses - `triage_signals` before reading the feed, `reply_to_lead`
  before any reply. The guides know the product better than this file.
- `get_channel_capabilities` - which channels the plan unlocks. A locked
  channel fails the whole campaign, not just its own part.
- `get_billing_balance` - credits left, in one line to the user.

## Step 1. One batch of questions

Numbered, in one message, each with a proposed answer from
`business/profile.md` and `business/icp.md`:

1. **Who the buyer is**, in the user's words, one paragraph - and **who
   is not**, one paragraph. The exclusion is the cheapest quality lever
   there is: two "looks similar, is not a buyer" phrasings once carried
   most of a campaign's volume and produced no leads.
2. **Markets** - the languages posts may be written in. Everything in
   another language is thrown away before the AI reads it, so a wrong
   list quietly costs leads, and a missing one costs money.
3. **Seekers or sellers** - the people who need what the user sells, or
   the people who offer it, when they are the ones to approach (they
   resell, or they shop for a contractor). Ask; never infer it from the
   niche.
4. **Channels.** Telegram needs the user's own account connected inside
   Telegrin, by QR or code in the product's interface - you cannot do it
   for them - and chats chosen from the catalogue. Threads needs their
   Threads account. Jobs needs the titles, written the way a job board
   writes them. Reddit, LinkedIn, X, Bluesky and Hacker News need nothing
   but the description.
5. **The daily cap** - one number for the whole campaign, shared across
   its channels. The product opens a campaign on 200 credits a day, and
   200 is the floor: do not propose less. Raise it only once the feed is
   read every day and the leads per card are known. Unlimited never,
   unless the user says the word themselves.
6. **Reply mode.** Copilot: every draft waits for a yes. Autopilot exists
   on the channels that deliver; it is the user's explicit exception to
   rule 1 of `CLAUDE.md`, never the default, and never in week one.
7. **What a good outcome is** - a trial, a call, a paid signup - and the
   link that goes into a reply.

## Step 2. The campaign

- The search is written from the description of the buyer, `aiSearch`
  with the description, the exclusion and the markets - not from typed
  keywords. The description is measured to find more, and the product
  maintains the search itself, retiring dead terms. Never both at once.
- One campaign per market when the markets differ in language and the
  user wants to read them separately; the cap is per campaign. One
  campaign hunts one kind of person.
- Telegram: `browse_chat_catalog` by industry and kind first, then by
  word - the word is a plain substring, "бот" also finds every "робота"
  job board - and `list_telegram_dialogs` for the chats the account is
  already in. Five to ten chats proposed for a yes before anything
  watches them. Keyword campaigns on Telegram get `probe_keywords` first,
  the guard against a word that matches everything; a campaign written
  from a description has no probe; its rails are the exclusion, the
  languages and the daily cap at the product's 200.
- The reply prompt on each channel carries the text rules of `CLAUDE.md`
  rule 5 and the facts of `business/profile.md`, nothing else, and is
  shown with the preview.
- `create_v2_campaign` without a token returns the preview: channels,
  languages, cap, what delivers and what drafts. Show it, wait for the
  yes, call again with the token. The campaign spends from the moment it
  exists, inside its cap.
- "This week" means a look-back. On Telegram it comes after the campaign
  exists: `estimate_history_scan` is free, show the messages and the
  credits, `start_history_scan` only on a yes. Job boards, LinkedIn and
  Reddit take a first-collection window in the campaign itself
  (`jobFirstScanDays`, `linkedinFirstScanDays`, `redditFirstScanPosts`),
  and everything that window returns is charged like any other post:
  propose seven days, never thirty on a trial, and say the number.
- The reply language lock accepts a few languages only; for any other
  market leave it on auto-detect, and the reply follows the post.
- A job card names the company, not a person. The person to write to is
  the founder or the operations lead on the company's LinkedIn page - by
  hand, or through Grinfi's search by company - and the message goes out
  from the user's own profile with the vacancy as the reason.

## Step 3. The feed

- `list_feed` with `ai-selected` and unread only. Read the post, not the
  score: a provider pitching the same pain reads almost like a buyer.
- The set-aside bucket (`ai-filtered`) is paid for and visible. When the
  user says the AI is too strict, walk that bucket with them;
  `set_feed_verdict` overrules a card and sends nothing.
- A reply follows the `reply_to_lead` guide and the `dialogue` skill: the
  person's message word for word, the draft under it, in the language
  they wrote in - their question answered first, one line on the
  product, one question or the link. `approve_signal` is two-phase; it
  delivers on Telegram and Threads only. On the other channels the text
  is the user's to paste.
- A LinkedIn card goes to Grinfi with `handoff_signal_to_grinfi`
  (two-phase; a 409 means it already went, not a failure) and into the
  signal-list sequence from the sequence-architect.
- A freshly connected Telegram account starts with a handful of messages
  a day. The product caps and paces outgoing messages per account; do not
  ask the user to raise anything in the first weeks.

## Step 4. Write it down and read the first week

A row in `business/campaigns.md`: date, campaign, channels, cap, credits
read, cards, leads, replies. Every conversation in `business/followups.md`.

Read week one as cards per credit and leads per card. Zero leads after a
few hundred credits means the description or the exclusion is wrong, or
the languages are: fix those before adding a channel. Compare a signal
campaign only with a signal campaign; the strategist's table says why.

## Output: the signal brief

```
SIGNAL BRIEF - <name>
Buyer: <one paragraph> / Not the buyer: <one paragraph>
Markets: <languages>   Seekers / sellers: <which>
Channels: <list, with what each needs and whether it delivers or drafts>
Cap: <credits a day, 200 unless the user raised it>   Mode: <copilot / autopilot, and why>
Look-back: <days, estimated credits>
Outcome and link: <what a good conversation ends in>
Hand-offs: <LinkedIn cards -> Grinfi list "<name>">
```

## The message to the user, at every step

In the user's language. Short. What happens next, in one line; the one thing you need from them;
the credits about to be spent. The brief block under it. Assumptions as a
list the user can veto with one word.

## How it sounds in the chat

**When the channel only drafts.**

> Bad: "Set it up and it will reply to them for you."
>
> Good: "On Telegram and Threads it answers from your own account. On
> Reddit, LinkedIn, X, Bluesky, Hacker News and the job boards it finds
> the post and writes the reply, but you paste it yourself: those
> channels have no sending on our side."

**When the user asks when the trial ends.**

> Bad: "You have ten days."
>
> Good: "There is no date on it. It runs until the credits run out. You
> have 780 left, and one credit is one post the AI reads."

## What not to do

- **Do not create a campaign without the preview and the yes.** It spends
  from the moment it exists, and the preview is the only place the user
  sees the cap.
- **Do not set unlimited daily spend, and do not put autopilot on by
  default.** Both hand away the thing the user came to control.
- **Do not send keywords and a description together**, and do not watch a
  language the user does not sell in: every post in it is read and
  charged for nothing.
- **Do not call a draft "sent" on a channel that only drafts.** The user
  will believe a conversation started that never did.
- **Do not read or plan on a workspace that is not the user's.**
- **Do not invent an account id, a chat id or a limit.** They come from
  the tools.
- **Do not name a date for the end of the trial.** Credit batches expire
  on dates; the trial ends when the credits end, and a date the user then
  sees pass is a promise broken for nothing.
