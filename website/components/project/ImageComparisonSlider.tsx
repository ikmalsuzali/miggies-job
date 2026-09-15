'use client'

import { useId, useState } from 'react'
import PortfolioImage from '@/components/ui/PortfolioImage'
import { ComparisonPair } from '@/lib/types'

export default function ImageComparisonSlider({ comparison, dark = false }: { comparison: ComparisonPair; dark?: boolean }) {
  const [position, setPosition] = useState(50)
  const instructionId = useId()

  return (
    <figure className="space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden select-none bg-cream-dark group focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-brass-dark">
        <PortfolioImage image={comparison.reality} className="object-cover" sizes="(max-width: 1024px) 100vw, 80vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <PortfolioImage image={comparison.render} className="object-cover" sizes="(max-width: 1024px) 100vw, 80vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-y-0 w-0.5 bg-white pointer-events-none" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-ink text-xl">↔</div>
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 top-4 flex justify-between px-4 pointer-events-none text-[10px] uppercase tracking-[0.15em] text-white">
          <span className="bg-ink/80 px-3 py-2">3D Render</span>
          <span className="bg-ink/80 px-3 py-2">Built Space</span>
        </div>
        <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Compare 3D render and built space" aria-describedby={instructionId} aria-valuetext={`${position}% 3D render, ${100 - position}% built space`} className="comparison-range absolute inset-0 z-20 w-full h-full opacity-0 cursor-ew-resize" />
      </div>
      <figcaption className={`text-center text-xs leading-relaxed ${dark ? 'text-cream/70' : 'text-ink-muted'}`}>
        {comparison.caption && <span className="block mb-1">{comparison.caption}</span>}
        <span id={instructionId}>Drag to explore. Use the arrow keys when selected.</span>
      </figcaption>
    </figure>
  )
}
