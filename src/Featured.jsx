export function Featured({ company, badge, role, period, summary, highlights }) {
  return (
    <section className="featured" id="featured">
      <h2 className="section-heading">Featured</h2>
      <div className="featured__card">
        <div className="featured__header">
          <div>
            <h3 className="featured__company">{company}</h3>
            <p className="featured__role">{role} &middot; {period}</p>
          </div>
          <span className="featured__badge">{badge}</span>
        </div>
        <p className="featured__summary">{summary}</p>
        <ul className="featured__highlights">
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>
    </section>
  )
}
