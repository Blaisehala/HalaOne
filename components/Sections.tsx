import Link from "next/link";

export function Problem() {
  return (
    <section className="section section--alt" id="problem" aria-labelledby="problem-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The operating problem</p>
          <h2 id="problem-heading">Technology accumulates. Accurate records do not.</h2>
          <p className="lede">
            Offices, facilities, and distributed operations collect devices,
            networks, and systems over time. Equipment is deployed, moved,
            replaced, upgraded, and repurposed. Audits lag. Lifecycle status
            goes untracked. Without a disciplined ITAM process, the asset
            record falls out of sync with the environment it is supposed to
            describe.
          </p>
        </div>
        <div className="problem-list">
          <article className="panel">
            <h3>Assets drift</h3>
            <p>
              Hardware and systems change hands across teams and locations
              without a lifecycle record of who owns what, where it is, and
              what condition it is in.
            </p>
          </article>
          <article className="panel">
            <h3>Audits fall behind</h3>
            <p>
              Without a recurring audit cadence, the recorded inventory drifts
              further from what is actually deployed across sites.
            </p>
          </article>
          <article className="panel">
            <h3>Records lose accuracy</h3>
            <p>
              Replacement, support, and investment decisions are weaker when
              the asset record no longer matches the environment it describes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">What HalaOne does</p>
          <h2 id="services-heading">IT Asset Management built around the technology you already run.</h2>
          <p className="lede">
            HalaOne runs a disciplined ITAM program—inventory, audit, and
            ongoing record-keeping—for organizations that need to account for
            what they own. Our approach aligns with ISO 55001 (asset
            management) and ISO 19770-1 (IT asset management) standards.
          </p>
        </div>
        <div className="pillars">
          <article className="pillar">
            <p className="index">01</p>
            <h3>Asset Inventory &amp; Audit</h3>
            <p>
              Establish a verified baseline of technology assets—ownership,
              location, status, and specifications—so the organization can
              account for what it has and how it is used.
            </p>
          </article>
          <article className="pillar">
            <p className="index">02</p>
            <h3>Lifecycle Tracking</h3>
            <p>
              Track assets as they move through deployment, use, change, and
              replacement—so decisions are made with current information, not
              outdated inventories.
            </p>
          </article>
          <article className="pillar">
            <p className="index">03</p>
            <h3>Multi-Site Asset Records</h3>
            <p>
              Build clearer, consistent records across sites. Reduce
              guesswork. Give operations and technology teams a shared view of
              the estate they are expected to support.
            </p>
          </article>
          <article className="pillar">
            <p className="index">04</p>
            <h3>Managed Program</h3>
            <p>
              Keep the asset register current on an ongoing basis, with a
              standing process for updates, audits, and reporting as the
              environment changes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function BuildingTechnology() {
  return (
    <section className="section section--alt" id="building-technology" aria-labelledby="building-heading">
      <div className="wrap building-grid">
        <div>
          <p className="eyebrow">Building technology</p>
          <h2 id="building-heading">Technology does not stop at the office door.</h2>
          <p className="lede">
            Modern physical environments run on technology: connectivity,
            access, cameras, sensors, and connected systems that sit alongside
            traditional IT. HalaOne works at that layer—the technology that
            supports buildings and operations—without treating the work as
            construction or trades.
          </p>
        </div>
        <ul className="tech-list">
          <li>
            <strong>Network</strong>
            <span>Structured connectivity that locations actually depend on.</span>
          </li>
          <li>
            <strong>Wireless</strong>
            <span>Wi-Fi and coverage as an operational asset, not an afterthought.</span>
          </li>
          <li>
            <strong>Access systems</strong>
            <span>Credential and control technology as part of the estate.</span>
          </li>
          <li>
            <strong>Cameras &amp; devices</strong>
            <span>Installed systems that need identity, location, and status.</span>
          </li>
          <li>
            <strong>Connected environments</strong>
            <span>IoT and building-adjacent technology that should be visible and governed.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section className="section" id="approach" aria-labelledby="approach-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How we think</p>
          <h2 id="approach-heading">A simple sequence: see it, structure it, keep it current.</h2>
          <p className="lede">
            Engagements start with the environment as it exists. We do not
            begin with a catalog of products. We begin with what is there,
            what is missing from the record, and what would make the next
            decision easier.
          </p>
        </div>
        <div className="steps">
          <article className="step">
            <p className="n">01 Discover</p>
            <h3>Understand</h3>
            <p>Map the technology environment: assets, infrastructure, locations, and current records.</p>
          </article>
          <article className="step">
            <p className="n">02 Organize</p>
            <h3>Structure</h3>
            <p>Create visibility and a usable structure around what the organization owns and operates.</p>
          </article>
          <article className="step">
            <p className="n">03 Manage</p>
            <h3>Support</h3>
            <p>Use that structure to support lifecycle decisions as technology is deployed, moved, and replaced.</p>
          </article>
          <article className="step">
            <p className="n">04 Improve</p>
            <h3>Refine</h3>
            <p>Identify where documentation, control, and operational efficiency can be strengthened over time.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Audience() {
  return (
    <section className="section section--alt" id="who" aria-labelledby="who-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Who we serve</p>
          <h2 id="who-heading">Organizations that run technology across real places.</h2>
          <p className="lede">
            HalaOne works with teams responsible for technology that lives
            outside a single closet or a single office. Property and facilities
            organizations are an important context—not the entire definition of
            the company.
          </p>
        </div>
        <div className="audience">
          <article>
            <h3>Businesses</h3>
            <p>Companies that need a clearer account of the technology supporting daily work.</p>
          </article>
          <article>
            <h3>Operations teams</h3>
            <p>Leaders who feel the cost of missing records when something moves, fails, or needs replacement.</p>
          </article>
          <article>
            <h3>Technology teams</h3>
            <p>IT and infrastructure owners who need operational visibility, not another layer of abstraction.</p>
          </article>
          <article>
            <h3>Facilities teams</h3>
            <p>Groups managing buildings where technology is now part of the operating fabric.</p>
          </article>
          <article>
            <h3>Property organizations</h3>
            <p>Managers of physical portfolios who also inherit networks, access systems, and devices.</p>
          </article>
          <article>
            <h3>Multi-location operators</h3>
            <p>Organizations whose assets are distributed and therefore easy to lose track of.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section" id="why" aria-labelledby="why-heading">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Why HalaOne</p>
          <h2 id="why-heading">Technology as it exists in operations—not as a slide.</h2>
        </div>
        <div className="why">
          <article>
            <h3>Technology + operations</h3>
            <p>
              Technology sits inside real work. HalaOne treats assets and
              infrastructure as operational facts: used, moved, and depended on.
            </p>
          </article>
          <article>
            <h3>Accuracy first</h3>
            <p>
              Control starts with an asset record that matches reality. We
              prioritize disciplined auditing and lifecycle tracking over
              unnecessary complexity.
            </p>
          </article>
          <article>
            <h3>Practical execution</h3>
            <p>
              The measure of the work is whether teams can make better
              decisions with clearer information—not whether the language
              sounds technical.
            </p>
          </article>
          <article>
            <h3>Built for distributed environments</h3>
            <p>
              Assets live across offices, properties, facilities, and field
              locations. The model has to work there, not only in a headquarters
              network diagram.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section section--alt" id="about" aria-labelledby="about-heading">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">About HalaOne</p>
          <h2 id="about-heading">An emerging technology company with an operational mindset.</h2>
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
          <Link className="btn btn-ghost" href="/founder">
            Meet the Founder →
          </Link>
        </aside>
      </div>
    </section>
  );
}

export function Future() {
  return (
    <section className="section" id="direction" aria-labelledby="future-heading">
      <div className="wrap future">
        <p className="eyebrow">Direction</p>
        <h2 id="future-heading">Technology management is a lifecycle—not a single event.</h2>
        <p className="lede">
          Assets are introduced, used, changed, and eventually replaced.
          HalaOne is building around that full arc: clearer records today, and
          a more complete way to support technology over time as the company’s
          capabilities expand.
        </p>
      </div>
    </section>
  );
}

export function Cta() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="wrap">
        <h2 id="cta-heading">Let’s get your technology assets under management.</h2>
        <p>
          If your organization needs a disciplined ITAM program for its
          technology assets and infrastructure, request an asset audit with
          HalaOne. We will listen first, then determine whether there is a
          useful next step.
        </p>
        <div className="cta-row">
          <Link className="btn btn-primary" href="/contact">
            Request an Asset Audit
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            Contact HalaOne
          </Link>
        </div>
      </div>
    </section>
  );
}
