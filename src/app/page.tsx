import Link from "next/link";
import { ChevronRight } from "lucide-react";
import EventCard from "@/components/EventCard";
import { CITIES, getAllEvents } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

const NAVRATRI_START = new Date("2026-10-11T00:00:00+05:30");

function daysUntil(target: Date): number {
  const diffMs = target.getTime() - Date.now();
  return Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
}

export default function Home() {
  const events = getAllEvents();
  const days = daysUntil(NAVRATRI_START);

  return (
    <div className="px-4 py-4">
      <div
        className="rounded-2xl px-4 py-3 text-center text-sm font-semibold text-white"
        style={{ background: "linear-gradient(120deg, var(--accent), var(--primary))" }}
      >
        {days > 0
          ? `🪔 ${days} day${days === 1 ? "" : "s"} to Navratri 2026 — book early`
          : "🪔 Navratri 2026 is here!"}
      </div>

      <h1 className="mt-5 text-[22px] font-extrabold leading-tight">
        Find Garba &amp; Dandiya Events Near You
      </h1>
      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
        Browse listings, tap to book — always free to search.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {CITIES.map((city) => (
          <Link
            key={city}
            href={`/${city}`}
            className="flex items-center justify-between rounded-2xl border p-4"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <span className="text-sm font-bold">{CITY_LABELS[city]}</span>
            <ChevronRight size={16} style={{ color: "var(--muted)" }} />
          </Link>
        ))}
      </div>

      <div className="mt-7 flex items-center justify-between">
        <h2 className="text-base font-bold">All Upcoming Events</h2>
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          {events.length} listed
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {events.length === 0 ? (
          <p className="py-8 text-center text-sm" style={{ color: "var(--muted)" }}>
            Events coming soon — check back shortly.
          </p>
        ) : (
          events.map((event) => (
            <EventCard key={`${event.city}-${event.slug}`} event={event} />
          ))
        )}
      </div>
    </div>
  );
}
