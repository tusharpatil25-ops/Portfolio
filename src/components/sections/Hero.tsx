import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { FaGithub, FaHackerrank, FaLinkedin } from 'react-icons/fa'
import { personalInfo, typingRoles } from '../../data/portfolio'
import Button from '../ui/Button'
import CodeBackground from '../ui/CodeBackground'
import Particles from '../ui/Particles'
import TypingText from '../ui/TypingText'

const socialLinks = [
  { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: FaGithub, href: personalInfo.github, label: 'GitHub' },
  { icon: FaHackerrank, href: personalInfo.hackerrank, label: 'HackerRank' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
    >
      <Particles />
      <CodeBackground />

      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent font-mono text-sm mb-3 tracking-wider"
          >
            Hi,
          </motion.p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            I&apos;m{' '}
            <span className="gradient-text">{personalInfo.shortName}</span>
          </h1>

          <div className="h-8 md:h-10 mb-6">
            <TypingText
              texts={[...typingRoles]}
              className="text-lg md:text-xl text-muted font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <Button
              href={personalInfo.resumeUrl}
              download
              icon={<Download size={18} />}
            >
              Download Resume
            </Button>
            <Button href="#projects" variant="secondary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline">
              Hire Me
            </Button>
          </div>

          <div className="flex gap-3 justify-center lg:justify-start">
            {socialLinks.map(({ icon: Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="p-3 rounded-xl glass glass-hover text-muted hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-gradient-to-br from-accent/40 to-secondary/40 rounded-full blur-3xl scale-125 pointer-events-none"
            />

            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 premium-shadow">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-accent via-secondary to-accent opacity-90"
                aria-hidden="true"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-secondary/60 via-accent/60 to-secondary/60 blur-[2px]"
                aria-hidden="true"
              />

              <div className="relative w-full h-full rounded-full p-1.5 bg-bg">
                <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/10">
                  <img
                    src={personalInfo.profileImage}
                    alt={`${personalInfo.name} - Professional Photo`}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={320}
                    height={320}
                  />
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-xl text-sm font-mono text-accent"
            >
              {'<Developer />'}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
