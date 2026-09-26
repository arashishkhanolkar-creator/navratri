"use client";

import { useMemo, useState } from "react";
import { Search, ArrowDownAZ, CalendarClock } from "lucide-react";
import type { City, EventItem } from "@/lib/types";
import { CITY_LABELS } from "@/lib/types";
import { CITIES } from "@/lib/events";
import EventCard from "@/components/EventCard";
import FeaturedEventCard from "@/components/FeaturedEventCard";

type CityFilter = City | "all";

export default function EventsBrowser({ events }: { events: EventItem[] }) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState<CityFilter>("all");
  const [sortAz, setSortAz] = useState(false);

  const featured = events.slice(0, 6);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = events.filter((e) => {
      const matchesCity = city === "all" || e.city === city;
      const matchesQuery =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q) ||
        e.area.toLowerCase().includes(q);
      return matchesCity && matchesQuery;
    });
    if (sortAz) {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    return list;
  }, [events, query, city, sortAz]);

  return (
    <div>
      <div className="flex items-center gap-2">
        <div
          className="flex flex-1 items-center gap-2 rounded-2xl px-4 py-3"
          style={{ background: "var(--surface)", boxShadow: "var(--card-shadow)" }}
        >
          <Search size={16} style={{ color: "var(--muted)" }} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, venues..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
          />
        </div>
        <button
          type="button"
          onClick={() => setSortAz((v) => !v)}
          aria-label={sortAz ? "Sort by date" : "Sort A-Z"}
          className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-2xl text-white"
          style={{ background: "var(--accent)", boxShadow: "var(--card-shadow)" }}
        >
          {sortAz ? <ArrowDownAZ size={18} /> : <CalendarClock size={18} />}
        </button>
      </div>

      <div className="mt-3 flex gap-2">
        {(["all", ...CITIES] as CityFilter[]).map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCity(c)}
            className="rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors"
            style={
              city === c
                ? { background: "var(--primary)", color: "white", boxShadow: "var(--card-shadow)" }
                : { background: "var(--surface)", color: "var(--muted)", boxShadow: "var(--card-shadow)" }
            }
          >
            {c === "all" ? "All Cities" : CITY_LABELS[c]}
          </button>
        ))}
      </div>

      {!query && city === "all" && featured.length > 0 && (
        <div className="mt-6">
          <h2 className="text-base font-bold">Featured Events</h2>
          <div className="-mx-4 mt-3 flex gap-3 overflow-x-auto px-4 pb-1">
            {featured.map((event) => (
              <FeaturedEventCard key={`f-${event.city}-${event.slug}`} event={event} />
            ))}
          </div>
        </div>
      )}

      <div id="events" className="mt-6 flex items-center justify-between scroll-mt-16">
        <h2 className="text-base font-bold">All Events</h2>
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          {filtered.length} found
        </span>
      </div>

      <div className="mt-3 flex flex-col gap-2.5">
        {filtered.length === 0 ? (
          <p className="py-8 text-center text-sm" style={{ color: "var(--muted)" }}>
            No events match your search.
          </p>
        ) : (
          filtered.map((event) => (
            <EventCard key={`${event.city}-${event.slug}`} event={event} />
          ))
        )}
      </div>
    </div>
  );
}
