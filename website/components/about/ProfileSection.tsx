'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function ProfileSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <ScrollReveal className="lg:col-span-2">
            <div className="aspect-[3/4] relative bg-cream-dark overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Ashikin Azidee — Interior Designer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-brass/20 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Bio */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-brass mb-6">
              About Me
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-ink leading-tight mb-8">
              Designing spaces that
              <br />
              tell your story
            </h1>
            <div className="space-y-5 text-ink-light text-base lg:text-lg leading-relaxed">
              <p>
                I&apos;m Ashikin Azidee, an interior designer based in Singapore with
                over 7 years of experience crafting residential and commercial
                spaces. My work is defined by one principle: what you see in the
                render should be what you experience in the built space.
              </p>
              <p>
                This commitment to render-to-reality accuracy sets my practice
                apart. Through deep material expertise, trusted contractor
                partnerships, and an eye for detail that extends to every joint,
                finish, and fixture, I deliver spaces that honour the original
                design intent.
              </p>
              <p>
                I hold a Bachelor&apos;s degree in Interior Design and have worked with
                leading firms across Singapore before taking on independent projects.
                My work spans private residences, boutique hospitality, and specialty
                retail — each project approached with the same rigour and creative care.
              </p>
            </div>
            <div className="mt-10">
              <Button href="/contact">Let&apos;s Work Together</Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
