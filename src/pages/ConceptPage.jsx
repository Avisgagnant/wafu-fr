import { Link } from 'react-router-dom'
import { SITE_COPY } from '../data/restaurants.js'

export default function ConceptPage() {
  return (
    <div className="pt-24 pb-16">
      {/* HERO */}
      <section className="container-wafu py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-wafu-pink font-semibold uppercase tracking-widest text-sm mb-3">Le concept</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-wafu-ink mb-6">
            {SITE_COPY.heroTitle}
          </h1>
          <p className="text-xl text-wafu-ink/70 leading-relaxed">
            {SITE_COPY.heroSubtitle}
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="container-wafu py-12">
        <div className="max-w-4xl mx-auto space-y-8 text-lg text-wafu-ink/80 leading-relaxed">
          <p>
            Chez <strong>Wafu</strong>, le buffet à volonté devient une véritable
            invitation au voyage. {SITE_COPY.conceptLead}
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="bg-wafu-paper border-l-4 border-wafu-pink p-6 rounded-r-sm">
              <h3 className="text-2xl font-bold text-wafu-ink mb-3">Le buffet à volonté</h3>
              <p className="text-base text-wafu-ink/70">
                Goûtez à tout, à votre rythme, sans limite. Sushis, sashimis, brochettes
                grillées, plats mijotés, soupes parfumées et desserts : un véritable voyage
                culinaire à travers une multitude de saveurs authentiques.
              </p>
            </div>
            <div className="bg-wafu-paper border-l-4 border-wafu-pink p-6 rounded-r-sm">
              <h3 className="text-2xl font-bold text-wafu-ink mb-3">Une ambiance zen</h3>
              <p className="text-base text-wafu-ink/70">
                {SITE_COPY.ambiance} Un décor inspiré de l'esthétique asiatique pour une
                parenthèse de douceur et de raffinement, au cœur de la ville.
              </p>
            </div>
          </div>

          {/* INDEPENDENCE — official */}
          <div className="bg-gradient-to-br from-wafu-ink to-wafu-ink/90 text-wafu-cream rounded-sm p-8 my-8 relative overflow-hidden">
            <h3 className="relative text-2xl md:text-3xl font-extrabold mb-5 text-wafu-pink">
              {SITE_COPY.independenceTitle}
            </h3>
            <ul className="relative space-y-3 text-wafu-cream/90 text-lg">
              {SITE_COPY.independenceLines.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="text-wafu-pink mt-1.5 flex-shrink-0">◆</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="section-heading mb-8 inline-block">Nos valeurs</h2>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            {[
              { icon: '🌿', title: 'Fraîcheur', description: 'Des produits sélectionnés avec soin et préparés au quotidien.' },
              { icon: '👨‍🍳', title: 'Savoir-faire', description: 'Des chefs formés aux techniques traditionnelles asiatiques.' },
              { icon: '🤝', title: 'Partage', description: 'Une table conviviale pour se retrouver autour d\'un bon moment.' },
              { icon: '🏯', title: 'Authenticité', description: 'Des recettes fidèles aux traditions, dans un décor asiatique.' },
              { icon: '✨', title: 'Qualité', description: 'Une même exigence partagée par tous les restaurants Wafu.' },
              { icon: '🌏', title: 'Diversité', description: 'Une cuisine qui célèbre les saveurs de toute l\'Asie.' },
            ].map((value) => (
              <div key={value.title} className="bg-white border border-wafu-ink/10 rounded-sm p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-bold text-wafu-ink mb-2">{value.title}</h3>
                <p className="text-sm text-wafu-ink/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/restaurants" className="btn-primary text-lg">
            Trouver mon restaurant Wafu
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
