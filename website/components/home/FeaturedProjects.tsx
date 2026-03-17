'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects().slice(0, 3)

  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 lg:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95]">
              Selected Work
            </h2>
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
                <div className="aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden bg-cream-dark">
                  <Image
                    src={project.heroImage.src}
                    alt={project.heroImage.alt}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.02]"
                    sizes="100vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />

                  {/* Info positioned at bottom-left */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs uppercase tracking-[0.25em] text-cream/60">
                        {project.category}
                      </span>
                      <span className="w-6 h-px bg-cream/20" />
                      <span className="text-xs uppercase tracking-[0.2em] text-cream/40">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl lg:text-4xl xl:text-5xl font-light text-cream leading-tight">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm lg:text-base text-cream/50 max-w-lg">
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
