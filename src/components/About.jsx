import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { about } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">about me</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate engineer driven to build software that matters.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            className="about-text-block"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={0}
          >
            <h3>Building the future,<br /><span className="gradient-text">one line at a time</span></h3>

            {about.summary.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            <div className="about-highlights">
              {about.highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  className="about-highlight"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <span className="about-highlight-icon">{h.icon}</span>
                  <div>
                    <div className="about-highlight-title">{h.title}</div>
                    <div className="about-highlight-desc">{h.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
          >
            <div className="about-stats">
              {about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={i + 1}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="stat-number">
                    {inView && (
                      <CountUp end={stat.value} duration={2} delay={0.3} />
                    )}
                    {stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
