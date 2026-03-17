'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ProjectImage } from '@/lib/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Lightbox from '@/components/ui/Lightbox'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }, [])

  const closeLightbox = useCallback(() => setLightboxOpen(false), [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  if (images.length === 0) return null

  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <ScrollReveal>
            <div className="mb-14">
              <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink">
                Gallery
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
            {images.map((image, index) => {
              const isWide = index === 0 || index === 3
              return (
                <ScrollReveal
                  key={image.src}
                  delay={index * 0.06}
                  className={isWide ? 'md:col-span-2' : ''}
                >
                  <button
                    onClick={() => openLightbox(index)}
                    className={`${isWide ? 'aspect-[21/9]' : 'aspect-[4/3]'} relative overflow-hidden bg-cream-dark group cursor-pointer w-full`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                      sizes={isWide ? '100vw' : '50vw'}
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-all duration-500 flex items-end">
                      <p className="p-5 text-xs uppercase tracking-[0.15em] text-cream/0 group-hover:text-cream/80 transition-all duration-500">
                        {image.alt}
                      </p>
                    </div>
                  </button>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  )
}
