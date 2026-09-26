import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 border-b px-4 py-3 backdrop-blur"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--surface) 92%, transparent)" }}
    >
      <Link href="/" className="flex items-center gap-1.5">
        <span className="text-xl">🪔</span>
        <span className="text-[15px] font-bold tracking-tight">GarbaGo</span>
      </Link>
    </header>
  );
}
