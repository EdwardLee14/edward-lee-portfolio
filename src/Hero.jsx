export function Hero({ name, tagline, email, phone, linkedin, github, location }) {
  return (
    <header className="hero" id="top">
      <p className="hero__available">Open to new opportunities</p>
      <h1 className="hero__name">{name}</h1>
      <p className="hero__tagline">{tagline}</p>
      <div className="hero__contact">
        <a href={`mailto:${email}`}>{email}</a>
        <span className="hero__sep" aria-hidden="true">/</span>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="hero__sep" aria-hidden="true">/</span>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="hero__sep" aria-hidden="true">/</span>
        <span>{phone}</span>
        <span className="hero__sep" aria-hidden="true">/</span>
        <span>{location}</span>
      </div>
    </header>
  )
}
