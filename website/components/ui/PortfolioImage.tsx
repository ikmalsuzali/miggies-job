import Image, { getImageProps } from 'next/image'
import { ProjectImage } from '@/lib/types'

interface PortfolioImageProps {
  image: ProjectImage
  sizes?: string
  priority?: boolean
  className?: string
}

export default function PortfolioImage({ image, sizes = '100vw', priority = false, className = '' }: PortfolioImageProps) {
  if (!image.crop) {
    return <Image src={image.src} alt={image.alt} fill sizes={sizes} priority={priority} className={`object-cover ${className}`} />
  }

  const { x, y, width, height } = image.crop
  const { props } = getImageProps({ src: image.src, alt: image.alt, width: 1000, height: 563 })

  // Frame a single room without altering the original portfolio image.
  return (
    <>
      {priority && <link rel="preload" as="image" href={props.src} />}
      <svg role="img" aria-label={image.alt} viewBox={`${x} ${y} ${width} ${height}`} preserveAspectRatio="xMidYMid slice" className={`absolute inset-0 h-full w-full overflow-hidden ${className}`}>
        <image href={props.src} width="2000" height="1125" />
      </svg>
    </>
  )
}
