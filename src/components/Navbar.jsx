import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

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

  useEffect(() => { setMobileOpen(false) }, [location])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/concept', label: 'Concept' },
    { to: '/restaurants', label: 'Restaurants' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 ${
          scrolled || mobileOpen
            ? 'bg-wafu-paper border-b border-wafu-ink/10'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{ transition: 'background-color 220ms ease, border-color 220ms ease' }}
      >
        <div className="container-wafu flex items-center justify-between h-14 md:h-20">
          <Link to="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo.png" alt="Wafu" className="h-8 w-8 md:h-9 md:w-9 object-contain" />
            <span className="font-serif text-[22px] md:text-2xl tracking-editorial text-wafu-ink leading-none">
              Wafu
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-[13px] uppercase tracking-stamp ${
                    isActive ? 'text-wafu-pink' : 'text-wafu-ink hover:text-wafu-pink'
                  }`
                }
                style={{ transition: 'color 200ms ease' }}
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/restaurants" className="btn-primary py-2.5 px-5 min-h-0 text-[11px]">
              Trouver un restaurant
            </Link>
          </nav>

          <button
            className="md:hidden p-2 -mr-2 text-wafu-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeWidth={1.4} d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeWidth={1.4} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-wafu-paper ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ transition: 'opacity 220ms ease' }}
      >
        <div className="pt-20 container-wafu flex flex-col h-full">
          <nav className="flex flex-col mt-6">
            {links.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 py-5 border-b border-wafu-ink/10 ${isActive ? 'text-wafu-pink' : 'text-wafu-ink'}`
                }
              >
                <span className="eyebrow w-10">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-3xl tracking-editorial">{link.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pb-10">
            <Link to="/restaurants" className="btn-primary w-full">
              Trouver un restaurant
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
