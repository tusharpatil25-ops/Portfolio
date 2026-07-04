import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

const categoryIcons: Record<string, string> = {
  'Programming Languages': '💻',
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  'AI/ML': '🤖',
  Tools: '🛠️',
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <SectionTitle title="Skills" subtitle="Technologies I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <GlassCard key={category} delay={catIndex * 0.08} className="p-6 group">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {categoryIcons[category] || '📦'}
                </span>
                <h3 className="font-display font-semibold text-lg group-hover:text-accent transition-colors">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-lg bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 hover:border-accent/40 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
