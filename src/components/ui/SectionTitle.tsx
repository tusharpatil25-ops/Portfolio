import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14 md:mb-16"
    >
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
        <span className="gradient-text">{title}</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto rounded-full mb-4" />
      {subtitle && (
        <p className="text-muted text-sm md:text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
