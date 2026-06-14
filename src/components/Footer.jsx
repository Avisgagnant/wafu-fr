import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-wafu-ink text-wafu-paper mt-24">
      <div className="container-wafu py-16">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 bg-wafu-paper p-1">
                <Logo />
              </div>
              <span className="font-serif text-2xl tracking-editorial leading-none">Wafu</span>
            </div>
            <p className="text-wafu-paper/70 leading-relaxed max-w-md text-sm">
              Une chaîne de restaurants indépendants vous proposant le meilleur de la
              cuisine asiatique en buffet à volonté. Chaque établissement cultive son
              identité ; tous partagent la même exigence : qualité, fraîcheur et
              convivialité.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-wafu-pink mb-4">Navigation</div>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Accueil</Link></li>
              <li><Link to="/concept" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Notre concept</Link></li>
              <li><Link to="/restaurants" className="text-wafu-paper/80 hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>Nos restaurants</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-wafu-pink mb-4">À retenir</div>
            <ul className="space-y-3 text-sm text-wafu-paper/80">
              <li>Restaurants indépendants</li>
              <li>Prix propres à chaque adresse</li>
              <li>Contact direct par établissement</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-wafu-paper/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-wafu-paper/50 text-xs tracking-wide">
            © {new Date().getFullYear()} Wafu®
          </p>
          <p className="text-wafu-paper/50 text-xs tracking-wide italic font-serif">
            L'art du buffet asiatique
          </p>
        </div>
      </div>
    </footer>
  )
}
