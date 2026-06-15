import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: 'Aucun cookie n\'est déposé',
    body: (
      <>
        <p>
          Le site <span className="font-serif italic">wafu.fr</span> ne dépose
          <strong> aucun cookie</strong> sur votre terminal lors de votre visite.
        </p>
        <p className="mt-3">
          Concrètement&nbsp;:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Aucun cookie de mesure d'audience (ni Google Analytics, ni Matomo, ni équivalent).</li>
          <li>Aucun cookie publicitaire.</li>
          <li>Aucun cookie de personnalisation ou de session.</li>
          <li>Aucun traceur ni pixel de réseau social.</li>
        </ul>
        <p className="mt-3 text-wafu-ink/65 text-[14px]">
          Vous n'avez donc pas à donner ou refuser de consentement à des cookies
          en navigant sur ce site.
        </p>
      </>
    ),
  },
  {
    title: 'Ressources tierces',
    body: (
      <>
        <p>
          Pour son fonctionnement, le site charge des ressources techniques
          auprès de prestataires tiers. Ces ressources peuvent, dans certains
          cas, déposer leurs propres cookies&nbsp;:
        </p>
        <dl className="mt-4 space-y-3 text-[15px]">
          <Tiers
            name="Google Fonts"
            purpose="Polices typographiques. Aucun cookie déposé lors de la livraison des polices ; seules les informations techniques liées à la requête HTTP sont reçues par Google."
          />
          <Tiers
            name="OpenStreetMap"
            purpose="Fonds de cartes pour la carte des restaurants. Aucun cookie déposé."
          />
          <Tiers
            name="GitHub Pages"
            purpose="Hébergement et livraison des pages. Aucun cookie déposé pour la simple consultation."
          />
        </dl>
      </>
    ),
  },
  {
    title: 'Liens externes',
    body: (
      <p>
        Lorsque vous cliquez sur un lien externe (par exemple{' '}
        <span className="font-serif italic">Waze</span> ou{' '}
        <span className="font-serif italic">Google Maps</span> pour un
        itinéraire), vous quittez le site et accédez à un service tiers
        susceptible de déposer ses propres cookies. Nous vous invitons à
        consulter leurs politiques respectives en matière de cookies.
      </p>
    ),
  },
  {
    title: 'Évolution',
    body: (
      <p>
        Si l'usage du site venait à évoluer (ajout d'analytics, par exemple),
        cette page serait mise à jour et un dispositif de recueil du
        consentement, conforme aux recommandations de la CNIL, serait mis en
        place. Dernière mise à jour&nbsp;:{' '}
        <span className="font-serif italic">{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>.
      </p>
    ),
  },
]

function Tiers({ name, purpose }) {
  return (
    <div className="grid grid-cols-12 gap-3 border-b border-wafu-ink/10 pb-3">
      <dt className="col-span-12 sm:col-span-3 font-serif italic text-base text-wafu-ink">{name}</dt>
      <dd className="col-span-12 sm:col-span-9 text-wafu-ink/75">{purpose}</dd>
    </div>
  )
}

export default function CookiesPage() {
  return (
    <div className="pt-24 md:pt-36 pb-20">
      <section className="container-wafu mb-16 md:mb-20">
        <div className="flex gap-5 md:gap-8">
          <div className="flex-shrink-0 pt-3">
            <span className="wafu-rule block h-24 md:h-40" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow mb-5 md:mb-7">Politique des cookies</div>
            <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl leading-[0.95] mb-6">
              <span className="italic">Zéro</span> cookie,<br />
              <span className="text-wafu-pink">zéro traceur</span>.
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-wafu-ink/75 leading-snug max-w-2xl">
              Nous n'utilisons aucun cookie ni traceur sur ce site. Voici le
              détail.
            </p>
          </div>
        </div>
      </section>

      <section className="container-wafu">
        <ul className="border-t border-wafu-ink/20 max-w-4xl">
          {SECTIONS.map((s, i) => (
            <li key={s.title} className="border-b border-wafu-ink/20 py-8 md:py-10">
              <div className="grid md:grid-cols-12 gap-4 md:gap-8">
                <div className="md:col-span-3">
                  <div className="eyebrow-ink mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-serif italic text-2xl md:text-3xl tracking-editorial text-wafu-ink">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-9 text-[15px] md:text-base text-wafu-ink/80 leading-relaxed">
                  {s.body}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col sm:flex-row gap-3">
          <Link to="/mentions-legales" className="btn-outline">Mentions légales</Link>
          <Link to="/confidentialite" className="btn-outline">Confidentialité</Link>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </section>
    </div>
  )
}
