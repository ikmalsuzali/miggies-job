'use client'

import { experiences } from '@/lib/data/experience'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ExperienceTimeline() {
  return (
    <section className="py-24 lg:py-32 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            label="Career Journey"
            title="Experience"
            subtitle="A progressive path through Singapore's design industry."
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-brass/20 hidden md:block" />

          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <ScrollReveal
                  key={exp.company}
                  delay={index * 0.1}
                  direction={isLeft ? 'left' : 'right'}
                >
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-12 lg:gap-20 ${
                      isLeft ? '' : 'md:direction-rtl'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brass border-2 border-cream-dark hidden md:block" />

                    <div
                      className={`${
                        isLeft
                          ? 'md:text-right md:pr-12 lg:pr-20'
                          : 'md:col-start-2 md:pl-12 lg:pl-20'
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-brass mb-2">
                        {exp.period}
                      </p>
                      <h3 className="font-serif text-2xl font-semibold text-ink mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-ink-muted mb-4">
                        {exp.company} &middot; {exp.location}
                      </p>
                      <p className="text-ink-light text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li
                            key={h}
                            className="text-sm text-ink-light flex items-start gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-brass mt-2 shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
