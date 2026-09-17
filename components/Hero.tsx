import Link from "next/link";
import { TechnologyVisibility } from "./TechnologyVisibility";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">IT Asset Management (ITAM)</p>
          <h1 id="hero-heading">
            IT Asset Management,
            <br />
            done properly.
          </h1>
          <p className="lede">
            HalaOne delivers IT Asset Management for organizations that need
            to inventory, track, and account for the technology assets and
            infrastructure supporting their operations—across every site,
            through every stage of the asset lifecycle.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/get-started">
              Request an Asset Audit
            </Link>
            <a className="btn btn-secondary" href="#visibility">
              See How It Works
            </a>
          </div>
          <div className="hero-meta">
            <p>
              <strong>HalaOne LLC</strong>
              McLean, Virginia
            </p>
            <p>
              <strong>Focus</strong>
              Assets, infrastructure, lifecycle support
            </p>
          </div>
        </div>
        <TechnologyVisibility />
      </div>
    </section>
  );
}
