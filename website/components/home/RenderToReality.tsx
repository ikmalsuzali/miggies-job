'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function RenderToReality() {
  const [position, setPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging) handleMove(e.clientX)
    },
    [isDragging, handleMove]
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  return (
    <section className="py-28 lg:py-40 bg-ink-deep text-cream overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left — statement */}
          <ScrollReveal className="lg:col-span-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] mb-8">
              What you see
              <br />
              is what you get.
            </h2>
            <p className="text-cream/50 text-base lg:text-lg leading-relaxed mb-6">
              Every project achieves a near-exact match between the 3D visualization and the completed space. This precision comes from deep material knowledge, close contractor relationships, and obsessive attention to detail.
            </p>
            <p className="text-xs text-cream/30 tracking-wider uppercase mb-8">
              98% render-to-reality accuracy
            </p>
            <Button href="/portfolio" variant="outline" className="border-cream/20 text-cream hover:bg-cream hover:text-ink">
              See All Comparisons
            </Button>
          </ScrollReveal>

          {/* Right — actual comparison slider */}
          <ScrollReveal delay={0.2} className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative aspect-[16/10] overflow-hidden cursor-ew-resize select-none bg-cream-dark"
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchMove={handleTouchMove}
              onTouchEnd={() => setIsDragging(false)}
            >
              {/* Reality image (full width, behind) */}
              <div className="absolute inset-0">
                <Image
                  src="/images/projects/wisma-consplant/1.jpg"
                  alt="Completed office lobby by Ashikin Azidee"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  draggable={false}
                />
              </div>

              {/* Render image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
              >
                <div className="absolute inset-0" style={{ width: `${containerRef.current?.offsetWidth ?? 9999}px` }}>
                  <Image
                    src="/images/projects/wisma-consplant/hero.jpg"
                    alt="3D render of office lobby"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white/90 z-10"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              />

              {/* Drag handle */}
              <div
                className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${position}%` }}
                onMouseDown={handleMouseDown}
                onTouchStart={() => setIsDragging(true)}
              >
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-ink">
                    <path d="M6 10H14M6 10L8.5 7.5M6 10L8.5 12.5M14 10L11.5 7.5M14 10L11.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-white/90 bg-ink/50 backdrop-blur-md px-4 py-2">
                  3D Render
                </span>
              </div>
              <div className="absolute top-4 right-4 z-10">
                <span className="text-xs uppercase tracking-[0.2em] text-white/90 bg-ink/50 backdrop-blur-md px-4 py-2">
                  Built Space
                </span>
              </div>

              {/* Instruction */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <span className="text-xs text-white/60 bg-ink/40 backdrop-blur-md px-4 py-2">
                  Drag to compare
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
