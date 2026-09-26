import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-10 prose prose-neutral dark:prose-invert">
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toISOString().slice(0, 10)}</p>

      <h2>What this site does</h2>
      <p>
        GarbaGo lists garba and dandiya event information and links
        to third-party ticketing platforms (such as BookMyShow, Insider.in,
        or District) or event organizers where you can purchase tickets. We
        do not sell tickets ourselves and do not process payments or collect
        payment information.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use Google Analytics to understand how visitors use this site
        (e.g. which events and cities are popular). Google Analytics uses
        cookies and collects information such as your approximate location,
        device type, and pages visited. This data is aggregated and does not
        identify you personally.
      </p>

      <h2>Advertising</h2>
      <p>
        We may display ads served by Google AdSense. Google and its partners
        use cookies (including the DoubleClick DART cookie) to serve ads
        based on your visits to this and other websites. You can opt out of
        personalized advertising by visiting{" "}
        <a
          href="https://adssettings.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Ads Settings
        </a>{" "}
        or{" "}
        <a
          href="https://www.aboutads.info/choices/"
          target="_blank"
          rel="noopener noreferrer"
        >
          aboutads.info
        </a>
        .
      </p>

      <h2>Affiliate and referral links</h2>
      <p>
        Some &ldquo;Get Tickets&rdquo; links on this site are affiliate or
        referral links. If you click one and book a ticket, we may earn a
        commission from the organizer or ticketing platform, at no extra
        cost to you. This does not influence which events we list.
      </p>

      <h2>Third-party sites</h2>
      <p>
        Clicking a ticket link takes you to a third-party site (e.g.
        BookMyShow, Insider.in, District, or an organizer&apos;s own page).
        We are not responsible for the content, ticketing process, refund
        policy, or privacy practices of those sites. Please review their
        terms before booking.
      </p>

      <h2>Data we collect directly</h2>
      <p>
        If you contact us or submit an event via our forms, we collect the
        information you provide (such as name, email, and event details)
        solely to respond to you or list your event. We do not sell your
        personal information to third parties.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </div>
  );
}
