import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-30 border-b px-4 py-3 backdrop-blur"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--surface) 92%, transparent)" }}
    >
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
    </header>
  );
}
