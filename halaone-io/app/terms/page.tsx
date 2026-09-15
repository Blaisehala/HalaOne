import type { Metadata } from "next";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms",
  description: "Website terms for HalaOne LLC.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="page">
      <div className="wrap prose">
        <h1>Terms</h1>
        <p>Last updated: September 15, 2026</p>
        <p>
          This website is provided by {company.legalName} for general
          information about our direction and capabilities. Nothing on this
          site is an offer to perform specific work until we agree in writing.
        </p>
        <p>
          Content is provided as-is. We may update descriptions of services as
          the company develops. Visiting this site does not create a client
          relationship.
        </p>
        <p>
          For questions:{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>.
        </p>
      </div>
    </div>
  );
}
