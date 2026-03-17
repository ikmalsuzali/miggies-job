'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const career = [
  {
    role: 'Head of Design',
    company: 'Design Bliss',
    period: 'Jan 2025 — Present',
    description: 'Leading the design team and overseeing full project lifecycle from concept to completion. Providing creative direction, managing client communication, and supervising project timelines.',
  },
  {
    role: 'Senior Interior Designer',
    company: 'Design Bliss',
    period: 'Apr 2022 — Jan 2025',
    description: 'Led interior design projects from concept development to final execution. Coordinated with consultants, contractors, and suppliers. Mentored junior designers.',
  },
  {
    role: 'Interior Designer',
    company: 'Blaine Robert Design / V ID Contract / Hdreka Resources',
    period: 'Dec 2018 — Apr 2022',
    description: 'Developed creative interior design solutions for residential and commercial projects across multiple firms, building expertise in materials, construction, and client relations.',
  },
]

export default function ExperienceTimeline() {
  return (
    <section className="py-28 lg:py-36 bg-cream-dark">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95]">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl">
          <div className="space-y-12">
            {career.map((item, index) => (
              <ScrollReveal key={item.role} delay={index * 0.1}>
                <div className="relative pl-8 border-l border-ink/10">
                  <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-ink -translate-x-[4.5px]" />
                  <p className="text-xs text-ink-muted uppercase tracking-wider mb-2">
                    {item.period}
                  </p>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink mb-1">
                    {item.role}
                  </h3>
                  <p className="text-xs text-ink-muted uppercase tracking-wider mb-4">
                    {item.company}
                  </p>
                  <p className="text-sm text-ink-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education */}
          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-ink/5">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-muted mb-3">Education</p>
              <p className="font-serif text-xl text-ink">Bachelor&apos;s in Interior Architecture</p>
              <p className="text-xs text-ink-muted mt-1 uppercase tracking-wider">UiTM &middot; 2014 — 2018</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
