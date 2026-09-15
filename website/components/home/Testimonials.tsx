'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/lib/data/testimonials'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonial = testimonials[current]

  return (
    <section className="py-28 lg:py-40 bg-cream-dark">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-serif text-2xl lg:text-3xl text-ink leading-relaxed font-light italic mb-10">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="text-sm font-medium text-ink">{testimonial.author}</p>
                  <p className="text-xs text-ink-muted mt-1">{testimonial.project}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {testimonials.length > 1 && (
              <div className="flex items-center justify-center gap-3 mt-10">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-pressed={i === current}
                    className={`w-11 h-11 flex items-center justify-center transition-all duration-300 ${
                      i === current ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    }`}
                    aria-label={`View testimonial ${i + 1}`}
                  >
                    <span aria-hidden="true" className={`h-1 rounded-full bg-current transition-all ${i === current ? 'w-6' : 'w-2'}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
