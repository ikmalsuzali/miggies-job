import { siteConfig } from '@/lib/data/site'

interface JsonLdProps {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  }
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Head of Design',
    description: siteConfig.description,
    image: `${siteConfig.url}/images/profile/profile.jpg`,
    knowsAbout: [
      'Interior Design',
      '3D Visualization',
      'Space Planning',
      'Residential Design',
      'Commercial Design',
      'Design & Build',
    ],
  }
}

export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    image: `${siteConfig.url}/images/profile/profile.jpg`,
    priceRange: 'RM 50,000 - RM 500,000+',
    serviceType: [
      'Interior Design',
      '3D Visualization',
      'Design & Build',
      'Space Planning',
    ],
  }
}

export function projectSchema(project: {
  title: string
  slug: string
  description: string
  category: string
  year: string
  heroImage: { src: string; alt: string }
  area?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    image: `${siteConfig.url}${project.heroImage.src}`,
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    dateCreated: project.year,
    genre: `${project.category} Interior Design`,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  }
}

export function imageGallerySchema(project: {
  title: string
  slug: string
  gallery: { src: string; alt: string }[]
  heroImage: { src: string; alt: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `${project.title} — Interior Design Gallery`,
    url: `${siteConfig.url}/portfolio/${project.slug}`,
    image: [
      {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${project.heroImage.src}`,
        name: project.heroImage.alt,
      },
      ...project.gallery.map((img) => ({
        '@type': 'ImageObject',
        url: `${siteConfig.url}${img.src}`,
        name: img.alt,
      })),
    ],
  }
}

export function reviewSchema(testimonials: { quote: string; author: string; project: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: {
        '@type': 'Person',
        name: t.author,
      },
      itemReviewed: {
        '@type': 'CreativeWork',
        name: t.project,
      },
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: String(testimonials.length),
      bestRating: '5',
    },
  }
}
