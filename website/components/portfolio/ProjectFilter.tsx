'use client'

import { cn } from '@/lib/utils'
import { projects } from '@/lib/data/projects'

const categories = ['All', 'Residential', 'Commercial']

export default function ProjectFilter({ active, onChange }: { active: string; onChange: (category: string) => void }) {
  return (
    <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-ink/15">
      {categories.map((category) => {
        const count = category === 'All' ? projects.length : projects.filter((project) => project.category === category).length
        return (
          <button type="button" key={category} onClick={() => onChange(category)} aria-pressed={active === category} aria-controls="project-results" className={cn('text-xs uppercase tracking-[0.15em] min-h-12 py-3 border-b-2 transition-colors', active === category ? 'text-ink border-ink' : 'text-ink-muted border-transparent hover:text-ink')}>
            {category}<span aria-hidden="true" className="ml-2 text-[10px] tabular-nums">{String(count).padStart(2, '0')}</span>
          </button>
        )
      })}
    </div>
  )
}
