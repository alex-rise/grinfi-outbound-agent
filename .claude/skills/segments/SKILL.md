---
name: segments
description: A list of LinkedIn people built from a portrait through Lead Finder. Use when a segment needs a list that does not exist yet - "get me 300 founders of...", titles at companies of a given size, country, industry or age, people who studied in one country and live in another, owners of local businesses (restaurants, clinics, studios, shops), or any list where the company must be verified before a person is bought. Also when Lead Finder is not connected - the same portrait becomes filters for a search by hand. Does not choose between warm and cold sources (strategist), does not write copy, does not build sequences.
---

# Segments: a verified list from a portrait

Lead Finder turns a portrait into a list of LinkedIn people. You describe
who to take and who not to; it searches LinkedIn - people first, or
companies first when the company must be right before anyone is bought -
an AI judge reads every profile against the portrait, and the user gets a
table: name, title, LinkedIn URL, company with its size, year, industry
and country, the verdict with its reason. The user pays only for people
who matched. Its own rules text calls it the Audience Collector; it is the
same product.

Money moves in two gates, each after an explicit yes, and in most
workspaces the user clicks an approval link themselves. Nothing here
spends on your word alone.

Read `business/icp.md` and the segment brief from the strategist first.
The strategist decides where a list comes from; this skill runs when the
answer is "build it from a portrait".

## When Lead Finder is the source

| The list you need | Source |
|---|---|
| people who reacted to your posts, your own network | Grinfi imports (strategist, phase 6) - warmer and free, first whenever they exist |
| a segment on paper: titles at companies of a size, country, industry, age | **Lead Finder** |
| the company must be right before anyone is bought: headquarters, size, year, product or services, not a chain or a supplier | **Lead Finder**, companies-first route |
| people who studied in country X and live elsewhere | **Lead Finder**, expats |
| owners of local businesses: restaurants, salons, clinics, studios, shops | **Lead Finder**, places route - Google Maps for the venue, LinkedIn for the owner where there is one |
| a saved Sales Navigator search the user already trusts | Grinfi `import_sn_saved_search` - nobody has read those profiles; Lead Finder's judge has |

## Step 0. The rules live on the server

Call `get_brief_rules` at the start of every list, every time. It returns
the rules for turning the user's words into the form, the blank form and
`rulesVersion`, which goes into the form: a form without the current
version comes back as a question, not a collection. Follow the rules as
served; do not fill the form from memory of a previous session. This skill
is about the conversation and the money; the rules are about the fields.

## Step 1. One batch of questions, not four rounds

The rules list what to ask before the form. Ask it all in one numbered
message, the way onboarding does - the one-question-at-a-time rule of
`CLAUDE.md` yields here - with a proposed answer after each question, so
the user can say "yes to all" or fix one line. Proposals come from
`business/icp.md` and the user's own words, nowhere else.

The batch, in this order:

1. **Who we take** - the role and the company type.
2. **Who we do not take** - only with a sign visible in a profile: the
   headline says freelancer, the company page says franchise. A wish
   without a sign is left out, and the user is told why.
3. **The grey zone** - one rule for half-matches.
4. **Company facts** - size as numbers from-to, founded no later than,
   countries, industries, and product or services or any. Industry names
   come from `find_industries` and are shown to the user before they go
   into the form: LinkedIn filters by its own list, a home-made wording
   finds nothing.
5. **Person facts** - titles as LinkedIn writes them, in English, several
   variants; countries; languages.
6. **Whose country** - where the person lives, or where the company is.
   This picks the route: companies of a certain type mean the country
   goes on the company; the place of residence itself mattering means it
   goes on the person.
7. **What counts as a lead** - a profile with a title, or an email as well
   (a separate paid step).
8. **Volumes** - maximum leads in total, per company (always asked;
   propose one for founder and owner lists), maximum companies.

Do not ask about budget. The probe names the price.

What you may add on your own: nothing. A different role, a second
industry, a wider band - each is a line in the batch, "I suggest adding X
because Y - yes or no?", never a silent entry in the form. Spellings of
the same word are not additions: Owner and Co-owner, Founder and
Co-founder go in together.

An exclusion sign is the user's word and its translations into the
languages of the countries in the form - "freelancer, freelance,
autónomo" - not a family of synonyms: "independent" also matches an
independent agency of forty people.

## Step 2. The form and the check

Fill the form by the blank. Then `check_brief`, and again until `ok` is
true. It returns four things, and each has a place in the conversation:

- **questions** go back to the user in plain words. Two of them are
  trade-offs, not errors. Headcount that does not match LinkedIn's bands:
  exact numbers and dearer, or by bands and cheaper - the answer has the
  share that would be thrown away, say it. A condition the data cannot
  verify - headcount growth, funding, what people post, revenue: say it
  cannot be filtered, drop it from the form, and keep it out of the copy
  too; a message that stands on "I see you are growing" nobody verified
  breaks rule 2 of `CLAUDE.md`.
- **notes** say which route was chosen and why, and how the founded year
  is checked. One line each to the user.
- **icp** is the judge's portrait. Show it: every profile will be read
  against exactly this.
