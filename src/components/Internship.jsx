import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { internship } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Internship() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="internship" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">experience</div>
          <h2 className="section-title">Internship</h2>
          <p className="section-subtitle">
            Real-world experience building responsive web applications.
          </p>
        </motion.div>

        <motion.div
          className="internship-card glass-card"
          style={{ padding: '48px' }}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={1}
        >
          {/* Left: Info */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 64,
                height: 64,
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15))',
                border: '1px solid var(--border-accent)',
                fontSize: '1.8rem',
                marginBottom: '20px',
              }}
            >
              💼
            </div>

            <h3 className="intern-company-name gradient-text">{internship.company}</h3>
            <p className="intern-role">{internship.role}</p>

            <span className="intern-duration">
              📅 {internship.duration}
            </span>

            <p className="intern-desc">{internship.description}</p>

            <p className="intern-skills-label">Skills Used</p>
            <div className="intern-skills">
              {internship.skills.map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>

          {/* Right: Projects */}
          <div>
            <h4 className="intern-projects-title">Projects Built During Internship</h4>
            <div className="intern-project-cards">
              {internship.projects.map((p, i) => (
                <motion.div
                  key={p.name}
                  className="intern-project-card"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={i + 2}
                  whileHover={{ x: 6 }}
                >
                  <span className="intern-project-icon">{p.icon}</span>
                  <div>
                    <div className="intern-project-name">{p.name}</div>
                    <div className="intern-project-desc">{p.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
