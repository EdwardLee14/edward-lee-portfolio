export function Hero({ profile, work }) {
  return (
    <div className="top" id="top">
      <header className="head">
        <div className="head__text">
          <h1 className="head__name">{profile.name}</h1>
          <p className="head__intro">{profile.intro}</p>
        </div>
        <nav className="head__links" aria-label="Contact">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </header>

      <nav className="panels" aria-label="Selected work">
        {work.map((w) => (
          <a key={w.id} href={`#${w.id}`} className={`panel tone-${w.id}`}>
            <span className="panel__tag">{w.index} · {w.tag}</span>
            <span className="panel__name">{w.name}</span>
            <span className="panel__blurb">{w.blurb}</span>
            <span className="panel__stat">{w.stat.value}</span>
            <span className="panel__label">{w.stat.label}</span>
            <span className="panel__more" aria-hidden="true">Read more ↓</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
