export function Skills({ languages, frameworks, databases, tools }) {
  const rows = [
    { label: 'Languages', value: languages },
    { label: 'Frameworks / Technologies', value: frameworks },
    { label: 'Databases', value: databases },
    { label: 'Tools', value: tools },
  ]
  return (
    <section className="section">
      <h2 className="section__title">Skills</h2>
      <dl className="skills">
        {rows.map(({ label, value }) => (
          <div key={label} className="skills__row">
            <dt className="skills__label">{label}</dt>
            <dd className="skills__value">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
