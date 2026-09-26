import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { CITIES, getEventsByCity } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

export const metadata: Metadata = {
  title: "Browse by City",
  description:
    "Find Navratri garba and dandiya events by city — Mumbai, Navi Mumbai, Thane, Kalyan-Dombivali, Pune, Ahmedabad, and Surat.",
};

export default function CitiesPage() {
  return (
    <div className="px-4 py-4 md:px-8 md:py-6 lg:px-10">
      <h1 className="text-xl font-extrabold">Browse by City</h1>
      <p className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
        Pick a city to see its Navratri 2026 events.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((city) => {
          const count = getEventsByCity(city).length;
          return (
            <Link
              key={city}
              href={`/${city}`}
              className="flex items-center gap-3 rounded-[20px] p-4"
              style={{ background: "var(--surface)", boxShadow: "var(--card-shadow)" }}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
              >
                <MapPin size={20} style={{ color: "var(--primary)" }} />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-[15px] font-semibold">{CITY_LABELS[city]}</h2>
                <p className="text-xs" style={{ color: "var(--muted)" }}>
                  {count} event{count === 1 ? "" : "s"} listed
                </p>
              </div>
              <ChevronRight size={18} style={{ color: "var(--muted)" }} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
