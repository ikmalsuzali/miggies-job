'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Project } from '@/lib/types'

interface ProjectHeroProps {
  project: Project
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative">
      {/* Hero image — full viewport width */}
      <div className="relative h-[60vh] lg:h-[85vh] overflow-hidden bg-cream-dark">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={project.heroImage.src}
            alt={project.heroImage.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent" />
      </div>

      {/* Project info card */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 -mt-24 lg:-mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-cream p-8 lg:p-16 max-w-3xl border border-ink/5"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="text-xs uppercase tracking-[0.25em] text-ink-muted">
              {project.category}
            </span>
            <span className="w-6 h-px bg-ink/15" />
            <span className="text-xs uppercase tracking-[0.2em] text-ink-muted">
              {project.year}
            </span>
            {project.comparison && (
              <>
                <span className="w-6 h-px bg-ink/15" />
                <span className="text-xs uppercase tracking-[0.15em] text-sage-dark flex items-center gap-1.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5H8M2 5L3.5 3.5M2 5L3.5 6.5M8 5L6.5 3.5M8 5L6.5 6.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Render vs Reality
                </span>
              </>
            )}
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink leading-[0.95]">
            {project.title}
          </h1>
          <p className="mt-3 text-base lg:text-lg text-ink-light">{project.subtitle}</p>
        </motion.div>
      </div>
    </section>
  )
}
