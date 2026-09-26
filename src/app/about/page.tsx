import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "About",
  description:
    "Navratri Events helps you find garba and dandiya events in Mumbai and Ahmedabad and book tickets directly with organizers.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 prose prose-neutral dark:prose-invert">
      <h1>About Navratri Events</h1>
      <p>
        Navratri Events is a free directory of garba nights, dandiya raas,
        and pandal celebrations in Mumbai and Ahmedabad. We list event
        details — date, venue, and price — and link you straight to the
        organizer&apos;s official ticket page so you can book directly.
      </p>
      <p>
        Browsing and searching for events on this site is, and will always
        be, free. We keep the lights on through Google ads shown on the site
        and, on some events, an affiliate/referral commission when you book
        tickets through our links — at no extra cost to you.
      </p>
      <p>
        Are you an event organizer? We&apos;d love to list your event —
        visit the &ldquo;List Your Event&rdquo; page, or email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
