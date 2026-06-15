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

  const index = restaurants.findIndex((r) => r.id === restaurant.id) + 1

  return (
    <div className="pt-24 md:pt-36 pb-20">
      {/* BACK */}
      <section className="container-wafu mb-6 md:mb-10">
        <Link
          to="/restaurants"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-stamp text-wafu-ink/60 hover:text-wafu-pink"
          style={{ transition: 'color 200ms ease' }}
        >
          <span aria-hidden>←</span> Retour aux restaurants
        </Link>
      </section>

      {/* HERO */}
      <section className="container-wafu mb-12 md:mb-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-8 flex gap-5 md:gap-8">
            <div className="flex-shrink-0 pt-3">
              <span className="wafu-rule block h-24 md:h-40" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-4 mb-5 md:mb-7">
                <span className="eyebrow-ink">N°{String(index).padStart(2, '0')}</span>
                <span className="eyebrow">{restaurant.region}</span>
              </div>
              <h1 className="display text-[2.4rem] sm:text-6xl md:text-7xl leading-[0.95] mb-6">
                <span className="italic">{restaurant.name.replace(/^Wafu\s+/, '')}</span>
              </h1>
              <p className="font-serif italic text-lg md:text-xl text-wafu-ink/80 leading-snug max-w-2xl">
                {restaurant.description}
              </p>
            </div>
          </div>

          {/* Image slot — logo placeholder */}
          <div className="md:col-span-4">
            <RestaurantImage
              alt={restaurant.name}
              eager
              className="w-full aspect-[16/10] md:aspect-[3/5]"
            />
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="container-wafu mb-16 md:mb-20">
        <div className="border-y border-wafu-ink/15 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-wafu-ink/15">
          <a
            href={restaurant.wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-5 py-5 sm:py-6 hover:bg-wafu-sand"
            style={{ transition: 'background-color 200ms ease' }}
          >
            <div>
              <div className="eyebrow-ink mb-1">Itinéraire</div>
              <div className="font-serif italic text-xl md:text-2xl tracking-editorial text-wafu-ink group-hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
                Waze
              </div>
            </div>
            <span className="text-wafu-ink/30 group-hover:text-wafu-pink text-2xl" style={{ transition: 'color 200ms ease' }} aria-hidden>→</span>
          </a>
          <a
            href={restaurant.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-5 py-5 sm:py-6 hover:bg-wafu-sand"
            style={{ transition: 'background-color 200ms ease' }}
          >
            <div>
              <div className="eyebrow-ink mb-1">Itinéraire</div>
              <div className="font-serif italic text-xl md:text-2xl tracking-editorial text-wafu-ink group-hover:text-wafu-pink" style={{ transition: 'color 200ms ease' }}>
                Google Maps
              </div>
            </div>
            <span className="text-wafu-ink/30 group-hover:text-wafu-pink text-2xl" style={{ transition: 'color 200ms ease' }} aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="container-wafu grid lg:grid-cols-12 gap-10 lg:gap-14">
        {/* LEFT INFO */}
        <aside className="lg:col-span-5 space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="wafu-rule-h" />
              <span className="eyebrow">Coordonnées</span>
            </div>
            <p className="font-serif text-lg md:text-xl text-wafu-ink leading-relaxed mb-3 italic">
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
            <div className="flex items-center gap-3 mb-3">
              <span className="wafu-rule-h" />
              <span className="eyebrow">Horaires</span>
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
            <p className="text-[14px] text-wafu-ink/75 leading-relaxed">
              Cet établissement fixe librement ses prix et ses horaires.
              {restaurant.phone
                ? ` Pour toute information précise, contactez-le directement au ${restaurant.phone}.`
                : ' Pour toute information précise, contactez-le directement sur place.'}
            </p>
          </div>
        </aside>

        {/* RIGHT MAP */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="wafu-rule-h" />
            <span className="eyebrow">Nous trouver</span>
          </div>
          <div className="h-[55vh] min-h-[360px] lg:h-[520px] border border-wafu-ink/10">
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
