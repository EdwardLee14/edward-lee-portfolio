export function Skills({ groups }) {
  return (
    <section className="skills" id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="skills__grid">
        {groups.map(({ label, items }) => (
          <div key={label} className="skill-group">
            <h3 className="skill-group__label">{label}</h3>
            <p className="skill-group__items">{items}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
