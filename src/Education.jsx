export function Education({ school, location, degree, gpa }) {
  return (
    <section className="section">
      <h2 className="section__title">Education</h2>
      <div className="education">
        <h3 className="education__school">{school}</h3>
        <p className="education__location">{location}</p>
        <p className="education__degree">{degree}</p>
        <p className="education__gpa">{gpa}</p>
      </div>
    </section>
  )
}
