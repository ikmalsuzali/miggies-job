'use client'

import { cn } from '@/lib/utils'

const categories = ['All', 'Residential', 'Commercial', 'Design & Built']

interface ProjectFilterProps {
  active: string
  onChange: (category: string) => void
}

export default function ProjectFilter({ active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'text-xs uppercase tracking-[0.15em] px-5 py-2.5 transition-all duration-300 border',
            active === cat
              ? 'bg-ink text-cream border-ink'
              : 'bg-transparent text-ink-light border-ink/15 hover:border-ink/40'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
