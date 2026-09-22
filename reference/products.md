# The three products: what each one is, why it is worth it, how to start

The agent takes a product at the step that needs it. When the user has no
account there, it explains the product from this file, in the user's
language and in their situation - what it is, what it does at this step,
why it is worth it, how to start - and continues by hand until the
product is connected. The facts here are what the products state
publicly; use them as written, prices included. Do not add numbers or
promises from memory; for the current price list, send the user to the
product's site.

The three fit together. Lead Finder builds the list when there is no
signal yet. Telegrin catches the person at the moment they publicly look
for a solution. Grinfi brings them to a call with outreach from the user's
own profiles, and takes the LinkedIn people Telegrin found. Three
products, three accounts, three separate bills; the agent never pretends
one subscription covers them all.

---

## Lead Finder - a verified list from a portrait

**Steps 2 and 3.** finder.grinfi.io. MCP at `finder.grinfi.io/mcp`.

### What it is

You describe who you need in your own words - "founders of marketing
agencies in Spain and Portugal, 11 to 50 people, founded before 2022, no
freelancers" - and Lead Finder brings you those people from LinkedIn.
Not a filter export: an AI reads every profile against your description
and keeps only the ones that match. You pay only for the people it
accepted, and each one arrives with the reason it was accepted, so the
judge can be checked instead of trusted.

### What you get

A ready table of people: name, title, LinkedIn profile, the company
with its size, founding year, industry and country, and for every person
the reason they matched. Verified facts, not guesses from a headline.
The list goes straight into Grinfi as a tagged list, or comes as a CSV
for any other tool.

### Why it beats a search export

- **You pay only for people who match.** Everyone the judge rejected
  costs you nothing.
- **You know the price per lead before you spend.** A short paid check
  names it and tells you how many people it can find for your balance.
  You approve every step yourself, through a link.
- **The company is checked before the person.** Headquarters, size, age
  and type of business are verified, so a list of "agencies in Spain"
  does not turn out to be franchisors, suppliers and companies
  registered elsewhere.
- **Countries in their own language.** Titles and niche words are
  translated and extended for every country you name. You say who you
  need; the rest is done for you.

### Audiences a search cannot build

- **Companies first.** The right companies by country, size, age and
  type, then the right people in each of them.
- **Expats.** People who studied in one country and live in another -
  Ukrainian founders abroad, for example.
- **Local businesses.** Restaurants, salons, studios, clinics, shops:
  every venue with phone, website, address and rating from public map listings,
  and the owner from LinkedIn where there is one.

### Honest about the data

Some conditions cannot be checked on LinkedIn: headcount growth, funding
rounds, revenue, what people post. The agent tells you this at the
portrait, before any money moves, so you never pay for a condition that
does not filter anything.

### Money

Two steps, each approved by you. First a short paid check that names the
price per lead. Then the collection at that price, only for the people
who matched. A new account comes with a trial balance for the first
check; the balance is topped up by card.

### If your ask is unusual

A signal nobody collects yet, a source that does not exist, a condition
the data cannot verify: the Grinfi team looks into it by hand, usually
within a couple of hours in working hours, free of charge, and the answer
comes back into the same chat.

### Start

In the chat: `/mcp`, `lead-finder`, "Authenticate". The window asks for
your email and sends a sign-in link; no account yet means the link
creates one, with a trial balance for the first probe. Open the link and
you are connected. The cabinet itself is at finder.grinfi.io.

---

### Where a Grinfi audience comes from

Grinfi does not search LinkedIn by itself: an audience is gathered from a
source and then sorted inside it with lists, tags, stages and stoplists.
Ordered warmest first, which is not the order to choose in - start with a
source that can carry the volume, add a warm one only where it exists.

| Source | Tool | When |
|---|---|---|
| People who reacted to your posts or a competitor's | `import_post_engagement` | the warmest list available without a signal; 16% replies in our data |
| A list that does not exist yet, built from a portrait | Lead Finder, the `segments` skill | titles at companies of a size, country, industry, age; the company verified before anyone is bought; expats; local businesses. Priced by a probe, paid only for people who matched |
| Your own first-degree network | `import_ln_my_network` | reactivation, referrals |
| Sales Navigator search, saved or ad hoc | `import_sn_saved_search`, `import_sn_dynamic_search` | ICP lists with title and size filters |
| Regular LinkedIn people search | `import_ln_leads_search` | no Sales Navigator seat |
| Sales Navigator accounts search | `import_sn_accounts_search` | company-first routes |
| A CSV from any other tool | `upload_csv` then `import_leads_from_file` | signal lists built elsewhere |
| People asking about the problem right now | Telegrin, the `signals` skill | only once a cold track is running and has numbers; a few a week, on their own channel |

