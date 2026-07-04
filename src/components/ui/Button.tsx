import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  download?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  icon?: ReactNode
}

const variants = {
  primary:
    'bg-gradient-to-r from-accent to-secondary text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02]',
  secondary: 'glass text-text hover:border-accent/40 hover:scale-[1.02]',
  outline:
    'border border-accent/50 text-accent hover:bg-accent/10 hover:border-accent hover:scale-[1.02]',
  ghost: 'text-muted hover:text-accent hover:bg-accent/5',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  onClick,
  type = 'button',
  className = '',
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon}
      {children}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={download ? undefined : href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        whileTap={{ scale: 0.98 }}
        className={classes}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {content}
    </motion.button>
  )
}
