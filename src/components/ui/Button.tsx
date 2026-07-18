import type { ReactNode } from 'react'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'solid' | 'outline'
  external?: boolean
}

const base =
  'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-150'

const variants = {
  solid: 'bg-[var(--color-accent)] text-[var(--color-accent-fg)] hover:opacity-90',
  outline:
    'border border-[var(--color-border)] text-[var(--color-fg)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
}

export default function Button({ href, children, variant = 'outline', external = true }: ButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
