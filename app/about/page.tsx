import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About HalaOne LLC, a technology asset and infrastructure management company.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className={`page ${styles.aboutPage}`}>
      <div className="wrap about-grid">
        <div>
          <p className={`eyebrow ${styles.eyebrowAccent}`}>About HalaOne</p>
          <div className={styles.divider} aria-hidden="true" />
          <h1>An emerging technology company with an operational mindset.</h1>
          <p>
            HalaOne LLC is building a focused practice around technology asset
            and infrastructure management. The company is technical in
            orientation and practical in method: understand the environment,
            make it visible, and support better decisions as that environment
            changes.
          </p>
          <p>
            The long-term direction is a durable capability for organizations
            that need to govern technology across locations—without pretending
            the work is already an enterprise platform or a full-stack IT
            department.
          </p>
        </div>
        <aside className="about-card">
          <h3>Leadership</h3>
          <p>
            HalaOne is founder-led, with a dual emphasis on technical structure
            and how technology actually behaves inside operating environments.
          </p>
          <Link className={`btn btn-ghost ${styles.founderLinkAccent}`} href="/founder">
            Meet the Founder →
          </Link>
        </aside>
      </div>
    </div>
  );
}
