import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventCard from "@/components/EventCard";
import { CITIES, getEventsByCity } from "@/lib/events";
import { CITY_LABELS, type City } from "@/lib/types";

export function generateStaticParams() {
  return CITIES.map((city) => ({ city }));
}

function isCity(value: string): value is City {
  return (CITIES as string[]).includes(value);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  if (!isCity(city)) return {};
  const label = CITY_LABELS[city];
  return {
    title: `Navratri Events in ${label} 2026`,
    description: `Browse garba and dandiya events in ${label} for Navratri 2026, with direct ticket booking links.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  if (!isCity(city)) notFound();

  const events = getEventsByCity(city);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Navratri Events in {CITY_LABELS[city]}
      </h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        {events.length} event{events.length === 1 ? "" : "s"} listed. Tap
        &ldquo;Get Tickets&rdquo; to book directly with the organizer.
      </p>

      {events.length === 0 ? (
        <p className="mt-8 text-black/60 dark:text-white/60">
          No events listed yet for {CITY_LABELS[city]} — check back soon.
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
