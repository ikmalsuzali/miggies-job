'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ComparisonPair } from '@/lib/types'

interface ImageComparisonSliderProps {
  comparison: ComparisonPair
}

export default function ImageComparisonSlider({
  comparison,
}: ImageComparisonSliderProps) {
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
    <div className="space-y-4">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
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
            src={comparison.reality.src}
            alt={comparison.reality.alt}
            fill
            className="object-cover"
            sizes="100vw"
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
              src={comparison.render.src}
              alt={comparison.render.alt}
              fill
              className="object-cover"
              sizes="100vw"
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
      </motion.div>

      {comparison.caption && (
        <p className="text-xs text-ink-muted text-center uppercase tracking-[0.2em]">
          {comparison.caption}
        </p>
      )}
    </div>
  )
}
