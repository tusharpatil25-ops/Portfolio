import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState, type FormEvent } from 'react'
import { personalInfo } from '../../data/portfolio'
import Button from '../ui/Button'
import GlassCard from '../ui/GlassCard'
import SectionTitle from '../ui/SectionTitle'

const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'Connect with me', href: personalInfo.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'View my work', href: personalInfo.github },
  { icon: MapPin, label: 'Location', value: personalInfo.location, href: undefined },
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, form, publicKey)
      } else {
        await new Promise((r) => setTimeout(r, 1000))
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
      }

      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let's work together" />

        <div className="grid lg:grid-cols-5 gap-8">
          <GlassCard className="lg:col-span-2 p-6 md:p-8" delay={0.1}>
            <h3 className="font-display text-xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="lg:col-span-3 p-6 md:p-8" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass bg-transparent text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-muted mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass bg-transparent text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-muted mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass bg-transparent text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                icon={<Send size={18} />}
                className="w-full sm:w-auto"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-emerald-400 text-sm"
                  role="status"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm"
                  role="alert"
                >
                  Something went wrong. Please try emailing directly.
                </motion.p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
