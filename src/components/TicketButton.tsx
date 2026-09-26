"use client";

import type { EventItem } from "@/lib/types";
import { buildTicketUrl } from "@/lib/events";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function TicketButton({
  event,
  className,
}: {
  event: EventItem;
  className?: string;
}) {
  const href = buildTicketUrl(event);

  function handleClick() {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_ticket_link", {
        event_slug: event.slug,
        event_city: event.city,
        ticket_platform: event.ticketPlatform ?? "unknown",
        transport_type: "beacon",
      });
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={
        className ??
        "inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white active:opacity-80 transition-opacity"
      }
    >
      Get Tickets
    </a>
  );
}
