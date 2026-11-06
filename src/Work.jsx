const VISUALS = {
  atlas: AtlasDiagram,
  kndi: KndiShots,
  askdan: FaithfulnessChart,
  protoscore: PostPreview,
}

export function Work({ items }) {
  return (
    <main id="work">
      {items.map((item) => (
        <CaseStudy key={item.id} {...item} />
      ))}
    </main>
  )
}

function CaseStudy(props) {
  const { id, index, name, org, role, period, location, badge, headline, summary, facts, points, stack, link } = props
  const Visual = VISUALS[id]
  const wideVisual = id === 'kndi'

  return (
    <section className={`case case--${id}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="case__inner">
        <header className="case__head reveal">
          <span className="case__index" aria-hidden="true">{index}</span>
          <div className="case__title">
            <h2 id={`${id}-title`}>{name}</h2>
            {badge && <span className="badge">{badge}</span>}
          </div>
          <p className="case__meta">
            <span>{org === name ? role : `${role}, ${org}`}</span>
            <span>{period}</span>
            <span>{location}</span>
          </p>
        </header>

        <p className="case__headline reveal">{headline}</p>

        <div className={`case__body${wideVisual ? ' case__body--stack' : ''}`}>
          <div className="case__text reveal">
            <p className="case__summary">{summary}</p>
            {link && (
              <a className="case__link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>

          <dl className="facts reveal">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {Visual && (
          <div className="case__visual reveal">
            <Visual {...props} />
          </div>
        )}

        {points && (
          <ol className="points">
            {points.map((p, i) => (
              <li className="point reveal" key={p.title}>
                <span className="point__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ol>
        )}

        <ul className="stack" aria-label="Stack">
          {stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  )
}

function AtlasDiagram() {
  return (
    <figure className="atlas">
      <div className="atlas__grid">
        <div className="atlas__col">
          <p className="atlas__label">Customer context</p>
          <ul className="atlas__nodes">
            <li>Contracts and sales quote</li>
            <li>Sales call notes</li>
            <li>Discovery evidence</li>
          </ul>
        </div>

        <div className="atlas__arrow" aria-hidden="true" />

        <div className="atlas__col atlas__col--core">
          <p className="atlas__label">Atlas agent</p>
          <div className="atlas__core">
            <span>Reasons over context</span>
            <span>Calls retrieval tools</span>
          </div>
          <div className="atlas__kb">
            <p className="atlas__label atlas__label--own">Knowledge pipeline · my build</p>
            <ul>
              <li>Connector knowledge base</li>
              <li>Nightly refresh + drift check → opens PRs</li>
              <li>Sandboxed connector code</li>
              <li>CI leak check · versioned releases</li>
            </ul>
          </div>
        </div>

        <div className="atlas__arrow" aria-hidden="true" />

        <div className="atlas__col">
          <p className="atlas__label">Implementation blueprint</p>
          <ul className="atlas__nodes atlas__nodes--out">
            <li>Requirements by workstream</li>
            <li>Product gaps</li>
            <li>Follow-up questions</li>
          </ul>
        </div>
      </div>
      <figcaption>How Atlas turns customer context into a plan. The knowledge pipeline keeps its answers true to what the product supports today.</figcaption>
    </figure>
  )
}

function KndiShots({ shots }) {
  return (
    <figure className="shots">
      <div className="shots__track" tabIndex={0} aria-label="kndi App Store screenshots, scrollable">
        {shots.map((s, i) => (
          <img key={s.src} src={s.src} alt={s.alt} loading={i < 3 ? 'eager' : 'lazy'} width="650" height="1413" />
        ))}
      </div>
      <figcaption>App Store previews. Scroll sideways for the full set.</figcaption>
    </figure>
  )
}

function FaithfulnessChart() {
  return (
    <figure className="faith">
      <p className="faith__title">Share of answers making claims the sources don't support</p>
      <div className="faith__rows">
        <div className="faith__row">
          <span className="faith__label">Before</span>
          <span className="faith__bar" style={{ '--v': 20 }}><span /></span>
          <span className="faith__val">20%</span>
        </div>
        <div className="faith__row faith__row--after">
          <span className="faith__label">After</span>
          <span className="faith__bar" style={{ '--v': 0.9 }}><span /></span>
          <span className="faith__val">&lt;1%</span>
        </div>
      </div>
      <ol className="faith__steps" aria-label="Retrieval stages">
        <li>Hybrid search</li>
        <li>Rank fusion</li>
        <li>Parent sections</li>
        <li>Cross-encoder rerank</li>
      </ol>
      <figcaption>Measured with RAGAS faithfulness. The retrieval stages are listed in order.</figcaption>
    </figure>
  )
}

function PostPreview({ post }) {
  return (
    <figure className="post">
      <a className="post__card" href={post.href} target="_blank" rel="noopener noreferrer">
        <span className="post__src">{post.author} on LinkedIn · {post.date}</span>
        <span className="post__title">{post.title}</span>
        <span className="post__excerpt">{post.excerpt}</span>
        <span className="post__cta">Read the announcement <span aria-hidden="true">↗</span></span>
      </a>
    </figure>
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
