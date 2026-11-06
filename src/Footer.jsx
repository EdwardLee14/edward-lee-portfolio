import { useState } from 'react'

export function Footer({ email, linkedin, github, location }) {
  const [egg, setEgg] = useState(false)

  return (
    <footer className="contact" id="contact">
      <div className="contact__inner">
        <h2 className="contact__heading">Building something hard? Tell me about it</h2>
        <a href={`mailto:${email}`} className="contact__email">{email}</a>
        <div className="contact__row">
          <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href={github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <span>{location}</span>
          <span className="contact__copy">
            © {new Date().getFullYear()} Edward{' '}
            <span className="egg">
              <button
                type="button"
                className="egg__trigger"
                aria-expanded={egg}
                onClick={() => setEgg((v) => !v)}
              >
                Lee
              </button>
              {egg && (
                <span className="egg__pop" role="status">
                  3946451
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </footer>
  )
}
