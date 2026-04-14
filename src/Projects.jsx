export function Projects({ items }) {
  return (
    <section className="section">
      <h2 className="section__title">Projects</h2>
      <ul className="projects-list">
        {items.map((proj, i) => (
          <li key={i} className="project-item">
            <h3 className="project-item__name">
              {proj.name}
              {proj.note && <span className="project-item__note"> ({proj.note})</span>}
            </h3>
            <p className="project-item__desc">{proj.description}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-item__link">
                {proj.linkLabel}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
