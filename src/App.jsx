import { profile, experience, projects, capstone, education, skills } from './data'
import { Hero } from './Hero'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Capstone } from './Capstone'
import { Education } from './Education'
import { Skills } from './Skills'
export default function App() {
  return (
    <div className="app">
      <header className="header">
        <Hero {...profile} />
      </header>
      <main className="main">
        <Experience items={experience} />
        <Projects items={projects} />
        <Capstone {...capstone} />
        <Education {...education} />
        <Skills {...skills} />
      </main>
    </div>
  )
}
