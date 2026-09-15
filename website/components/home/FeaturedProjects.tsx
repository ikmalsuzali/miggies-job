'use client'

import Link from 'next/link'
import PortfolioImage from '@/components/ui/PortfolioImage'
import { getFeaturedProjects } from '@/lib/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3)

  return (
    <section id="selected-work" className="py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-10 lg:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-ink/15 pt-8">
            <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-4">01 / The portfolio</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95]">
              Selected Work
            </h2>
            </div>
            <p className="text-sm text-ink-light max-w-xs leading-relaxed">A selection of homes and workspaces. Each with its own character, each considered down to the detail.</p>
          </div>
        </ScrollReveal>

        {/* Fullwidth cinematic cards */}
        <div className="space-y-6 lg:space-y-8">
          {featured.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.1}>
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden"
              >
                <div className="aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden bg-cream-dark">
                  <PortfolioImage image={project.heroImage}
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                  {/* Info positioned at bottom-left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs uppercase tracking-[0.25em] text-cream/85">
                        {project.category}
                      </span>
                      <span className="w-6 h-px bg-cream/20" />
                      <span className="text-xs uppercase tracking-[0.2em] text-cream/75">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-4xl xl:text-5xl font-light text-cream leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm lg:text-base text-cream/80 max-w-lg">
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal>
          <div className="mt-12 lg:mt-16 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-ink-muted hover:text-ink transition-colors duration-300"
            >
              View all projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
