import Link from "next/link";
import { TechnologyVisibility } from "./TechnologyVisibility";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div>
          <p className="eyebrow">Technology Asset &amp; Infrastructure Management</p>
          <h1 id="hero-heading">
            Technology assets.
            <br />
            Infrastructure.
            <br />
            Visibility.
          </h1>
          <p className="lede">
            HalaOne helps organizations understand, organize, and manage the
            technology assets and infrastructure that support their operations—
            so leadership can see what is in place, where it sits, and how it
            supports the business.
          </p>
          <div className="cta-row">
            <Link className="btn btn-primary" href="/contact">
              Start a Conversation
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
