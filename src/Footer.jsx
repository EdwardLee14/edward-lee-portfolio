export function Footer({ email, linkedin, github }) {
  return (
    <footer className="footer reveal" id="contact">
      <h2 className="footer__heading">Let's build something.</h2>
      <a href={`mailto:${email}`} className="footer__email">{email}</a>
      <div className="footer__links">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="footer__sep" aria-hidden="true">/</span>
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
