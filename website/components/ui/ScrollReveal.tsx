'use client'

import { useEffect, useRef, type ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

const offsets = {
  up: 'translateY(24px)',
  down: 'translateY(-24px)',
  left: 'translateX(24px)',
  right: 'translateX(-24px)',
}

export default function ScrollReveal({ children, className, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animation: Animation | undefined
    const cancelMotion = () => { if (reducedMotion.matches) animation?.cancel() }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      if (!reducedMotion.matches) {
        animation = element.animate([{ transform: offsets[direction] }, { transform: 'none' }], {
          duration: 500,
          delay: delay * 1000,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        })
      }
      observer.disconnect()
    }, { rootMargin: '0px 0px -40px 0px' })
    observer.observe(element)
    reducedMotion.addEventListener('change', cancelMotion)
    return () => {
      observer.disconnect()
      animation?.cancel()
      reducedMotion.removeEventListener('change', cancelMotion)
    }
  }, [delay, direction])

  return <div ref={elementRef} className={className}>{children}</div>
}
