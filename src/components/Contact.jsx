import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
  { icon: '💼', label: 'LinkedIn', value: 'kartik-gaikwad', href: personal.linkedin },
  { icon: '🐙', label: 'GitHub', value: 'kartikgaikwad14', href: personal.github },
  { icon: '📍', label: 'Location', value: personal.location, href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    setSending(true)
    setTimeout(() => {
      window.location.href = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`
      setSending(false)
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    }, 600)
  }

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <div className="section-tag">get in touch</div>
          <h2 className="section-title">Contact Me</h2>
          <p className="section-subtitle">
            Open to full-time opportunities, internships, and collaborations.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
          >
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
              Let's Build Something Great Together
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '32px' }}>
              Whether you have a project idea, job opportunity, or just want to say hi —
              my inbox is always open. I'll get back to you as soon as possible!
            </p>

            <div className="contact-info-grid">
              {CONTACT_INFO.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="contact-info-card"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  variants={fadeUp}
                  custom={i + 2}
                  whileHover={{ scale: 1.03 }}
                >
                  <span className="contact-info-icon">{item.icon}</span>
                  <div className="contact-info-label">{item.label}</div>
                  {item.href ? (
                    <a
                      className="contact-info-value"
                      href={item.href}
                      target={item.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      style={{ color: 'var(--accent)', textDecoration: 'none' }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="contact-info-value">{item.value}</div>
                  )}
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '24px' }}>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                SOCIAL LINKS
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { href: personal.github, label: 'GitHub', emoji: '🐙' },
                  { href: personal.linkedin, label: 'LinkedIn', emoji: '💼' },
                  { href: `mailto:${personal.email}`, label: 'Email', emoji: '✉️' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    aria-label={s.label}
                  >
                    {s.emoji} {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="contact-form"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={2}
          >
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="send-btn"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending}
              >
                {sent ? '✅ Message Sent!' : sending ? '⏳ Sending...' : '🚀 Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
