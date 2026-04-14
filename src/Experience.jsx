export function Experience({ items }) {
  return (
    <section className="section">
      <h2 className="section__title">Experience</h2>
      <ul className="experience-list">
        {items.map((job, i) => (
          <li key={i} className="experience-item">
            <div className="experience-item__head">
              <div>
                <h3 className="experience-item__company">{job.company}</h3>
                <p className="experience-item__role">{job.role}</p>
              </div>
              <div className="experience-item__meta">
                <span className="experience-item__location">{job.location}</span>
                <span className="experience-item__period">{job.period}</span>
              </div>
            </div>
            <ul className="experience-item__bullets">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
