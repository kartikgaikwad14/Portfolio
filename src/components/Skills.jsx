import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

function SkillBar({ name, level, color, inView }) {
  return (
    <div className="skill-item">
      <div className="skill-item-header">
        <span className="skill-item-name">{name}</span>
        <span className="skill-item-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section section-alt" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">expertise</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I work with, grouped by domain with proficiency levels.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              className="skill-card"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={gi}
              whileHover={{ borderColor: group.color, boxShadow: `0 0 24px ${group.color}22` }}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{group.icon}</span>
                <h3 className="skill-card-title" style={{ color: group.color }}>
                  {group.category}
                </h3>
              </div>
              <div className="skill-items">
                {group.items.map(item => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    color={group.color}
                    inView={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
