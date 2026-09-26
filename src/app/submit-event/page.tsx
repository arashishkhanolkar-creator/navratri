import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "List Your Event",
  description:
    "Organizing a Navratri garba or dandiya event in Mumbai or Ahmedabad? List it here for free.",
};

const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Navratri Event Listing Submission"
)}&body=${encodeURIComponent(
  `Event name:\nCity (Mumbai/Ahmedabad):\nVenue & area:\nDate(s):\nTime:\nPrice range:\nOfficial ticket booking link:\nOrganizer name:\nContact number/email:\n`
)}`;

export default function SubmitEventPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 prose prose-neutral dark:prose-invert">
      <h1>List Your Event</h1>
      <p>
        Running a Navratri garba, dandiya, or pandal event in Mumbai or
        Ahmedabad? Get listed for free — we only ask that you have a real
        ticket booking link (or a free-entry note) ready to share.
      </p>
      <p>Email us the following details and we&apos;ll add your listing:</p>
      <ul>
        <li>Event name</li>
        <li>City, venue, and area</li>
        <li>Date(s) and time</li>
        <li>Price range (or &ldquo;free entry&rdquo;)</li>
        <li>Official ticket booking link</li>
        <li>Organizer name and contact</li>
      </ul>
      <p>
        <a
          href={mailtoHref}
          className="inline-flex items-center justify-center rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-orange-700"
        >
          Email Your Event Details
        </a>
      </p>
      <p className="text-sm">
        Or write to us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
