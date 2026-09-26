import type { Metadata } from "next";
import Link from "next/link";
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
    <div className="px-4 py-4">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
        {CITIES.map((c) => (
          <Link
            key={c}
            href={`/${c}`}
            className="shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            style={
              c === city
                ? { background: "var(--primary)", color: "white", boxShadow: "var(--card-shadow)" }
                : { background: "var(--surface)", color: "var(--muted)", boxShadow: "var(--card-shadow)" }
            }
          >
            {CITY_LABELS[c]}
          </Link>
        ))}
      </div>

      <p className="mt-4 text-xs" style={{ color: "var(--muted)" }}>
        {events.length} event{events.length === 1 ? "" : "s"} listed &middot;
        tap Book to go to the ticket page
      </p>

      <div className="mt-3 flex flex-col gap-2.5">
        {events.length === 0 ? (
          <p className="py-8 text-center text-sm" style={{ color: "var(--muted)" }}>
            No events listed yet for {CITY_LABELS[city]} — check back soon.
          </p>
        ) : (
          events.map((event) => <EventCard key={event.slug} event={event} />)
        )}
      </div>
    </div>
  );
}
