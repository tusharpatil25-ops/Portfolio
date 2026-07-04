import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../../data/portfolio'
import SectionTitle from '../ui/SectionTitle'

export default function WorkExperience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-secondary to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center ring-4 ring-bg">
                <Briefcase size={12} className="text-white" />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 premium-shadow glass-hover">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-accent">
                      {item.title}
                    </h3>
                    <p className="text-text font-medium">{item.company}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                    {item.duration}
                  </span>
                </div>

                <p className="text-xs text-muted uppercase tracking-wider mb-3">
                  Worked on
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {item.works.map((work) => (
                    <li
                      key={work}
                      className="text-sm text-muted flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {work}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
