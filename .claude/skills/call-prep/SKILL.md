---
name: call-prep
description: Use when a lead booked a call or a meeting is coming up - "prep me for the call", "who is this", "I have a call with X at 3", a booking or calendar screenshot - and after the call, when the user brings the recording or the transcript and asks what was promised and what to send. Reads, measures for free, writes one page for the person who runs the call. Sends nothing.
---

# Call prep: one page before the call, a promise list after it

The person who runs the call reads one page in five minutes and knows who
is on the other side, how they got here, what we already promised them,
whether their market exists, what to ask and what to offer. After the
call the same skill turns the recording into a list of promises with
dates. Everything here reads; nothing is sent, booked or bought.

## Rules

- **Nothing reaches the lead from this skill.** A confirmation, a
  reminder or a follow-up after the call is drafted here and sent only on
  an explicit yes to the exact text and channel, through `dialogue`.
- **Never invent a fact.** What you did not read in the booking, the
  thread, the profile, the site or a count is marked unknown on the page,
  not guessed. The person on the call repeats what the page says.
- **The live profile wins over the CRM card.** Cards go stale: a title,
  a company and an email in the CRM can be a job ago. Was: a prep built
  on a CRM card named the lead's previous employer and an email at that
  company; the booking had the new one. Now: the job comes from the live
  profile, the email from the booking.
- **Measure before you promise.** A size the page quotes comes from a
  free count made for this prep, with its date. Was: a lead asked "is my
  audience even on LinkedIn in that country", and the answer on the call
  was a feeling. Now: a fifteen-minute count before the call, and the page
  says "hundreds, go" or "tens, think twice" with the number.
- **Money is our price sheet, not a new number.** Formats and prices come
  from the business's own price list in `business/` (or what the user
  names). A discount or a custom package is the user's decision, written
  on the page as a question to them, not as an offer.

## Step 1. The booking

From the calendar event or the booking email: date and time in the
user's time zone and the lead's, the meeting link, the email the lead
booked with, and anything they typed into the booking form. The booking
email is the freshest address the lead has given - use it for anything
sent after the call, and say so when it differs from the CRM.

## Step 2. How they got here

Find the lead in Grinfi (card, all conversations, all automations they
were in) and read the whole thread, not the last message.

- **Which campaign brought them and what that campaign promised.** Was:
  a sequence step offered "the first 100 contacts for your profile"; the
  lead booked straight after, and the prep did not mention it, so the
  person on the call did not know what the lead was waiting for. Now: the
  page quotes the promise in one line under "they expect".
- **Who led the thread.** A conversation can run on a teammate's profile
  while the call is with the owner. The page names the profile, so the
  ping after the call goes from the same one.
- **What they already told us.** Answers in the thread (segment, country,
  volume, tools) go on the page, so the call does not ask them again.

## Step 3. The person

From the live LinkedIn profile: current title and how long in it, the
previous two jobs (the industry they come from shapes how they buy), the
languages they write in. Then their posts from the last two months:
topics, the call to action, and who reacts. Read the reactors' titles: if
the people reacting are colleagues, recruiters and vendors rather than
buyers, their content does not reach their market - that is a finding for
the call, not a detail. Was: a prospect posted weekly with "write to me
for a payback estimate"; 73 people reacted in two months and 3 of them
looked like buyers. Now: the page says it in one line with the numbers.

## Step 4. The company

From the site and the company page: what they sell, to whom, the typical
deal size, the cases they name, the countries. From their recent posts:
which segments they are pushing right now. If a product line sells to
private people or to a channel LinkedIn does not reach, the page says so
before the lead asks.

## Step 5. A free size check

Count their buyers, without collecting anyone:

- Lead Finder's planning step or the market count is free and names the
  volume for a portrait (country, company type, size, the decision
  maker's titles). Read the first rows, not only the total: an industry
  filter on people is loose, so quote "total x the share that fits".
- Telegrin's demand probe on the free channels (public Telegram, named
  subreddits) shows whether the buyers ask in public at all. Most B2B
  buyers do not; a channel full of sellers is a finding too.
- If the market is small and finite (hundreds of companies), the page
  says so: precision and repeated touches matter more than volume.

Do not buy anything here. A probe that costs money is offered to the user
as a next step with its price.

## Step 6. Write the page

One page, in the user's language, in this order:

1. **When and where** - time in both time zones, link, who attends.
2. **Who** - the person in three lines; the company in three lines.
3. **How they got here** - campaign, what it promised ("they expect"),
   what they already told us, which profile led the thread.
4. **What they sell now and to whom** - from the site and their posts.
5. **What we measured** - the counts with dates, and what they mean.
6. **What to ask** - five questions at most: the main segment and the
   deal size; who decides at their client; where clients come from today
   and how many they need; cases with numbers we may name; who on their
   side will run the conversations.
7. **What to offer** - the channels that fit their market, the reasons to
   write that can be seen from outside (new hires, new projects, funding,
   seasons), the format and the price from the price sheet.
8. **Where to be careful** - what not to promise (manual sources as a
   steady stream, results we cannot measure, a channel that does not hold
   their buyers), and the objection they are likely to raise with a
   one-line answer. Was: a prospect asked to pay per warm lead on a deal
   of seventy thousand euros; the answer came on the spot and sounded like
   a refusal. Now: the page carries the answer in advance - a long deal
   is warmed over several conversations, so we build the process and hand
   it over, and why that ends up cheaper for them.

Close the page with "after the call: send me the recording".

## Step 7. After the call

From the recording or the transcript:

1. **The promise list.** Every "I will send", "we will check", "by
   Monday" from both sides, with the date and who owns it. Quote the
   words; a recap that adds what nobody said is worse than none.
2. **What they actually need.** What they asked for and what they need
   can differ. Was: a lead had been promised a hundred contacts, and on
   the call it became clear that a list did not help them decide - a
   market analysis did. Now: the page names what to deliver, and the list
   becomes a part of it, not the deliverable.
3. **The follow-up row.** One row in the follow-up table with the stage,
   the next date (the day after the promised delivery) and the promise
   list, so nobody waits for the person who ran the call to remember.
4. **The client file.** What was learned goes into
   `business/clients/<client>/profile.md`: the call, the numbers, the
   objections, the decision maker, the next step.

The follow-up text itself goes through `copywriter` or `dialogue`, and is
sent only on a yes.

## What not to do

- **Do not send the page to the lead.** It is a brief for our side; it
  quotes their thread and our prices.
- **Do not skip the thread because the lead booked through a form.** The
  form says what they want; the thread says what we promised.
- **Do not quote a raw total.** A LinkedIn total without the share that
  fits overstates the market two to five times.
- **Do not pad the questions.** Five questions, each one the call cannot
  go on without. The rest belongs in the follow-up.
