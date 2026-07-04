import { useEffect, useRef } from 'react'

const codeSnippets = [
  'const developer = { name: "Tushar", skills: ["React", "Python", "AI"] };',
  'async function build() { return await createImpact(); }',
  'class Solution { solve(problem) { return innovation; } }',
  'import { passion } from "./learning"; export default passion;',
  'if (challenge) { learn(); build(); repeat(); }',
  'const ml = train(model).optimize().deploy();',
]

export default function CodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const lines = codeSnippets.map((code, i) => {
      const el = document.createElement('div')
      el.className = 'code-line absolute whitespace-nowrap font-mono text-xs md:text-sm text-accent/20 select-none'
      el.textContent = code
      el.style.top = `${10 + i * 18}%`
      el.style.left = '-100%'
      el.style.animation = `codeScroll ${20 + i * 3}s linear infinite`
      el.style.animationDelay = `${i * 2}s`
      return el
    })

    lines.forEach((line) => container.appendChild(line))
    return () => lines.forEach((line) => line.remove())
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-60 pointer-events-none"
      aria-hidden="true"
    >
      <style>{`
        @keyframes codeScroll {
          0% { transform: translateX(-10%); }
          100% { transform: translateX(110vw); }
        }
      `}</style>
    </div>
  )
}
