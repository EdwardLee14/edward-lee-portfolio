export function Experience({ items }) {
  return (
    <section className="section reveal" id="experience">
      <h2 className="section__heading">Experience</h2>
      <div className="entries">
        {items.map((job, i) => (
          <article className="entry" key={i}>
            <div className="entry__header">
              <div className="entry__left">
                <h3 className="entry__company">
                  {job.company}
                  {job.acquired && <span className="entry__tag">{job.acquired}</span>}
                </h3>
                <p className="entry__role">{job.role}</p>
              </div>
              <div className="entry__right">
                <span className="entry__period">{job.period}</span>
                <span className="entry__location">{job.location}</span>
              </div>
            </div>
            <ul className="entry__bullets">
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
