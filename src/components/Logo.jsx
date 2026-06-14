// Logo officiel Wafu (PNG à fond transparent) dans public/images/logo.png
// dark=true : silhouette claire pour les fonds sombres (pied de page)
export default function Logo({ className = '', dark = false }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/images/logo.png"
        alt="Wafu — Restaurant Japonais"
        className={`h-full w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
      />
    </div>
  )
}
