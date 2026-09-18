import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed ITAM Program",
  description:
    "Ongoing, hands-off technology asset management — HalaOne maintains your record and reports on your environment on a set schedule.",
  alternates: { canonical: "/services/managed-program" },
};

export default function ManagedProgramPage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">Service 03 — Managed Program</p>
          <h1>Hand off the upkeep. Keep the visibility.</h1>
          <p className="lede">
            For teams that don&rsquo;t have the bandwidth to maintain their
            own asset record, HalaOne runs the whole program—audit, tracking,
            and reporting—on your behalf.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Start a Managed Program
            </Link>
          </div>
        </div>
      </div>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2>A standing program, not a one-off engagement.</h2>
          </div>
          <ul className="check-list">
            <li>Scheduled re-audits and record maintenance</li>
            <li>Regular reporting to leadership or ownership</li>
            <li>Single point of contact for all technology asset questions</li>
            <li>Scales with your portfolio as you add locations or assets</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Who this is for</p>
            <h2>Teams ready to hand off the upkeep.</h2>
          </div>
          <ul className="check-list">
            <li>Property and facilities organizations managing multiple sites</li>
            <li>
              Teams that want ITAM handled entirely by a partner, not built
              in-house
            </li>
            <li>
              Organizations scaling faster than their internal capacity to
              track assets
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Let HalaOne run the program while you keep the visibility.</h2>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Start a Managed Program
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
