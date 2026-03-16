'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProjects } from '@/lib/data/projects'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

export default function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            subtitle="A curated selection of residential and commercial interiors designed with precision and care."
          />
        </ScrollReveal>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {featured.map((project, index) => {
            // Alternate between large and small cards
            const isLarge = index % 3 === 0
            const colSpan = isLarge ? 'md:col-span-8' : 'md:col-span-4'
            const aspectRatio = isLarge ? 'aspect-[16/10]' : 'aspect-[4/5]'

            return (
              <ScrollReveal
                key={project.slug}
                delay={index * 0.1}
                className={colSpan}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group block relative overflow-hidden bg-cream-dark"
                >
                  <div className={`${aspectRatio} relative overflow-hidden`}>
                    <Image
                      src={project.heroImage.src}
                      alt={project.heroImage.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={isLarge ? '66vw' : '33vw'}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5 lg:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="brass">{project.category}</Badge>
                      <span className="text-xs text-ink-muted">{project.year}</span>
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl font-semibold text-ink group-hover:text-brass transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-light">
                      {project.subtitle}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
