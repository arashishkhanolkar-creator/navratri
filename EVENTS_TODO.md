# Event data — verification TODO

All 15 `verified: true` events in `src/data/events.ts` need a manual
click-check before you drive real traffic to them. The original 10 were
checked on 2026-09-26 and confirmed live. 5 more were added in a second
research pass (2026-09-26) and still need the same check:
`navrang-navratri-2026`, `pyc-navratri-2026`, `maavdee-navratri-2026`,
`aadhyashakti-garba-2026`. (The 5th slot in that pass, PYC, is already
listed — just re-count: 4 new verified events this round, one Mumbai +
three Ahmedabad.)

## Confirmed festival dates
Sharad Navratri 2026: Oct 11 (Ghatasthapana) – Oct 19 (Maha Navami),
Dussehra Oct 20.

## Staged but hidden (`verified: false`) — fix the noted gap, then flip to true
- `shubharambh-2026-mumbai` — has a ticket link, missing venue/date/price
- `mirchi-rock-n-dhol-2026` — has a ticket link, likely venue found (Akash Aman Party Plot, Paldi) but unconfirmed for 2026, exact dates still missing
- `sacred-raas-2026` — has a ticket link, Oct 10 start inferred from URL slug, venue still unconfirmed
- `karnavati-no-sanedo-2026` — venue confirmed (Aagman Party Plot, Gota), but the ticket page itself still shows 2025-era dates — do not publish dates as-is
- `raatladi-26` — generic ticket URL, no confirmed 2026 dates, **shares a venue (Mahendra Farm) with `saibo-garba-2026` below** — resolve which is real / whether both are
- `kesari-raat-2026` — has an official-site ticket link, but venue name conflicts between the organizer's own site (Umiya Farm) and a Showmates listing (Milan Farm)
- `saibo-garba-2026` — has a ticket link, but shares a venue (Mahendra Farm) with `raatladi-26` — see above

Each has a `verificationNote` field in `src/data/events.ts` explaining the
specific gap.

## Found but not added (no usable ticket link, or too unreliable to publish)
- **Navratri Utsav ft. Falguni Pathak** (Jio World Convention Centre, Mumbai)
  — BookMyShow-exclusive, well-confirmed via press coverage (Oct 11–19,
  Season Pass ₹20,000, PODs up to ~₹2 lakh) but no direct BookMyShow URL
  found. BookMyShow/press may also list this under the name **"Radiance
  Dandiya"** — try that search term too if you're chasing the link yourself
  on BookMyShow's app/site directly.
- **Goregaon Sports Club Navratri Mahotsav** (Mumbai) — 50+ year running
  event, but no online ticket link found at all; likely sold at-gate or via
  the club's Facebook page (facebook.com/goregaonnavratri) rather than a
  bookable web link.
- **Rang Raas Navratri ft. Bhoomi Trivedi** (Sai Palace, Borivali West,
  Mumbai) — real event (Instagram @rangraas_navratri) but no ticket link
  found and its listed dates predate the real 2026 Navratri window.
- **Showglitz Navratri Utsav** (Borivali West, Mumbai) — unclear if this is
  a genuinely separate event or a rebrand of one already listed; no
  confirmed URL.
- **Maxus Navratri** (Bhayandar, Mumbai) — mentioned as one of the area's
  largest celebrations but no venue/date/link could be confirmed.
- **Vibrant Navratri Festival** (GMDC Ground, Ahmedabad) — Gujarat
  Tourism-hosted, likely free entry (not a ticketed event), Oct 11–20. No
  specific bookable event page exists to link to — check
  gujarattourism.com or incredibleindia.gov.in closer to the date if you
  want to add it as a "free entry" listing.
- **Udgam Na Garba** (Ahmedabad) — real organizer site (udgamnagarba.com)
  but its listed dates (Sept 22–Oct 1) look like a stale 2025 page, not
  updated for 2026.
- **Raslila Vibrant Navaratri 2026** (Spring Valley Party Plot, Ahmedabad)
  — likely a UAE/Dubai event mistagged as Ahmedabad (was found on
  district.ae, the UAE site) — do not publish without independently
  confirming it's actually in Ahmedabad.
- **Shyama Ratri Garba** (pre-Navratri, Nirvana Party Lawn, Makarba,
  Ahmedabad, Oct 2–3) — no ticket link found.
- **The OG Garba** (theoggarba.com, Ahmedabad) — real, booking open for
  2026 per their own site, but no venue or dates surfaced yet.

## Also worth doing before/around launch
- Search BookMyShow/Insider.in/District yourself for more events — every
  finding above came from search-engine snippets only (this sandbox's
  network access blocks direct fetches to ticketing/aggregator domains),
  never a full platform crawl or an independently-opened page.
- Re-check closer to Oct 1: more events and exact venues typically firm up
  as the festival approaches, and some of the "found but not added" items
  above may get a real ticket link by then.
