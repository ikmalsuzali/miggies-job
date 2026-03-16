import Image from 'next/image'
import { Project } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative">
      {/* Hero image */}
      <div className="aspect-[21/9] relative overflow-hidden bg-cream-dark">
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Project info overlay */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 -mt-20 relative z-10">
        <div className="bg-cream p-8 lg:p-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="brass">{project.category}</Badge>
            <span className="text-xs text-ink-muted">{project.year}</span>
            {project.comparison && (
              <Badge variant="sage">Render vs Reality</Badge>
            )}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-ink-light">{project.subtitle}</p>
        </div>
      </div>
    </section>
  )
}
