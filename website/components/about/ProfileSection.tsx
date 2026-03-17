'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function ProfileSection() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <ScrollReveal className="lg:col-span-6">
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              whileInView={{ clipPath: 'inset(0 0 0 0)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="aspect-[4/5] relative bg-cream-dark overflow-hidden"
            >
              <Image
                src="/images/profile/profile.jpg"
                alt="Ashikin Azidee — Interior Designer & 3D Visualiser"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.2} className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-muted mb-8">
              About
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95] mb-10">
              Designing spaces
              <br />
              that tell your story
            </h1>
            <div className="space-y-6 text-ink-light text-base lg:text-lg leading-[1.8]">
              <p>
                I&apos;m Ashikin Azidee, a self-driven interior designer and 3D visualiser based in Malaysia. My work is defined by one principle: what you see in the render should be what you experience in the built space.
              </p>
              <p>
                With a Bachelor&apos;s in Interior Architecture from UiTM and progression from Interior Designer to Head of Design, my portfolio spans luxury condominiums, corporate offices, and terrace homes — each approached with the same precision and creative care.
              </p>
            </div>

            <div className="mt-10">
              <Button href="/contact">
                Let&apos;s Work Together
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
