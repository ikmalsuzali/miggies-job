import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream/80">
      <div className="border-t border-cream/10" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 py-12 lg:py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl text-cream mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-cream/40 max-w-xs">
              Interior designer & 3D visualiser crafting spaces where renders become reality. Based in {siteConfig.location}.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-cream/30 mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/40 hover:text-cream transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-cream/30 mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-cream/40 hover:text-cream transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-sm text-cream/40 hover:text-cream transition-colors duration-300"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
              {siteConfig.linkedin && (
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/40 hover:text-cream transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              <li className="text-sm text-cream/40">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-cream/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/25 tracking-wider">
            &copy; 2025 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
