'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/lib/data/site'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    setScrolled(latest > 50)
    setHidden(latest > 300 && latest > previous)
  })

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-cream/95 backdrop-blur-xl border-b border-ink/5'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-[1400px] px-6 lg:px-16 flex items-center justify-between h-18 lg:h-24">
          {/* Logo */}
          <Link href="/" className="font-serif text-lg lg:text-xl font-semibold tracking-tight text-ink">
            {siteConfig.name}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300 py-2',
                      isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link
                href="/contact"
                className="text-xs font-medium tracking-[0.15em] uppercase px-6 py-2.5 bg-ink text-cream hover:bg-brass transition-all duration-300"
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={cn(
                'absolute block w-5 h-[1.5px] bg-ink transition-all duration-300 ease-out',
                mobileOpen ? 'rotate-45' : '-translate-y-1.5'
              )}
            />
            <span
              className={cn(
                'absolute block w-5 h-[1.5px] bg-ink transition-all duration-300 ease-out',
                mobileOpen && 'opacity-0 scale-x-0'
              )}
            />
            <span
              className={cn(
                'absolute block w-5 h-[1.5px] bg-ink transition-all duration-300 ease-out',
                mobileOpen ? '-rotate-45' : 'translate-y-1.5'
              )}
            />
          </button>
        </nav>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'font-serif text-5xl font-semibold tracking-tight transition-colors duration-300',
                      pathname === link.href ? 'text-ink' : 'text-ink-muted hover:text-ink'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: links.length * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-6 mt-8 pt-8 border-t border-ink/10"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-muted hover:text-ink transition-colors"
                >
                  {siteConfig.email}
                </a>
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-sm text-ink-muted hover:text-ink transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                )}
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
