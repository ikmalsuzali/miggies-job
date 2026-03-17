'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function DesignPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-44 bg-ink text-cream overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brass/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sage/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — statement */}
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-brass mb-8">
              Design Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] mb-10">
              Render to
              <br />
              <span className="text-shimmer">Reality</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-cream/50 text-base lg:text-lg leading-relaxed">
                Great design should never be a compromise between vision and execution.
                Every project I deliver achieves a near-exact match between the 3D
                visualization and the completed space.
              </p>
              <p className="text-cream/50 text-base lg:text-lg leading-relaxed">
                This precision comes from deep material knowledge, close contractor
                relationships, and an obsessive attention to detail at every stage.
              </p>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 mb-12 pt-8 border-t border-cream/10">
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-brass">98%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/30">Render Accuracy</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-brass">6+</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/30">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl font-semibold text-brass">3</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/30">D&B Projects</p>
              </div>
            </div>

            <Button href="/portfolio" variant="outline" className="border-cream/20 text-cream hover:bg-cream hover:text-ink">
              See the Proof
            </Button>
          </ScrollReveal>

          {/* Right — render vs reality teaser */}
          <ScrollReveal delay={0.2}>
            <motion.div className="relative" style={{ y: bgY }}>
              {/* Render image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src="/images/projects/wisma-consplant/hero.jpg"
                  alt="3D render by Ashikin Azidee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />

                {/* Label */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-1">Render</p>
                    <p className="font-serif text-xl text-cream">3D Visualization</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brass mb-1">Result</p>
                    <p className="font-serif text-xl text-cream">Built Space</p>
                  </div>
                </div>

                {/* Center comparison icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-16 rounded-full border border-brass/40 flex items-center justify-center backdrop-blur-md bg-ink/30"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-brass">
                      <path d="M5 12H19M5 12L8 9M5 12L8 15M19 12L16 9M19 12L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-brass/10 pointer-events-none hidden lg:block" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r border-b border-brass/15 pointer-events-none hidden lg:block" />
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
