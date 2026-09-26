# Event data — verification TODO

`src/data/events.ts` now covers 7 cities: Mumbai, Navi Mumbai, Thane,
Kalyan-Dombivali, Pune, Ahmedabad, Surat.

## Confirmed festival dates
Sharad Navratri 2026: Oct 11 (Ghatasthapana) – Oct 19 (Maha Navami),
Dussehra Oct 20.

## Live, click-checked (`verified: true`, has a real ticket link)
The original Mumbai/Ahmedabad batch (14 events) was manually click-checked
on 2026-09-26. Everything added since (Thane, Pune, Surat entries; the
Byculla venue correction on `raas-utsav-pre-navratri-2026`) has NOT been
manually click-checked yet — do that before promoting the site heavily.

## Live, no ticket link ("Tickets Coming Soon" / "Free Entry")
These are `verified: true` but have no `ticketUrl` — real, well-corroborated
events where no bookable link could be found:
- `radiance-dandiya-falguni-pathak-2026` (Mumbai) — BookMyShow-exclusive, no URL found after 3 passes
- `goregaon-sports-club-navratri-2026` (Mumbai) — gate/Facebook sales only
- `vibrant-navratri-festival-2026` (Ahmedabad) — free entry, Gujarat Tourism
- `raas-rang-thane-2026` (Thane) — historically free/contest-pass model, no paid link

## Staged but hidden (`verified: false`) — fix the noted gap, then flip to true
- `shubharambh-2026-mumbai` — has a ticket link, missing venue/date/price
- `mirchi-rock-n-dhol-2026` — has a ticket link, likely venue found (Akash Aman Party Plot, Paldi) but unconfirmed for 2026, exact dates still missing
- `sacred-raas-2026` — has a ticket link, Oct 10 start inferred from URL slug, venue still unconfirmed
- `karnavati-no-sanedo-2026` — venue confirmed (Aagman Party Plot, Gota), but the ticket page itself still shows 2025-era dates — do not publish dates as-is
- `raatladi-26` — generic ticket URL, no confirmed 2026 dates, **shares a venue (Mahendra Farm) with `saibo-garba-2026` below** — resolve which is real / whether both are
- `kesari-raat-2026` — has an official-site ticket link, but venue name conflicts between the organizer's own site (Umiya Farm) and a Showmates listing (Milan Farm)
- `saibo-garba-2026` — venue is now doubly uncertain: Showmates says Mahendra Farm (conflicting with `raatladi-26`), District.in says a different venue entirely (Vivenza by Gopi Farm, Ognaj) — do not publish until resolved
- `garba-dhoom-2026` (Mumbai/Malad) — full Oct 11-21 date range confirmed from two sources, but no confirmed 2026 ticket-purchase link (linked page is the mall's own announcement, not a "buy now" page)
- `navrang-garba-navi-mumbai-2026` (Navi Mumbai) — venue and recurrence well corroborated, but the only findable ticket URL is explicitly last year's (2025) — needs a live 2026 link
- `rangilo-raas-garba-pune-2026` — "Rangilo Raas" is a multi-city franchise name; confirm this link is genuinely the Pune edition, not a Mumbai/Ahmedabad one. End date is inferred ("5 nights"), not independently confirmed.

Each has a `verificationNote` field in `src/data/events.ts` explaining the
specific gap.

## Kalyan-Dombivali: no events found
A dedicated research pass (English + Hindi/Marathi search terms, multiple
neighborhoods, multiple ticketing platforms) found zero specific, dated
2026 garba/dandiya events for Kalyan, Dombivali, or Titwala — only generic
geography pages and unrelated results. This area's events likely run
through small hyperlocal mandals/societies that don't get indexed this far
ahead of the festival. Re-check closer to Oct 1-5, or check local Gujarati
Samaj/mandal Facebook pages directly. The `/kalyan-dombivali` page is live
and will correctly show "No events listed yet" until real data surfaces.

## Found but not added (no usable ticket link, or too unreliable to publish)
- **Diamond Festival Garba / Pal Garba Utsav** (Surat) — described as
  premium/celebrity events across multiple sources, but every description
  is near-identical templated marketing copy with no specific venue, date,
  or working ticket link. Likely generic SEO filler, not confirmed bookable
  events.
- **Raas Rang Dandiya 4.0** (Pune, BHS Open Ground) — actually WAS added as
  a "coming soon" style live entry (`raas-rang-dandiya-pune-2026`, no
  ticket link) since venue/dates are solid — noting here in case you want
  to hunt down its actual District.in URL to upgrade it.
- **Shubh Garba Rass Dandiya 5.0** (Vitthal Lawns, Pune) — only a single
  date found (Oct 20), no confirmed range, generic (non-event-specific)
  ticket homepage only.
- **Dholido 3.0** (Sunny's World, Pune) and **Leher** (Mayfield Estate,
  Pune) — same issue: single date only, no event-specific ticket link.
- **RaasRatri** (Club O7, Shela, Ahmedabad) — no event-specific date,
  price, or ticket URL found; only a generic pointer to getyourpass.store.
- **Navratri Utsav ft. Falguni Pathak** — see "Live, no ticket link" above,
  it IS published; real name confirmed as "Radiance Dandiya."
- **Udgam Na Garba** (Ahmedabad) — real organizer site (udgamnagarba.com)
  but its listed dates (Sept 22–Oct 1) look like a stale 2025 page.
- **Raslila Vibrant Navaratri 2026** (Ahmedabad) — likely a UAE/Dubai event
  mistagged as Ahmedabad (found on district.ae, the UAE site).
- **Shyama Ratri Garba** (pre-Navratri, Makarba, Ahmedabad) — no ticket
  link found.
- **The OG Garba** (theoggarba.com, Ahmedabad) — booking open for 2026 per
  their own site, but no venue or dates surfaced yet.
- **Showglitz Navratri Utsav** (Borivali West, Mumbai) and **Maxus
  Navratri** (Bhayandar, Mumbai) — too vague/unconfirmed to publish.
- **Gujarat Bhavan, Vashi** (Navi Mumbai) — known as a garba venue in
  general write-ups, but no specific 2026 event name/date/link found.
- **"Garba City 2026"** — initially looked Surat-relevant but is actually
  in Gandhinagar, not covered by this site — excluded.

## Corrections applied this round
- `raas-utsav-pre-navratri-2026`: venue corrected from "Mulund" to
  "Richardson and Cruddas Jumbo Facility Centre, Byculla" — multiple
  independent sources (WedMeGood, Sulekha, BookEventz) confirmed Byculla,
  not Mulund, was the real venue for this Naitik Nagda show.

## Also worth doing before/around launch
- Search BookMyShow/Insider.in/District yourself for more events — every
  finding above came from search-engine snippets only (this sandbox's
  network access blocks direct fetches to ticketing/aggregator domains),
  never a full platform crawl or an independently-opened page.
- Re-check closer to Oct 1: more events and exact venues typically firm up
  as the festival approaches, and several aggregators (e.g. AllEvents for
  Navi Mumbai) showed no live listings yet as of Sept 26, purely because
  it's still ~2 weeks out.
- Mumbai/Ahmedabad suburb searches (Andheri, Powai, Kandivali, Vashi,
  Dahisar, Kharghar, Chembur, Ghatkopar, Vastrapur, Satellite, Naranpura,
  Maninagar, Prahlad Nagar, Nikol, Vejalpur, Thaltej) came back almost
  empty in earlier passes — smaller neighborhood events likely run through
  local mandals/WhatsApp/Instagram rather than indexed web listings.
