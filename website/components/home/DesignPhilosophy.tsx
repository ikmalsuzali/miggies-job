'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'

export default function DesignPhilosophy() {
  return (
    <section className="py-24 lg:py-32 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — statement */}
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-brass mb-6">
              Design Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
              Render to Reality
            </h2>
            <p className="text-cream/70 text-base lg:text-lg leading-relaxed mb-6">
              Great design should never be a compromise between vision and execution.
              Every project I deliver achieves a near-exact match between the 3D
              visualization and the completed space.
            </p>
            <p className="text-cream/70 text-base lg:text-lg leading-relaxed mb-10">
              This precision comes from deep material knowledge, close contractor
              relationships, and an obsessive attention to detail at every stage —
              from concept sketch to final styling.
            </p>
            <Button href="/portfolio" variant="outline" className="border-cream/30 text-cream hover:bg-cream hover:text-ink">
              See the Proof
            </Button>
          </ScrollReveal>

          {/* Right — render vs reality teaser */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] bg-cream/5 rounded-sm overflow-hidden relative">
                {/* Placeholder — visual comparison teaser */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-sage/20 to-sage/5 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-2xl text-cream/40 mb-2">Render</p>
                      <p className="text-xs text-cream/25 uppercase tracking-widest">3D Visualization</p>
                    </div>
                  </div>
                  <div className="w-px bg-brass/40" />
                  <div className="w-1/2 bg-gradient-to-bl from-brass/20 to-brass/5 flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-serif text-2xl text-cream/40 mb-2">Reality</p>
                      <p className="text-xs text-cream/25 uppercase tracking-widest">Built Space</p>
                    </div>
                  </div>
                </div>
                {/* Center divider handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-brass/60 flex items-center justify-center backdrop-blur-sm bg-ink/20">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brass">
                    <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-xs text-cream/40 text-center uppercase tracking-widest">
                Drag to compare — visit project pages for full comparisons
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
