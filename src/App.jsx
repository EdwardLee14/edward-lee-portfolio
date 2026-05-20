import { useEffect } from 'react'
import { profile, experience, projects, education } from './data'
import { GeometricCanvas } from './GeometricCanvas'
import { Hero } from './Hero'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Education } from './Education'
import { Footer } from './Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <GeometricCanvas />
      <div className="page">
        <Hero {...profile} />
        <main>
          <Experience items={experience} />
          <Projects items={projects} />
          <Education {...education} />
        </main>
        <Footer
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
        />
      </div>
    </>
  )
}
