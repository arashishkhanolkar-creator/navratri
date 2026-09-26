import Link from "next/link";
import type { EventItem } from "@/lib/types";
import { formatDateRange } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";
import TicketButton from "@/components/TicketButton";

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-black/10 dark:border-white/15 p-5 hover:shadow-md transition-shadow">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-orange-600">
          {CITY_LABELS[event.city]} · {formatDateRange(event)}
        </p>
        <Link href={`/${event.city}/${event.slug}`}>
          <h3 className="mt-1 text-lg font-semibold hover:underline">
            {event.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-black/60 dark:text-white/60">
          {event.venue}, {event.area}
        </p>
        {event.priceRange && (
          <p className="mt-2 text-sm font-medium">{event.priceRange}</p>
        )}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <TicketButton event={event} />
        <Link
          href={`/${event.city}/${event.slug}`}
          className="text-sm font-medium text-black/60 dark:text-white/60 hover:underline"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
