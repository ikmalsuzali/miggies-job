'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background — abstract warm gradient as placeholder for hero image */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-dark to-brass/10" />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-12 lg:left-24 top-0 bottom-0 w-px bg-brass/20 origin-top hidden lg:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-32 w-full">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs uppercase tracking-[0.3em] text-brass mb-6"
          >
            Interior Design &middot; Singapore
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-ink leading-[0.95] mb-8"
          >
            Where renders
            <br />
            <span className="text-brass">become</span> reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-ink-light text-base lg:text-lg leading-relaxed max-w-xl mb-10"
          >
            I design residential and commercial interiors with meticulous attention
            to detail — ensuring what you see in the render is what you get in the
            built space.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/portfolio" size="lg">
              View Portfolio
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-brass/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
