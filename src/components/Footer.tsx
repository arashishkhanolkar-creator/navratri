import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/15">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-black/60 dark:text-white/60">
        <p className="mb-3">
          Some links on this site are affiliate/referral links — we may earn a
          commission if you book tickets through them, at no extra cost to
          you. This helps us keep event listings free to browse.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/submit-event" className="hover:underline">
            List Your Event
          </Link>
        </div>
        <p className="mt-4">
          © {new Date().getFullYear()} Navratri Events. Not affiliated with
          BookMyShow, Insider.in, or District.
        </p>
      </div>
    </footer>
  );
}
