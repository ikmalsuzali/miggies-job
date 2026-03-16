'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/lib/data/projects'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'
import SectionHeading from '@/components/ui/SectionHeading'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            label="Portfolio"
            title="All Projects"
            subtitle="Explore the full range of residential, commercial, and design & build projects."
          />
        </ScrollReveal>

        <ProjectFilter active={activeFilter} onChange={setActiveFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-ink-muted py-20">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}
