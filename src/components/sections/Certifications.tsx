import { motion } from 'framer-motion'
import {
  Award,
  BarChart3,
  Briefcase,
  Code2,
  Coffee,
  Database,
  Download,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { certifications } from '../../data/portfolio'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

const iconMap = {
  briefcase: Briefcase,
  code: Code2,
  database: Database,
  coffee: Coffee,
  chart: BarChart3,
  sparkles: Sparkles,
  award: Award,
}

function handleCertificateDownload(url: string, title: string) {
  const filename = `${title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.pdf`
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.target = '_blank'
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Continuous learning & growth" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon]

            return (
              <GlassCard
                key={cert.title}
                delay={i * 0.06}
                className="p-5 md:p-6 group relative overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-secondary/0 to-accent/0 group-hover:from-accent/10 group-hover:via-secondary/5 group-hover:to-accent/10 transition-all duration-500 pointer-events-none" />

                <div className="relative flex flex-col h-full">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:from-accent/30 group-hover:to-secondary/30 transition-all"
                    >
                      <Icon size={22} className="text-accent" />
                    </motion.div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Award size={10} />
                      Verified
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-sm md:text-base mb-1.5 group-hover:text-accent transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted mb-5">{cert.issuer}</p>

                  <div className="mt-auto flex flex-col sm:flex-row gap-2">
                    <a
                      href={cert.viewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent/20 to-secondary/20 border border-accent/30 text-accent text-xs font-medium hover:from-accent/30 hover:to-secondary/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <ExternalLink size={14} />
                      View Certificate
                    </a>
                    <button
                      type="button"
                      onClick={() => handleCertificateDownload(cert.downloadLink, cert.title)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass text-muted text-xs font-medium hover:text-accent hover:border-accent/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
