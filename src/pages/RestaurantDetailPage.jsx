import { useParams, Link, Navigate } from 'react-router-dom'
import { restaurants } from '../data/restaurants.js'
import RestaurantImage from '../components/RestaurantImage.jsx'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'

const wafuIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="position: relative; transform: translate(-50%, -100%);">
    <svg width="34" height="46" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pinGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FF6B9D"/>
          <stop offset="100%" stop-color="#BE185D"/>
        </linearGradient>
      </defs>
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z"
        fill="url(#pinGrad2)" stroke="#1A1A1A" stroke-width="1.5"/>
      <circle cx="18" cy="18" r="7" fill="#FBF7EF"/>
      <circle cx="18" cy="18" r="3.2" fill="#DA2B79"/>
    </svg>
  </div>`,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
})

export default function RestaurantDetailPage() {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === id)

  if (!restaurant) {
    return <Navigate to="/restaurants" replace />
  }

  return (
    <div className="pt-24 pb-16">
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <RestaurantImage src={restaurant.image} alt={restaurant.name} className="w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-wafu-ink via-wafu-ink/60 to-transparent" />
        </div>
        <div className="relative z-10 container-wafu pb-12 text-wafu-cream">
          <Link
            to="/restaurants"
            className="inline-flex items-center gap-2 text-wafu-cream/70 hover:text-wafu-pink transition-colors mb-4 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour à la liste
          </Link>
          <div className="text-wafu-pink uppercase tracking-widest text-sm mb-2">{restaurant.region}</div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{restaurant.name}</h1>
          <p className="text-lg text-wafu-cream/80 max-w-2xl">{restaurant.description}</p>
        </div>
      </section>

      {/* QUICK ACTIONS — Itinéraire */}
      <section className="container-wafu -mt-8 relative z-20">
        <div className="bg-white rounded-sm shadow-2xl border border-wafu-ink/5 p-6 md:p-8">
          <h2 className="text-sm uppercase tracking-widest text-wafu-ink/50 mb-4 text-center">
            Itinéraire vers ce restaurant
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a
              href={restaurant.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-wafu-ink text-wafu-cream rounded-sm hover:bg-wafu-pink transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.54 6.63c.69 1.36 1.04 2.83 1.04 4.37 0 5.46-5.16 9.9-11.54 9.9-.85 0-1.69-.08-2.49-.23-.61.42-2.12 1.31-4.34 1.13.41-.6 1.03-1.7 1.13-2.79C1.91 17.27.42 14.83.42 12c0-5.46 5.16-9.9 11.54-9.9 3.7 0 7 1.5 9.08 3.85zm-2.79 3.87c.65 0 1.17-.52 1.17-1.17 0-.65-.52-1.17-1.17-1.17-.65 0-1.17.52-1.17 1.17 0 .65.52 1.17 1.17 1.17zm-7.5 0c.65 0 1.17-.52 1.17-1.17 0-.65-.52-1.17-1.17-1.17-.65 0-1.17.52-1.17 1.17 0 .65.52 1.17 1.17 1.17zm6.46 3.05c.27-.43.04-.99-.45-1.13-.21-.06-.43.01-.59.16-1.07 1.05-2.59 1.7-4.27 1.7-1.69 0-3.2-.65-4.27-1.7-.16-.16-.39-.22-.59-.16-.49.14-.71.7-.44 1.13 1.16 1.86 3.25 3.1 5.31 3.1 2.05 0 4.14-1.24 5.3-3.1z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest opacity-70">Y aller avec</div>
                <div className="text-lg font-bold">Waze</div>
              </div>
            </a>

            <a
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-wafu-pink text-white rounded-sm hover:bg-wafu-plum transition-all hover:-translate-y-0.5 shadow-md hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="text-left">
                <div className="text-xs uppercase tracking-widest opacity-70">Y aller avec</div>
                <div className="text-lg font-bold">Google Maps</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="container-wafu py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* LEFT */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-wafu-ink/10 rounded-sm p-6 shadow-md">
              <h2 className="text-2xl font-bold text-wafu-ink mb-4 flex items-center gap-2">
                <span className="text-wafu-pink">📍</span> Coordonnées
              </h2>
              <ul className="space-y-3 text-wafu-ink/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-wafu-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{restaurant.address}</span>
                </li>
                {restaurant.phone && (
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-wafu-pink flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`} className="hover:text-wafu-pink transition-colors">
                      {restaurant.phone}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Horaires */}
            <div className="bg-white border border-wafu-ink/10 rounded-sm p-6 shadow-md">
              <h2 className="text-2xl font-bold text-wafu-ink mb-4 flex items-center gap-2">
                <span className="text-wafu-pink">🕐</span> Horaires
              </h2>
              <ul className="space-y-2">
                {restaurant.hours.map((line) => (
                  <li key={line} className="text-sm text-wafu-ink/80 flex items-start gap-2">
                    <span className="text-wafu-pink mt-1">·</span>
                    {line}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-wafu-ink/50 italic mt-4">
                Horaires indicatifs — confirmez directement auprès du restaurant.
              </p>
            </div>

            {/* Indépendance */}
            <div className="bg-wafu-ink text-wafu-cream rounded-sm p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2 text-wafu-pink">Restaurant indépendant</h3>
              <p className="text-sm text-wafu-cream/80 leading-relaxed">
                Cet établissement fixe librement ses prix et ses horaires.
                {restaurant.phone
                  ? ` Pour toute information précise, contactez-le directement au ${restaurant.phone}.`
                  : ' Pour toute information précise, contactez-le directement sur place.'}
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 space-y-8">
            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-wafu-ink mb-6">Nous trouver</h2>
              <div className="h-[380px] rounded-sm overflow-hidden border border-wafu-ink/10 shadow-lg">
                <MapContainer center={restaurant.coordinates} zoom={15} scrollWheelZoom={false} className="w-full h-full">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={restaurant.coordinates} icon={wafuIcon} />
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
