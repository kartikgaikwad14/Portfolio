import { personal } from '../data/portfolioData'

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">KG.</div>
        <nav className="footer-links" aria-label="Footer navigation">
          {NAV_ITEMS.map(item => (
            <span
              key={item}
              className="footer-link"
              onClick={() => scrollTo(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollTo(item)}
            >
              {item}
            </span>
          ))}
        </nav>
        <p className="footer-copy">
          © {year} Kartik Yuwaraj Gaikwad. Made with{' '}
          <span className="footer-heart">♥</span> in Pune, India.
        </p>
      </div>
    </footer>
  )
}
