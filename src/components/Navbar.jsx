import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/concept', label: 'Le Concept' },
    { to: '/restaurants', label: 'Nos Restaurants' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-wafu-paper/95 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-wafu flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 transition-transform group-hover:scale-110">
            <Logo />
          </div>
          <div className="hidden sm:block">
            <div className="font-serif font-bold text-2xl tracking-wider text-wafu-ink leading-none">
              WAFU
            </div>
            <div className="text-xs text-wafu-pink font-medium tracking-widest uppercase mt-0.5">
              Buffet Asiatique
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 font-medium transition-all duration-300 relative ${
                  isActive
                    ? 'text-wafu-pink'
                    : 'text-wafu-ink hover:text-wafu-pink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-wafu-pink rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <Link to="/restaurants" className="btn-primary ml-4 text-sm py-2.5">
            Trouver un restaurant
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-wafu-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-wafu-paper/98 backdrop-blur-md border-t border-wafu-ink/10 mt-2 py-4 animate-fade-in">
          <div className="container-wafu flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-wafu-pink/10 text-wafu-pink'
                      : 'text-wafu-ink hover:bg-wafu-ink/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/restaurants" className="btn-primary mt-2">
              Trouver un restaurant
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
