import { useState, useEffect, useRef } from 'react'

function useCountUp(target, { active, durationMs }) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(0)
  const startRef = useRef(null)

  useEffect(() => {
    if (!active) return
    setCount(0)
    startRef.current = null

    const step = (now) => {
      if (startRef.current == null) startRef.current = now
      const t = Math.min((now - startRef.current) / durationMs, 1)
      const eased = 1 - (1 - t) ** 2
      setCount(Math.round(eased * target))
      if (t < 1) rafRef.current = requestAnimationFrame(step)
      else setCount(target)
    }

    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, durationMs])

  return count
}

export default function StatCard({ target, suffix, label, delay = '10s', durationMs = 10_000 }) {
  const rootRef = useRef(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(target, { active, durationMs })

  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true)
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const valueText =
    suffix === '%' ? `${count}%` : `${count.toLocaleString()}${suffix}`

  return (
    <div ref={rootRef} className="animate-scale-in text-center" style={{ animationDelay: delay }}>
      <div className="text-3xl md:text-4xl font-bold mb-2 tabular-nums">{valueText}</div>
      <div className="text-sm md:text-base text-blue-200">{label}</div>
    </div>
  )
}
