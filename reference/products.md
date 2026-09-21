# The three products: what each one is, why it is worth it, how to start

The agent takes a product at the step that needs it. When the user has no
account there, it explains the product from this file, in the user's
language and in their situation - what it is, what it does at this step,
why it is worth it, how to start - and continues by hand until the
product is connected. The facts here are what the products state
publicly. Do not add numbers or promises from memory; for a price, send
the user to the product's site.

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

You describe who to take and who not to. Lead Finder searches LinkedIn
for people who match, an AI judge reads every profile against the
portrait, and you get a table of the people who matched. You pay only for
them.

### How it works

1. **The form.** Who we take, who we do not (by a sign visible in a
   profile), the grey zone, company facts (size, founding year,
   countries, industries, product or services), person facts (titles as
   LinkedIn writes them, countries, languages), what counts as a lead,
   volumes. The rules live on the server and the form is checked before
   anything is spent: a condition the data cannot verify comes back as a
   question, not as a silent miss.
2. **The route.** People first when the person's own country matters
   ("founders from Ukraine", the company may be anywhere). Companies first
   when the company must be right: LinkedIn companies by country, size
   band and industry, then headquarters, size, founding year and "product
   or services" verified on the company page before anyone is bought,
   chains, franchisors and suppliers screened out by description, then
   the titled people of each company that passed.
3. **The judge.** An AI reads every bought profile - positions,
   experience, the "about" text, the company - against the portrait and
   gives a verdict with its reason. Company size and year are checked as
   numbers from the company page, not guessed from a headline.
4. **Search words.** The user says who they need; the tool derives the
   job titles and niche words in the language of every country of the
   form, with synonyms, and shows what it picked.
5. **Delivery.** A table per person: first and last name, title,
   headline, location and country, LinkedIn URL, since when at the
   company, a short "about", top skills, the company with its LinkedIn
   URL, website, declared size, people on LinkedIn, founded year,
   industry and country, the verdict with its reason, the email when it
   was looked up. The same columns as a CSV. The agent imports it into
   Grinfi as one list per segment, tagged.

### What it does that a search export cannot

- Someone has read every profile. A Sales Navigator or database export
  is a list of people who match a filter; this is a list of people who
  match the portrait. 99 of 100 delivered people match it.
- The company is verified before a person is bought, on the companies
  route: headquarters, size, year, type. Vendors registered in a country
  the user does not want are dropped for free.
- Expats: people who studied in one country and live in another, with
  the universities picked by the tool.
- Local businesses - restaurants, salons, studios, clinics, shops -
  through Google Maps: every venue with phone, website, address and
  rating, and the owner from LinkedIn where the venue has a page.
- Countries, industries and words in the local language handled by the
  tool, not by the user.

### What it cannot filter, said honestly

LinkedIn shows a title, a country and city, a headcount band, a founding
year, offices. It does not show revenue (only an estimate by headcount),
headcount growth, funding rounds or what people post. The agent says so
at the portrait and leaves such conditions out of the form and out of the
copy.

### Money

Two gates, each approved by the user through a link they open
themselves. First the **probe**: the judge reads one page per country of
the form and names a price range per lead - the probe's own price to
thirty percent above it - and how many it can find for the balance. The
probe is charged at cost, usually well under a euro, never above the cap
shown, and hands over no leads. Then the **collection**, after the yes to
the maximum of the range: charged by the actual cost inside the range,
never below the probe's price, never above the maximum, only for the
people who matched. Fewer than five matches in the probe means no price
and no charge. The balance is topped up by card, whole euros from twenty.
A new account comes with a trial balance for the first probe.

### When the ask does not fit

A signal the form has no field for, a source that does not exist, a fact
the user insists on that the data cannot verify, a probe that came back
empty: a case goes to the Grinfi team, looked into by hand within a
couple of hours in working hours, nothing charged; the answer comes back
into the same chat, sometimes as a finished collection.

### Start

finder.grinfi.io/login - the user's email, the link from the mail opens
their workspace. Settings, "Connect Claude", copy the key. Then `/mcp`,
`lead-finder`, "Authenticate", paste the key.

---

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
   buyer; the tool writes and maintains the search itself, which finds
   more than typed keywords - and how we reply. The estimate of credits
   is shown at every step. A campaign can also find relevant Telegram
   chats by itself from the description of the business.
5. **Cards.** Every post the AI read becomes a card in the feed: the post,
   the verdict, a confidence score, a draft reply. The feed has two
   buckets, lead and set aside; a set-aside card is not hidden, the user
   can overrule it with one click. Notifications in a Telegram bot and by
   push.
6. **Copilot or autopilot.** Copilot: the user confirms, edits or
   regenerates the reply. Autopilot, on Telegram and Threads only: the
   agent sends when its confidence is above the threshold; it can be set
   per stage - hot leads by hand, neutral ones on autopilot. Start with
   the copilot; a month of confirmed replies teaches the brain.
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
one-off credit packs exist. A campaign opens on 200 credits a day, one
cap shared across its channels; the agent proposes no less, and never
unlimited on its own.

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
automatic recovery. The email track is how the seven in ten who never
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
programme, and the founders' own outreach numbers that this kit's
baselines come from.

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
