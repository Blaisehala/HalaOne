import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technology Asset Audit",
  description:
    "A structured, one-time audit of every technology asset across your locations — verified ownership, status, and location, delivered as a usable record.",
  alternates: { canonical: "/services/audit" },
};

export default function AuditPage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">Service 01 — Audit</p>
          <h1>Start with an accurate picture of what you actually have.</h1>
          <p className="lede">
            Most organizations don&rsquo;t have a real record of their
            technology—just a guess. HalaOne&rsquo;s audit process builds the
            ground truth you&rsquo;re missing.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Request an Audit
            </Link>
          </div>
        </div>
      </div>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2>A complete, verified inventory—not a guess.</h2>
          </div>
          <ul className="check-list">
            <li>
              On-site or remote inventory of devices, network equipment,
              access systems, and connected technology
            </li>
            <li>
              Verification against existing records (or building the first
              record, if none exists)
            </li>
            <li>Ownership and location mapping for every asset</li>
            <li>
              A delivered report you can act on immediately—not a black box
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Who this is for</p>
            <h2>Teams that need a starting point.</h2>
          </div>
          <ul className="check-list">
            <li>Organizations with no current asset record</li>
            <li>Teams inheriting a portfolio from a prior manager or vendor</li>
            <li>
              Anyone preparing for a technology refresh, budget cycle, or
              compliance review
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three steps to a usable record.</h2>
          </div>
          <div className="problem-list">
            <article className="panel">
              <span className="step-num">01 Scope</span>
              <h3>Confirm the boundaries</h3>
              <p>We confirm locations, asset types, and access needed.</p>
            </article>
            <article className="panel">
              <span className="step-num">02 Audit</span>
              <h3>Inventory and verify</h3>
              <p>We inventory and verify everything on-site or remotely.</p>
            </article>
            <article className="panel">
              <span className="step-num">03 Deliver</span>
              <h3>Hand off the record</h3>
              <p>You get a complete, organized asset record.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Get an accurate baseline of your technology assets.</h2>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Request an Audit
            </Link>
          </div>
          <p className="cross-link">
            Want this to stay accurate over time?{" "}
            <Link href="/services/lifecycle">See Lifecycle Tracking →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
