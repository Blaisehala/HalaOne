import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical insight on technology asset management for property, facilities, and operations teams.",
  alternates: { canonical: "/resources" },
};

const articles = [
  {
    href: "/resources/why-property-managers-lose-track-of-building-tech",
    title: "Why Property Managers Lose Track of Building Technology",
    summary:
      "Technology accumulates across a portfolio faster than records are kept—here's where those records typically break down.",
  },
  {
    href: "/resources/what-is-itam-and-why-it-matters",
    title: "What Is IT Asset Management, and Why Does It Matter for Operations Teams?",
    summary:
      "A plain-language look at ITAM, what it costs an organization not to know what it owns, and how ISO standards fit in.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="page page--hero">
        <div className="wrap">
          <p className="eyebrow">Resources</p>
          <h1>Insight for teams managing real technology.</h1>
          <p className="lede">
            Practical writing on technology asset management for property,
            facilities, and operations teams.
          </p>
        </div>
      </div>

      <section className="section section--alt">
        <div className="wrap">
          <div className="pillars">
            {articles.map((article) => (
              <article className="pillar" key={article.href}>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
                <Link className="btn btn-ghost" href={article.href}>
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
