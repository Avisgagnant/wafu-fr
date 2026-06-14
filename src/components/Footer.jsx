import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-wafu-ink text-wafu-cream mt-24">
      <div className="container-wafu py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-14 w-14 bg-wafu-cream rounded-sm p-1">
                <Logo />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold tracking-wider">
                  WAFU
                </div>
                <div className="text-wafu-pink text-xs uppercase tracking-widest">
                  Buffet à Volonté Asiatique
                </div>
              </div>
            </div>
            <p className="text-wafu-cream/70 leading-relaxed max-w-md">
              Une chaîne de restaurants indépendants vous proposant le meilleur de la
              cuisine asiatique en buffet à volonté. Chaque établissement cultive son
              identité tout en partageant nos valeurs : qualité, fraîcheur et convivialité.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-wafu-pink">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-wafu-cream/70 hover:text-wafu-pink transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/concept" className="text-wafu-cream/70 hover:text-wafu-pink transition-colors">
                  Notre concept
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-wafu-cream/70 hover:text-wafu-pink transition-colors">
                  Nos restaurants
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-4 text-wafu-pink">
              Informations
            </h3>
            <ul className="space-y-2 text-wafu-cream/70">
              <li>Restaurants indépendants</li>
              <li>Tarifs propres à chaque établissement</li>
              <li>Contactez directement votre restaurant</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-wafu-cream/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-wafu-cream/50 text-sm">
            © {new Date().getFullYear()} Wafu®. Tous droits réservés.
          </p>
          <p className="text-wafu-cream/50 text-sm italic">
            Le buffet à volonté aux saveurs d'Asie
          </p>
        </div>
      </div>
    </footer>
  )
}
