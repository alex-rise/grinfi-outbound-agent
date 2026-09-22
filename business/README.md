# business/ - the agent's memory

Claude starts every session with an empty head. Everything it knows about
a business is what is written in this folder. Nothing here is in git: the
kit's `.gitignore` keeps it on your machine.

Two layers, and the difference matters:

```
business/
  house/                     what we know about how outreach works
    rules.md                 corrections that are true for every client
    what-works.md            what we ran, on whom, what it returned
  clients/
    <client>/                one folder per business you work for
      profile.md
      icp.md
      senders.md
      rules.md
      plan.md
      campaigns.md
      followups.md
      sequences/<segment>.md
      audit-<date>.md
```

Working for one business only? Then `clients/` holds one folder, and
nothing else changes.

## The client's folder

| File | What it holds | Who writes it |
|---|---|---|
| `profile.md` | what they sell, to whom, pricing, proof you may quote, what they do not do, competitors, objections and answers | onboarding, then dialogue as new objections appear |
| `icp.md` | segments, red flags, the signals actually available, where each list came from, the picker's candidates | onboarding, strategist, segments |
| `senders.md` | the pipeline stage names, then who writes from which profile, their role, languages, booking links, the meeting rule | onboarding, and the copywriter for the language of a segment |
| `rules.md` | this client's corrections, one dated line each, in their words | every skill, the moment something is corrected |
| `plan.md` | the pass from strategy to result, seven steps with their status | onboarding creates it, the strategist fills it, every skill updates its own step |
| `campaigns.md` | what ran and what it returned: date, campaign, audience source, anchor, invites, accepted, first messages, replies, meetings, verdict. A signal campaign adds its own block below: channels, cap, credits read, cards, leads | sequence-architect and signals at launch, inbox and audit after |
| `followups.md` | who is being waited on, what for, when to ping, how many pings so far | inbox |
| `sequences/<segment>.md` | the sequence brief and every text written for a segment | the copywriter, under the brief it was handed |
| `audit-<date>.md` | each audit in full, so the next one can compare | audit |

## The house folder

`house/rules.md` and `house/what-works.md` are the part that survives a
client leaving. A correction is that client's by default; it moves to the
house only when it is about how we work rather than about their business,
or when the same correction arrives from a second client.

## Rules of the folder

- **One client, one folder.** You own all of them, so asking "what
  worked for the other one" is a fair question and gets a real answer -
  that is what `house/what-works.md` collects. What does not travel is
  the outgoing text: another client's name, number or case does not go
  into this client's message, proposal or promise unless they said it
  may be named.
- Say "update my profile" to rerun onboarding for the parts that changed.
- Review the folder once a quarter.
- Never paste tokens, passwords or API keys into any file here.
