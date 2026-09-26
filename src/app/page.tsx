import Link from "next/link";
import EventCard from "@/components/EventCard";
import { CITIES, getAllEvents } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

export default function Home() {
  const events = getAllEvents();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <section className="text-center py-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Find Navratri Events Near You
        </h1>
        <p className="mt-3 text-black/60 dark:text-white/60 max-w-2xl mx-auto">
          Garba nights, dandiya raas, and pandal events in Mumbai and
          Ahmedabad — browse listings and book directly with the organizer.
          Always free to browse.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          {CITIES.map((city) => (
            <Link
              key={city}
              href={`/${city}`}
              className="rounded-full border border-black/15 dark:border-white/20 px-5 py-2 text-sm font-semibold hover:bg-black/5 dark:hover:bg-white/10"
            >
              {CITY_LABELS[city]} Events
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">All Upcoming Events</h2>
        {events.length === 0 ? (
          <p className="text-black/60 dark:text-white/60">
            Events coming soon — check back shortly.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {events.map((event) => (
              <EventCard key={`${event.city}-${event.slug}`} event={event} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
