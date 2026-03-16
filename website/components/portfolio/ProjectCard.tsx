import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/types'
import Badge from '@/components/ui/Badge'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Asymmetric grid — alternate tall and wide
  const isTall = index % 3 === 1
  const aspectClass = isTall ? 'aspect-[3/4]' : 'aspect-[4/3]'

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block relative overflow-hidden bg-cream-dark"
    >
      <div className={`${aspectClass} relative overflow-hidden`}>
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-5 lg:p-6">
        <div className="flex items-center gap-3 mb-3">
          <Badge variant="brass">{project.category}</Badge>
          <span className="text-xs text-ink-muted">{project.year}</span>
          {project.comparison && (
            <Badge variant="sage">Render vs Reality</Badge>
          )}
        </div>
        <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink group-hover:text-brass transition-colors duration-300">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-ink-light">{project.subtitle}</p>
        <p className="mt-2 text-xs text-ink-muted">{project.location}</p>
      </div>
    </Link>
  )
}
