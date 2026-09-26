# Event data — verification TODO

Ticket URLs and details in `src/data/events.ts` were gathered via web search
(search-engine snippets), not by opening each ticket page directly — do a
manual click-check on every `verified: true` event before driving real
traffic to it.

## Confirmed festival dates
Sharad Navratri 2026: Oct 11 (Ghatasthapana) – Oct 19 (Maha Navami),
Dussehra Oct 20.

## Staged but hidden (`verified: false`) — fix the noted gap, then flip to true
- `shubharambh-2026-mumbai` — has a ticket link, missing venue/date/price
- `mirchi-rock-n-dhol-2026` — has a ticket link, 2026 venue/dates unconfirmed
- `sacred-raas-2026` — has a ticket link, venue unconfirmed
- `karnavati-no-sanedo-2026` — ticket URL slug shows 2025 dates, title says 2026
- `raatladi-26` — generic ticket URL, no confirmed 2026 dates

Each has a `verificationNote` field in `src/data/events.ts` explaining the
specific gap.

## Found but not added (no usable ticket link at all)
- **Navratri Utsav ft. Falguni Pathak** (Jio World Convention Centre,
  Mumbai) — BookMyShow-exclusive but no direct event URL found; worth
  searching BookMyShow directly, likely high-traffic if you find the link.
- **Goregaon Sports Club Navratri** (Mumbai) — no ticket link found; would
  need a direct call to the club.

## Also worth doing before/around launch
- Search BookMyShow/Insider.in/District yourself for more events — this
  list came from search-engine snippets only, not a full platform crawl.
- Re-check closer to Oct 1: more events and exact venues typically firm up
  as the festival approaches.
