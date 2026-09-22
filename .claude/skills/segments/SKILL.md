---
name: segments
description: Use when a segment needs a list of LinkedIn people that does not exist yet - "get me 300 founders of", titles at companies of a given size, country, industry or age, people who studied in one country and live in another, owners of local businesses, or any list where the company must be verified before a person is bought. Also when Lead Finder is not connected and the same portrait has to become filters for a search by hand. Money moves in this skill.
---

# Segments: a verified list from a portrait

Lead Finder turns a portrait into a list of LinkedIn people. Describe who
to take and who not to; it searches LinkedIn - people first, or companies
first when the company must be right before anyone is bought - an AI judge
reads every profile against the portrait, and the user gets a table: name,
title, LinkedIn URL, company with its size, year, industry and country,
the verdict with its reason. The user pays only for people who matched.

Money moves here in two gates, each after an explicit yes, and in most
workspaces the user clicks an approval link themselves. Nothing spends on
your word alone.

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
- **Know whose client this is before you read or write a memory file.**
  One folder per business under `business/clients/`. One folder and
  nothing in the request names another: that one, named in your first
  line. Several: ask which, in one line, listing them. The person you
  work for owns all of these folders and may ask across them freely.
  What never crosses is the outgoing text: a name, a number or a case
  from one client does not appear in another's message, proposal or
  promise unless that client has said it may be named.
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
| lead-finder | the rules, the form check, the probe, the collection | no (hand the portrait and the filters over to search by hand) |

Without Lead Finder, say in three lines what it does at this step and how
to connect it: `/mcp`, `lead-finder`, "Authenticate", their email, the
link from the mail; no account yet means the link creates one. Then
continue by hand: the same portrait as filters - titles, countries,
headcount bands, industry names as LinkedIn spells them, the founding year
checked on each company page by the user, freelancers dropped by headline
- as a Sales Navigator recipe, imported through Grinfi's
`import_sn_dynamic_search`. Say what the hand path loses, in one line:
nobody has read the profiles against the portrait, and the company checks
happen after the invite instead of before.

## What you need before the first step

Read `business/icp.md` and the strategist's segment brief. The strategist
decides where a list comes from; run this skill when the answer is "build
it from a portrait". No brief yet: write a one-block brief yourself before
the batch - segment, anchor, capacity, source - and put it into
`business/icp.md`. Never make the user wait for a brief they did not ask
for.

| The list you need | Source |
|---|---|
| people who reacted to your posts, your own network | Grinfi imports - warmer and free, first whenever they exist |
| a segment on paper: titles at companies of a size, country, industry, age | **Lead Finder** |
| the company must be right before anyone is bought: headquarters, size, year, product or services, not a chain or a supplier | **Lead Finder**, companies-first route |
| people who studied in country X and live elsewhere | **Lead Finder**, expats |
| owners of local businesses: restaurants, salons, clinics, studios, shops | **Lead Finder**, places route - Google Maps for the venue, LinkedIn for the owner where there is one |
| a saved Sales Navigator search the user already trusts | Grinfi `import_sn_saved_search` - nobody has read those profiles; Lead Finder's judge has |

## Step 0. Get the rules from the server

Call `get_brief_rules` at the start of every list, every time. It returns
the rules for turning the user's words into the form, the blank form, and
`rulesVersion`, which goes into the form: a form without the current
version comes back as a question, not a collection. Follow the rules as
served. Never fill the form from memory of a previous session.

## Step 1. Ask everything in one batch

One numbered message, a proposed answer after each question, so the user
can say "yes to all" or fix one line. Take the proposals from
`business/icp.md` and the user's own words, nowhere else.

1. **Who we take** - the role and the company type.
2. **Who we do not take** - only with a sign visible in a profile: the
   headline says freelancer, the company page says franchise. A wish with
   no visible sign is left out, and the user is told why.
3. **The grey zone** - one rule for half-matches. "A creative agency whose
   page also offers marketing services: take. A page with no services for
   clients: leave out."
4. **Company facts** - size as numbers from-to, founded no later than
   (only if the user named a year; propose none), countries, industries,
   product or services or any. Take industry names from `find_industries`
   and show them to the user before they go into the form: LinkedIn
   filters by its own list, and a home-made wording finds nothing.
