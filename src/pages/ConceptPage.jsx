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
    <div className="pt-32 pb-24">
      {/* HERO */}
      <section className="container-wafu mb-24">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span className="rule" />
            Le concept
          </div>
          <h1 className="display text-5xl md:text-7xl leading-[0.98] mb-8">
            L'art du{' '}
            <span className="italic text-wafu-pink">buffet</span>{' '}
            asiatique.
          </h1>
          <p className="text-xl md:text-2xl text-wafu-ink/75 font-serif italic leading-snug">
            {SITE_COPY.heroSubtitle}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container-wafu mb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 reveal">
          <p className="text-lg text-wafu-ink/80 leading-relaxed mb-6">
            Chez <span className="font-serif italic">Wafu</span>, le buffet à volonté
            devient une véritable invitation au voyage. {SITE_COPY.conceptLead}
          </p>
          <p className="text-lg text-wafu-ink/80 leading-relaxed">
            Sushis, sashimis, brochettes grillées, plats mijotés, soupes parfumées et
            desserts : un voyage culinaire à travers une multitude de saveurs
            authentiques, à découvrir sans modération.
          </p>
        </div>
        <div className="md:col-span-4 md:col-start-9 reveal">
          <div className="border-l border-wafu-ink/15 pl-6 py-2">
            <div className="eyebrow mb-3">Ambiance</div>
            <p className="font-serif text-xl md:text-2xl leading-snug text-wafu-ink">
              {SITE_COPY.ambiance}
            </p>
          </div>
        </div>
      </section>

      {/* INDEPENDENCE */}
      <section className="bg-wafu-ink text-wafu-paper py-24 md:py-32 mb-24">
        <div className="container-wafu grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 reveal">
            <div className="eyebrow text-wafu-pink mb-5 flex items-center gap-3">
              <span className="block w-10 h-px bg-wafu-pink" />
              Indépendance
            </div>
            <h2 className="display text-4xl md:text-5xl leading-[1.05]">
              {SITE_COPY.independenceTitle}
            </h2>
          </div>
          <ul className="md:col-span-7 md:col-start-6 space-y-6 reveal">
            {SITE_COPY.independenceLines.map((line, i) => (
              <li key={line} className="flex gap-5 text-wafu-paper/85 text-lg leading-relaxed">
                <span className="font-serif text-wafu-pink text-2xl leading-none flex-shrink-0 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-wafu mb-24">
        <div className="max-w-2xl mb-16 reveal">
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span className="rule" />
            Nos valeurs
          </div>
          <h2 className="display text-4xl md:text-5xl leading-[1.05]">
            Six engagements partagés par tous les restaurants Wafu.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-wafu-ink/10">
          {VALUES.map((v, i) => (
            <div key={v.title} className="bg-wafu-paper p-8 md:p-10">
              <div className="font-serif text-sm text-wafu-pink mb-4 tracking-editorial">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-2xl text-wafu-ink mb-3 tracking-editorial">
                {v.title}
              </h3>
              <p className="text-sm text-wafu-ink/70 leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-wafu">
        <div className="border-t border-wafu-ink/15 pt-16 text-center">
          <Link to="/restaurants" className="btn-primary">
            Trouver mon restaurant Wafu
          </Link>
        </div>
      </section>
    </div>
  )
}
