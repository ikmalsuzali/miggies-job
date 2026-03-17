import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function HomeCTA() {
  return (
    <section className="py-28 lg:py-40 bg-ink text-cream">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl font-light leading-[0.95] mb-8">
            Ready to transform
            <br />
            your space?
          </h2>
          <p className="text-cream/50 text-base lg:text-lg max-w-lg mx-auto mb-10">
            Share your vision and get a response within 48 hours with initial thoughts and availability.
          </p>
          <Button href="/contact" className="bg-brass text-cream hover:bg-brass-light border-0">
            Get in Touch
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
