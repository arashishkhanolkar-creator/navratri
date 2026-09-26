import { events } from "@/data/events";
import type { City, EventItem } from "@/lib/types";

export const CITIES: City[] = ["mumbai", "ahmedabad"];

// Only `verified: true` events are shown publicly or get a static page —
// unverified entries stay in src/data/events.ts as a staging list until
// someone has clicked through and confirmed the ticket link/date/venue.
export function getAllEvents(): EventItem[] {
  return events
    .filter((e) => e.verified)
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getEventsByCity(city: City): EventItem[] {
  return getAllEvents().filter((e) => e.city === city);
}

export function getEventBySlug(city: City, slug: string): EventItem | undefined {
  return events.find((e) => e.city === city && e.slug === slug && e.verified);
}

// For internal use only (e.g. a checklist of what still needs verifying) —
// never rendered on any public page.
export function getUnverifiedEvents(): EventItem[] {
  return events.filter((e) => !e.verified);
}

export function buildTicketUrl(event: EventItem): string {
  try {
    const url = new URL(event.ticketUrl);
    url.searchParams.set("utm_source", "garbago");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", event.slug);
    return url.toString();
  } catch {
    return event.ticketUrl;
  }
}

export function daysUntil(dateStr: string): number {
  const target = new Date(`${dateStr}T00:00:00+05:30`);
  const diffMs = target.getTime() - Date.now();
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}

export function formatDateRange(event: EventItem): string {
  const start = new Date(event.startDate);
  const startStr = start.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
  if (event.endDate && event.endDate !== event.startDate) {
    const end = new Date(event.endDate);
    const endStr = end.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return `${startStr} – ${endStr}`;
  }
  const withYear = start.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return withYear;
}
