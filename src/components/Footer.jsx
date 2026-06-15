import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-wafu-ink text-wafu-paper mt-20 md:mt-32">
      <div className="container-wafu py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Wafu"
                className="h-10 w-10 object-contain"
              />
              <span className="font-serif text-2xl tracking-editorial leading-none">Wafu</span>
            </div>
            <p className="text-wafu-paper/65 leading-relaxed max-w-md text-[15px]">
              Une chaîne de restaurants <span className="font-serif italic text-wafu-paper">indépendants</span> proposant
              le meilleur de la cuisine asiatique en buffet à volonté. Chaque adresse cultive son
              identité ; toutes partagent la même exigence.
            </p>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <div className="eyebrow text-wafu-pink mb-4">Navigation</div>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link to="/" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Accueil</Link></li>
              <li><Link to="/concept" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Le concept</Link></li>
              <li><Link to="/restaurants" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Restaurants</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-wafu-pink mb-4">Repères</div>
            <ul className="space-y-2.5 text-[15px] text-wafu-paper/80">
              <li>Restaurants indépendants</li>
              <li>Prix propres à chaque adresse</li>
              <li>Contact direct</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-wafu-pink mb-4">Informations légales</div>
            <ul className="space-y-2.5 text-[15px]">
              <li><Link to="/mentions-legales" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Mentions légales</Link></li>
              <li><Link to="/confidentialite" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Confidentialité</Link></li>
              <li><Link to="/cookies" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Cookies</Link></li>
              <li className="pt-1">
                <a href="mailto:contact@wafubar.fr" className="text-wafu-paper/80 hover:text-wafu-pink font-mono text-[13px]" style={{ transition: 'color 200ms ease' }}>
                  contact@wafubar.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-wafu-paper/10 grid sm:grid-cols-2 gap-3 items-baseline">
          <p className="text-wafu-paper/45 text-[11px] tracking-stamp uppercase">
            © {new Date().getFullYear()} WAFU FRANCE — SAS au capital de 10 000 € — RCS Compiègne 848 708 095
          </p>
          <p className="text-wafu-paper/55 text-base italic font-serif sm:text-right">
            L'art du buffet asiatique.
          </p>
        </div>
      </div>
    </footer>
  )
}
