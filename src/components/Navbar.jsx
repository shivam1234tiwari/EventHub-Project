import { useEffect, useState } from 'react'

const links = [
  { href: '#events', label: 'Events' },
  { href: '#categories', label: 'Categories' },
  { href: '#organizers', label: 'For organizers' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          Event<span>Hub</span>
        </a>

        <nav className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__actions">
          <a href="#" className="nav__ghost-btn" aria-disabled="true">Log in</a>
          <a href="#" className="nav__cta" aria-disabled="true">List an event</a>
        </div>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#" className="nav__cta">List an event</a>
        </div>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .nav--scrolled {
          background: rgba(18, 18, 43, 0.92);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--line-dark);
        }
        .nav__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 76px;
        }
        .nav__brand {
          font-family: var(--font-display);
          font-size: 22px;
          letter-spacing: 0.02em;
          color: var(--paper);
        }
        .nav__brand span {
          color: var(--marquee);
        }
        .nav__links {
          display: flex;
          gap: 32px;
          font-size: 14px;
          font-weight: 500;
        }
        .nav__links a {
          color: var(--slate);
          transition: color 0.2s ease;
        }
        .nav__links a:hover {
          color: var(--paper);
        }
        .nav__actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .nav__ghost-btn {
          font-size: 14px;
          color: var(--paper);
          padding: 9px 16px;
        }
        .nav__cta {
          font-size: 14px;
          font-weight: 600;
          background: var(--marquee);
          color: var(--ink);
          padding: 10px 18px;
          border-radius: 999px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .nav__cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(255, 184, 77, 0.25);
        }
        .nav__burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          padding: 8px;
        }
        .nav__burger span {
          width: 22px;
          height: 2px;
          background: var(--paper);
          border-radius: 2px;
        }
        .nav__mobile {
          display: none;
        }
        @media (max-width: 860px) {
          .nav__links, .nav__actions { display: none; }
          .nav__burger { display: flex; }
          .nav {
            background: rgba(18, 18, 43, 0.97);
            border-bottom: 1px solid var(--line-dark);
          }
          .nav__mobile {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 8px 24px 20px;
            background: rgba(18, 18, 43, 0.97);
            border-bottom: 1px solid var(--line-dark);
          }
          .nav__mobile a {
            padding: 12px 0;
            font-size: 15px;
            color: var(--paper);
            border-bottom: 1px solid var(--line-dark);
          }
          .nav__mobile .nav__cta {
            margin-top: 10px;
            text-align: center;
            border-bottom: none;
            color: var(--ink);
          }
        }
      `}</style>
    </header>
  )
}
