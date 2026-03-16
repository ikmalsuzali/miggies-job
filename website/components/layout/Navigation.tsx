'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-ink/5">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <Link
          href="/"
          className="font-serif text-xl lg:text-2xl font-semibold tracking-tight text-ink"
        >
          Ashikin Azidee
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide uppercase transition-colors duration-300',
                  pathname === link.href
                    ? 'text-brass'
                    : 'text-ink-light hover:text-brass'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-ink transition-transform duration-300',
              mobileOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-ink transition-opacity duration-300',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-ink transition-transform duration-300',
              mobileOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cream border-b border-ink/5 overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block text-lg font-medium tracking-wide',
                      pathname === link.href
                        ? 'text-brass'
                        : 'text-ink-light'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
