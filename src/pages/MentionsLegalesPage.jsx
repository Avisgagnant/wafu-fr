import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    title: 'Éditeur du site',
    body: (
      <>
        <p>Le site <span className="font-serif italic">wafu.fr</span> est édité par&nbsp;:</p>
        <dl className="mt-4 space-y-2 text-[15px]">
          <Row label="Raison sociale" value="WAFU FRANCE" />
          <Row label="Forme juridique" value="Société par actions simplifiée (SAS)" />
          <Row label="Capital social" value="10 000 €" />
          <Row label="Siège social" value="21B Rue de la Fontaine Saint Rieul, 60300 Senlis, France" />
          <Row label="RCS" value="Compiègne — 848 708 095" />
          <Row label="Immatriculation" value="28 février 2019" />
          <Row label="SIRET (siège)" value="848 708 095 00023" />
          <Row label="N° TVA intracommunautaire" value="FR09 848708095" />
          <Row label="Adresse de contact" value={<a href="mailto:contact@wafubar.fr" className="text-wafu-pink hover:underline">contact@wafubar.fr</a>} />
        </dl>
      </>
    ),
  },
  {
    title: 'Directeur de la publication',
    body: (
      <p>
        Le directeur de la publication du site, au sens de l'article 6 III, 2°
        de la loi n° 2004-575 du 21 juin 2004 (LCEN), est{' '}
        <span className="font-serif italic">Jin Jian</span>, Président de la société WAFU FRANCE.
      </p>
    ),
  },
  {
    title: 'Hébergement',
    body: (
      <>
        <p>Le site est hébergé par&nbsp;:</p>
        <dl className="mt-4 space-y-2 text-[15px]">
          <Row label="Hébergeur" value="GitHub, Inc. (GitHub Pages)" />
          <Row label="Adresse" value="88 Colin P. Kelly Jr Street, San Francisco, CA 94107, États-Unis" />
          <Row label="Site web" value={<a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-wafu-pink hover:underline">github.com</a>} />
        </dl>
      </>
    ),
  },
  {
    title: 'Propriété intellectuelle',
    body: (
      <>
        <p>
          L'ensemble des éléments du site (textes, photographies, graphismes,
          logos, marque <span className="font-serif italic">Wafu</span>,
          architecture, mise en page, code source, base de données) est la
          propriété exclusive de WAFU FRANCE, sauf mention contraire.
        </p>
        <p className="mt-3">
          Toute reproduction, représentation, modification, publication, adaptation
          ou exploitation, totale ou partielle, des éléments du site, quel que
          soit le moyen ou le procédé utilisé, est interdite sans l'autorisation
          écrite préalable de WAFU FRANCE et constitue une contrefaçon
          sanctionnée par les articles L.335-2 et suivants du Code de la
          propriété intellectuelle.
        </p>
        <p className="mt-3 text-wafu-ink/65 text-[14px]">
          Les fonds cartographiques sont fournis par OpenStreetMap, sous licence
          ODbL. Les polices typographiques sont fournies par Google Fonts.
        </p>
      </>
    ),
  },
  {
    title: 'Responsabilité',
    body: (
      <>
        <p>
          Les informations diffusées sur le site sont fournies à titre indicatif.
          WAFU FRANCE met tout en œuvre pour assurer leur exactitude et leur mise
          à jour, mais ne peut garantir l'absence d'erreurs ou d'omissions.
        </p>
        <p className="mt-3">
          Chaque restaurant figurant dans l'annuaire est{' '}
          <span className="font-serif italic">indépendant</span> et fixe librement
          ses prix, horaires et formules. Les horaires affichés sont indicatifs ;
          il appartient au visiteur de les confirmer directement auprès de
          l'établissement concerné.
        </p>
        <p className="mt-3">
          WAFU FRANCE ne saurait être tenue responsable des dommages directs ou
          indirects résultant de l'accès au site ou de l'utilisation des
          informations qui y figurent, y compris l'inaccessibilité, les pertes
          de données ou la présence de virus.
        </p>
      </>
    ),
  },
  {
    title: 'Liens hypertextes',
    body: (
      <p>
        Le site peut contenir des liens vers des sites tiers (notamment Waze et
        Google Maps pour l'itinéraire). WAFU FRANCE n'exerce aucun contrôle sur
        ces sites et décline toute responsabilité quant à leur contenu ou à
        leurs pratiques en matière de protection des données.
      </p>
    ),
  },
  {
    title: 'Droit applicable',
    body: (
      <p>
        Le présent site et les mentions légales sont régis par le droit français.
        En cas de litige, et après tentative de résolution amiable, les
        tribunaux français seront seuls compétents.
      </p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <p>
        Pour toute question relative au site ou à ses contenus, vous pouvez
        écrire à{' '}
        <a href="mailto:contact@wafubar.fr" className="text-wafu-pink hover:underline font-mono text-[15px]">
          contact@wafubar.fr
        </a>
        .
      </p>
    ),
  },
]

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-12 gap-3 border-b border-wafu-ink/10 pb-2">
      <dt className="col-span-12 sm:col-span-4 eyebrow-ink">{label}</dt>
      <dd className="col-span-12 sm:col-span-8 text-wafu-ink">{value}</dd>
    </div>
  )
}

export default function MentionsLegalesPage() {
  return (
    <div className="pt-24 md:pt-36 pb-20">
      <section className="container-wafu mb-16 md:mb-20">
        <div className="flex gap-5 md:gap-8">
          <div className="flex-shrink-0 pt-3">
            <span className="wafu-rule block h-24 md:h-40" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="eyebrow mb-5 md:mb-7">Informations légales</div>
            <h1 className="display text-[2.6rem] sm:text-6xl md:text-7xl leading-[0.95] mb-6">
              Mentions <span className="italic text-wafu-pink">légales</span>.
            </h1>
            <p className="font-serif italic text-lg md:text-xl text-wafu-ink/75 leading-snug max-w-2xl">
              Conformément à l'article 6 III de la loi n° 2004-575 du 21 juin
              2004 pour la confiance dans l'économie numérique.
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
          <Link to="/confidentialite" className="btn-outline">Confidentialité</Link>
          <Link to="/cookies" className="btn-outline">Cookies</Link>
          <Link to="/" className="btn-primary">Retour à l'accueil</Link>
        </div>
      </section>
    </div>
  )
}
