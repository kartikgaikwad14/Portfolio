import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { publications } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Publications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="publications" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">research</div>
          <h2 className="section-title">Research Publication</h2>
          <p className="section-subtitle">
            Academic research contributing to the field of network security.
          </p>
        </motion.div>

        {publications.map((pub, i) => (
          <motion.div
            key={pub.title}
            className="publication-card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={i + 1}
            whileHover={{ scale: 1.01 }}
          >
            <div className="publication-icon-wrap">{pub.icon}</div>

            <div>
              <div className="publication-badge">
                🏅 {pub.badge}
              </div>
              <h3 className="publication-title">{pub.title}</h3>
              <p className="publication-desc">{pub.description}</p>
              <div className="publication-topics">
                {pub.topics.map(topic => (
                  <span key={topic} className="tag">{topic}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
