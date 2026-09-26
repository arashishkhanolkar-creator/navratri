export type City = "mumbai" | "ahmedabad";

export type EventItem = {
  slug: string;
  name: string;
  city: City;
  venue: string;
  area: string;
  startDate: string; // ISO date, e.g. "2026-10-11"
  endDate?: string; // ISO date, for multi-day events
  time?: string; // e.g. "7:00 PM onwards"
  organizer?: string;
  priceRange?: string; // e.g. "₹499 - ₹1,999"
  ticketUrl?: string; // omit for a real, confirmed event with no bookable link yet — shows as "Tickets Coming Soon"
  ticketPlatform?: string; // e.g. "BookMyShow", "Insider.in", "District"
  imageUrl?: string; // event poster/banner image, if we have a direct link
  sourceUrl?: string;
  description?: string;
  verified: boolean; // confirmed accurate enough to publish (ticket link, if any, confirmed from a live source)
  verificationNote?: string; // internal note only — why this isn't verified yet, never rendered publicly
};

export const CITY_LABELS: Record<City, string> = {
  mumbai: "Mumbai",
  ahmedabad: "Ahmedabad",
};
