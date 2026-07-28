import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { leadership } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, x: -30 },
  visible: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Leadership() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="leadership" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
        >
          <div className="section-tag">impact</div>
          <h2 className="section-title">Leadership & Roles</h2>
          <p className="section-subtitle">
            Driving change through organized effort and collaborative spirit.
          </p>
        </motion.div>

        <div className="timeline">
          {leadership.map((item, i) => (
            <motion.div
              key={item.role}
              className="timeline-item"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i}
            >
              <div
                className="timeline-dot"
                style={{ background: item.color }}
              />
              <div className="timeline-card">
                <span className="timeline-card-icon">{item.icon}</span>
                <div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-org" style={{ color: item.color }}>{item.org}</div>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
