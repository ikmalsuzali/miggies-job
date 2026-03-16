import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'brass' | 'sage'
  className?: string
}

export default function Badge({
  children,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block text-xs uppercase tracking-[0.15em] px-3 py-1.5 rounded-full',
        variant === 'default' && 'bg-cream-dark text-ink-light',
        variant === 'brass' && 'bg-brass/10 text-brass-dark',
        variant === 'sage' && 'bg-sage/10 text-sage-dark',
        className
      )}
    >
      {children}
    </span>
  )
}
