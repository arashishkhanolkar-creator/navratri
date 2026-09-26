import Link from "next/link";
import { MapPin, PlusCircle } from "lucide-react";
import EventsBrowser from "@/components/EventsBrowser";
import { getAllEvents, daysUntil } from "@/lib/events";

const NAVRATRI_START = "2026-10-11";

export default function Home() {
  const events = getAllEvents();
  const days = daysUntil(NAVRATRI_START);

  return (
    <div className="px-4 py-4">
      <div
        className="overflow-hidden rounded-2xl px-5 py-6 text-white"
        style={{ background: "linear-gradient(135deg, var(--accent), var(--primary))" }}
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

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Link
          href="/mumbai"
          className="flex flex-col items-center gap-2 rounded-2xl border py-3.5"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
          >
            <MapPin size={18} style={{ color: "var(--primary)" }} />
          </span>
          <span className="text-xs font-semibold">Mumbai</span>
        </Link>
        <Link
          href="/ahmedabad"
          className="flex flex-col items-center gap-2 rounded-2xl border py-3.5"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
          >
            <MapPin size={18} style={{ color: "var(--primary)" }} />
          </span>
          <span className="text-xs font-semibold">Ahmedabad</span>
        </Link>
        <Link
          href="/submit-event"
          className="flex flex-col items-center gap-2 rounded-2xl border py-3.5"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full"
            style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
          >
            <PlusCircle size={18} style={{ color: "var(--primary)" }} />
          </span>
          <span className="text-xs font-semibold">List Event</span>
        </Link>
      </div>

      <div className="mt-6">
        <EventsBrowser events={events} />
      </div>
    </div>
  );
}
