import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { personalInfo } from '../../data/portfolio'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Mon', '', 'Wed', '', 'Fri', '', '']

function generateContributionGrid() {
  const weeks = 52
  const grid: number[][] = []

  for (let w = 0; w < weeks; w++) {
    const week: number[] = []
    for (let d = 0; d < 7; d++) {
      const rand = Math.random()
      if (rand > 0.7) week.push(4)
      else if (rand > 0.5) week.push(3)
      else if (rand > 0.3) week.push(2)
      else if (rand > 0.15) week.push(1)
      else week.push(0)
    }
    grid.push(week)
  }
  return grid
}

const contributionGrid = generateContributionGrid()

const levelColors = [
  'bg-card border border-white/5',
  'bg-accent/20',
  'bg-accent/40',
  'bg-accent/60',
  'bg-accent',
]

export default function GitHubSection() {
  const username = personalInfo.github.split('/').pop() || 'tusharpatil'

  return (
    <section id="github" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="GitHub Activity" subtitle="My coding contributions" />

        <GlassCard className="p-6 md:p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-accent/10">
                <FaGithub size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-display font-semibold">@{username}</p>
                <p className="text-xs text-muted flex items-center gap-1">
                  <Calendar size={12} />
                  Contribution activity
                </p>
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              View Profile →
            </a>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[700px]">
              <div className="flex gap-1 mb-2 pl-8">
                {months.map((m) => (
                  <span key={m} className="text-[10px] text-muted flex-1 min-w-[14px]">
                    {m}
                  </span>
                ))}
              </div>

              <div className="flex gap-1">
                <div className="flex flex-col gap-1 mr-1">
                  {days.map((d, i) => (
                    <span key={i} className="text-[10px] text-muted h-[12px] leading-[12px]">
                      {d}
                    </span>
                  ))}
                </div>

                <div className="flex gap-[3px]">
                  {contributionGrid.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((level, di) => (
                        <motion.div
                          key={`${wi}-${di}`}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: wi * 0.005 + di * 0.002 }}
                          className={`w-[12px] h-[12px] rounded-sm ${levelColors[level]}`}
                          title={`${level} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 justify-end">
                <span className="text-[10px] text-muted">Less</span>
                {levelColors.map((color, i) => (
                  <div key={i} className={`w-[12px] h-[12px] rounded-sm ${color}`} />
                ))}
                <span className="text-[10px] text-muted">More</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
