import Link from "next/link";
import Image from "next/image";
import type { EventItem } from "@/lib/types";
import { formatDateRange, daysUntil } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

function badgeText(event: EventItem): string {
  const days = daysUntil(event.startDate);
  if (days < 0) return "Ongoing";
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  if (days <= 7) return `In ${days} days`;
  return CITY_LABELS[event.city];
}

export default function FeaturedEventCard({ event }: { event: EventItem }) {
  return (
    <Link
      href={`/${event.city}/${event.slug}`}
      className="block w-[220px] shrink-0 overflow-hidden rounded-2xl border"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="relative h-28 w-full">
        {event.imageUrl ? (
          <Image
            src={event.imageUrl}
            alt={event.name}
            fill
            sizes="220px"
            className="object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-3xl"
            style={{ background: "linear-gradient(150deg, var(--accent), var(--primary))" }}
          >
            🪔
          </div>
        )}
        <span
          className="absolute left-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
          style={{ background: "rgba(0,0,0,0.55)" }}
        >
          {badgeText(event)}
        </span>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 text-[13px] font-semibold leading-snug">
          {event.name}
        </h3>
        <p className="mt-1 truncate text-[11px]" style={{ color: "var(--muted)" }}>
          {event.venue}
        </p>
        <div className="mt-1.5 flex items-center justify-between">
          {event.priceRange && (
            <span className="text-[13px] font-bold">{event.priceRange}</span>
          )}
          <span className="text-[10px]" style={{ color: "var(--muted)" }}>
            {formatDateRange(event)}
          </span>
        </div>
      </div>
    </Link>
  );
}
