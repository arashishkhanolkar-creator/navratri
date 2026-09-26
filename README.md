# GarbaGo

A free directory of Navratri garba/dandiya events in Mumbai and Ahmedabad,
linking straight to ticket booking pages. Monetized via Google AdSense and
affiliate/referral ticket links — browsing is always free for visitors.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Adding or editing events

All event data lives in `src/data/events.ts`. Each entry follows the
`EventItem` type in `src/lib/types.ts`:

```ts
{
  slug: "kebab-case-unique-id",
  name: "Event Name",
  city: "mumbai" | "ahmedabad",
  venue: "Venue name",
  area: "Neighbourhood/area",
  startDate: "2026-10-11", // ISO date
  endDate: "2026-10-12",   // optional, for multi-day events
  time: "7:00 PM onwards",
  organizer: "Organizer name",
  priceRange: "₹499 - ₹1,999",
  ticketUrl: "https://...",     // the real, working booking link
  ticketPlatform: "BookMyShow", // shown to users before they click through
  sourceUrl: "https://...",     // where you verified this info (internal use)
  description: "Short description.",
  verified: true, // set true only once you've confirmed the ticket link works
}
```

Every ticket link automatically gets `utm_source`/`utm_medium`/`utm_campaign`
query params appended (see `src/lib/events.ts` `buildTicketUrl`), and clicks
fire a `click_ticket_link` Google Analytics event — this is what gives you
real numbers to show organizers if you're negotiating a referral commission.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — your deployed domain (used in sitemap/SEO tags)
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`)
- `NEXT_PUBLIC_ADSENSE_CLIENT` — AdSense publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`)

Both GA and AdSense scripts are no-ops (skipped) until their env vars are set,
so the site works fine before you've signed up for either.

## Going live checklist

1. Click-check every `verified: true` event in `src/data/events.ts` (see
   `EVENTS_TODO.md` for what's still pending/staged as `verified: false`).
2. Set `NEXT_PUBLIC_SITE_URL` to your real domain once you have one.
3. Create a Google Analytics 4 property, set `NEXT_PUBLIC_GA_ID`.
4. Apply for [Google AdSense](https://www.google.com/adsense/) — approval is
   not instant (can take days), so do this as early as possible. Once
   approved, set `NEXT_PUBLIC_ADSENSE_CLIENT` and update `public/ads.txt`
   with the exact line Google gives you.
5. Update `CONTACT_EMAIL` in `src/lib/config.ts` to a real inbox you check.
6. Deploy (see below), then submit `/sitemap.xml` in Google Search Console.

## Deploying

Easiest path: push this repo to GitHub, then import it on
[Vercel](https://vercel.com/new) (free tier is enough for this site) and add
the environment variables above in the Vercel project settings.

## Affiliate ticket links

There's no universal affiliate network for Indian event ticketing platforms
(BookMyShow, Insider.in, District don't offer public affiliate programs), so
"getting paid per click" requires direct referral-commission agreements with
individual event organizers. Use the UTM-tagged click data from Google
Analytics as proof of traffic when pitching organizers.
