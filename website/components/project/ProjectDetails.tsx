'use client'

import { Project } from '@/lib/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Description */}
          <ScrollReveal className="lg:col-span-2">
            <h2 className="font-serif text-2xl lg:text-3xl font-semibold text-ink mb-6">
              About the Project
            </h2>
            <p className="text-ink-light text-base lg:text-lg leading-relaxed">
              {project.description}
            </p>
          </ScrollReveal>

          {/* Metadata */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {project.client && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
                    Client
                  </p>
                  <p className="text-sm text-ink">{project.client}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
                  Location
                </p>
                <p className="text-sm text-ink">{project.location}</p>
              </div>
              {project.area && (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
                    Area
                  </p>
                  <p className="text-sm text-ink">{project.area}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
                  Year
                </p>
                <p className="text-sm text-ink">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
                  Scope
                </p>
                <ul className="space-y-1">
                  {project.scope.map((s) => (
                    <li key={s} className="text-sm text-ink">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
