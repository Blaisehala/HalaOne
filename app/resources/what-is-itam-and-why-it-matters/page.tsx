import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What Is IT Asset Management, and Why Does It Matter for Operations Teams?",
  description:
    "A plain-language definition of ITAM, the cost of not knowing what you own, and what ISO 55001 and ISO 19770-1 actually mean in practice.",
  alternates: { canonical: "/resources/what-is-itam-and-why-it-matters" },
};

export default function ArticlePage() {
  return (
    <div className="page">
      <div className="wrap prose">
        <p className="eyebrow">Resources</p>
        <h1>
          What Is IT Asset Management, and Why Does It Matter for Operations
          Teams?
        </h1>

        <p>
          IT Asset Management, or ITAM, is the discipline of knowing what
          technology an organization owns, where it is, who is responsible
          for it, and what condition it&rsquo;s in—at any point in its
          lifecycle, from deployment to retirement. Stripped of the acronym,
          it&rsquo;s the answer to a simple question that most organizations
          can&rsquo;t actually answer with confidence: what do we have?
        </p>

        <h2>The cost of not knowing what you own</h2>
        <p>
          When the asset record doesn&rsquo;t match reality, the cost shows up
          in places that don&rsquo;t look like an IT problem at first. Budget
          cycles get built on guesses about what needs replacing. Security
          reviews miss devices that were never inventoried in the first
          place. Decisions about whether to repair, replace, or retire a
          system get made with partial information, because no one can say
          for certain what&rsquo;s actually deployed and where. None of these
          are technology failures—they&rsquo;re record-keeping failures with
          operational consequences.
        </p>

        <h2>ISO 55001 and ISO 19770-1, in plain terms</h2>
        <p>
          ISO 55001 is the international standard for asset management in
          general—it defines how an organization should plan, control, and
          improve the way it manages any class of asset over its lifecycle.
          ISO 19770-1 applies that same discipline specifically to IT assets:
          hardware, software, and the infrastructure that supports them. In
          practice, aligning to both means an organization&rsquo;s technology
          record isn&rsquo;t just a list—it&rsquo;s built and maintained the
          way a well-run asset management program is expected to work,
          regardless of industry.
        </p>

        <p>
          For operations teams, this isn&rsquo;t about chasing a
          certification. It&rsquo;s about running the technology environment
          with the same discipline applied to any other asset the
          organization is accountable for.
        </p>

        <p>
          <Link className="btn btn-primary" href="/get-started">
            Talk to HalaOne about your environment →
          </Link>
        </p>
      </div>
    </div>
  );
}
