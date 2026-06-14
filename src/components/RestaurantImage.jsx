import Logo from './Logo.jsx'

export default function RestaurantImage({ src, alt, className = '', eager = false }) {
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
      className={`flex items-center justify-center bg-wafu-paper ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="h-1/3 max-h-24 w-auto opacity-40">
        <Logo />
      </div>
    </div>
  )
}
