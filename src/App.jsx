import { useState, useEffect, lazy, Suspense } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import CursorGlow from './components/CursorGlow'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-fold sections for code splitting
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Internship = lazy(() => import('./components/Internship'))
const Projects = lazy(() => import('./components/Projects'))
const Publications = lazy(() => import('./components/Publications'))
const Certifications = lazy(() => import('./components/Certifications'))
const Leadership = lazy(() => import('./components/Leadership'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return (
    <div style={{
      minHeight: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      fontSize: '0.875rem',
    }}>
      Loading...
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('kg-theme') || 'dark'
  })

  // Loading screen
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  // Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('kg-theme', theme)
    if (loading) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }, [theme, loading])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <LoadingScreen done={!loading} />

      {!loading && (
        <>
          <CursorGlow />
          <ScrollProgress />
          <BackToTop />
          <Navbar theme={theme} toggleTheme={toggleTheme} />

          <main id="main-content">
            <Hero />
            <Suspense fallback={<SectionFallback />}>
              <About />
              <Skills />
              <Internship />
              <Projects />
              <Publications />
              <Certifications />
              <Leadership />
              <Education />
              <Contact />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </>
  )
}
