import ScrollReveal from '@/components/ui/ScrollReveal'

export default function Philosophy() {
  return (
    <section className="py-28 lg:py-36 bg-ink-deep">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-cream leading-relaxed italic">
              &ldquo;Great design should never be a compromise between vision and execution. What you see in the render is what you should experience in the built space.&rdquo;
            </blockquote>
            <p className="mt-8 text-sm text-cream/40">Ashikin Azidee</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
