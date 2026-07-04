import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'
import {
  projectFilters,
  projects,
  type ProjectCategory,
} from '../../data/portfolio'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Projects" subtitle="Things I've built" />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectFilters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                filter === value
                  ? 'bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/25'
                  : 'glass text-muted hover:text-accent glass-hover'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <GlassCard className="p-6 md:p-8 h-full flex flex-col group relative" hover>
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-display text-xl font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg glass glass-hover text-muted hover:text-accent shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FaGithub size={18} />
                      </a>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-muted uppercase tracking-wider mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <p className="text-xs text-muted uppercase tracking-wider mb-2">
                        Features
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-muted flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 text-accent text-sm font-medium hover:from-accent/30 hover:to-secondary/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <FaGithub size={16} />
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
