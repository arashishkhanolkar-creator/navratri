import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cities", label: "Cities" },
  { href: "/saved", label: "Saved" },
  { href: "/submit-event", label: "List Your Event" },
] as const;

export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 border-b px-4 py-3 backdrop-blur md:px-8"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--surface) 92%, transparent)" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="GarbaGo"
            width={30}
            height={30}
            className="rounded-lg"
            priority
          />
          <span className="text-[15px] font-bold tracking-tight">GarbaGo</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold"
              style={{ color: "var(--foreground)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
