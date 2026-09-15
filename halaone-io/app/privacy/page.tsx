import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for HalaOne LLC.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="page">
      <div className="wrap prose">
        <h1>Privacy Policy</h1>
        <p>Last updated: September 15, 2026</p>
        <p>
          {company.legalName} (“HalaOne”) operates {company.domain}. This
          policy describes how we handle information when you visit this
          website or contact us.
        </p>
        <p>
          We collect information you choose to send—typically your name,
          organization, email address, and the contents of a message. We use
          that information to respond and to determine whether there is a
          relevant next step. We do not sell personal information.
        </p>
        <p>
          This site may collect standard technical logs (such as IP address,
          browser type, and pages requested) as part of hosting and security.
          We do not currently run advertising pixels or third-party marketing
          trackers on this site.
        </p>
        <p>
          If you have a privacy question, contact{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </div>
  );
}
