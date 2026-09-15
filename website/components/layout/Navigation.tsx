'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { cn, containDialogFocus } from '@/lib/utils'
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
  const [hasFocus, setHasFocus] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const { scrollY } = useScroll()
  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href))

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50)
    setHidden(latest > 300 && latest > (scrollY.getPrevious() ?? 0))
  })

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !mobileOpen) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => { if (desktop.matches) setMobileOpen(false) }
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      desktop.removeEventListener('change', closeOnDesktop)
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  return (
    <>
      <header onFocusCapture={() => setHasFocus(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false) }} className={cn('fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b', scrolled ? 'bg-cream/95 backdrop-blur-xl border-ink/10' : 'bg-cream border-transparent', hidden && !hasFocus && !mobileOpen && '-translate-y-full')}>
        <nav aria-label="Main navigation" className="mx-auto max-w-[1400px] px-6 lg:px-16 flex items-center justify-between h-18 lg:h-24">
          <Link href="/" className="font-serif text-xl lg:text-2xl font-semibold tracking-tight">{siteConfig.name}</Link>
          <ul className="hidden md:flex items-center gap-8 lg:gap-10">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={isActive(link.href) ? 'page' : undefined} className={cn('link-hover text-xs font-medium tracking-[0.15em] uppercase py-3', isActive(link.href) ? 'text-ink' : 'text-ink-muted hover:text-ink')}>{link.label}</Link>
              </li>
            ))}
            <li><Link href="/contact" className="text-xs font-medium tracking-[0.15em] uppercase px-6 py-3 bg-ink text-cream hover:bg-brass-dark transition-colors">Start a project ↗</Link></li>
          </ul>
          <button type="button" onClick={() => setMobileOpen(true)} className="md:hidden w-11 h-11 flex flex-col items-center justify-center gap-1.5" aria-label="Open menu" aria-expanded={mobileOpen} aria-controls="mobile-menu" aria-haspopup="dialog">
            <span className="w-5 h-px bg-ink" /><span className="w-5 h-px bg-ink" />
          </button>
        </nav>
      </header>
      <dialog ref={dialogRef} id="mobile-menu" aria-label="Navigation menu" onKeyDown={containDialogFocus} onCancel={() => setMobileOpen(false)} onClose={() => setMobileOpen(false)} className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-cream text-ink p-6 backdrop:bg-ink/30">
        <div className="flex justify-between items-center h-12">
          <p className="font-serif text-xl">{siteConfig.name}</p>
          <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="w-11 h-11 text-2xl">×</button>
        </div>
        <nav aria-label="Mobile navigation" className="flex flex-col justify-center gap-6 min-h-[70dvh] max-w-md mx-auto">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} aria-current={isActive(link.href) ? 'page' : undefined} className={cn('flex items-baseline gap-5 font-serif text-5xl border-b border-ink/10 pb-5', isActive(link.href) ? 'text-ink' : 'text-ink-muted')}>
              <span className="font-sans text-[10px] tracking-widest text-brass-dark">0{index + 1}</span>{link.label}
            </Link>
          ))}
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted mt-4">Considered spaces. Beautifully realised.</p>
        </nav>
      </dialog>
    </>
  )
}
