import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section section-alt" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">academics</div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="edu-card"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.01, borderColor: edu.color }}
            >
              <div
                className="edu-icon-wrap"
                style={{
                  background: `${edu.color}15`,
                  border: `1px solid ${edu.color}30`,
                }}
              >
                {edu.icon}
              </div>

              <div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-year">{edu.year}</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div className="edu-grade" style={{ color: edu.color }}>{edu.grade}</div>
                <div className="edu-status">{edu.status}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
