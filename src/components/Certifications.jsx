import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certifications } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section section-alt" id="certifications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">credentials</div>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">
            Courses and bootcamps completed to sharpen technical skills.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={`${cert.issuer}-${cert.title}`}
              className="cert-card"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.03, borderColor: cert.color }}
            >
              <div
                className="cert-icon-wrap"
                style={{
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}35`,
                }}
              >
                <span>{cert.icon}</span>
              </div>
              <div>
                <div className="cert-title">{cert.title}</div>
                <div className="cert-issuer" style={{ color: cert.color }}>{cert.issuer}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
