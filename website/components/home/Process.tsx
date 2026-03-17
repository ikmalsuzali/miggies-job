'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your vision, space, and lifestyle needs through an in-depth discussion.',
  },
  {
    number: '02',
    title: 'Concept & 3D',
    description: 'Developing the design concept with photorealistic 3D renders so you see exactly what you\'ll get.',
  },
  {
    number: '03',
    title: 'Refinement',
    description: 'Fine-tuning materials, finishes, and details until every element aligns with your vision.',
  },
  {
    number: '04',
    title: 'Delivery',
    description: 'Overseeing execution to ensure the built space matches the approved render with precision.',
  },
]

export default function Process() {
  return (
    <section className="py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95] mb-16 lg:mb-24">
            How it works
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <div className="relative">
                <p className="font-serif text-5xl lg:text-6xl text-ink/10 font-light mb-4">
                  {step.number}
                </p>
                <h3 className="text-lg font-medium text-ink mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {step.description}
                </p>
                {/* Connecting line on desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-ink/5" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 lg:mt-20">
            <Button href="/contact">
              Start with a Free Consultation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
