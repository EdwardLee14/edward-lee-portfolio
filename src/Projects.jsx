export function Projects({ items }) {
  return (
    <section className="section reveal" id="projects">
      <h2 className="section__heading">Projects</h2>
      <div className="entries">
        {items.map((proj, i) => (
          <article className="entry" key={i}>
            <div className="entry__header">
              <div className="entry__left">
                <h3 className="entry__company">{proj.name}</h3>
                <p className="entry__role">
                  {proj.role}
                  <span className="entry__sep" aria-hidden="true">/</span>
                  {proj.tagline}
                  <span className="entry__sep" aria-hidden="true">/</span>
                  <span className="entry__highlight">{proj.users} users</span>
                </p>
              </div>
              <div className="entry__right">
                <span className="entry__period">{proj.period}</span>
                <span className="entry__location">{proj.location}</span>
              </div>
            </div>
            <ul className="entry__bullets">
              {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
