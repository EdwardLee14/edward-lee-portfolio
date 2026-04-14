export function Capstone({ title, subtitle, status, problem, whyItMatters, goals, process, takeaways, nextSteps }) {
  return (
    <section className="section">
      <h2 className="section__title">Capstone</h2>

      <div className="capstone__header">
        <h3 className="capstone__name">
          {title} {status && <span className="capstone__status">({status})</span>}
        </h3>
        {subtitle && <p className="capstone__subtitle">{subtitle}</p>}
      </div>

      <div className="capstone__grid">
        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Problem statement</h4>
          <p className="capstone__text">{problem}</p>
        </div>

        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Why this matters</h4>
          <ul className="capstone__list">
            {whyItMatters.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="capstone__card capstone__card--full">
        <h4 className="capstone__cardTitle">Goals</h4>
        <ul className="capstone__list">
          {goals.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      </div>

      <div className="capstone__grid">
        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Process (team)</h4>
          <ul className="capstone__list">
            {process.team.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Contributions (me)</h4>
          <ul className="capstone__list">
            {process.individual.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="capstone__grid">
        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Takeaways</h4>
          <ul className="capstone__list">
            {takeaways.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="capstone__card">
          <h4 className="capstone__cardTitle">Next steps</h4>
          <ul className="capstone__list">
            {nextSteps.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
