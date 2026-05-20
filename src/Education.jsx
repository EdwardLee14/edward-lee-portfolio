export function Education({ school, location, degree, gpa }) {
  return (
    <section className="section reveal" id="education">
      <h2 className="section__heading">Education</h2>
      <article className="entry entry--minimal">
        <div className="entry__header">
          <div className="entry__left">
            <h3 className="entry__company">{school}</h3>
            <p className="entry__role">{degree} / {gpa}</p>
          </div>
          <div className="entry__right">
            <span className="entry__location">{location}</span>
          </div>
        </div>
      </article>
    </section>
  )
}
