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
      const q = search.toLowerCase().trim()
      const matchesSearch =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.city.toLowerCase().includes(q) ||
        r.address.toLowerCase().includes(q)
      const matchesRegion = selectedRegion === 'all' || r.region === selectedRegion
      return matchesSearch && matchesRegion
    })
  }, [search, selectedRegion])

  return (
    <div className="pt-32 pb-24">
      {/* HEADER */}
      <section className="container-wafu mb-12">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="rule" />
              Nos adresses
            </div>
            <h1 className="display text-5xl md:text-7xl leading-[0.98]">
              Nos restaurants
            </h1>
          </div>
          <p className="md:col-span-5 text-base text-wafu-ink/70 leading-relaxed">
            {SITE_COPY.mapIntro}
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="container-wafu mb-10">
        <div className="border-t border-b border-wafu-ink/15 py-6 grid md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 relative">
            <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-wafu-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher une ville, un nom, une adresse"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-4 py-3 bg-transparent border-0 border-b border-wafu-ink/20 focus:outline-none focus:border-wafu-pink text-base placeholder:text-wafu-ink/40"
              style={{ transition: 'border-color 200ms ease' }}
            />
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <label className="eyebrow text-wafu-ink/60">Région</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-3 py-2 bg-transparent border border-wafu-ink/20 focus:outline-none focus:border-wafu-pink text-sm"
              style={{ transition: 'border-color 200ms ease' }}
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r === 'all' ? 'Toutes' : r}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mt-4 text-xs uppercase tracking-[0.18em] text-wafu-stone">
          {filtered.length} / {restaurants.length} restaurants
        </div>
      </section>

      {/* MAP + LIST */}
      <section className="container-wafu">
        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
            <RestaurantMap restaurants={filtered} onSelect={setSelectedId} />
          </div>

          <div className="lg:col-span-2 lg:max-h-[700px] lg:overflow-y-auto pr-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16 text-wafu-ink/60">
                <p className="font-serif text-2xl mb-2">Aucun résultat.</p>
                <p className="text-sm">Modifiez vos critères de recherche.</p>
              </div>
            ) : (
              <ul className="divide-y divide-wafu-ink/10">
                {filtered.map((r) => (
                  <li
                    key={r.id}
                    onClick={() => setSelectedId(r.id)}
                    className={`py-5 cursor-pointer pl-4 -ml-4 border-l-2 ${
                      selectedId === r.id ? 'border-wafu-pink bg-wafu-pink/5' : 'border-transparent hover:border-wafu-ink/30'
                    }`}
                    style={{ transition: 'border-color 200ms ease, background-color 200ms ease' }}
                  >
                    <div className="eyebrow mb-1">{r.region}</div>
                    <h3 className="font-serif text-xl tracking-editorial text-wafu-ink mb-1">
                      {r.name}
                    </h3>
                    <p className="text-sm text-wafu-ink/60 mb-3 leading-relaxed">{r.address}</p>
                    {r.phone && (
                      <p className="text-sm text-wafu-ink/70 mb-4 font-mono">{r.phone}</p>
                    )}

                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wide">
                      <Link
                        to={`/restaurants/${r.id}`}
                        className="px-3 py-1.5 bg-wafu-ink text-wafu-paper hover:bg-wafu-pink"
                        style={{ transition: 'background-color 200ms ease' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Voir la fiche
                      </Link>
                      <a
                        href={r.wazeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-wafu-ink/30 text-wafu-ink hover:border-wafu-pink hover:text-wafu-pink"
                        style={{ transition: 'border-color 200ms ease, color 200ms ease' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Waze
                      </a>
                      <a
                        href={r.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 border border-wafu-ink/30 text-wafu-ink hover:border-wafu-pink hover:text-wafu-pink"
                        style={{ transition: 'border-color 200ms ease, color 200ms ease' }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Maps
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* INDEPENDENCE NOTE */}
      <section className="container-wafu mt-20">
        <div className="border-l-2 border-wafu-pink pl-6 py-4 max-w-3xl">
          <div className="eyebrow mb-2">À retenir</div>
          <h3 className="font-serif text-2xl text-wafu-ink mb-2 tracking-editorial">
            {SITE_COPY.independenceTitle}
          </h3>
          <p className="text-base text-wafu-ink/70 leading-relaxed">
            {SITE_COPY.independenceLines[1]} {SITE_COPY.independenceLines[3]}
          </p>
        </div>
      </section>
    </div>
  )
}
