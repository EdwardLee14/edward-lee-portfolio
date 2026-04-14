export function Hero({ name, title, phone, email, linkedin, location }) {
  return (
    <section className="hero">
      <h1 className="hero__name">{name}</h1>
      <p className="hero__title">{title}</p>
      <ul className="hero__contact">
        <li><a href={`tel:${phone}`}>{phone}</a></li>
        <li><a href={`mailto:${email}`}>{email}</a></li>
        <li><a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li>{location}</li>
      </ul>
    </section>
  )
}
