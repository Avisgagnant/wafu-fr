import { Link } from 'react-router-dom'
import { restaurants, SITE_COPY } from '../data/restaurants.js'
import useReveal from '../hooks/useReveal.js'
import RestaurantImage from '../components/RestaurantImage.jsx'

export default function HomePage() {
  useReveal()
  const cities = new Set(restaurants.map((r) => r.city)).size
  const regionsMap = restaurants.reduce((acc, r) => {
    acc[r.region] = (acc[r.region] || 0) + 1
    return acc
  }, {})
  const regions = Object.entries(regionsMap).sort((a, b) => b[1] - a[1])

  return (
    <>
      {/* HERO */}
      <section className="relative pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="container-wafu">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-8 flex gap-5 md:gap-8">
              {/* Vertical pink rule — identity motif */}
              <div className="flex-shrink-0 pt-3">
                <span className="wafu-rule block h-24 md:h-40" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="eyebrow mb-5 md:mb-7">Maison Wafu — depuis toujours</div>

                <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] mb-7">
                  <span className="italic">L'art</span><br />
                  du buffet<br />
                  <span className="text-wafu-pink italic">asiatique.</span>
                </h1>

                <p className="text-base sm:text-lg text-wafu-ink/75 leading-relaxed max-w-xl mb-9 font-serif">
                  {SITE_COPY.heroSubtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/restaurants" className="btn-primary">
                    Trouver un restaurant
                  </Link>
                  <Link to="/concept" className="btn-outline">Le concept</Link>
                </div>
              </div>
            </div>

            {/* Image slot — logo placeholder */}
            <div className="md:col-span-4 reveal">
              <RestaurantImage
                alt="Wafu"
                eager
                className="w-full aspect-[16/10] md:aspect-[3/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="bg-wafu-ink text-wafu-paper">
        <div className="container-wafu py-20 md:py-32">
          <div className="grid md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5 mb-8 md:mb-0 reveal">
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-8 h-px bg-wafu-pink" />
                <span className="eyebrow text-wafu-pink">À retenir</span>
              </div>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
                Chaque restaurant<br />
                est <span className="italic text-wafu-pink">indépendant</span>.
              </h2>
            </div>

            <div className="md:col-span-7 reveal">
              <p className="font-serif italic text-xl sm:text-2xl text-wafu-paper/90 leading-snug mb-6">
                « {SITE_COPY.independenceLines[0]} »
              </p>
              <p className="text-[15px] sm:text-base text-wafu-paper/70 leading-relaxed max-w-xl">
                {SITE_COPY.independenceLines[2]} Chaque restaurant fixe librement ses
                propres prix et ses horaires. {SITE_COPY.independenceLines[3]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GIANT EDITORIAL COUNT — identity moment */}
      <section className="py-20 md:py-32">
        <div className="container-wafu">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-start">
            <div className="md:col-span-5 reveal">
              <div className="flex items-center gap-3 mb-5">
                <span className="wafu-rule-h" />
                <span className="eyebrow">Notre présence</span>
              </div>
              <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.02] mb-6">
                Une <span className="italic">maison</span>,<br />
                vingt-sept <span className="italic text-wafu-pink">adresses</span>.
              </h2>
              <p className="text-[15px] sm:text-base text-wafu-ink/70 leading-relaxed max-w-md">
                {SITE_COPY.conceptLead}
              </p>
            </div>

            <div className="md:col-span-7 md:pl-10 md:border-l md:border-wafu-ink/15 reveal">
              <div
                className="font-serif italic text-[10rem] sm:text-[14rem] md:text-[18rem] leading-[0.78] text-wafu-ink tracking-editorial"
                aria-hidden
              >
                {restaurants.length}
              </div>
              <div className="grid grid-cols-2 mt-6 sm:mt-8 border-t border-wafu-ink/15">
                <div className="py-4 sm:py-6 pr-4 border-r border-wafu-ink/15">
                  <div className="eyebrow-ink mb-1">Villes</div>
                  <div className="font-serif text-3xl sm:text-4xl tracking-editorial">{cities}</div>
                </div>
                <div className="py-4 sm:py-6 pl-4">
                  <div className="eyebrow-ink mb-1">Régions</div>
                  <div className="font-serif text-3xl sm:text-4xl tracking-editorial">{regions.length}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGION INDEX — type-only, no images */}
      <section className="py-20 md:py-32 bg-wafu-sand">
        <div className="container-wafu">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="wafu-rule-h" />
              <span className="eyebrow">Régions</span>
            </div>
            <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.02] max-w-2xl">
              Trouvez la <span className="italic">vôtre</span>.
            </h2>
          </div>

          <ul className="border-t border-wafu-ink/20">
            {regions.map(([region, count], i) => (
              <li key={region} className="border-b border-wafu-ink/20">
                <Link
                  to={`/restaurants?region=${encodeURIComponent(region)}`}
                  className="group flex items-center justify-between gap-4 py-5 md:py-7 hover:text-wafu-pink"
                  style={{ transition: 'color 200ms ease' }}
                >
                  <span className="flex items-baseline gap-4 md:gap-6 min-w-0 flex-1">
                    <span className="eyebrow-ink shrink-0 w-7 md:w-10">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-editorial truncate">
                      {region}
                    </span>
                  </span>
                  <span className="flex items-center gap-4 md:gap-8 shrink-0">
                    <span className="eyebrow-ink hidden sm:inline">
                      {count} {count > 1 ? 'restaurants' : 'restaurant'}
                    </span>
                    <span className="sm:hidden text-sm text-wafu-ink/60">{count}</span>
                    <span className="text-wafu-ink/40 group-hover:text-wafu-pink group-hover:translate-x-1 inline-block" style={{ transition: 'color 200ms ease, transform 200ms ease' }}>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link to="/restaurants" className="btn-outline">
              Voir tous nos restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32">
        <div className="container-wafu">
          <div className="bg-wafu-pink text-wafu-paper p-8 sm:p-14 md:p-20">
            <div className="max-w-2xl">
              <div className="eyebrow text-wafu-paper/80 mb-5">Réservation directe</div>
              <h2 className="display text-3xl sm:text-5xl md:text-6xl leading-[1.02] mb-6 italic">
                Une envie d'Asie&nbsp;?
              </h2>
              <p className="font-serif text-lg sm:text-xl text-wafu-paper/90 leading-snug mb-8 max-w-xl">
                Trouvez le restaurant Wafu le plus proche et laissez-vous tenter par
                l'expérience d'un buffet à volonté.
              </p>
              <Link
                to="/restaurants"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-wafu-paper text-wafu-ink font-medium text-[13px] tracking-stamp uppercase hover:bg-wafu-ink hover:text-wafu-paper min-h-[48px]"
                style={{ transition: 'background-color 200ms ease, color 200ms ease' }}
              >
                Trouver un restaurant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
