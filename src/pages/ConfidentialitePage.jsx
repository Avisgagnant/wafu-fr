import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: 'Responsable de traitement',
    body: (
      <>
        <p>
          Le responsable de traitement des données personnelles, au sens du
          Règlement (UE) 2016/679 (RGPD) et de la loi n° 78-17 du 6 janvier 1978
          modifiée (loi Informatique et Libertés), est&nbsp;:
        </p>
        <p className="mt-3">
          <strong className="font-serif italic">WAFU FRANCE</strong>, SAS au
          capital de 10 000 €, 21B Rue de la Fontaine Saint Rieul, 60300 Senlis,
          immatriculée au RCS de Compiègne sous le numéro 848 708 095.
        </p>
        <p className="mt-3">
          Contact :{' '}
          <a href="mailto:contact@wafubar.fr" className="text-wafu-pink hover:underline font-mono">
            contact@wafubar.fr
          </a>
        </p>
      </>
    ),
  },
  {
    title: 'Données collectées par le site',
    body: (
      <>
        <p>
          Le site <span className="font-serif italic">wafu.fr</span> est
          purement informatif et{' '}
          <strong>ne collecte aucune donnée personnelle</strong> directement
          auprès de ses visiteurs. En particulier&nbsp;:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>Aucun formulaire de contact, d'inscription ou de réservation.</li>
          <li>Aucun outil d'analyse d'audience (pas de Google Analytics, pas de Matomo, etc.).</li>
          <li>Aucun cookie publicitaire ou de mesure d'audience.</li>
          <li>Aucun compte utilisateur ni profilage.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Ressources tierces et données techniques',
    body: (
      <>
        <p>
          Pour fonctionner, le site charge des ressources auprès de services
          tiers. Ces services peuvent recevoir votre adresse IP et des
          informations techniques (navigateur, système, version) du fait du
          fonctionnement même d'Internet&nbsp;:
        </p>
        <dl className="mt-4 space-y-3 text-[15px]">
          <Tiers
            name="Google Fonts"
            purpose="Affichage des polices typographiques Cormorant Garamond et Inter."
            url="https://policies.google.com/privacy"
          />
          <Tiers
            name="OpenStreetMap"
            purpose="Affichage des fonds cartographiques sur les pages Restaurants."
            url="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
          />
          <Tiers
            name="GitHub Pages"
            purpose="Hébergement du site (livraison des pages HTML, CSS et JavaScript)."
            url="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
          />
        </dl>
        <p className="mt-4 text-wafu-ink/65 text-[14px]">
          Ces requêtes techniques ne sont pas utilisées par WAFU FRANCE à des
          fins de profilage, de publicité ou de mesure d'audience.
        </p>
      </>
    ),
  },
  {
    title: 'Liens externes',
    body: (
      <p>
        Lorsque vous cliquez sur un bouton{' '}
        <span className="font-serif italic">Waze</span> ou{' '}
        <span className="font-serif italic">Google Maps</span> pour obtenir un
        itinéraire, vous êtes redirigé vers le service concerné, qui devient
        responsable de traitement des données que vous lui transmettez. Nous
        vous invitons à consulter leurs politiques de confidentialité respectives.
      </p>
    ),
  },
  {
    title: 'Vos droits',
    body: (
      <>
        <p>
          Bien que ce site ne collecte aucune donnée personnelle, le RGPD vous
          reconnaît un certain nombre de droits que vous pouvez exercer auprès
          de WAFU FRANCE&nbsp;:
        </p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5">
          <li>droit d'accès (art. 15)&nbsp;;</li>
          <li>droit de rectification (art. 16)&nbsp;;</li>
          <li>droit à l'effacement (art. 17)&nbsp;;</li>
          <li>droit à la limitation du traitement (art. 18)&nbsp;;</li>
          <li>droit à la portabilité (art. 20)&nbsp;;</li>
          <li>droit d'opposition (art. 21)&nbsp;;</li>
          <li>droit de définir des directives relatives au sort de vos données après votre décès.</li>
        </ul>
        <p className="mt-4">
          Pour exercer ces droits, écrivez à{' '}
          <a href="mailto:contact@wafubar.fr" className="text-wafu-pink hover:underline font-mono">
            contact@wafubar.fr
          </a>{' '}
          en précisant l'objet de votre demande. Une réponse vous sera apportée
          dans un délai d'un mois à compter de la réception.
        </p>
      </>
    ),
  },
  {
    title: 'Réclamation auprès de la CNIL',
    body: (
      <p>
        Si, après nous avoir contactés, vous estimez que vos droits ne sont pas
        respectés, vous avez la possibilité d'introduire une réclamation auprès
        de la Commission Nationale de l'Informatique et des Libertés (CNIL) — 3
        Place de Fontenoy, TSA 80715, 75334 PARIS CEDEX 07 —{' '}
        <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer" className="text-wafu-pink hover:underline">
          cnil.fr
        </a>.
      </p>
    ),
  },
  {
    title: 'Mise à jour',
    body: (
      <p>
        La présente politique pourra être modifiée pour s'adapter aux évolutions
        légales et techniques. La dernière mise à jour date du{' '}
        <span className="font-serif italic">{new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>.
      </p>
    ),
  },
]

function Tiers({ name, purpose, url }) {
  return (
    <div className="grid grid-cols-12 gap-3 border-b border-wafu-ink/10 pb-3">
      <dt className="col-span-12 sm:col-span-3 font-serif italic text-base text-wafu-ink">{name}</dt>
      <dd className="col-span-12 sm:col-span-9 text-wafu-ink/75">
        {purpose}
        <a href={url} target="_blank" rel="noopener noreferrer" className="block mt-1 text-wafu-pink hover:underline text-[13px]">
          Politique de confidentialité →
        </a>
      </dd>
    </div>
  )
}

export default function ConfidentialitePage() {
  return (
    <div className="pt-24 md:pt-36 pb-20">
      <section className="container-wafu mb-16 md:mb-20">
        <div className="flex gap-5 md:gap-8">
          <div className="flex-shrink-0 pt-3">
            <span className="wafu-rule block h-24 md:h-40" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow mb-5 md:mb-7">Vie privée</div>
            <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl leading-[0.95] mb-6">
              <span className="italic">Politique</span> de<br />
              <span className="text-wafu-pink">confidentialité</span>.
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-wafu-ink/75 leading-snug max-w-2xl">
              Ce site est purement informatif et ne collecte aucune donnée
              personnelle. Voici le détail de nos engagements en matière de vie
              privée.
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
          <Link to="/cookies" className="btn-outline">Cookies</Link>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </section>
    </div>
  )
}
