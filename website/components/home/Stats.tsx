'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const stats = [
  { value: '25+', label: 'Projects Completed' },
  { value: '95%', label: 'Render-to-Reality Accuracy' },
  { value: '7+', label: 'Years Experience' },
  { value: '12', label: 'Awards & Features' },
]

export default function Stats() {
  return (
    <section className="py-20 lg:py-28 border-y border-ink/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <motion.p
                  className="font-serif text-4xl lg:text-5xl font-semibold text-brass"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-ink-muted">
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
