'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ProjectImage } from '@/lib/types'
import { containDialogFocus } from '@/lib/utils'

interface LightboxProps {
  images: ProjectImage[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, isOpen, onClose, onPrev, onNext }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !isOpen) return
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const image = images[currentIndex]
  return (
    <dialog ref={dialogRef} aria-label="Project image gallery" onCancel={onClose} onClose={onClose} onKeyDown={(event) => {
      containDialogFocus(event)
      if (event.key === 'ArrowLeft') { event.preventDefault(); onPrev() }
      if (event.key === 'ArrowRight') { event.preventDefault(); onNext() }
    }} className="lightbox fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none bg-ink-deep/95 text-cream p-0 backdrop:bg-ink-deep/90">
      {isOpen && image && (
        <div className="relative w-full h-full flex items-center justify-center" onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
          <button type="button" onClick={onClose} className="absolute top-4 right-4 z-10 w-12 h-12 text-3xl" aria-label="Close lightbox">×</button>
          <p className="absolute top-8 left-6 text-xs text-cream/75 tabular-nums" aria-live="polite">{currentIndex + 1} / {images.length}</p>
          <div className="relative w-[85vw] h-[75dvh]">
            <Image src={image.src} alt={image.alt} fill className="object-contain" sizes="85vw" />
          </div>
          {images.length > 1 && <>
            <button type="button" onClick={onPrev} className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ink/70 rounded-full text-2xl" aria-label="Previous image">←</button>
            <button type="button" onClick={onNext} className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-ink/70 rounded-full text-2xl" aria-label="Next image">→</button>
          </>}
          <p className="absolute bottom-6 inset-x-6 text-xs text-cream/75 text-center" aria-live="polite">{image.alt}</p>
        </div>
      )}
    </dialog>
  )
}
