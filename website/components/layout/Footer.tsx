import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl lg:text-3xl text-cream mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Interior designer crafting spaces where renders become reality.
              Based in {siteConfig.location}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-brass transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-brass mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-cream/60 hover:text-brass transition-colors duration-300"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.linkedin && (
                <li>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream/60 hover:text-brass transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              <li className="text-sm text-cream/60">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
