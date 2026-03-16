'use client'

import Image from 'next/image'
import { ProjectImage } from '@/lib/types'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (images.length === 0) return null

  return (
    <section className="py-16 lg:py-24 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading label="Gallery" title="Project Images" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <ScrollReveal key={image.src} delay={index * 0.1}>
              <div className="aspect-[4/3] relative overflow-hidden bg-cream">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
