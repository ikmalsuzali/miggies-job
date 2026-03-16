import { siteConfig } from '@/lib/data/site'

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink mb-4">
          Let&apos;s create
          <br />
          something beautiful
        </h2>
        <p className="text-ink-light text-base leading-relaxed">
          Whether you&apos;re planning a new home, renovating a space, or developing a
          commercial project — I&apos;d love to hear about it.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-ink hover:text-brass transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
            Location
          </p>
          <p className="text-sm text-ink">{siteConfig.location}</p>
        </div>

        {siteConfig.linkedin && (
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass mb-1">
              LinkedIn
            </p>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink hover:text-brass transition-colors"
            >
              View Profile
            </a>
          </div>
        )}
      </div>

      {/* Decorative element */}
      <div className="pt-8 border-t border-ink/10">
        <p className="text-xs text-ink-muted uppercase tracking-widest">
          Available for projects in Singapore, Southeast Asia &amp; Remote
        </p>
      </div>
    </div>
  )
}
