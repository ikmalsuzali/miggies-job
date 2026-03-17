'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: '6+', label: 'Years Experience', suffix: '' },
  { value: '5', label: 'Companies', suffix: '' },
  { value: '3', label: 'Software Stacks', suffix: '' },
  { value: '2', label: 'Languages', suffix: '' },
]

export default function Stats() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative brass lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brass/15 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-ink/5">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center lg:px-8">
                <motion.p
                  className="font-serif text-5xl lg:text-6xl xl:text-7xl font-semibold text-ink"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-shimmer">{stat.value}</span>
                </motion.p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
