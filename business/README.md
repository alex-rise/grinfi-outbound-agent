# business/ - the agent's memory about your company

Claude starts every session with an empty head. Everything it knows about
your business is what is written in this folder. The files are created by
the `onboarding` skill on the first run and updated as you work.

| File | What it holds | Who writes it |
|---|---|---|
| `profile.md` | what you sell, to whom, pricing, proof you allow to be quoted, what you do not do, competitors, objections and answers | onboarding, then dialogue as new objections appear |
| `icp.md` | segments, red flags, the signals that are actually available, where each list comes from (Lead Finder, Telegrin, a Grinfi import), the picker's candidates | onboarding, strategist, segments, signals |
| `senders.md` | who writes from which profile, their role, languages, booking links, the meeting rule | onboarding |
| `rules.md` | your corrections, one dated line each, in your words | every skill, the moment you correct something |
| `plan.md` | the pass from strategy to result, seven steps with their status and what each produced | onboarding creates it, the strategist fills it, every skill updates its step |
| `audit-<date>.md` | each audit in full: the numbers, the checks, the findings, so the next one can compare | audit |
| `campaigns.md` | what ran and what it returned: date, campaign, audience source, anchor, invites, acceptance, replies, verdict | sequence-architect at launch, inbox and strategist afterwards |
| `followups.md` | who you are waiting for, what for, when to ping, how many pings so far | inbox |

Say "update my profile" to rerun onboarding for the parts that changed.
Review the folder once a quarter.

These files are yours and stay on your machine. The kit's `.gitignore`
keeps them out of git by default; remove those lines if you want them in
your own repository. Never paste tokens, passwords or API keys into any
file here.
