import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="pt-32 pb-24 container-wafu">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-8xl font-extrabold text-wafu-pink/30 mb-4 leading-none">404</div>
        <h1 className="text-3xl font-bold text-wafu-ink mb-4">Page introuvable</h1>
        <p className="text-xl text-wafu-ink/70 mb-8">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary text-lg">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