5. **Person facts** - titles as LinkedIn writes them, in English, several
   variants; countries; languages.
6. **Whose country** - where the person lives, or where the company is.
   This picks the route: companies of a certain type put the country on
   the company; the place of residence mattering in itself puts it on the
   person.
7. **What counts as a lead** - a profile with a title, or an email as well
   (a separate paid step).
8. **Volumes** - maximum leads in total, per company (always ask; propose
   one for founder and owner lists), maximum companies (leave empty
   unless the user has a number).

Never ask about budget. The probe names the price.

Add nothing of your own. A different role, a second industry, a wider
band: each is a line in the batch - "I suggest adding X because Y, yes or
no?" - never a silent entry in the form. Spellings of one word are not
additions: Owner and Co-owner, Founder and Co-founder go in together. CEO
and Managing Director are hired roles and go in only as a question.

An exclusion sign is the user's word and its translations into the
languages of the countries in the form - "freelancer, freelance,
autónomo" - not a family of synonyms: "independent" also matches an
independent agency of forty people.

## Step 2. Fill the form and check it

`check_brief`, and again until `ok` is true. It returns four things, each
with a place in the conversation:

- **questions** go back to the user in plain words. Two of them are
  trade-offs, not errors. Headcount that does not match LinkedIn's bands:
  exact numbers and dearer, or bands and cheaper - the answer carries the
  share that would be thrown away, so say it. A condition the data cannot
  verify - headcount growth, funding, what people post, revenue: say it
  cannot be filtered, drop it from the form, and keep it out of the copy
  too, because a message standing on "I see you are growing" that nobody
  verified is an invented fact.
- **notes** say which route was chosen and why, and how the founded year
  is checked. One line each to the user.
- **icp** is the judge's portrait. Show it: every profile will be read
  against exactly this.
- **memory** is similar past runs, when there are any: the share that fit,
  the filters, the route. Use it to tune the form, never as a price.
  Relay `memory.sourceFacts` in the user's language; where they differ
  from the rules on the shape of the request, the rules win.

## Step 3. Draft, portrait, search words

`create_request` with the checked form creates a draft and spends nothing.
Show the user three things from the answer: the portrait, the filters, and
the request's `search` field - the titles and niche words per country in
the local language. The user says who they need; the translation and the
synonyms are the tool's job. The tool may also add roles you deliberately
left out: read the words back and name what it added. Wrong words mean a
wrong form - fix the form, not the words.

One request covers every country in the form. Never split by country, and
never script against the API: the tools are the interface.

The same portrait again later - other countries, a bigger limit - is
`create_request` with `priceFromRequestId` of the finished probe. No new
probe; the price carries over.

## Step 4. Money: two gates, exact numbers, no forecasts

There is no price per lead before the probe. Never turn another run's
price into an estimate for this one. The honest sentence is "it depends on
how many of the bought profiles match, and the probe tells us". The probe
itself usually costs under a euro and never more than the cap the draft
shows - that much may be said before the draft exists. Before the draft,
the money line is "money moving now: none".

**Gate 1, the probe.** The draft carries `expectedProbeEur`, the likely
charge, and `capEur`, the most it can take; the unused reserve comes back.
Say both. Read `approval` on the draft before you speak: a url means the
user clicks it themselves; `null` means agent mode, where your own
`confirm_request` spends with nothing between it and the money, so the yes
must be unmistakable, in this conversation, against the exact cap, and you
say plainly that no link will come. After that yes: `confirm_request` with
`approvedCapEur` equal to `capEur` exactly as shown - a different number is
refused and nothing is spent. In link mode, the default, give the link;
the user opens it, sees the portrait, the words and the amount, and
clicks. The request stays a draft until then. When they say they clicked,
`get_request`.

The probe buys one page per country, has the judge read it, and names the
price. It hands over no leads and does not say how many it found.
`PRICED` means a range from `pricePerLeadEur`, the probe's own price, to
`priceMaxEur`, thirty percent above it, plus `offer.nextLeads`: how many it
can find for the balance at the maximum. `STOPPED` with `probe_thin` or
`probe_empty` means fewer than five matched: no price, no charge. Narrow
the form with the user - niche words, an industry, one title less, one
country less - and probe again. An empty probe opens a case with the team
by itself; tell the user.

