import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const tickingRef = useRef(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return
      tickingRef.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        tickingRef.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/concept', label: 'Concept' },
    { to: '/restaurants', label: 'Restaurants' },
  ]

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 ${
        scrolled
          ? 'bg-wafu-paper/95 border-b border-wafu-ink/10'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ transition: 'background-color 250ms ease, border-color 250ms ease' }}
    >
      <div className="container-wafu flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-9 w-9">
            <Logo />
          </div>
          <span className="font-serif text-xl tracking-editorial text-wafu-ink leading-none">
            Wafu
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm tracking-wide ${
                  isActive ? 'text-wafu-pink' : 'text-wafu-ink hover:text-wafu-pink'
                }`
              }
              style={{ transition: 'color 200ms ease' }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/restaurants" className="btn-primary py-2.5 text-xs">
            Trouver un restaurant
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-wafu-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-wafu-paper border-t border-wafu-ink/10">
          <div className="container-wafu flex flex-col py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `py-3 text-base ${isActive ? 'text-wafu-pink' : 'text-wafu-ink'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/restaurants" className="btn-primary mt-4 py-3">
              Trouver un restaurant
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
