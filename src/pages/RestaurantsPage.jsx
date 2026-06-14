import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { restaurants, SITE_COPY } from '../data/restaurants.js'
import RestaurantMap from '../components/RestaurantMap.jsx'

export default function RestaurantsPage() {
  const [search, setSearch] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('all')
  const [selectedId, setSelectedId] = useState(null)

  const regions = useMemo(
    () => ['all', ...[...new Set(restaurants.map((r) => r.region))].sort()],
    []
  )

  const filtered = useMemo(() => {
    return restaurants.filter((r) => {
      const q = search.toLowerCase()
      const matchesSearch =
        r.name.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q)
      const matchesRegion = selectedRegion === 'all' || r.region === selectedRegion
      return matchesSearch && matchesRegion
    })
  }, [search, selectedRegion])

  return (
    <div className="pt-24 pb-16">
      {/* HEADER */}
      <section className="container-wafu py-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-wafu-pink font-semibold uppercase tracking-widest text-sm mb-3">Nos adresses</div>
          <h1 className="section-heading mb-6 inline-block">Nos restaurants</h1>
          <p className="text-lg text-wafu-ink/70 mt-6">{SITE_COPY.mapIntro}</p>
        </div>
      </section>

      {/* SEARCH & FILTERS */}
      <section className="container-wafu mb-8">
        <div className="bg-white border border-wafu-ink/10 rounded-sm p-6 shadow-md">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-wafu-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Rechercher par ville, nom ou adresse..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-wafu-ink/15 rounded-sm focus:outline-none focus:border-wafu-pink focus:ring-2 focus:ring-wafu-pink/20 transition-all bg-wafu-paper"
              />
            </div>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-3 border border-wafu-ink/15 rounded-sm focus:outline-none focus:border-wafu-pink focus:ring-2 focus:ring-wafu-pink/20 transition-all bg-wafu-paper"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r === 'all' ? 'Toutes les régions' : r}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 text-sm text-wafu-ink/60">
            {filtered.length} restaurant{filtered.length > 1 ? 's' : ''} sur {restaurants.length}
          </div>
        </div>
      </section>

      {/* MAP + LIST */}
      <section className="container-wafu">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <RestaurantMap restaurants={filtered} onSelect={setSelectedId} />
          </div>

          <div className="lg:col-span-2 lg:max-h-[700px] lg:overflow-y-auto space-y-4 pr-1">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-wafu-ink/60">
                <p className="text-lg">Aucun restaurant ne correspond à votre recherche.</p>
              </div>
            ) : (
              filtered.map((r) => (
                <div
                  key={r.id}
                  className={`bg-white border rounded-sm p-5 shadow-sm transition-all cursor-pointer ${
                    selectedId === r.id
                      ? 'border-wafu-pink ring-2 ring-wafu-pink/30 shadow-lg'
                      : 'border-wafu-ink/10 hover:border-wafu-pink/40 hover:shadow-md'
                  }`}
                  onClick={() => setSelectedId(r.id)}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <div className="text-xs text-wafu-pink uppercase tracking-widest mb-1">
                        {r.region}
                      </div>
                      <h3 className="text-xl font-bold text-wafu-ink">{r.name}</h3>
                    </div>
                    <span className="text-2xl">🏮</span>
                  </div>
                  <p className="text-sm text-wafu-ink/70 mb-1 flex items-start gap-1.5">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-wafu-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {r.address}
                  </p>
                  {r.phone && (
                    <p className="text-sm text-wafu-ink/70 mb-4 flex items-center gap-1.5">
                      <svg className="w-4 h-4 flex-shrink-0 text-wafu-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {r.phone}
                    </p>
                  )}

                  <div className="grid grid-cols-3 gap-2">
                    <Link
                      to={`/restaurants/${r.id}`}
                      className="text-center text-xs font-medium bg-wafu-pink text-white px-3 py-2.5 rounded-sm hover:bg-wafu-plum transition-colors"
                    >
                      Voir la fiche
                    </Link>
                    <a
                      href={r.wazeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-xs font-medium bg-wafu-ink text-wafu-cream px-3 py-2.5 rounded-sm hover:bg-wafu-pink transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Waze
                    </a>
                    <a
                      href={r.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-xs font-medium bg-wafu-ink text-wafu-cream px-3 py-2.5 rounded-sm hover:bg-wafu-pink transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Maps
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* INDEPENDENCE REMINDER */}
      <section className="container-wafu mt-16">
        <div className="bg-wafu-pink/5 border-l-4 border-wafu-pink p-6 rounded-r-sm">
          <div className="flex items-start gap-4">
            <span className="text-3xl">ℹ️</span>
            <div>
              <h3 className="text-xl font-bold text-wafu-ink mb-2">
                {SITE_COPY.independenceTitle}
              </h3>
              <p className="text-wafu-ink/80 leading-relaxed">
                {SITE_COPY.independenceLines[1]} {SITE_COPY.independenceLines[3]}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
