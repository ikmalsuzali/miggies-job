import type { Metadata } from 'next'
import ProjectGrid from '@/components/portfolio/ProjectGrid'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Browse the interior design portfolio of Ashikin Azidee — residential, commercial, and design & build projects across Singapore.',
}

export default function PortfolioPage() {
  return <ProjectGrid />
}
