import type { Metadata } from 'next'
import ProfileSection from '@/components/about/ProfileSection'
import ExperienceTimeline from '@/components/about/ExperienceTimeline'
import SkillsGrid from '@/components/about/SkillsGrid'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Ashikin Azidee — an interior designer with 7+ years of experience specializing in render-to-reality accuracy across residential and commercial spaces.',
}

export default function AboutPage() {
  return (
    <>
      <ProfileSection />
      <ExperienceTimeline />
      <SkillsGrid />
    </>
  )
}
