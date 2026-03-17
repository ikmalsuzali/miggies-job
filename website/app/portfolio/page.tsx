import type { Metadata } from 'next'
import ProjectGrid from '@/components/portfolio/ProjectGrid'
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Interior Design Portfolio — Residential & Commercial Projects',
  description:
    'Browse the interior design portfolio of Ashikin Azidee — residential condominiums, corporate offices, and design & build projects across Malaysia with render-to-reality comparisons.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Interior Design Portfolio — Residential & Commercial Projects',
    description:
      'Browse the interior design portfolio of Ashikin Azidee — residential condominiums, corporate offices, and design & build projects across Malaysia.',
    url: '/portfolio',
  },
  twitter: {
    title: 'Interior Design Portfolio — Residential & Commercial Projects',
    description:
      'Residential condominiums, corporate offices, and design & build projects across Malaysia by Ashikin Azidee.',
  },
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Portfolio', url: '/portfolio' },
      ])} />
      <ProjectGrid />
    </>
  )
}
