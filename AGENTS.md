# Outbound Agent - instructions for Codex

This folder is an outbound sales agent that works through three MCP
servers: Grinfi (sending and conversations), Lead Finder (verified lists
from a portrait) and Telegrin (people asking right now). The full
instructions live in `CLAUDE.md`; they apply to you word for word. Read
that file first, then the skill for the job at hand in
`.claude/skills/<name>/SKILL.md`, then `business/` for the client's
memory.

The servers are added to Codex with `codex mcp add`; the exact commands
are in the "Codex" section of `README.md`. A server that is not connected
puts you in advisory mode for that product only.
