import { useParams, Link, Navigate } from 'react-router-dom'
import { restaurants } from '../data/restaurants.js'
import RestaurantImage from '../components/RestaurantImage.jsx'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'

const wafuIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="position: relative; transform: translate(-50%, -100%);">
    <svg width="32" height="44" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z" fill="#DA2B79" stroke="#141414" stroke-width="1.5"/>
      <circle cx="18" cy="18" r="6" fill="#FBF7EF"/>
    </svg>
  </div>`,
  iconSize: [32, 44],
  iconAnchor: [16, 44],
})

export default function RestaurantDetailPage() {
  const { id } = useParams()
  const restaurant = restaurants.find((r) => r.id === id)

  if (!restaurant) {
    return <Navigate to="/restaurants" replace />
  }

  return (
    <div className="pt-32 pb-24">
      {/* HERO */}
      <section className="container-wafu mb-16">
        <Link
          to="/restaurants"
          className="inline-flex items-center gap-2 text-sm text-wafu-ink/60 hover:text-wafu-pink mb-8"
          style={{ transition: 'color 200ms ease' }}
        >
          <span aria-hidden>←</span> Retour à la liste
        </Link>

        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-5 flex items-center gap-3">
              <span className="rule" />
              {restaurant.region}
            </div>
            <h1 className="display text-5xl md:text-7xl leading-[0.98] mb-6">
              {restaurant.name}
            </h1>
            <p className="text-lg text-wafu-ink/70 leading-relaxed max-w-2xl">
              {restaurant.description}
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-wafu-paper border border-wafu-ink/10">
              <RestaurantImage
                src={restaurant.image}
                alt={restaurant.name}
                eager
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="container-wafu mb-20">
        <div className="border-t border-b border-wafu-ink/15 py-6 grid md:grid-cols-2 gap-px bg-wafu-ink/10">
          <a
            href={restaurant.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wafu-paper px-6 py-6 flex items-center justify-between group"
          >
            <div>
              <div className="eyebrow mb-1">Itinéraire</div>
              <div className="font-serif text-2xl tracking-editorial text-wafu-ink group-hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
                Waze
              </div>
            </div>
            <span className="text-wafu-ink/40 group-hover:text-wafu-pink text-2xl" style={{ transition: 'color 200ms ease' }}>→</span>
          </a>
          <a
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wafu-paper px-6 py-6 flex items-center justify-between group"
          >
            <div>
              <div className="eyebrow mb-1">Itinéraire</div>
              <div className="font-serif text-2xl tracking-editorial text-wafu-ink group-hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
                Google Maps
              </div>
            </div>
            <span className="text-wafu-ink/40 group-hover:text-wafu-pink text-2xl" style={{ transition: 'color 200ms ease' }}>→</span>
          </a>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="container-wafu grid lg:grid-cols-12 gap-12">
        {/* LEFT info */}
        <aside className="lg:col-span-4 space-y-10">
          <div>
            <div className="eyebrow mb-3 flex items-center gap-3">
              <span className="rule" />
              Coordonnées
            </div>
            <p className="font-serif text-lg text-wafu-ink leading-relaxed mb-3">
              {restaurant.address}
            </p>
            {restaurant.phone && (
              <a
                href={`tel:${restaurant.phone.replace(/\s/g, '')}`}
                className="text-base text-wafu-ink/80 hover:text-wafu-pink font-mono"
                style={{ transition: 'color 200ms ease' }}
              >
                {restaurant.phone}
              </a>
            )}
          </div>

          <div>
            <div className="eyebrow mb-3 flex items-center gap-3">
              <span className="rule" />
              Horaires
            </div>
            <ul className="space-y-2">
              {restaurant.hours.map((line) => (
                <li key={line} className="text-base text-wafu-ink/80">{line}</li>
              ))}
            </ul>
            <p className="text-xs text-wafu-ink/50 italic mt-4">
              Horaires indicatifs — à confirmer auprès du restaurant.
            </p>
          </div>

          <div className="border-l-2 border-wafu-pink pl-5 py-2">
            <div className="eyebrow mb-2">Indépendance</div>
            <p className="text-sm text-wafu-ink/70 leading-relaxed">
              Cet établissement fixe librement ses prix et ses horaires.
              {restaurant.phone
                ? ` Pour toute information précise, contactez-le directement au ${restaurant.phone}.`
                : ' Pour toute information précise, contactez-le directement sur place.'}
            </p>
          </div>
        </aside>

        {/* RIGHT map */}
        <div className="lg:col-span-8">
          <div className="eyebrow mb-5 flex items-center gap-3">
            <span className="rule" />
            Nous trouver
          </div>
          <div className="h-[460px] overflow-hidden border border-wafu-ink/10">
            <MapContainer center={restaurant.coordinates} zoom={15} scrollWheelZoom={false} className="w-full h-full">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={restaurant.coordinates} icon={wafuIcon} />
            </MapContainer>
          </div>
        </div>
      </section>
    </div>
  )
}
