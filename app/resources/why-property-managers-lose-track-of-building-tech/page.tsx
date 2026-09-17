import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Property Managers Lose Track of Building Technology",
  description:
    "Technology accumulates across a property portfolio faster than records are kept. Here's where those records typically break down—and what closes the gap.",
  alternates: {
    canonical: "/resources/why-property-managers-lose-track-of-building-tech",
  },
};

export default function ArticlePage() {
  return (
    <div className="page">
      <div className="wrap prose">
        <p className="eyebrow">Resources</p>
        <h1>Why Property Managers Lose Track of Building Technology</h1>

        <p>
          Every building a property organization takes on arrives with
          technology already installed, and more gets added every year it
          operates: network switches, Wi-Fi access points, access control
          panels, cameras, sensors, and the endpoint devices on-site staff use
          every day. None of it shows up on a rent roll. Most of it never
          makes it onto any record at all.
        </p>

        <h2>Technology accumulates faster than records are kept</h2>
        <p>
          A single property might see a dozen small technology changes in a
          year—a new camera here, a replaced access panel there, a vendor
          swapping out a router during a service call. Each change is small
          enough that no one stops to document it. Across a portfolio of
          properties, those small, undocumented changes compound into an
          asset base that no one can fully account for.
        </p>

        <h2>Common failure points</h2>
        <p>
          The gaps tend to open at the same few moments, over and over:
        </p>
        <ul>
          <li>
            <strong>Staff turnover.</strong> The person who knew where
            something was installed, or why, leaves—and takes that context
            with them.
          </li>
          <li>
            <strong>Vendor handoffs.</strong> A vendor installs or services
            equipment and the paperwork stays with the vendor, not the
            property record.
          </li>
          <li>
            <strong>Undocumented installs.</strong> Equipment gets added
            during a renovation, a tenant buildout, or an emergency repair,
            and never makes it into a central inventory.
          </li>
        </ul>

        <h2>What a proper audit catches that a spreadsheet doesn&rsquo;t</h2>
        <p>
          A spreadsheet only reflects what someone remembered to type into it.
          A structured audit instead starts from the physical environment:
          verifying what is actually installed, at which location, under
          whose ownership, and in what condition—then reconciling that against
          whatever records already exist. The result isn&rsquo;t just a longer
          list; it&rsquo;s a record that matches the buildings it describes,
          which is what makes it usable for budgeting, security review, or
          planning the next refresh.
        </p>

        <p>
          <Link className="btn btn-primary" href="/services/audit">
            See how a HalaOne Audit works →
          </Link>
        </p>
      </div>
    </div>
  );
}
