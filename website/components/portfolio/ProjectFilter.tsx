'use client'

import { cn } from '@/lib/utils'

const categories = ['All', 'Residential', 'Commercial']

interface ProjectFilterProps {
  active: string
  onChange: (category: string) => void
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-6 mb-14">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'relative text-xs uppercase tracking-[0.2em] py-2 transition-colors duration-300',
            active === cat
              ? 'text-ink'
              : 'text-ink-muted hover:text-ink'
          )}
        >
          {cat}
          <span
            className={cn(
              'absolute bottom-0 left-0 right-0 h-px bg-ink transition-all duration-300',
              active === cat ? 'opacity-100' : 'opacity-0'
            )}
          />
        </button>
      ))}
    </div>
  )
}
