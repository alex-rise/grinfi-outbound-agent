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
| `icp.md` | segments, red flags, the signals actually available, where each list came from, the picker's candidates | onboarding, strategist, segments, signals |
| `senders.md` | who writes from which profile, their role, languages, booking links, the meeting rule | onboarding |
| `rules.md` | this client's corrections, one dated line each, in their words | every skill, the moment something is corrected |
| `plan.md` | the pass from strategy to result, seven steps with their status | onboarding creates it, the strategist fills it |
| `campaigns.md` | what ran and what it returned: date, campaign, source, anchor, invites, acceptance, replies, verdict | sequence-architect at launch, inbox and strategist after |
| `followups.md` | who is being waited on, what for, when to ping, how many pings so far | inbox |
| `sequences/<segment>.md` | the sequence brief and every text written for a segment | sequence-architect, copywriter |
| `audit-<date>.md` | each audit in full, so the next one can compare | audit |

## The house folder

`house/rules.md` and `house/what-works.md` are the part that survives a
client leaving. A correction is that client's by default; it moves to the
house only when it is about how we work rather than about their business,
or when the same correction arrives from a second client.

## Rules of the folder

- **One client, one folder, and never a word from one in another's.**
  That includes examples, numbers and case studies: a result belongs to
  the client who paid for it unless they said it may be named.
- Say "update my profile" to rerun onboarding for the parts that changed.
- Review the folder once a quarter.
- Never paste tokens, passwords or API keys into any file here.
