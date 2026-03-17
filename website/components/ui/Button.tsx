import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'group/btn relative inline-flex items-center justify-center gap-2 font-medium tracking-[0.15em] uppercase transition-all duration-400 overflow-hidden',
    size === 'sm' && 'text-xs px-6 py-3',
    size === 'md' && 'text-xs px-8 py-3.5',
    size === 'lg' && 'text-xs px-10 py-4.5',
    variant === 'primary' &&
      'bg-ink text-cream hover:bg-brass disabled:opacity-50',
    variant === 'outline' &&
      'border border-ink/80 text-ink hover:bg-ink hover:text-cream disabled:opacity-50',
    variant === 'ghost' &&
      'text-ink hover:text-brass',
    className
  )

  const arrow = variant !== 'ghost' ? (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all duration-300"
    >
      <path d="M3 7H11M11 7L8 4M11 7L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ) : null

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {arrow}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {arrow}
    </button>
  )
}
