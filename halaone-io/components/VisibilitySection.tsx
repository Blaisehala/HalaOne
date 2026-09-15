export function VisibilitySection() {
  return (
    <section
      className="visibility-section"
      id="visibility"
      aria-labelledby="visibility-heading"
    >
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2 id="visibility-heading">Visibility starts with knowing what’s there.</h2>
          <p className="lede">
            Organizations accumulate technology across offices, facilities,
            networks, and connected environments. HalaOne helps bring structure
            and visibility to that environment.
          </p>
        </div>
        <div className="visibility-stages">
          <article className="visibility-stage">
            <p className="n">01</p>
            <h3>Discover</h3>
            <p>Understand what technology exists across the environment.</p>
          </article>
          <article className="visibility-stage">
            <p className="n">02</p>
            <h3>Organize</h3>
            <p>
              Create clearer relationships between assets, locations, and
              infrastructure.
            </p>
          </article>
          <article className="visibility-stage">
            <p className="n">03</p>
            <h3>Understand</h3>
            <p>
              Give teams better visibility for operational and technology
              decisions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