- **memory** is similar past runs, when there are any: the share that
  fit, the filters, the route. Use it to tune the form, never as a price.

## Step 3. Draft, portrait, search words

`create_request` with the checked form creates a draft and spends
nothing. Show the user three things from the answer: the portrait, the
filters, and the request's `search` field - the titles and niche words
per country in the local language. The user says who they need; the
translation and the synonyms are the tool's job. Wrong words mean a wrong
form: fix the form, not the words.

One request covers every country in the form. Do not split by country and
do not write scripts against the API: the tools are the interface.

The same portrait again later - other countries, a bigger limit - is
`create_request` with `priceFromRequestId` of the finished probe: no new
probe, the price carries over.

## Step 4. Money: two gates, exact numbers, no forecasts

There is no price before the probe. Do not turn other runs' prices into
an estimate for this one; "it depends on how many of the bought profiles
match, the probe tells us" is the honest sentence.

**Gate 1, the probe.** The draft carries `expectedProbeEur`, the likely
charge, and `capEur`, the most it can take; the unused reserve comes back.
Say both. After the user's explicit yes to the cap: `confirm_request`
with `approvedCapEur` equal to `capEur` exactly as shown - a different
number is refused and nothing is spent. Workspaces in link mode, the
default, answer with `approval.url`: give the link, the user opens it,
sees the portrait, the words and the amount, and clicks; the request stays
a draft until then. When they say they clicked, `get_request`.

The probe buys one page per country of the form, has the judge read it,
and names the price. It hands over no leads and does not say how many it
found. `PRICED` means a range from `pricePerLeadEur`, the probe's own
price, to `priceMaxEur`, thirty percent above it, plus `offer.nextLeads`:
how many it can find for the balance at the maximum. `STOPPED` with
`probe_thin` or `probe_empty` means fewer than five matched: no price, no
charge. Narrow the form with the user - niche words, an industry, one
title less, one country less - and probe again. An empty probe opens a
case with the team by itself; tell the user.

**Gate 2, the collection.** The range in one sentence: charged by actual
cost inside it, never below the probe's price, never above the maximum,
only for people who matched. If `offer.shortfall` is above zero, the
balance covers only part of the request: `create_topup` returns a card
payment link, whole euros from twenty, and the user pays it themselves.
After the explicit yes to the maximum: `continue_request` with
`approvedMaxPricePerLeadEur` equal to `priceMaxEur` exactly. Link mode
returns `approval.url` again.

A run that stops with `price_up` delivered what it had at the old range
and is `PRICED` again with a new one: say how many arrived and what a
lead costs from here, and continue only after a new yes.

## Step 5. Delivery and the hand-over

`list_leads` returns the matched people with the fields the strategist
asked for: first and last name, title, LinkedIn URL, company with size,
year, industry and country, the verdict with its reason, the email when
it was looked up. A places-route run also returns venues through
`list_places`, with phone, website, address and rating.

Into Grinfi: the `import_leads` guide first, one list per segment, then
`upload_csv` and `import_leads_from_file`. Anchor and tier as tags, the
request id in a custom field, so a campaign can be traced back to its
list. Stoplists and open conversations are checked before anyone is
enrolled. Without Grinfi, the request's CSV export has the same columns:
hand it to the user.

Write the segment into `business/icp.md` - route, filters, search words,
price range, how many were delivered - and the step into
`business/plan.md`.

## Without Lead Finder

The same portrait, done by hand: titles, countries, headcount bands,
industry names as LinkedIn spells them, the founding year checked on each
company page by the user, freelancers dropped by headline. Give it as a
Sales Navigator recipe and import through Grinfi's
`import_sn_dynamic_search`. Say what the hand path loses in one line:
nobody has read the profiles against the portrait, and the company checks
happen after the invite, not before.

## When the ask does not fit

A signal the form has no field for - app-store ratings, GitHub activity,
a funding round - a source that does not exist, a fact the user insists on
that the data cannot verify, or an empty probe: `escalate_request` opens a
case with the Grinfi team. Before it, show the user exactly what goes out,
their ask in their words and the draft form, and wait for a yes. The tool
returns the sentence to tell the user - a new case, looked into by hand, a
result within a couple of hours in working hours, nothing charged - say
that and nothing more. Later, `get_case`: `DONE` carries the answer in
`note`, and `resultRequestId`, when set, is a finished collection whose
leads `list_leads` can show.

## Output: the list brief

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

## The message to the user, at every step

Short. In this order: what happens next, in one line; the one thing you
need from them; the amount, if money is about to move. The brief block
goes under it, not instead of it. Assumptions are a bulleted list the
user can veto with one word, not paragraphs.

## What this skill never does

- Confirms or continues without the exact number the user saw, or
  without their yes.
- Quotes a price before the probe, or someone else's price as this one's.
- Adds a title, an industry, a country or a limit the user did not
  confirm.
- Puts a condition the data cannot verify into the form, or into the
  copy.
- Splits one portrait into per-country requests, or scripts the API.
- Promises the team anything beyond the sentence the case tool returns.
