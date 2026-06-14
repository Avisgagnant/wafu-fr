import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import RestaurantImage from '../components/RestaurantImage.jsx'
import { restaurants, SITE_COPY } from '../data/restaurants.js'

export default function HomePage() {
  const [showAll, setShowAll] = useState(false)
  const cities = new Set(restaurants.map((r) => r.city)).size
  const regions = new Set(restaurants.map((r) => r.region)).size
  const shown = showAll ? restaurants : restaurants.slice(0, 6)
  const showcase = restaurants.find((r) => r.image) // photo appartenant à Wafu

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-wafu-paper via-wafu-cream to-wafu-beige/40" />
          <div className="absolute top-20 right-10 w-96 h-96 bg-wafu-pink/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-wafu-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container-wafu grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-wafu-pink/10 text-wafu-pink rounded-full mb-6 text-sm font-medium">
              <span className="w-2 h-2 bg-wafu-pink rounded-full animate-pulse" />
              Buffet à Volonté · Saveurs d'Asie
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-wafu-ink mb-6">
              {SITE_COPY.heroTitle}
            </h1>

            <p className="text-lg text-wafu-ink/70 leading-relaxed mb-10 max-w-xl">
              {SITE_COPY.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/restaurants" className="btn-primary text-lg">
                Découvrir nos restaurants
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/concept" className="btn-outline text-lg">Le concept</Link>
            </div>
          </div>

          <div className="relative flex justify-center items-center animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-wafu-pink/15 to-transparent rounded-full blur-3xl" />
            <div className="relative h-80 w-80 md:h-96 md:w-96 lg:h-[26rem] lg:w-[26rem]">
              <Logo />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-wafu-ink/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* INDEPENDENCE NOTICE */}
      <section className="relative py-20 bg-gradient-to-br from-wafu-ink to-wafu-ink/95 text-wafu-cream overflow-hidden">
        <div className="container-wafu relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1.5 bg-wafu-pink/20 text-wafu-pink rounded-full mb-6 text-sm font-medium uppercase tracking-widest">
              À retenir
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Chaque restaurant Wafu est{' '}
              <span className="text-wafu-pink underline decoration-wavy decoration-4 underline-offset-8">
                indépendant
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-wafu-cream/90 leading-relaxed mb-6">
              {SITE_COPY.independenceLines[0]}
            </p>
            <p className="text-lg text-wafu-cream/80 leading-relaxed">
              {SITE_COPY.independenceLines[2]}{' '}
              <strong className="text-wafu-pink">
                Chaque restaurant fixe librement ses propres prix et ses horaires.
              </strong>{' '}
              {SITE_COPY.independenceLines[3]}
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-wafu-cream/5 border border-wafu-cream/10 rounded-sm p-6">
                <div className="text-3xl mb-2">🏮</div>
                <div className="font-bold text-wafu-pink mb-1">Indépendance</div>
                <div className="text-sm text-wafu-cream/70">Une gestion locale et autonome</div>
              </div>
              <div className="bg-wafu-cream/5 border border-wafu-cream/10 rounded-sm p-6">
                <div className="text-3xl mb-2">💴</div>
                <div className="font-bold text-wafu-pink mb-1">Tarifs propres</div>
                <div className="text-sm text-wafu-cream/70">Renseignez-vous auprès du restaurant</div>
              </div>
              <div className="bg-wafu-cream/5 border border-wafu-cream/10 rounded-sm p-6">
                <div className="text-3xl mb-2">🍱</div>
                <div className="font-bold text-wafu-pink mb-1">Buffet à volonté</div>
                <div className="text-sm text-wafu-cream/70">Le concept partagé par tous</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="py-24 container-wafu">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-wafu-pink font-semibold uppercase tracking-widest text-sm mb-3">
              Le concept
            </div>
            <h2 className="section-heading mb-8">Le buffet asiatique à volonté</h2>
            <p className="text-lg text-wafu-ink/80 leading-relaxed mb-6">
              {SITE_COPY.conceptLead}
            </p>
            <p className="text-lg text-wafu-ink/80 leading-relaxed mb-8">
              {SITE_COPY.ambiance} Une cuisine généreuse et variée à découvrir sans
              modération : chaque visite est un voyage au cœur des saveurs de l'Asie.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Restaurants', value: restaurants.length },
                { label: 'Villes', value: cities },
                { label: 'Régions', value: regions },
                { label: 'À volonté', value: '∞' },
              ].map((stat) => (
                <div key={stat.label} className="bg-wafu-paper border border-wafu-ink/10 rounded-sm p-4 text-center">
                  <div className="text-3xl font-extrabold text-wafu-pink">{stat.value}</div>
                  <div className="text-xs text-wafu-ink/60 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-wafu-pink rounded-sm" />
            {showcase ? (
              <Link to={`/restaurants/${showcase.id}`} className="block relative">
                <RestaurantImage
                  src={showcase.image}
                  alt={showcase.name}
                  className="w-full h-[460px] rounded-sm shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-wafu-ink/80 text-wafu-cream px-4 py-2 rounded-sm text-sm backdrop-blur-sm">
                  {showcase.name}
                </div>
              </Link>
            ) : (
              <div className="relative w-full h-[460px] rounded-sm shadow-2xl bg-gradient-to-br from-wafu-pink to-wafu-plum flex items-center justify-center">
                <div className="h-40 w-40"><Logo dark /></div>
              </div>
            )}
            <div className="absolute -bottom-6 -right-6 bg-wafu-pink text-white p-6 rounded-sm shadow-xl max-w-xs">
              <div className="text-2xl font-extrabold mb-1">À volonté</div>
              <div className="text-sm opacity-90">Goûtez à tout, sans limite</div>
            </div>
          </div>
        </div>
      </section>

      {/* RESTAURANTS LIST (inline, expandable) */}
      <section id="restaurants" className="py-24 bg-gradient-to-b from-wafu-paper to-wafu-beige/30">
        <div className="container-wafu">
          <div className="text-center mb-16">
            <div className="text-wafu-pink font-semibold uppercase tracking-widest text-sm mb-3">
              Nos adresses
            </div>
            <h2 className="section-heading mb-4 inline-block">Nos {restaurants.length} restaurants</h2>
            <p className="text-lg text-wafu-ink/70 max-w-2xl mx-auto mt-6">{SITE_COPY.mapIntro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((r) => (
              <Link key={r.id} to={`/restaurants/${r.id}`} className="card group">
                <div className="aspect-[4/3] overflow-hidden bg-wafu-beige/40">
                  <RestaurantImage
                    src={r.image}
                    alt={r.name}
                    className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-wafu-pink uppercase tracking-widest mb-2">{r.region}</div>
                  <h3 className="text-2xl font-bold text-wafu-ink mb-2 group-hover:text-wafu-pink transition-colors">
                    {r.name}
                  </h3>
                  <p className="text-sm text-wafu-ink/60 line-clamp-2">{r.address}</p>
                  <div className="mt-4 flex items-center text-wafu-pink text-sm font-medium">
                    Découvrir
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-col items-center gap-4">
            {!showAll && (
              <button onClick={() => setShowAll(true)} className="btn-primary text-lg">
                Voir nos {restaurants.length} restaurants
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
            <Link to="/restaurants" className="btn-ghost text-sm">
              Voir la carte interactive →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 container-wafu">
        <div className="bg-gradient-to-br from-wafu-pink to-wafu-plum rounded-sm overflow-hidden relative">
          <div className="relative z-10 px-8 py-16 md:p-20 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Une envie d'Asie ?</h2>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
              Trouvez le restaurant Wafu le plus proche et laissez-vous tenter par
              l'expérience d'un buffet à volonté.
            </p>
            <Link to="/restaurants" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-wafu-pink font-bold rounded-sm shadow-2xl hover:bg-wafu-cream transition-all duration-300 hover:-translate-y-1 text-lg">
              Trouver un restaurant
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
