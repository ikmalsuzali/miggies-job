'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
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
    <div className="space-y-3">
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
          <Image
            src={comparison.render.src}
            alt={comparison.render.alt}
            fill
            className="object-cover"
            style={{ width: `${containerRef.current?.offsetWidth ?? 0}px`, maxWidth: 'none' }}
            sizes="100vw"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-10"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 z-20 -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 transition-transform">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-ink"
            >
              <path
                d="M6 10H14M6 10L8 8M6 10L8 12M14 10L12 8M14 10L12 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10">
          <span className="text-xs uppercase tracking-widest text-white/80 bg-ink/40 backdrop-blur-sm px-3 py-1.5">
            Render
          </span>
        </div>
        <div className="absolute top-4 right-4 z-10">
          <span className="text-xs uppercase tracking-widest text-white/80 bg-ink/40 backdrop-blur-sm px-3 py-1.5">
            Reality
          </span>
        </div>
      </div>

      {comparison.caption && (
        <p className="text-xs text-ink-muted text-center uppercase tracking-widest">
          {comparison.caption}
        </p>
      )}
    </div>
  )
}
