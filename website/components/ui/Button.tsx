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
    'inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-300',
    size === 'sm' && 'text-xs px-5 py-2.5',
    size === 'md' && 'text-xs px-7 py-3.5',
    size === 'lg' && 'text-sm px-9 py-4',
    variant === 'primary' &&
      'bg-ink text-cream hover:bg-ink-light disabled:opacity-50',
    variant === 'outline' &&
      'border border-ink text-ink hover:bg-ink hover:text-cream disabled:opacity-50',
    variant === 'ghost' &&
      'text-ink hover:text-brass',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
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
    </button>
  )
}
