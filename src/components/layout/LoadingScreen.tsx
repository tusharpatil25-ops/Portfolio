import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { personalInfo } from '../../data/portfolio'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 400)
          return 100
        }
        return p + Math.random() * 15 + 5
      })
    }, 120)
    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative mb-8">
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-accent/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-t-secondary border-r-transparent border-b-transparent border-l-transparent"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-bold gradient-text">TP</span>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-lg text-muted mb-6"
      >
        Loading {personalInfo.shortName.split(' ')[0]}&apos;s Portfolio
      </motion.p>

      <div className="w-64 h-1.5 bg-card rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent to-secondary rounded-full"
          style={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>
      <p className="mt-3 text-sm text-muted font-mono">{Math.min(Math.round(progress), 100)}%</p>
    </motion.div>
  )
}
