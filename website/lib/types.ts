export type ProjectCategory = 'Residential' | 'Commercial' | 'Design & Built'

export interface ProjectImage {
  src: string
  alt: string
}

export interface ComparisonPair {
  render: ProjectImage
  reality: ProjectImage
  caption?: string
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  category: ProjectCategory
  year: string
  location: string
  client?: string
  area?: string
  description: string
  scope: string[]
  heroImage: ProjectImage
  gallery: ProjectImage[]
  comparison?: ComparisonPair[]
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
}

export interface Skill {
  name: string
  category: 'Software' | 'Design' | 'Technical' | 'Soft Skills'
  proficiency: number // 1-5
}

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  email: string
  phone?: string
  linkedin?: string
  location: string
}
