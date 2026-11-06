import { FlowCanvas } from './FlowCanvas'

export function Hero({ profile, now, work }) {
  return (
    <header className="hero" id="top">
      <FlowCanvas />
      <div className="hero__inner">
        <div className="hero__top">
          <span className="hero__mark">EL</span>
          <nav className="hero__links" aria-label="Contact">
            <a href={`mailto:${profile.email}`}>Email</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </nav>
        </div>

        <h1 className="hero__name">
          <span>Edward</span>
          <span>Lee</span>
        </h1>

        <div className="hero__grid">
          <div className="hero__lead">
            <p className="hero__role">{profile.role}</p>
            <p className="hero__intro">{profile.intro}</p>
            <dl className="hero__now">
              {now.map((n) => (
                <div key={n.label}>
                  <dt>{n.label}</dt>
                  <dd>{n.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav className="index" aria-label="Selected work">
            <p className="index__label">Selected work</p>
            <ol>
              {work.map((w) => (
                <li key={w.id}>
                  <a href={`#${w.id}`}>
                    <span className="index__num">{w.index}</span>
                    <span className="index__name">{w.name}</span>
                    <span className="index__org">{w.badge ?? (w.org === w.name ? w.role : w.org)}</span>
                    <span className="index__year">{w.period.endsWith('Present') ? 'Now' : w.period.slice(-4)}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </header>
  )
}
