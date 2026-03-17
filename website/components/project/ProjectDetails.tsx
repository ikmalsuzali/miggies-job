'use client'

import { Project } from '@/lib/types'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface ProjectDetailsProps {
  project: Project
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Description */}
          <ScrollReveal className="lg:col-span-7">
            <p className="text-ink-light text-lg lg:text-xl leading-[1.8]">
              {project.description}
            </p>
          </ScrollReveal>

          {/* Metadata sidebar */}
          <ScrollReveal delay={0.2} className="lg:col-span-5 lg:col-start-9">
            <div className="space-y-8 lg:pl-8 lg:border-l lg:border-ink/5">
              {project.client && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                    Client
                  </p>
                  <p className="text-sm text-ink font-medium">{project.client}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                  Location
                </p>
                <p className="text-sm text-ink font-medium">{project.location}</p>
              </div>
              {project.area && (
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                    Area
                  </p>
                  <p className="text-sm text-ink font-medium">{project.area}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                  Year
                </p>
                <p className="text-sm text-ink font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-2">
                  Scope
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.scope.map((s) => (
                    <span
                      key={s}
                      className="text-xs uppercase tracking-[0.1em] text-ink-light bg-cream-dark px-3 py-1.5"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
