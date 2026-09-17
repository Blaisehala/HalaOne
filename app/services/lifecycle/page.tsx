import type { Metadata } from "next";
import Link from "next/link";
import { LifecycleFlow } from "@/components/LifecycleFlow";

export const metadata: Metadata = {
  title: "Technology Lifecycle Tracking",
  description:
    "Track every technology asset from deployment through replacement, with a record that updates as your environment changes.",
  alternates: { canonical: "/services/lifecycle" },
};

export default function LifecyclePage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">Service 02 — Lifecycle Tracking</p>
          <h1>An audit is a snapshot. Lifecycle tracking keeps it current.</h1>
          <p className="lede">
            Assets move, get replaced, and change hands constantly. HalaOne
            tracks that movement so your record never goes stale.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Talk to Us About Lifecycle Tracking
            </Link>
          </div>
        </div>
      </div>

      <section className="lifecycle-section" aria-label="How lifecycle tracking works">
        <div className="wrap">
          <LifecycleFlow />
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What&rsquo;s included</p>
            <h2>A record that moves with your assets.</h2>
          </div>
          <ul className="check-list">
            <li>
              Ongoing record updates as assets are deployed, moved, or retired
            </li>
            <li>Change history for every tracked asset</li>
            <li>Alerts when assets approach end-of-life or need attention</li>
            <li>A single source of truth your team can reference anytime</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Who this is for</p>
            <h2>Teams keeping a baseline accurate.</h2>
          </div>
          <ul className="check-list">
            <li>
              Organizations that already have a baseline audit and want to
              keep it accurate
            </li>
            <li>
              Multi-location operators where assets move between sites often
            </li>
            <li>
              Teams tired of spreadsheets that are outdated the moment
              they&rsquo;re saved
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Keep your asset record current as your environment changes.</h2>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Talk to Us About Lifecycle Tracking
            </Link>
          </div>
          <p className="cross-link">
            Don&rsquo;t have a baseline yet?{" "}
            <Link href="/services/audit">Start with an Audit →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
