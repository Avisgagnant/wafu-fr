import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="pt-40 pb-32 container-wafu">
      <div className="max-w-xl">
        <div className="eyebrow mb-5 flex items-center gap-3">
          <span className="rule" />
          Erreur 404
        </div>
        <h1 className="display text-6xl md:text-8xl leading-[0.95] mb-6">
          Page <span className="italic text-wafu-pink">introuvable</span>.
        </h1>
        <p className="text-lg text-wafu-ink/70 mb-10 leading-relaxed">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link to="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
