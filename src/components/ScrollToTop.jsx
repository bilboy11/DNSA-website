import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If navigating to an in-page anchor, let the browser handle it.
    if (hash) return

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [pathname, hash])

  return null
}

