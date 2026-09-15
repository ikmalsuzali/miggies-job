'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ProjectGrid() {
  const reducedMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass-dark mb-6">A collection of considered spaces</p>
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-ink leading-[0.95] mb-6">
              Spaces with a story.
            </h1>
            <p className="text-ink-light text-base lg:text-lg max-w-2xl leading-relaxed">
              Residential, commercial, and design & build projects crafted with precision and care.
            </p>
          </div>
        </ScrollReveal>

        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

        <p role="status" aria-live="polite" className="text-xs text-ink-muted py-5">Showing {filtered.length} {activeFilter === 'All' ? 'projects' : `${activeFilter.toLowerCase()} projects`}</p>

        <div id="project-results" className="grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-10 lg:gap-y-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout={!reducedMotion}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: reducedMotion ? 0 : 0.35, delay: reducedMotion ? 0 : index * 0.04 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-ink-muted mb-2">No projects yet</p>
            <p className="text-sm text-ink-muted">Check back soon for new work in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
