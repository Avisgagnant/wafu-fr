import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sur chaque changement de route, remet la fenêtre tout en haut.
// React Router conserve par défaut le scrollY de la page précédente,
// ce qui fait atterrir l'utilisateur en bas de la nouvelle page.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}
