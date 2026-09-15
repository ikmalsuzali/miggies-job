import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ImageComparisonSlider from '@/components/project/ImageComparisonSlider'
import { getProject } from '@/lib/data/projects'

export default function RenderToReality() {
  const comparison = getProject('wisma-consplant')?.comparison?.[0]
  if (!comparison) return null

  return (
    <section className="py-24 lg:py-32 bg-ink-deep text-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-brass-light mb-6">The vision. The finished space.</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] mb-8">From render<br />to reality.</h2>
            <p className="text-cream/70 text-base lg:text-lg leading-relaxed mb-8">
              Explore the details side by side. Material choices, considered lighting,
              and close collaboration carry the design through to the completed space.
            </p>
            <Button href="/portfolio/wisma-consplant" variant="outline" className="border-cream/40 text-cream hover:bg-cream hover:text-ink">Explore this project</Button>
          </ScrollReveal>
          <ScrollReveal delay={0.15} className="lg:col-span-8">
            <ImageComparisonSlider comparison={comparison} dark />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
