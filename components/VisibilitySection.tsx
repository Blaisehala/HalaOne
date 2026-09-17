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
          <h2 id="visibility-heading">Accurate records start with a proper audit.</h2>
          <p className="lede">
            Organizations accumulate technology across offices, facilities,
            networks, and connected environments. HalaOne runs a structured
            ITAM process to audit that environment, track it through its
            lifecycle, and keep the record accurate over time.
          </p>
        </div>
        <div className="visibility-stages">
          <article className="visibility-stage">
            <p className="n">01</p>
            <h3>Audit</h3>
            <p>Inventory technology across the environment and verify it against existing records.</p>
          </article>
          <article className="visibility-stage">
            <p className="n">02</p>
            <h3>Track</h3>
            <p>
              Follow each asset through deployment, use, change, and
              replacement.
            </p>
          </article>
          <article className="visibility-stage">
            <p className="n">03</p>
            <h3>Reconcile</h3>
            <p>
              Keep the asset record accurate as the environment continues to
              change.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
