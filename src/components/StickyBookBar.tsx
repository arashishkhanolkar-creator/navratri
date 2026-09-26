import type { EventItem } from "@/lib/types";
import TicketButton from "@/components/TicketButton";

export default function StickyBookBar({ event }: { event: EventItem }) {
  return (
    <div
      className="safe-bottom fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t px-4 py-3"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          {event.priceRange && (
            <p className="truncate text-base font-bold">{event.priceRange}</p>
          )}
          {event.ticketPlatform && (
            <p className="truncate text-[11px]" style={{ color: "var(--muted)" }}>
              via {event.ticketPlatform}
            </p>
          )}
        </div>
        <TicketButton
          event={event}
          className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-bold text-white active:opacity-80"
        />
      </div>
    </div>
  );
}
