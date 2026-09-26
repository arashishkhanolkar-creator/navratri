import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 prose prose-neutral dark:prose-invert">
      <h1>Terms of Use</h1>
      <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>Information accuracy</h2>
      <p>
        We make reasonable efforts to keep event dates, venues, and prices
        accurate and up to date, but details are set by event organizers and
        can change without notice. Always confirm the final date, venue, and
        price on the ticketing platform before booking.
      </p>

      <h2>No ticket sales by us</h2>
      <p>
        This site does not sell tickets or process payments. All bookings
        are made directly with the third-party ticketing platform or
        organizer linked from this site, and are subject to their terms,
        pricing, and refund/cancellation policies.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        We are not liable for any loss arising from event cancellations,
        changes, or issues with ticket purchases made through third-party
        links from this site.
      </p>

      <h2>Event listings</h2>
      <p>
        We reserve the right to add, edit, or remove event listings at our
        discretion, including in response to organizer requests or reports
        of inaccurate information.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
