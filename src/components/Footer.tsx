import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="mt-8 border-t px-4 py-6 text-xs md:px-8 lg:px-10"
      style={{ borderColor: "var(--border)", color: "var(--muted)" }}
    >
      <p className="mb-3 leading-relaxed">
        Some links on this site are affiliate/referral links — we may earn a
        commission if you book tickets through them, at no extra cost to you.
      </p>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        <Link href="/about" className="underline underline-offset-2">
          About
        </Link>
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy
        </Link>
        <Link href="/terms" className="underline underline-offset-2">
          Terms
        </Link>
      </div>
      <p className="mt-3">
        © {new Date().getFullYear()} GarbaGo. Not affiliated with
        BookMyShow, Insider.in, or District.
      </p>
    </footer>
  );
}
