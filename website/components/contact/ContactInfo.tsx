export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95] mb-6">
          Let&apos;s discuss
          <br />
          your project.
        </h1>
        <p className="text-ink-light text-base lg:text-lg leading-relaxed max-w-lg">
          Whether you&apos;re planning a new home, renovating a space, or developing a
          commercial project — I&apos;d love to hear about it.
        </p>
      </div>

      {/* What to expect */}
      <div className="pt-8 border-t border-ink/5">
        <h3 className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-6">
          What to expect
        </h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <span className="font-serif text-2xl text-ink/15 font-light leading-none mt-0.5">01</span>
            <div>
              <p className="text-sm font-medium text-ink mb-1">Free consultation</p>
              <p className="text-sm text-ink-light">Share your vision and requirements with no obligation.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-serif text-2xl text-ink/15 font-light leading-none mt-0.5">02</span>
            <div>
              <p className="text-sm font-medium text-ink mb-1">48-hour response</p>
              <p className="text-sm text-ink-light">Receive initial thoughts and availability within two business days.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="font-serif text-2xl text-ink/15 font-light leading-none mt-0.5">03</span>
            <div>
              <p className="text-sm font-medium text-ink mb-1">Detailed proposal</p>
              <p className="text-sm text-ink-light">A tailored scope, timeline, and investment breakdown for your project.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
