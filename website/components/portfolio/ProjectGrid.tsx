'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="mb-16">
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-ink leading-[0.95] mb-6">
              Portfolio
            </h1>
            <p className="text-ink-light text-base lg:text-lg max-w-2xl leading-relaxed">
              Residential, commercial, and design & build projects crafted with precision and care.
            </p>
          </div>
        </ScrollReveal>

        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={index % 3 === 0 ? 'md:col-span-2' : ''}
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
