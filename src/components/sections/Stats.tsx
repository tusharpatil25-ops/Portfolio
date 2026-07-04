import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { stats } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: number
  suffix: string
  inView: boolean
}) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(value, increment * step)
      setDisplay(Number.isInteger(value) ? Math.floor(current) : parseFloat(current.toFixed(2)))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionTitle title="By The Numbers" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center premium-shadow glass-hover"
            >
              <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
