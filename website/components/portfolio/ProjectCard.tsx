'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isWide = index % 3 === 0
  const isTall = index % 3 === 1

  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={`group block relative overflow-hidden bg-cream-dark ${isWide ? 'md:col-span-2' : ''}`}
    >
      <div className={`${isTall ? 'aspect-[3/4]' : isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'} relative overflow-hidden`}>
        <Image
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          fill
          className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
          sizes={isWide ? '100vw' : '(max-width: 768px) 100vw, 33vw'}
        />

        {/* Default: thin bottom bar */}
        <div className="absolute bottom-0 left-0 right-0 py-4 px-5 bg-gradient-to-t from-ink/60 to-transparent">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-base lg:text-lg text-cream/90 font-medium">
              {project.title}
            </h3>
            <span className="text-xs text-cream/50">{project.year}</span>
          </div>
        </div>

        {/* Hover: full overlay */}
        <div className="absolute inset-0 bg-ink/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 lg:p-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-cream/60">
              {project.category}
            </span>
            {project.comparison && (
              <>
                <span className="w-4 h-px bg-cream/30" />
                <span className="text-xs uppercase tracking-[0.15em] text-brass">
                  Render vs Reality
                </span>
              </>
            )}
          </div>
          <h3 className="font-serif text-xl lg:text-2xl font-light text-cream leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-cream/50">{project.subtitle}</p>
          <p className="mt-3 text-xs text-cream/40">
            {project.location} {project.area && `\u00B7 ${project.area}`}
          </p>
        </div>
      </div>
    </Link>
  )
}
