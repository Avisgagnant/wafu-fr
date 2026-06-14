import { Link } from 'react-router-dom'
import { SITE_COPY } from '../data/restaurants.js'
import useReveal from '../hooks/useReveal.js'

const VALUES = [
  { title: 'Fraîcheur', text: "Des produits sélectionnés avec soin et préparés au quotidien." },
  { title: 'Savoir-faire', text: "Des chefs formés aux techniques traditionnelles asiatiques." },
  { title: 'Partage', text: "Une table conviviale pour se retrouver autour d'un bon moment." },
  { title: 'Authenticité', text: "Des recettes fidèles aux traditions, dans un décor asiatique." },
  { title: 'Qualité', text: "Une même exigence partagée par tous les restaurants Wafu." },
  { title: 'Diversité', text: "Une cuisine qui célèbre les saveurs de toute l'Asie." },
]

export default function ConceptPage() {
  useReveal()
  return (
    <div className="pt-24 md:pt-36 pb-20">
      {/* HERO */}
      <section className="container-wafu mb-16 md:mb-24">
        <div className="flex gap-5 md:gap-8">
          <div className="flex-shrink-0 pt-3">
            <span className="wafu-rule block h-20 md:h-32" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow mb-5 md:mb-7">Le concept</div>
            <h1 className="display text-[2.6rem] sm:text-6xl md:text-8xl leading-[0.95] mb-7">
              <span className="italic">L'art</span> du<br />
              <span className="text-wafu-pink">buffet</span><br />
              <span className="italic">asiatique.</span>
            </h1>
            <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-wafu-ink/80 leading-snug max-w-2xl">
              {SITE_COPY.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container-wafu mb-16 md:mb-24 grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-7 reveal">
          <p className="text-base md:text-lg text-wafu-ink/80 leading-relaxed mb-5">
            Chez <span className="font-serif italic">Wafu</span>, le buffet à volonté
            devient une véritable invitation au voyage. {SITE_COPY.conceptLead}
          </p>
          <p className="text-base md:text-lg text-wafu-ink/80 leading-relaxed">
            Sushis, sashimis, brochettes grillées, plats mijotés, soupes parfumées et
            desserts : un voyage culinaire à travers une multitude de saveurs
            authentiques, à découvrir sans modération.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 reveal">
          <div className="border-l-2 border-wafu-pink pl-5 py-2">
            <div className="eyebrow mb-3">Ambiance</div>
            <p className="font-serif italic text-xl md:text-2xl leading-snug text-wafu-ink">
              {SITE_COPY.ambiance}
            </p>
          </div>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="bg-wafu-ink text-wafu-paper py-20 md:py-28 mb-16 md:mb-24">
        <div className="container-wafu grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5 reveal">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-wafu-pink" />
              <span className="eyebrow text-wafu-pink">Indépendance</span>
            </div>
            <h2 className="display text-3xl md:text-5xl leading-[1.02]">
              {SITE_COPY.independenceTitle}
            </h2>
          </div>
          <ul className="md:col-span-7 space-y-6 reveal">
            {SITE_COPY.independenceLines.map((line, i) => (
              <li key={line} className="flex gap-5 text-wafu-paper/85 text-base md:text-lg leading-relaxed">
                <span className="font-serif italic text-wafu-pink text-2xl leading-none flex-shrink-0 mt-1 w-7">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-wafu mb-16 md:mb-24">
        <div className="max-w-2xl mb-12 md:mb-16 reveal">
          <div className="flex items-center gap-3 mb-5">
            <span className="wafu-rule-h" />
            <span className="eyebrow">Nos valeurs</span>
          </div>
          <h2 className="display text-3xl sm:text-4xl md:text-5xl leading-[1.02]">
            Six engagements partagés par <span className="italic">tous</span> les restaurants Wafu.
          </h2>
        </div>

        <ul className="border-t border-wafu-ink/20">
          {VALUES.map((v, i) => (
            <li key={v.title} className="border-b border-wafu-ink/20">
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 items-baseline">
                <div className="col-span-2 sm:col-span-1 eyebrow-ink">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="col-span-10 sm:col-span-4 md:col-span-3 font-serif italic text-2xl md:text-3xl text-wafu-ink tracking-editorial">
                  {v.title}
                </h3>
                <p className="col-span-12 sm:col-span-7 md:col-span-8 text-[15px] md:text-base text-wafu-ink/70 leading-relaxed">
                  {v.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="container-wafu text-center">
        <Link to="/restaurants" className="btn-primary">
          Trouver mon restaurant Wafu
        </Link>
      </section>
    </div>
  )
}