**Gate 2, the collection.** The range in one sentence: charged by actual
cost inside it, never below the probe's price, never above the maximum,
only for people who matched. If `offer.shortfall` is above zero the
balance covers part of the request: `create_topup` returns a card payment
link, whole euros from twenty, and the user pays it themselves. After the
explicit yes to the maximum: `continue_request` with
`approvedMaxPricePerLeadEur` equal to `priceMaxEur` exactly. Link mode
returns `approval.url` again.

A run that stops with `price_up` delivered what it had at the old range
and is `PRICED` again with a new one: say how many arrived and what a lead
costs from here, and continue only after a new yes.

## Step 5. Deliver and hand over

`list_leads` returns the matched people with the fields the strategist
asked for, and a places-route run also returns venues through
`list_places`, with phone, website, address and rating.

Into Grinfi: the `import_leads` guide first, one list per segment, then
`upload_csv` and `import_leads_from_file`. Anchor and tier as tags, the
request id in a custom field, so a campaign can be traced back to its
list. Check stoplists and open conversations before enrolling anyone.
Without Grinfi, the request's CSV export has the same columns: hand it to
the user.

Write the segment into `business/icp.md` - route, filters, search words,
price range, how many were delivered - and the step into
`business/plan.md`.

```
LIST BRIEF - <segment name>
Route: <people / companies / places> - <why, one line>
Portrait: <the judge's icp, as returned>
Take / do not take / grey zone: <as the user confirmed>
Filters: <size, year, countries, industries, kind, titles>
Search words: <per country, as the tool picked them>
Volumes: <max leads, per company, max companies>
Probe: <expectedProbeEur / capEur> -> <price range, up to N for the balance>
Delivered: <N matched, list "<name>" in Grinfi / CSV>
Next: <sequence-architect and copywriter, anchor <A/B/C>>
```

## When the ask does not fit

A signal the form has no field for - app-store ratings, GitHub activity, a
funding round - a source that does not exist, a fact the user insists on
that the data cannot verify, or an empty probe: `escalate_request` opens a
case with the Grinfi team. Show the user exactly what goes out first,
their ask in their words and the draft form, and wait for a yes. Say the
sentence the tool returns and nothing more. Later, `get_case`: `DONE`
carries the answer in `note`, and `resultRequestId`, when set, is a
finished collection whose leads `list_leads` can show.

## How it sounds in the chat

**Before the probe.**

> Bad: "Should be around 4 cents a lead, so about 40 euros for a
> thousand."
>
> Good: "I cannot price this yet. It depends on how many of the bought
> profiles actually match, and that is what the probe measures. The probe
> itself costs up to 1.20 euro, the unused part comes back, and it gives
> us the real price per lead before we buy anyone."

**When the user wants a filter LinkedIn does not have.**

> Good: "Revenue is not something we can filter on - LinkedIn does not
> carry it, and neither does any source underneath. Two options: we drop
> it and judge by headcount instead, or I send this to the Grinfi team to
> check by hand. It also means the messages cannot mention revenue: we
> would not have verified it."

**In agent mode, where the yes spends directly.**

> Good: "This workspace has no confirmation page, so my own call takes
> the money and no link will come to you. The cap is 1.20 euro. Say yes
> to 1.20 and I run the probe."

## What not to do

- **Do not confirm or continue without the exact number the user saw.** A
  different number is refused by the server, and a number they did not see
  is not a yes.
- **Do not quote a price before the probe**, and never another run's price
  as this one's. The share that matches is what sets the price, and it
  changes with every portrait.
- **Do not add a title, an industry, a country or a limit the user did not
  confirm.** They are paying per matched person; an addition you made
  silently is money they did not agree to spend.
- **Do not put a condition the data cannot verify into the form, or into
  the copy.**
- **Do not split one portrait into per-country requests, and do not script
  the API.**
- **Do not promise the team anything beyond the sentence the case tool
  returns.**
