import type { Metadata } from 'next'
import ProfileSection from '@/components/about/ProfileSection'
import SkillsGrid from '@/components/about/SkillsGrid'
import Philosophy from '@/components/about/Philosophy'
import JsonLd, { personSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Ashikin Azidee — Interior Designer & 3D Visualiser',
  description:
    'Interior designer and 3D visualiser with 6+ years of experience specializing in render-to-reality accuracy across residential and commercial spaces. Currently Head of Design.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Ashikin Azidee — Interior Designer & 3D Visualiser',
    description:
      'Interior designer and 3D visualiser with 6+ years of experience specializing in render-to-reality accuracy across residential and commercial spaces.',
    url: '/about',
    images: [
      {
        url: '/images/projects/aetas-damansara/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Interior design portfolio by Ashikin Azidee',
      },
    ],
  },
  twitter: {
    title: 'About Ashikin Azidee — Interior Designer & 3D Visualiser',
    description:
      'Interior designer and 3D visualiser with 6+ years of experience in residential and commercial spaces.',
    images: ['/images/projects/aetas-damansara/hero.jpg'],
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[
        personSchema(),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]),
      ]} />
      <ProfileSection />
      <Philosophy />
      <SkillsGrid />
    </>
  )
}
