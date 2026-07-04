import { useEffect, useState } from 'react'

interface TypingTextProps {
  texts: string[]
  className?: string
}

export default function TypingText({ texts, className = '' }: TypingTextProps) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < current.length) {
            setDisplay(current.slice(0, display.length + 1))
          } else {
            setTimeout(() => setDeleting(true), 2000)
          }
        } else if (display.length > 0) {
          setDisplay(display.slice(0, -1))
        } else {
          setDeleting(false)
          setIndex((i) => (i + 1) % texts.length)
        }
      },
      deleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [display, deleting, index, texts])

  return (
    <span className={className}>
      {display}
      <span className="animate-pulse text-accent">|</span>
    </span>
  )
}
