import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TicketButton from "@/components/TicketButton";
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
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="text-sm font-medium uppercase tracking-wide text-orange-600">
        {CITY_LABELS[event.city]} · {formatDateRange(event)}
      </p>
      <h1 className="mt-1 text-2xl sm:text-3xl font-bold">{event.name}</h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        {event.venue}, {event.area}
      </p>
      {event.time && (
        <p className="mt-1 text-black/60 dark:text-white/60">{event.time}</p>
      )}
      {event.priceRange && (
        <p className="mt-3 text-lg font-semibold">{event.priceRange}</p>
      )}
      {event.description && (
        <p className="mt-4 leading-relaxed">{event.description}</p>
      )}

      <div className="mt-8">
        <TicketButton
          event={event}
          className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-base font-semibold text-white hover:bg-orange-700 transition-colors"
        />
        {event.ticketPlatform && (
          <p className="mt-2 text-xs text-black/50 dark:text-white/50">
            You&apos;ll be redirected to {event.ticketPlatform} to complete
            your booking.
          </p>
        )}
      </div>
    </div>
  );
}
