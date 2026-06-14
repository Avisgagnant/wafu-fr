import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="pt-32 md:pt-44 pb-24 container-wafu">
      <div className="flex gap-5 md:gap-8">
        <div className="flex-shrink-0 pt-3">
          <span className="wafu-rule block h-24 md:h-32" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="eyebrow mb-5">Erreur 404</div>
          <h1 className="display text-5xl sm:text-7xl md:text-8xl leading-[0.95] mb-6">
            <span className="italic">Introuvable.</span>
          </h1>
          <p className="font-serif italic text-lg md:text-xl text-wafu-ink/75 mb-10 leading-snug max-w-md">
            Cette page n'existe pas ou a été déplacée.
          </p>
          <Link to="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
