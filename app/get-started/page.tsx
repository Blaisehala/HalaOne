import type { Metadata } from "next";
import { GetStartedForm } from "@/components/GetStartedForm";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Request a technology asset audit or ask about a managed ITAM program. We'll scope your environment and outline next steps.",
  alternates: { canonical: "/get-started" },
};

export default function GetStartedPage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">Get Started</p>
          <h1>Let&rsquo;s scope your environment.</h1>
          <p className="lede">
            Every engagement starts with a short conversation about what you
            manage and where. From there, we&rsquo;ll recommend an audit,
            lifecycle tracking, or a full managed program.
          </p>
        </div>
      </div>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How pricing works</p>
            <h2>Transparent, no exact numbers required yet.</h2>
          </div>
          <ul className="check-list">
            <li>
              Audits are scoped by number of locations and asset volume—priced
              per engagement, not a flat rate.
            </li>
            <li>
              Lifecycle Tracking and Managed Program are ongoing
              subscriptions, scaled to portfolio size.
            </li>
            <li>
              Every engagement starts with a scoping conversation—no cost or
              commitment to ask.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Request a scoping conversation</p>
            <h2>Tell us about your environment.</h2>
          </div>
          <GetStartedForm />
        </div>
      </section>
    </>
  );
}
