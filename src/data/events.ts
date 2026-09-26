import type { EventItem } from "@/lib/types";

// TEMPORARY SEED DATA — for local dev/layout testing only.
// This will be replaced with real, verified events (name, venue, date, ticket link)
// sourced from BookMyShow / Insider.in / District / organizers before launch.
export const events: EventItem[] = [
  {
    slug: "sample-garba-night-mumbai",
    name: "Sample Garba Night (placeholder — replace before launch)",
    city: "mumbai",
    venue: "TBD",
    area: "TBD",
    startDate: "2026-10-11",
    time: "7:00 PM onwards",
    ticketUrl: "https://in.bookmyshow.com/",
    ticketPlatform: "BookMyShow",
    priceRange: "TBD",
    description: "Placeholder entry. Not a real event — remove before launch.",
    verified: false,
  },
  {
    slug: "sample-dandiya-raas-ahmedabad",
    name: "Sample Dandiya Raas (placeholder — replace before launch)",
    city: "ahmedabad",
    venue: "TBD",
    area: "TBD",
    startDate: "2026-10-11",
    time: "8:00 PM onwards",
    ticketUrl: "https://insider.in/",
    ticketPlatform: "Insider.in",
    priceRange: "TBD",
    description: "Placeholder entry. Not a real event — remove before launch.",
    verified: false,
  },
];
