export function Work({ items }) {
  return (
    <main id="work">
      {items.map((item) => (
        <CaseStudy key={item.id} {...item} />
      ))}
    </main>
  )
}

function CaseStudy({ id, index, name, role, period, location, headline, summary, stat, facts, link }) {
  return (
    <section className={`case tone-${id}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="case__inner">
        <header className="case__head reveal">
          <p className="case__meta">
            <span>{index}</span>
            <span>{role}</span>
            <span>{period}</span>
            <span>{location}</span>
          </p>
          <h2 id={`${id}-title`} className="case__name">{name}</h2>
        </header>

        <div className="case__grid">
          <div className="case__text reveal">
            <p className="case__headline">{headline}</p>
            {summary.map((para) => <p className="case__summary" key={para}>{para}</p>)}
            {link && (
              <a className="case__link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <dl className="case__facts reveal">
            {[stat, ...facts].map((f) => (
              <div className="fact" key={f.label}>
                <dd>{f.value}</dd>
                <dt>{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>

      </div>
    </section>
  )
}

export function Earlier({ items, education }) {
  return (
    <section className="earlier" aria-labelledby="earlier-title">
      <div className="earlier__inner">
        <h2 id="earlier-title" className="earlier__heading">Earlier</h2>
        <div className="earlier__list">
          {items.map((e) => (
            <article className="earlier__item reveal" key={e.org}>
              <h3>{e.org}</h3>
              <p className="earlier__meta">{e.role} · {e.period}</p>
              <p className="earlier__body">{e.body}</p>
            </article>
          ))}
          <article className="earlier__item reveal">
            <h3>{education.school}</h3>
            <p className="earlier__meta">{education.degree} · {education.gpa}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export function Recognition({ items }) {
  return (
    <section className="earlier earlier--awards" aria-labelledby="awards-title">
      <div className="earlier__inner">
        <h2 id="awards-title" className="earlier__heading">Recognition</h2>
        <div className="earlier__list">
          {items.map((r) => (
            <article className="earlier__item award reveal" key={r.project}>
              <p className="award__prize">{r.award}</p>
              <h3>{r.project}</h3>
              <p className="earlier__meta">{r.event} · {r.date}</p>
              <p className="earlier__body">{r.body}</p>
              <p className="award__links">
                {r.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
