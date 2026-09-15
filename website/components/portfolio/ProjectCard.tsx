import Link from 'next/link'
import PortfolioImage from '@/components/ui/PortfolioImage'
import { Project } from '@/lib/types'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream-dark">
        <PortfolioImage image={project.heroImage} className="object-cover transition-transform duration-700 group-hover:scale-[1.03] group-focus-visible:scale-[1.03]" sizes="(max-width: 768px) 100vw, 50vw" />
        <span className="absolute top-4 left-4 bg-cream/95 text-ink px-3 py-2 text-[10px] uppercase tracking-[0.15em]">{project.category}</span>
        {project.comparison && <span className="absolute bottom-4 left-4 bg-ink/85 text-cream px-3 py-2 text-[10px] tracking-wider">3D render & built space</span>}
      </div>
      <div className="pt-5 pb-8 border-b border-ink/15">
        <div className="flex justify-between items-baseline gap-4">
          <h2 className="font-serif text-3xl lg:text-4xl leading-tight">{project.title}</h2>
          <span className="text-ink-muted text-xs tabular-nums">{String(index + 1).padStart(2, '0')} / {project.year}</span>
        </div>
        <p className="mt-2 text-sm text-ink-light">{project.subtitle}</p>
        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.15em]">
          <span className="text-ink-muted">{project.area}</span>
          <span className="group-hover:text-brass-dark transition-colors">Explore project ↗</span>
        </div>
      </div>
    </Link>
  )
}
