import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionTitle title="Education" subtitle="My academic background" />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-transparent" />

          {education.map((item, i) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 md:pl-20 pb-10 last:pb-0"
            >
              <div className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center ring-4 ring-bg">
                <GraduationCap size={12} className="text-white" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 premium-shadow glass-hover">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-lg md:text-xl font-semibold">
                      {item.degree}
                    </h3>
                    <p className="text-muted text-sm mt-1">{item.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-accent font-semibold">{item.score}</p>
                    <p className="text-xs text-muted mt-1">{item.period}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
