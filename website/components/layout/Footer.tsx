import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Start a project' },
]

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-cream border-t border-cream/15">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16 py-12 lg:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <Link href="/" className="font-serif text-3xl">{siteConfig.name}</Link>
            <p className="mt-4 text-sm leading-relaxed text-cream/65 max-w-sm">Thoughtful interiors. From the first idea to the space you call your own.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="text-[10px] uppercase tracking-[0.25em] text-cream/55 mb-4">Explore</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
              {footerLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="inline-block py-2 text-sm text-cream/75 hover:text-cream transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 pt-6 border-t border-cream/15 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <a href="#main-content" className="hover:text-cream">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
