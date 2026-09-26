import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import EventsBrowser from "@/components/EventsBrowser";
import { CITIES, getAllEvents, daysUntil } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

const NAVRATRI_START = "2026-10-11";

export default function Home() {
  const events = getAllEvents();
  const days = daysUntil(NAVRATRI_START);

  return (
    <div className="px-4 py-4">
      <div
        className="overflow-hidden rounded-[22px] px-5 py-6 text-white"
        style={{
          background: "linear-gradient(135deg, var(--accent), var(--primary))",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
          {days > 0 ? `${days} day${days === 1 ? "" : "s"} to go` : "Happening now"}
        </p>
        <h1 className="mt-1.5 text-xl font-extrabold leading-snug">
          Find Garba &amp; Dandiya Events Near You
        </h1>
        <p className="mt-1.5 text-sm opacity-90">
          Browse listings, tap to book — always free to search.
        </p>
        <a
          href="#events"
          className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-bold"
          style={{ color: "var(--accent)" }}
        >
          Explore Events
        </a>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <h2 className="text-base font-bold">Browse by City</h2>
        <Link
          href="/cities"
          className="flex items-center text-xs font-semibold"
          style={{ color: "var(--primary)" }}
        >
          See all <ChevronRight size={14} />
        </Link>
      </div>
      <div className="-mx-4 mt-3 flex gap-2.5 overflow-x-auto px-4 pb-1">
        {CITIES.map((city) => (
          <Link
            key={city}
            href={`/${city}`}
            className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5"
            style={{ background: "var(--surface)", boxShadow: "var(--card-shadow)" }}
          >
            <MapPin size={14} style={{ color: "var(--primary)" }} />
            <span className="whitespace-nowrap text-sm font-semibold">
              {CITY_LABELS[city]}
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <EventsBrowser events={events} />
      </div>
    </div>
  );
}
