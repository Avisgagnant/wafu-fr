import Logo from './Logo.jsx'

// Affiche la photo (propriété de Wafu) si disponible,
// sinon un visuel de marque (logo sur fond dégradé) — aucune image tierce.
export default function RestaurantImage({ src, alt, className = '' }) {
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} />
  }
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-wafu-beige via-wafu-cream to-wafu-beige/60 ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="h-1/2 max-h-40 w-auto opacity-70">
        <Logo />
      </div>
    </div>
  )
}
