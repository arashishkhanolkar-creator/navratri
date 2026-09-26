# Event data — verification TODO

All 14 `verified: true` events in `src/data/events.ts` have been manually
click-checked and confirmed live (original 10 on 2026-09-26, plus 4 more —
`navrang-navratri-2026`, `pyc-navratri-2026`, `maavdee-navratri-2026`,
`aadhyashakti-garba-2026` — added in a second research pass and confirmed
the same day). What's left is the 7 staged (`verified: false`) events below.

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
- `saibo-garba-2026` — venue is now doubly uncertain: Showmates says Mahendra Farm (conflicting with `raatladi-26`), District.in says a different venue entirely (Vivenza by Gopi Farm, Ognaj) — do not publish until resolved
- `garba-dhoom-2026` — Infiniti Mall, Malad West, Mumbai — full Oct 11-21 date range confirmed from two sources (more confident than most on dates), but no confirmed 2026 ticket-purchase link (linked page is the mall's own announcement, not a "buy now" page)

Each has a `verificationNote` field in `src/data/events.ts` explaining the
specific gap.

## Found but not added (no usable ticket link, or too unreliable to publish)
- **Navratri Utsav ft. Falguni Pathak** (Jio World Convention Centre, Mumbai)
  — three research passes, still no 2026 link. Confirmed the event's real
  name IS "**Radiance Dandiya**" (produced by Purple Blue Events & Ideas
  with TribeVibe Entertainment, a BookMyShow-owned company) — but every
  dated detail found is for the **2025** edition (Sept 22–Oct 1, 2025, from
  ₹1,799). No 2026 date, venue confirmation, or URL has surfaced anywhere
  searchable — likely announced through channels outside search indexing.
  Check BookMyShow's app directly closer to the date rather than searching
  again.
- **Shubharambh 2026 Mumbai** is a touring franchise (confirmed Delhi
  edition at Bharat Mandapam, Oct 16-18) — already staged as
  `shubharambh-2026-mumbai` above with the same gap (venue/dates unknown).
- **RaasRatri** (Club O7, Shela, Ahmedabad, near/adjacent to Bopal) —
  described as a premium venue but no event-specific date, price, or ticket
  URL found; only a generic pointer to getyourpass.store as the likely
  booking platform.
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
- A third research pass specifically targeting other Mumbai suburbs
  (Andheri, Powai, Kandivali, Vashi, Thane, Dahisar, Kharghar, Chembur,
  Ghatkopar — including mall-specific searches like Viviana Mall, R City
  Mall, Growel's 101) and Ahmedabad neighborhoods (Vastrapur, Satellite,
  Naranpura, Maninagar, Prahlad Nagar, Nikol, Vejalpur, Thaltej) came back
  almost empty — only generic listicles, no citable venue+date+link. This
  suggests garba events in those specific areas run through local
  mandals/WhatsApp/Instagram rather than indexed web listings. Further web
  search there is likely low-yield; if you want coverage in those areas,
  local Instagram/Facebook searching or word-of-mouth outreach will work
  better than more search passes.
