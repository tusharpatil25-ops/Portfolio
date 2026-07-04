import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useGsapReveal<T extends HTMLElement>(options?: {
  y?: number
  duration?: number
  delay?: number
}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    gsap.fromTo(
      el,
      { opacity: 0, y: options?.y ?? 60 },
      {
        opacity: 1,
        y: 0,
        duration: options?.duration ?? 0.8,
        delay: options?.delay ?? 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [options?.y, options?.duration, options?.delay])

  return ref
}
