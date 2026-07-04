import { motion } from 'framer-motion'
import { aboutText } from '../../data/portfolio'
import { useGsapReveal } from '../../hooks/useGsapReveal'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

export default function About() {
  const sectionRef = useGsapReveal<HTMLElement>()

  return (
    <section id="about" className="section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <GlassCard className="lg:col-span-2 p-8 text-center" delay={0.1}>
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <span className="text-3xl">👨‍💻</span>
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Who I Am</h3>
            <p className="text-accent font-mono text-sm">Software Developer & Learner</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="glass rounded-xl p-3">
                <p className="text-2xl font-bold gradient-text">8.16</p>
                <p className="text-xs text-muted mt-1">M.Sc CGPI</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-2xl font-bold gradient-text">137+</p>
                <p className="text-xs text-muted mt-1">Internship Hrs</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-3 p-8 md:p-10" delay={0.2}>
            <div className="space-y-4">
              {aboutText.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-muted leading-relaxed text-sm md:text-base"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
