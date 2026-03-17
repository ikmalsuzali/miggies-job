import type { Metadata } from 'next'
import ProfileSection from '@/components/about/ProfileSection'
import ExperienceTimeline from '@/components/about/ExperienceTimeline'
import SkillsGrid from '@/components/about/SkillsGrid'
import Philosophy from '@/components/about/Philosophy'
import JsonLd, { personSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'About Ashikin Azidee — Interior Designer & 3D Visualiser',
  description:
    'Interior designer and 3D visualiser with 6+ years of experience specializing in render-to-reality accuracy across residential and commercial spaces in Malaysia. Currently Head of Design.',
  alternates: {
    canonical: '/about',
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
      <ExperienceTimeline />
      <SkillsGrid />
    </>
  )
}