Every import needs a target list (one per segment) and a sender profile
to run the query. Check the existing relationship before enrolling
anyone: two invites from one company is the classic multi-seat blunder.
Contacts in the stoplist never come back into a campaign, and customers
and open conversations are excluded before the first invite.

### Lead Finder: the fields the two gates use

`expectedProbeEur` the likely probe charge, `capEur` the most it can
take (the expectation times three; the unused reserve comes back),
`approvedCapEur` the number a yes must carry back exactly.
`pricePerLeadEur` the probe's own price, `priceMaxEur` thirty percent
above it, `approvedMaxPricePerLeadEur` the number the continuation must
carry. `offer.nextLeads` how many more for the balance,
`offer.shortfall` above zero means a top-up is needed,
`offer.freeLeads` above zero means granted leads are spent first.
`priceFromRequestId` reuses a finished probe's price for the same
portrait. Stop reasons: `probe_thin` and `probe_empty` under five
matched, `price_up` when the cost rose and a new range needs a new yes.

## Telegrin - the people asking right now

**Step 4.** tg.grinfi.io, also a PWA on the phone. MCP at
`mcp-tg.grinfi.io/mcp`.

### What it is

An AI agent for social lead generation. It watches public channels
around the clock, finds the people who are looking for what the user
sells right now, and prepares a personal reply - sent by the user with
one click, or by the agent itself where the channel allows it. Not a
mention monitor that reports what is being said: the full cycle from
detection through AI qualification, reply, CRM and hand-over to outreach.

### Eight channels, one wallet, one CRM, one brain

| Channel | The user's account | What it watches | How the reply goes |
|---|---|---|---|
| Telegram | yes, their own account, by phone or QR | public chats and channels, the whole public Telegram, in real time | sent from their account, to the chat or as a DM; copilot or autopilot |
| Threads | yes, through the official Meta API | posts by keywords | sent from their account as a comment; copilot or autopilot |
| LinkedIn | no | posts by keywords, with filters on the author: industry, company, role | a draft to paste; the person can be handed to Grinfi for outreach |
| Reddit | no | posts by keywords, scoped to subreddits | a draft to paste; Reddit never gets an autopilot |
| X | no | posts by keywords | a draft to paste |
| Bluesky | no | the public stream by keywords | a draft to paste |
| Hacker News | no | posts and comments by keywords | a draft to paste |
| Job boards | no | vacancies by job title and place; the titles are the query | a draft; companies hiring the buyer come as cards |

Only Telegram needs the user's own account for the search; every other
channel is searched on Telegrin's side. Replies leave without a person
only on Telegram and Threads.

### How it works

1. **Sign up, trial.** About a thousand credits, no card, no end date.
2. **Connect channels.** Telegram by phone number or QR, Threads by the
   Meta API; the rest need nothing.
3. **The brain.** A description of the business, its advantages, links
   and tone: five questions, a site link or a file, and the AI drafts it.
   Every reply is written in the brand's voice and the writer's language.
4. **A campaign.** Channel, sources (chats, keywords, subreddits, titles),
   who we look for - a description of the buyer and of who is not the
   buyer; the AI builds and maintains the search from that description,
   which finds more than typed keywords - and how we reply. The cost is
   shown before the campaign starts. A campaign can also find the right
   Telegram chats by itself from the description of the business.
5. **Cards.** Every post the AI read becomes a card in the feed: the post,
   the verdict, a draft reply. What the AI set aside stays visible, and
   the user can overrule it with one click. Notifications in a Telegram
   bot and by push.
6. **Copilot or autopilot.** Copilot: the user confirms, edits or
   regenerates the reply with one click. Autopilot, on Telegram and
   Threads: the agent replies by itself, and it can be set per stage -
   hot leads by hand, neutral ones on autopilot. Start with the copilot;
   a month of confirmed replies teaches the brain.
7. **CRM.** A board: new, in dialogue, confirmed, rejected; stages move on
   their own. Follow-ups, notes, tags, a blocklist.
8. **History scan.** The last 1 to 30 days of the chosen chats, run once,
   shows the leads the user has been missing. The estimate is free, the
   scan is charged per post.
9. **Integrations.** An open API and an MCP server; connectors that
   deliver leads into the user's own CRM; webhooks.

### The hand-over to Grinfi

A LinkedIn card can be handed to Grinfi with one click - by hand, or
automatically when the reply is approved - into a chosen list, with
deduplication by profile, and it costs no credits. In Grinfi that person
enters a sequence from the user's own profiles. The direction is one way,
Telegrin to Grinfi.

