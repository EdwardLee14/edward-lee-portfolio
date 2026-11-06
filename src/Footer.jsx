export function Footer({ email, linkedin, github, location }) {
  return (
    <footer className="contact" id="contact">
      <div className="contact__inner">
        <p className="contact__kicker">Contact</p>
        <h2 className="contact__heading">Building something hard? Tell me about it.</h2>
        <a href={`mailto:${email}`} className="contact__email">{email}</a>
        <div className="contact__row">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <span>{location}</span>
          <span className="contact__copy">© {new Date().getFullYear()} Edward Lee</span>
        </div>
      </div>
    </footer>
  )
}
