import { motion } from 'framer-motion'
import { Award, Brain, Briefcase, Star } from 'lucide-react'
import { achievements } from '../../data/portfolio'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

const iconMap = {
  star: Star,
  briefcase: Briefcase,
  award: Award,
  brain: Brain,
}

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle title="Achievements" subtitle="Milestones along the way" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <GlassCard key={item.title} delay={i * 0.08} className="p-5 text-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mb-3"
                >
                  <Icon size={24} className="text-accent" />
                </motion.div>
                <p className="text-sm font-medium group-hover:text-accent transition-colors">
                  {item.title}
                </p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
