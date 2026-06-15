import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { Link } from 'react-router-dom'

// Marqueur personnalisé aux couleurs Wafu.
// Important : pas de transform sur le wrapper — Leaflet positionne déjà l'icône
// pour que iconAnchor [17, 46] (bas-centre) tombe sur la coordonnée.
const wafuIcon = L.divIcon({
  className: 'custom-marker',
  html: `<svg width="34" height="46" viewBox="0 0 36 48" xmlns="http://www.w3.org/2000/svg" style="display:block">
    <defs>
      <linearGradient id="pinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FF6B9D"/>
        <stop offset="100%" stop-color="#BE185D"/>
      </linearGradient>
    </defs>
    <path d="M18 0C8.06 0 0 8.06 0 18c0 13.5 18 30 18 30s18-16.5 18-30C36 8.06 27.94 0 18 0z"
      fill="url(#pinGrad)" stroke="#141414" stroke-width="1.5"/>
    <circle cx="18" cy="18" r="7" fill="#FBF7EF"/>
    <circle cx="18" cy="18" r="3.2" fill="#DA2B79"/>
  </svg>`,
  iconSize: [34, 46],
  iconAnchor: [17, 46],
  popupAnchor: [0, -42],
})

function FitBounds({ restaurants }) {
  const map = useMap()
  useEffect(() => {
    if (restaurants.length === 0) return
    const bounds = L.latLngBounds(restaurants.map((r) => r.coordinates))
    map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 })
  }, [map, restaurants])
  return null
}

export default function RestaurantMap({ restaurants, onSelect }) {
  const center = restaurants.length > 0 ? restaurants[0].coordinates : [46.6, 2.4]

  return (
    <div className="w-full h-full min-h-[500px] rounded-sm overflow-hidden border border-wafu-ink/10 shadow-lg">
      <MapContainer
        center={center}
        zoom={6}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ minHeight: '500px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds restaurants={restaurants} />
        {restaurants.map((r) => (
          <Marker
            key={r.id}
            position={r.coordinates}
            icon={wafuIcon}
            eventHandlers={{ click: () => onSelect && onSelect(r.id) }}
          >
            <Popup>
              <div className="p-1 min-w-[220px]">
                <div className="text-xs text-wafu-pink uppercase tracking-widest font-medium mb-1">
                  {r.region}
                </div>
                <h3 className="text-lg font-bold text-wafu-ink mb-1">{r.name}</h3>
                <p className="text-sm text-wafu-ink/70 mb-3">{r.address}</p>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <a
                    href={r.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs bg-wafu-ink text-wafu-cream px-2 py-1.5 rounded-sm hover:bg-wafu-pink transition-colors"
                  >
                    Waze
                  </a>
                  <a
                    href={r.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs bg-wafu-ink text-wafu-cream px-2 py-1.5 rounded-sm hover:bg-wafu-pink transition-colors"
                  >
                    Google Maps
                  </a>
                </div>
                <Link
                  to={`/restaurants/${r.id}`}
                  className="block text-center text-xs bg-wafu-pink text-white px-2 py-1.5 rounded-sm hover:bg-wafu-plum transition-colors font-medium"
                >
                  Voir la fiche →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
