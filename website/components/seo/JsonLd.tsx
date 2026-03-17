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
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: 'Head of Design',
    description: siteConfig.description,
    image: `${siteConfig.url}/images/profile/profile.jpg`,
    sameAs: [siteConfig.linkedin].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressLocality: 'Malaysia',
    },
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
    email: siteConfig.email,
    telephone: siteConfig.phone,
    image: `${siteConfig.url}/images/profile/profile.jpg`,
    priceRange: 'RM 50,000 - RM 500,000+',
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
    },
    serviceType: [
      'Interior Design',
      '3D Visualization',
      'Design & Build',
      'Space Planning',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
    },
  }
}

export function projectSchema(project: {
  title: string
  slug: string
  description: string
  category: string
  year: string
  location: string
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
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
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
