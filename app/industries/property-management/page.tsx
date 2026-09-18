import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ITAM for Property Management",
  description:
    "HalaOne helps property and facilities organizations track the technology their buildings depend on — networks, access systems, cameras, and connected devices.",
  alternates: { canonical: "/industries/property-management" },
};

export default function PropertyManagementPage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">For Property Organizations</p>
          <h1>Your buildings run on technology. Do you have a record of it?</h1>
          <p className="lede">
            Access systems, cameras, Wi-Fi, and building systems accumulate
            across every property you manage. HalaOne brings that technology
            into one accurate, trackable record.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Get an Audit for Your Portfolio
            </Link>
          </div>
        </div>
      </div>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why property teams choose HalaOne</p>
            <h2>Built for portfolios, not single sites.</h2>
          </div>
          <div className="audience">
            <article>
              <h3>Multi-site experience</h3>
              <p>
                We already understand multi-site operations—HalaOne works
                alongside property portfolios day to day.
              </p>
            </article>
            <article>
              <h3>No disruption</h3>
              <p>No disruption to tenants or operations during audits.</p>
            </article>
            <article>
              <h3>Built for distributed oversight</h3>
              <p>
                Built for teams managing technology across buildings they
                don&rsquo;t personally sit in every day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we track for property portfolios</p>
            <h2>Every system your buildings depend on.</h2>
          </div>
          <ul className="tech-list">
            <li>
              <strong>Network</strong>
              <span>Network and Wi-Fi infrastructure per building.</span>
            </li>
            <li>
              <strong>Access control</strong>
              <span>Access control and credential systems.</span>
            </li>
            <li>
              <strong>Cameras &amp; systems</strong>
              <span>Cameras and connected building systems.</span>
            </li>
            <li>
              <strong>Endpoint devices</strong>
              <span>Endpoint devices used by on-site staff.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <h2>Get an accurate record of the technology across your portfolio.</h2>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Get an Audit for Your Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
