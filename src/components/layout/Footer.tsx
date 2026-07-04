import { Heart } from 'lucide-react'
import { personalInfo } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-2">
        <p className="text-muted text-sm">
          © 2026 {personalInfo.name}
        </p>
        <p className="text-muted text-sm flex items-center justify-center gap-1.5 flex-wrap">
          Built with
          <Heart size={14} className="text-red-400 fill-red-400 inline" aria-hidden="true" />
          using React, Tailwind CSS and Framer Motion
        </p>
      </div>
    </footer>
  )
}
