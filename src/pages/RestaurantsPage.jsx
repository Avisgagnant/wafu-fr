import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { restaurants, SITE_COPY } from '../data/restaurants.js'
import RestaurantMap from '../components/RestaurantMap.jsx'

export default function RestaurantsPage() {
  const [params, setParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [openId, setOpenId] = useState(null)
  const [view, setView] = useState('list') // 'list' | 'map'  — mobile toggle
  const listScrollerRef = useRef(null)

  const selectedRegion = params.get('region') || 'all'
  const setRegion = (r) => {
    const next = new URLSearchParams(params)
    if (r === 'all') next.delete('region')
    else next.set('region', r)
    setParams(next, { replace: true })
    setOpenId(null)
  }

  const allRegions = useMemo(
    () => [...new Set(restaurants.map((r) => r.region))].sort(),
    []
  )

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return restaurants.filter((r) => {
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q)
      const matchesRegion = selectedRegion === 'all' || r.region === selectedRegion
      return matchesSearch && matchesRegion
    })
  }, [search, selectedRegion])

  // Group filtered by region, preserve display order from allRegions
  const grouped = useMemo(() => {
    const map = new Map()
    for (const r of filtered) {
      if (!map.has(r.region)) map.set(r.region, [])
      map.get(r.region).push(r)
    }
    return Array.from(map.entries()).sort((a, b) => allRegions.indexOf(a[0]) - allRegions.indexOf(b[0]))
  }, [filtered, allRegions])

  const totalIndex = (r) => filtered.findIndex((x) => x.id === r.id) + 1

  // When user picks a region pill, scroll the list back to top
  useEffect(() => {
    if (listScrollerRef.current) listScrollerRef.current.scrollTop = 0
    window.scrollTo({ top: window.scrollY, behavior: 'auto' })
  }, [selectedRegion])

  return (
    <div className="pt-24 md:pt-36 pb-20">
      {/* HEADER */}
      <section className="container-wafu mb-10 md:mb-16">
        <div className="flex gap-5 md:gap-8">
          <div className="flex-shrink-0 pt-3">
            <span className="wafu-rule block h-20 md:h-32" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow mb-5 md:mb-7">Nos adresses</div>
            <h1 className="display text-[2.4rem] sm:text-6xl md:text-8xl leading-[0.95] mb-6">
              <span className="italic">{restaurants.length}</span> restaurants,<br />
              une même <span className="text-wafu-pink italic">maison</span>.
            </h1>
            <p className="font-serif italic text-base sm:text-lg md:text-xl text-wafu-ink/75 leading-snug max-w-2xl">
              {SITE_COPY.mapIntro}
            </p>
          </div>
        </div>
      </section>

      {/* SEARCH + STICKY FILTER BAR */}
      <div className="sticky top-14 md:top-20 z-30 bg-wafu-paper border-b border-wafu-ink/10">
        <div className="container-wafu py-3.5 md:py-4">
          {/* Search */}
          <div className="relative mb-3">
            <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-wafu-ink/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeWidth={1.4} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une ville, un nom, une adresse"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-10 py-3 bg-transparent border-0 border-b border-wafu-ink/15 focus:outline-none focus:border-wafu-pink text-[15px] placeholder:text-wafu-ink/40"
              style={{ transition: 'border-color 200ms ease' }}
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                aria-label="Effacer"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-wafu-ink/40 hover:text-wafu-pink"
                style={{ transition: 'color 200ms ease' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeWidth={1.5} d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            )}
          </div>

          {/* Region pills */}
          <div className="pill-row -mx-1 px-1">
            <button
              onClick={() => setRegion('all')}
              className={`pill ${selectedRegion === 'all' ? 'active' : ''}`}
            >
              Toutes
            </button>
            {allRegions.map((r) => (
              <button
                key={r}
                onClick={() => setRegion(r)}
                className={`pill ${selectedRegion === r ? 'active' : ''}`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Counter + view toggle */}
          <div className="flex items-center justify-between mt-3">
            <span className="eyebrow-ink">
              {filtered.length} / {restaurants.length} restaurants
            </span>

            <div className="flex lg:hidden border border-wafu-ink/15">
              <button
                onClick={() => setView('list')}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-stamp ${view === 'list' ? 'bg-wafu-ink text-wafu-paper' : 'text-wafu-ink/70'}`}
              >
                Liste
              </button>
              <button
                onClick={() => setView('map')}
                className={`px-4 py-1.5 text-[11px] uppercase tracking-stamp border-l border-wafu-ink/15 ${view === 'map' ? 'bg-wafu-ink text-wafu-paper' : 'text-wafu-ink/70'}`}
              >
                Carte
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAP + LIST */}
      <section className="container-wafu pt-8 md:pt-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* MAP — sticky on desktop; toggleable on mobile */}
          <div className={`lg:col-span-6 lg:sticky lg:top-44 lg:self-start ${view === 'map' ? 'block' : 'hidden lg:block'}`}>
            <div className="h-[60vh] min-h-[400px] lg:h-[640px]">
              <RestaurantMap restaurants={filtered} onSelect={setOpenId} />
            </div>
          </div>

          {/* LIST */}
          <div className={`lg:col-span-6 ${view === 'list' ? 'block' : 'hidden lg:block'}`}>
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif italic text-3xl text-wafu-ink/60 mb-2">Aucun résultat.</p>
                <p className="text-sm text-wafu-ink/50">Essayez une autre région ou un autre mot-clé.</p>
              </div>
            ) : (
              <div ref={listScrollerRef} className="lg:max-h-[640px] lg:overflow-y-auto lg:pr-2 -mx-1 px-1">
                {grouped.map(([region, items]) => (
                  <div key={region} className="mb-8 last:mb-0">
                    {/* Region heading */}
                    <div className="flex items-baseline justify-between mb-2 pt-2 sticky top-0 bg-wafu-paper z-10">
                      <h2 className="font-serif italic text-2xl md:text-3xl text-wafu-ink tracking-editorial">
                        {region}
                      </h2>
                      <span className="eyebrow-ink">{items.length}</span>
                    </div>
                    <ul className="border-t border-wafu-ink/20">
                      {items.map((r) => {
                        const isOpen = openId === r.id
                        return (
                          <li key={r.id} className="border-b border-wafu-ink/15">
                            <button
                              type="button"
                              onClick={() => setOpenId(isOpen ? null : r.id)}
                              className="w-full text-left grid grid-cols-[2rem_1fr_auto] gap-3 sm:gap-4 items-center py-4 sm:py-5 group"
                              aria-expanded={isOpen}
                              aria-controls={`r-${r.id}`}
                            >
                              <span className={`font-serif italic text-[15px] ${isOpen ? 'text-wafu-pink' : 'text-wafu-ink/40'}`}>
                                {String(totalIndex(r)).padStart(2, '0')}
                              </span>
                              <span className="min-w-0">
                                <span className={`block font-serif tracking-editorial text-lg sm:text-xl truncate ${isOpen ? 'text-wafu-pink' : 'text-wafu-ink group-hover:text-wafu-pink'}`} style={{ transition: 'color 200ms ease' }}>
                                  {r.name}
                                </span>
                                <span className="block text-[12px] text-wafu-ink/55 truncate mt-0.5">
                                  {r.city}
                                </span>
                              </span>
                              <span
                                className={`flex-shrink-0 w-6 h-6 inline-flex items-center justify-center text-wafu-ink/50 ${isOpen ? 'rotate-180 text-wafu-pink' : 'rotate-0'}`}
                                style={{ transition: 'transform 220ms ease, color 200ms ease' }}
                                aria-hidden
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeWidth={1.6} d="M6 9l6 6 6-6" />
                                </svg>
                              </span>
                            </button>

                            {/* Accordion body */}
                            <div id={`r-${r.id}`} className={`accordion-body ${isOpen ? 'open' : ''}`}>
                              <div className="inner">
                                <div className="pb-5 pl-[2.75rem] sm:pl-[3rem] pr-2">
                                  <p className="text-[14px] text-wafu-ink/75 leading-relaxed mb-3">
                                    {r.address}
                                  </p>
                                  {r.phone && (
                                    <a
                                      href={`tel:${r.phone.replace(/\s/g, '')}`}
                                      className="inline-block text-[14px] text-wafu-ink/80 font-mono mb-4 hover:text-wafu-pink"
                                      style={{ transition: 'color 200ms ease' }}
                                    >
                                      {r.phone}
                                    </a>
                                  )}
                                  <div className="text-[12px] text-wafu-ink/60 mb-5 leading-relaxed">
                                    {r.hours.join(' · ')}
                                  </div>

                                  <div className="flex flex-wrap gap-2">
                                    <Link
                                      to={`/restaurants/${r.id}`}
                                      className="px-3.5 py-2 bg-wafu-ink text-wafu-paper text-[11px] uppercase tracking-stamp hover:bg-wafu-pink"
                                      style={{ transition: 'background-color 200ms ease' }}
                                    >
                                      Voir la fiche
                                    </Link>
                                    <a
                                      href={r.wazeUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-3.5 py-2 border border-wafu-ink/30 text-[11px] uppercase tracking-stamp text-wafu-ink hover:border-wafu-pink hover:text-wafu-pink"
                                      style={{ transition: 'border-color 200ms ease, color 200ms ease' }}
                                    >
                                      Waze
                                    </a>
                                    <a
                                      href={r.googleMapsUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="px-3.5 py-2 border border-wafu-ink/30 text-[11px] uppercase tracking-stamp text-wafu-ink hover:border-wafu-pink hover:text-wafu-pink"
                                      style={{ transition: 'border-color 200ms ease, color 200ms ease' }}
                                    >
                                      Maps
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INDEPENDENCE NOTE */}
      <section className="container-wafu mt-20 md:mt-28">
        <div className="border-l-2 border-wafu-pink pl-5 py-3 max-w-3xl">
          <div className="eyebrow mb-2">À retenir</div>
          <h3 className="font-serif italic text-xl md:text-2xl text-wafu-ink mb-2 tracking-editorial">
            {SITE_COPY.independenceTitle}
          </h3>
          <p className="text-[15px] md:text-base text-wafu-ink/75 leading-relaxed">
            {SITE_COPY.independenceLines[1]} {SITE_COPY.independenceLines[3]}
          </p>
        </div>
      </section>
    </div>
  )
}
