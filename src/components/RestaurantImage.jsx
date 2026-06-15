// Emplacement d'image — utilise le logo Wafu comme placeholder.
// Quand de vraies photos seront ajoutées, on pourra passer `src` pour les afficher.
export default function RestaurantImage({ src, alt = 'Wafu', className = '', eager = false }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`object-cover ${className}`}
      />
    )
  }
  return (
    <div
      className={`flex items-center justify-center bg-wafu-sand border border-wafu-ink/10 ${className}`}
      role="img"
      aria-label={alt}
    >
      <img
        src="/images/logo.png"
        alt=""
        aria-hidden
        className="w-1/3 max-w-[7rem] h-auto opacity-50"
      />
    </div>
  )
}
