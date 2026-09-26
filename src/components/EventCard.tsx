import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { EventItem } from "@/lib/types";
import { formatDateRange } from "@/lib/events";
import DateBadge from "@/components/DateBadge";
import TicketButton from "@/components/TicketButton";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div
      className="flex items-center gap-3 rounded-2xl border p-3 active:scale-[0.99] transition-transform"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      {event.imageUrl ? (
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
          <Image src={event.imageUrl} alt="" fill sizes="56px" className="object-cover" />
        </div>
      ) : (
        <DateBadge startDate={event.startDate} />
      )}

      <Link
        href={`/${event.city}/${event.slug}`}
        className="min-w-0 flex-1"
      >
        <h3 className="truncate text-[15px] font-semibold leading-tight">
          {event.name}
        </h3>
        <p className="mt-0.5 truncate text-xs" style={{ color: "var(--muted)" }}>
          {event.venue}, {event.area}
        </p>
        <div className="mt-1.5 flex items-center gap-2">
          {event.priceRange && (
            <span className="text-sm font-bold">{event.priceRange}</span>
          )}
          <span className="text-[11px]" style={{ color: "var(--muted)" }}>
            {formatDateRange(event)}
          </span>
        </div>
      </Link>

      <div className="flex shrink-0 flex-col items-end gap-1.5">
        <TicketButton
          event={event}
          className="rounded-full bg-[var(--primary)] px-3.5 py-1.5 text-xs font-bold text-white shadow-sm active:opacity-80"
        />
        <Link
          href={`/${event.city}/${event.slug}`}
          className="flex items-center text-[11px]"
          style={{ color: "var(--muted)" }}
        >
          Details <ChevronRight size={13} />
        </Link>
      </div>
    </div>
  );
}
