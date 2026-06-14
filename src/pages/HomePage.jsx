import { useState } from 'react'
import { Link } from 'react-router-dom'
import RestaurantImage from '../components/RestaurantImage.jsx'
import { restaurants, SITE_COPY } from '../data/restaurants.js'
import useReveal from '../hooks/useReveal.js'

export default function HomePage() {
  useReveal()
  const [showAll, setShowAll] = useState(false)
  const cities = new Set(restaurants.map((r) => r.city)).size
  const regions = new Set(restaurants.map((r) => r.region)).size
  const shown = showAll ? restaurants : restaurants.slice(0, 6)
  const showcase = restaurants.find((r) => r.image)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container-wafu">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-7">
              <div className="eyebrow mb-6 flex items-center gap-3">
                <span className="rule" />
                Buffet à volonté — Saveurs d'Asie
              </div>
              <h1 className="display text-[2.75rem] sm:text-6xl md:text-7xl leading-[0.95] mb-8">
                L'art du<br />
                <span className="italic text-wafu-pink">buffet</span> asiatique.
              </h1>
              <p className="text-lg md:text-xl text-wafu-ink/70 leading-relaxed max-w-xl mb-10">
                {SITE_COPY.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/restaurants" className="btn-primary">
                  Découvrir nos restaurants
                </Link>
                <Link to="/concept" className="btn-outline">Le concept</Link>
              </div>
            </div>

            {showcase && (
              <div className="md:col-span-5 reveal">
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden bg-wafu-paper">
                    <RestaurantImage
                      src={showcase.image}
                      alt={showcase.name}
                      eager
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-wafu-paper border border-wafu-ink/10 px-4 py-3">
                    <div className="eyebrow mb-1">Aujourd'hui</div>
                    <div className="font-serif text-lg leading-tight">{showcase.name}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="bg-wafu-ink text-wafu-paper">
        <div className="container-wafu py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4 reveal">
              <div className="eyebrow text-wafu-pink mb-5 flex items-center gap-3">
                <span className="block w-10 h-px bg-wafu-pink" />
                À retenir
              </div>
              <h2 className="display text-4xl md:text-5xl leading-[1.05]">
                Chaque restaurant est{' '}
                <span className="italic text-wafu-pink">indépendant</span>.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 reveal">
              <p className="text-xl md:text-2xl font-serif italic text-wafu-paper/90 leading-snug mb-8">
                {SITE_COPY.independenceLines[0]}
              </p>
              <p className="text-base text-wafu-paper/70 leading-relaxed mb-10 max-w-xl">
                {SITE_COPY.independenceLines[2]} Chaque restaurant fixe librement ses
                propres prix et ses horaires. {SITE_COPY.independenceLines[3]}
              </p>
              <div className="grid sm:grid-cols-3 gap-px bg-wafu-paper/10">
                <div className="bg-wafu-ink p-5">
                  <div className="font-serif text-lg text-wafu-pink mb-1">Indépendance</div>
                  <div className="text-sm text-wafu-paper/60">Gestion locale et autonome</div>
                </div>
                <div className="bg-wafu-ink p-5">
                  <div className="font-serif text-lg text-wafu-pink mb-1">Tarifs propres</div>
                  <div className="text-sm text-wafu-paper/60">À voir avec le restaurant</div>
                </div>
                <div className="bg-wafu-ink p-5">
                  <div className="font-serif text-lg text-wafu-pink mb-1">À volonté</div>
                  <div className="text-sm text-wafu-paper/60">Le concept partagé par tous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT EDITORIAL */}
      <section className="py-24 md:py-32">
        <div className="container-wafu grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="rule" />
              Le concept
            </div>
            <h2 className="display text-4xl md:text-5xl leading-[1.05] mb-8">
              Voyager par les saveurs, à votre rythme.
            </h2>
            <p className="text-lg text-wafu-ink/75 leading-relaxed mb-6">
              {SITE_COPY.conceptLead}
            </p>
            <p className="text-lg text-wafu-ink/75 leading-relaxed">
              {SITE_COPY.ambiance}
            </p>
          </div>

          <div className="md:col-span-6 md:col-start-7 reveal">
            <dl className="grid grid-cols-3 border-t border-wafu-ink/15">
              {[
                { label: 'Restaurants', value: restaurants.length },
                { label: 'Villes', value: cities },
                { label: 'Régions', value: regions },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="py-8 border-b border-wafu-ink/15 [&:not(:last-child)]:border-r border-wafu-ink/15"
                >
                  <dt className="text-xs uppercase tracking-[0.22em] text-wafu-stone mb-2">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-4xl md:text-5xl tracking-editorial text-wafu-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link
              to="/concept"
              className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-wide text-wafu-ink border-b border-wafu-ink pb-1 hover:text-wafu-pink hover:border-wafu-pink"
              style={{ transition: 'color 200ms ease, border-color 200ms ease' }}
            >
              En savoir plus sur le concept
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RESTAURANTS LIST */}
      <section id="restaurants" className="py-24 md:py-32 bg-[#F2EBDB]">
        <div className="container-wafu">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow mb-4 flex items-center gap-3">
                <span className="rule" />
                Nos adresses
              </div>
              <h2 className="display text-4xl md:text-5xl leading-[1.05]">
                Nos {restaurants.length} restaurants
              </h2>
            </div>
            <p className="text-base text-wafu-ink/70 max-w-md">
              {SITE_COPY.mapIntro}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((r) => (
              <Link key={r.id} to={`/restaurants/${r.id}`} className="card-flat group block">
                <div className="aspect-[4/3] overflow-hidden bg-wafu-paper">
                  <RestaurantImage
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="eyebrow mb-3">{r.region}</div>
                  <h3 className="font-serif text-2xl tracking-editorial text-wafu-ink mb-2 group-hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
                    {r.name}
                  </h3>
                  <p className="text-sm text-wafu-ink/60 line-clamp-2 mb-4">{r.address}</p>
                  <div className="text-xs uppercase tracking-[0.18em] text-wafu-ink border-b border-wafu-ink/30 inline-block pb-0.5 group-hover:text-wafu-pink group-hover:border-wafu-pink" style={{ transition: 'color 200ms ease, border-color 200ms ease' }}>
                    Découvrir
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16 flex flex-col items-center gap-5">
            {!showAll && (
              <button onClick={() => setShowAll(true)} className="btn-outline">
                Voir les {restaurants.length} restaurants
              </button>
            )}
            <Link to="/restaurants" className="text-sm text-wafu-ink/70 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
              Voir la carte interactive →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-wafu">
          <div className="bg-wafu-pink text-wafu-paper p-10 md:p-20 text-center">
            <h2 className="display text-4xl md:text-6xl leading-[1.05] mb-8 italic">
              Une envie d'Asie ?
            </h2>
            <p className="text-lg md:text-xl text-wafu-paper/90 max-w-xl mx-auto mb-10 leading-relaxed">
              Trouvez le restaurant Wafu le plus proche et laissez-vous tenter par
              l'expérience d'un buffet à volonté.
            </p>
            <Link
              to="/restaurants"
              className="inline-flex items-center gap-2 px-8 py-4 bg-wafu-paper text-wafu-ink font-medium text-sm tracking-wide uppercase hover:bg-wafu-ink hover:text-wafu-paper"
              style={{ transition: 'background-color 200ms ease, color 200ms ease' }}
            >
              Trouver un restaurant
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
