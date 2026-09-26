import { events } from "@/data/events";
import type { City, EventItem } from "@/lib/types";

export const CITIES: City[] = ["mumbai", "ahmedabad"];

export function getAllEvents(): EventItem[] {
  return [...events].sort((a, b) => a.startDate.localeCompare(b.startDate));
}

export function getEventsByCity(city: City): EventItem[] {
  return getAllEvents().filter((e) => e.city === city);
}

export function getEventBySlug(city: City, slug: string): EventItem | undefined {
  return events.find((e) => e.city === city && e.slug === slug);
}

export function buildTicketUrl(event: EventItem): string {
  try {
    const url = new URL(event.ticketUrl);
    url.searchParams.set("utm_source", "navratrievents");
    url.searchParams.set("utm_medium", "referral");
    url.searchParams.set("utm_campaign", event.slug);
    return url.toString();
  } catch {
    return event.ticketUrl;
  }
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
