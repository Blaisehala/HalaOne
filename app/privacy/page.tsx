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
        <p>Last updated: October 22, 2026</p>
        <p>
          {company.legalName} (“HalaOne”) operates {company.domain}. This
          policy describes how we handle information when you visit this
          website or contact us.
        </p>
        <p>
          We collect information you choose to send—typically your name,
          organization, email address, and the contents of a message. We use
          that information to respond and to determine whether there is a
          relevant next step. Form submissions, including requests to
          download a guide, are delivered to us by email through Web3Forms, a
          form-processing service. We do not sell personal information.
        </p>
        <p>
          This site may collect standard technical logs (such as IP address,
          browser type, and pages requested) as part of hosting and security.
        </p>
        <p>
          We use two analytics services to understand how the site is used.
          Vercel Web Analytics counts page views without cookies. Google
          Analytics uses cookies to measure visits, the pages and links that
          brought visitors here, and actions such as downloading a guide or
          requesting an audit. Google processes this data under its own{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>
          , and you can opt out with the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics opt-out add-on
          </a>{" "}
          or by blocking cookies in your browser. We do not run advertising
          pixels on this site.
        </p>
        <p>
          If you have a privacy question, contact{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </div>
  );
}
