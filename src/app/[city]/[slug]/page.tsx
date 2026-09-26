import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, Clock, Ticket } from "lucide-react";
import StickyBookBar from "@/components/StickyBookBar";
import DateBadge from "@/components/DateBadge";
import { CITIES, getAllEvents, getEventBySlug, formatDateRange } from "@/lib/events";
import { CITY_LABELS, type City } from "@/lib/types";

export function generateStaticParams() {
  return getAllEvents().map((event) => ({
    city: event.city,
    slug: event.slug,
  }));
}

function isCity(value: string): value is City {
  return (CITIES as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; slug: string }>;
}): Promise<Metadata> {
  const { city, slug } = await params;
  if (!isCity(city)) return {};
  const event = getEventBySlug(city, slug);
  if (!event) return {};
  return {
    title: event.name,
    description:
      event.description ??
      `${event.name} — ${formatDateRange(event)} at ${event.venue}, ${event.area}, ${CITY_LABELS[event.city]}. Book tickets online.`,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ city: string; slug: string }>;
}) {
  const { city, slug } = await params;
  if (!isCity(city)) notFound();
  const event = getEventBySlug(city, slug);
  if (!event) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate ?? event.startDate,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: CITY_LABELS[event.city],
        addressRegion: event.area,
        addressCountry: "IN",
      },
    },
    ...(event.organizer
      ? { organizer: { "@type": "Organization", name: event.organizer } }
      : {}),
    offers: {
      "@type": "Offer",
      url: event.ticketUrl,
      availability: "https://schema.org/InStock",
      ...(event.priceRange ? { priceCurrency: "INR" } : {}),
    },
  };

  return (
    <div className="px-4 py-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex items-start gap-3">
        <DateBadge startDate={event.startDate} size="md" />
        <div className="min-w-0">
          <span
            className="text-[11px] font-semibold uppercase tracking-wide"
            style={{ color: "var(--primary)" }}
          >
            {CITY_LABELS[event.city]}
          </span>
          <h1 className="text-xl font-extrabold leading-tight">{event.name}</h1>
        </div>
      </div>

      <div
        className="mt-5 flex flex-col gap-3 rounded-2xl border p-4"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <div className="flex items-start gap-2.5 text-sm">
          <MapPin size={17} className="mt-0.5 shrink-0" style={{ color: "var(--muted)" }} />
          <span>
            {event.venue}, {event.area}
          </span>
        </div>
        <div className="flex items-start gap-2.5 text-sm">
          <Clock size={17} className="mt-0.5 shrink-0" style={{ color: "var(--muted)" }} />
          <span>
            {formatDateRange(event)}
            {event.time ? ` · ${event.time}` : ""}
          </span>
        </div>
        {event.ticketPlatform && (
          <div className="flex items-start gap-2.5 text-sm">
            <Ticket size={17} className="mt-0.5 shrink-0" style={{ color: "var(--muted)" }} />
            <span>Tickets via {event.ticketPlatform}</span>
          </div>
        )}
      </div>

      {event.description && (
        <p className="mt-5 text-sm leading-relaxed">{event.description}</p>
      )}

      {event.organizer && (
        <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
          Organized by {event.organizer}
        </p>
      )}

      <p className="mt-6 text-xs" style={{ color: "var(--muted)" }}>
        Booking happens on {event.ticketPlatform ?? "the organizer's site"} —
        we may earn a referral commission at no extra cost to you.
      </p>

      <StickyBookBar event={event} />
    </div>
  );
}
