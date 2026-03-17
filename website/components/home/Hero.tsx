'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — content */}
          <div className="order-2 lg:order-1 py-12 lg:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-ink leading-[0.95] mb-8"
            >
              Where renders
              <br />
              become reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-ink-light text-lg lg:text-xl leading-relaxed max-w-lg mb-10"
            >
              Meticulous interiors where the 3D visualization is what you get in the built space. Residential & commercial projects across Malaysia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button href="/portfolio" size="lg">
                View Portfolio
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-xs text-ink-muted tracking-wider uppercase"
            >
              6+ years &middot; 20+ projects &middot; Residential & Commercial
            </motion.p>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden bg-cream-dark">
              <Image
                src="/images/projects/one-menerung/hero.jpg"
                alt="Luxury interior design by Ashikin Azidee — living room with herringbone floors and custom joinery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
