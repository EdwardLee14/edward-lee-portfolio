import { useEffect } from 'react'
import { profile, now, work, earlier, education } from './data'
import { Hero } from './Hero'
import { Work, Earlier } from './Work'
import { Footer } from './Footer'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('revealed'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip" href="#work">Skip to work</a>
      <Hero profile={profile} now={now} work={work} />
      <Work items={work} />
      <Earlier items={earlier} education={education} />
      <Footer {...profile} />
    </>
  )
}