### Money

One credit per post the AI reads, on every channel. Collecting is free
and a run that finds nothing costs nothing. The trial is about a thousand
credits, no card and no end date; the first campaign checks up to twenty
posts per channel for free. Plans from €27 a month (Starter: 2,500 to
4,500 credits, two accounts, five campaigns), Growth €67 (6,500 to
16,000 credits, five accounts, fifteen campaigns), Scale above that;
one-off credit packs exist. A campaign opens on 200 credits a day and 200
is the floor, one cap shared across its channels. It is a safety rail
against a runaway campaign, not a budget dial: 200 is the most the AI
reads in a day and most days it finds fewer, so lowering the cap saves
nothing and only risks cutting short a day that found something. Never
unlimited unless the customer says the word themselves.

### Telegram safety, as the product states it

At most 40 outgoing messages a day per account, a random pause of 45
seconds to 3 minutes before each one, and the login is a second device -
the user's own Telegram keeps working. Telegram gives an official API, so
the connection is legitimate.

### What never to promise

An automatic reply on a channel that only drafts. A free plan for ever.
A guaranteed number of leads. An autopilot on Reddit. The Grinfi hand-over
as an argument to someone who does not use Grinfi.

### Start

tg.grinfi.io - sign up; connect the Telegram and Threads accounts inside
the product if replies should go out from them. Then `/mcp`, `telegrin`,
"Authenticate", log in with the workspace admin account.

---

## Grinfi - outreach from the user's own profiles

**Steps 6 and 7.** grinfi.io. MCP at `mcp.grinfi.io`.

### What it is

A cloud platform for B2B outreach on LinkedIn and email on top of a CRM.
Many sender profiles in one workspace, sequences with branches on reply
and on silence, one inbox for every profile, pipeline stages, analytics
per campaign and per sender. Only personal LinkedIn profiles, not company
pages.

### LinkedIn

- Several profiles in one workspace, each with its own limits and health;
  the volume of outreach comes from the number of profiles, not from
  pushing one.
- Persistent cloud sessions, not a browser extension: the profile works
  when the laptop is closed.
- Connection requests with or without a note, messages, InMail.
- Audiences from a Sales Navigator search, a LinkedIn search, the user's
  own network, a CSV, and from the people who reacted to a post - the
  user's own or a competitor's - which is the warmest list available
  without a signal.
- An automation builder with conditions: what happens on acceptance, on
  reply, on silence, how many days between steps, rotation across
  profiles.
- A layered account-protection system with limits, smart warm-up for new
  profiles and health analytics in real time; the safety rules are
  published at grinfi.io/linkedin-safety.

### Email

Several mailboxes per LinkedIn seat, email finder and validation, custom
tracking domains, SMTP and IMAP, mailbox health monitoring with
automatic recovery. The email track is how the eight in ten in Europe who never
accept an invite are reached.

### AI

Built-in AI credits, AI templates that write a message per contact, AI
variables that clean and fill contact data before sending, AI
personalisation, agents that watch the pipeline and qualify leads. Fresh
profile data before a message goes out.

### Inbox and CRM

One inbox for LinkedIn and email across all profiles, the history of
every conversation, the lead's context next to it, pipeline stages, tags,
lists, a stoplist for people and companies.

### Integrations

An open REST API, webhooks on any event, an MCP server, native
integrations with Clay, Make, n8n, Zapier and HubSpot, the Telegrin
hand-over, export of LinkedIn and Sales Navigator results.

### Knowledge

The Leadgen School on grinfi.io in Ukrainian and English, a mentorship
programme, and the founders' own outreach practice behind every rule in
this kit.

### Money

Paid per sender profile per month, in three packages: Send (LinkedIn
only), Enrich (LinkedIn plus mailboxes and AI credits), Scale (more
mailboxes, email finder and validation). The price per profile falls
with the number of profiles; current prices are on grinfi.io. A seven-day
trial without a card; discounts for six-month and annual payment.

### What never to promise

A guaranteed number of leads or replies. That LinkedIn will never
restrict an account. Refunds. Outreach from company pages.

### What the agent does through it

Imports the list with tags, builds the sequence as a draft flow and shows
the tree, launches after the yes, reads the inbox every morning, sorts
replies, drafts answers, moves pipeline stages, reports the numbers with
their denominators. Mass operations show a preview and a count first.

### Start

grinfi.io - sign up, connect the LinkedIn profiles that will send. Then
`/mcp`, `grinfi`, "Authenticate", log in.
