import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const leave = () => setVisible(false)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-screen hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
      aria-hidden="true"
    >
      <div className="w-8 h-8 rounded-full bg-accent/30 blur-sm" />
      <div className="absolute inset-0 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-accent/10 to-secondary/10 blur-2xl" />
    </div>
  )
}
