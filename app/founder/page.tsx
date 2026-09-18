import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Leadership",
  description: "Leadership at HalaOne LLC.",
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <div className="page">
      <div className="wrap prose">
        <p className="eyebrow">Leadership</p>
        <h1>Meet the founder</h1>
        <p>
          HalaOne is founder-led. The company is being built at the
          intersection of technology structure and operational reality: how
          assets, networks, and systems actually sit inside offices,
          facilities, and distributed environments.
        </p>
        <p>
          This page is intentionally concise. Conversations about fit, scope,
          and how we work are more useful than a long biography.
        </p>
        <p>
          <Link className="btn btn-primary" href="/get-started">
            Request an Asset Audit
          </Link>
        </p>
        <p>
          {company.legalName} · {company.location} ·{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
    </div>
  );
}
