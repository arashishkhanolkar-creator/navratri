import Link from "next/link";
import { CITIES } from "@/lib/events";
import { CITY_LABELS } from "@/lib/types";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/15">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-bold">
          🪔 Navratri Events
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium">
          {CITIES.map((city) => (
            <Link key={city} href={`/${city}`} className="hover:underline">
              {CITY_LABELS[city]}
            </Link>
          ))}
          <Link href="/submit-event" className="hover:underline">
            List Your Event
          </Link>
        </nav>
      </div>
    </header>
  );
}
