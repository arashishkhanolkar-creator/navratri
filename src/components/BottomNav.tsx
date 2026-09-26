"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, Bookmark, PlusCircle } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/mumbai", label: "Mumbai", icon: MapPin },
  { href: "/ahmedabad", label: "Ahmedabad", icon: MapPin },
  { href: "/saved", label: "Saved", icon: Bookmark },
  { href: "/submit-event", label: "List", icon: PlusCircle },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  // Hide on event detail pages (/[city]/[slug]) — those show a sticky
  // "Book Tickets" bar instead, like a checkout screen replacing tab nav.
  const isEventDetail = /^\/[^/]+\/[^/]+$/.test(pathname);
  if (isEventDetail) return null;

  return (
    <nav
      className="safe-bottom fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t bg-(--color-surface)/95 backdrop-blur"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="flex items-stretch justify-around">
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className="flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium"
              style={{ color: active ? "var(--primary)" : "var(--muted)" }}
            >
              <Icon size={20} strokeWidth={active ? 2.4 : 2} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
