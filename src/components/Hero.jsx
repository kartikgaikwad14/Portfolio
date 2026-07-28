import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolioData'

const ROLES = personal.roles

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1))
        setCharIdx(c => c + 1)
      }, 55)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1))
        setCharIdx(c => c - 1)
      }, 30)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.3 } },
  }

  return (
    <section className="hero-section section" id="home">
      {/* Floating blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="container">
        <div className="hero-content">
          {/* Text Side */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="hero-tag" variants={itemVariants}>
              <span className="hero-tag-dot" />
              Available for Opportunities
            </motion.div>

            <motion.h1 className="hero-name" variants={itemVariants}>
              Hi, I'm{' '}
              <span className="gradient-text">{personal.firstName}</span>
              <br />
              <span className="gradient-text">Gaikwad</span>
            </motion.h1>

            <motion.div className="hero-typing-wrapper" variants={itemVariants}>
              <span style={{ color: 'var(--accent)' }}>&gt; </span>
              <span>{displayed}</span>
              <span className="hero-typing-cursor" />
            </motion.div>

            <motion.p className="hero-desc" variants={itemVariants}>
              {personal.tagline}
            </motion.p>

            <motion.div className="hero-actions" variants={itemVariants}>
              <a
                className="btn-primary"
                href={personal.resume}
                download
                aria-label="Download Resume"
              >
                📄 Download Resume
              </a>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                🚀 View Projects
              </button>
              <button
                className="btn-ghost"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                ✉️ Contact Me
              </button>
            </motion.div>

            <motion.div className="hero-socials" variants={itemVariants}>
              <span className="hero-social-label">Find me on</span>
              <a
                className="hero-social-link"
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                className="hero-social-link"
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                className="hero-social-link"
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="hero-image-wrapper"
            variants={imgVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="hero-image-ring">
              <div className="hero-image-inner">
                <img src="/kartik.jpg" alt="Kartik Yuwaraj Gaikwad — Full Stack Developer" loading="eager" />
              </div>
            </div>
            <div className="hero-badge">
              🎓 Final Year CE Student
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll-hint">
        <span>Scroll down</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
