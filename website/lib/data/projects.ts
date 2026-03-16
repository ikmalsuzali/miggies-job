import { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'serene-residence',
    title: 'Serene Residence',
    subtitle: 'Minimalist luxury in a tropical setting',
    category: 'Residential',
    year: '2024',
    location: 'Singapore',
    client: 'Private Client',
    area: '1,800 sq ft',
    description:
      'A contemporary residential project that embraces minimalist luxury. The design language draws from tropical modernism, balancing clean lines with warm natural materials. Every detail was carefully considered to create spaces that feel both refined and welcoming.',
    scope: [
      'Space Planning',
      'Interior Design',
      '3D Visualization',
      'Material Selection',
      'Furniture Procurement',
      'Project Management',
    ],
    heroImage: {
      src: '/images/projects/serene-hero.jpg',
      alt: 'Serene Residence living room with floor-to-ceiling windows',
    },
    gallery: [
      { src: '/images/projects/serene-1.jpg', alt: 'Serene Residence open-plan living area' },
      { src: '/images/projects/serene-2.jpg', alt: 'Serene Residence master bedroom' },
      { src: '/images/projects/serene-3.jpg', alt: 'Serene Residence kitchen detail' },
      { src: '/images/projects/serene-4.jpg', alt: 'Serene Residence bathroom vanity' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/serene-render-1.jpg', alt: '3D render of living room' },
        reality: { src: '/images/projects/serene-real-1.jpg', alt: 'Completed living room' },
        caption: 'Living Room — Render vs Reality',
      },
    ],
    featured: true,
  },
  {
    slug: 'urban-loft',
    title: 'Urban Loft',
    subtitle: 'Industrial charm meets modern comfort',
    category: 'Residential',
    year: '2024',
    location: 'Singapore',
    client: 'Private Client',
    area: '1,200 sq ft',
    description:
      'An adaptive reuse project transforming a raw industrial space into a sophisticated urban loft. Exposed structural elements are celebrated alongside carefully curated contemporary furnishings, creating an atmosphere of effortless sophistication.',
    scope: [
      'Concept Design',
      'Interior Design',
      '3D Visualization',
      'Custom Joinery Design',
      'Lighting Design',
    ],
    heroImage: {
      src: '/images/projects/loft-hero.jpg',
      alt: 'Urban Loft open living space with exposed brick',
    },
    gallery: [
      { src: '/images/projects/loft-1.jpg', alt: 'Urban Loft kitchen and dining' },
      { src: '/images/projects/loft-2.jpg', alt: 'Urban Loft bedroom mezzanine' },
      { src: '/images/projects/loft-3.jpg', alt: 'Urban Loft study nook' },
      { src: '/images/projects/loft-4.jpg', alt: 'Urban Loft entrance hallway' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/loft-render-1.jpg', alt: '3D render of loft' },
        reality: { src: '/images/projects/loft-real-1.jpg', alt: 'Completed loft' },
        caption: 'Main Living — Render vs Reality',
      },
    ],
    featured: true,
  },
  {
    slug: 'coastal-retreat',
    title: 'Coastal Retreat',
    subtitle: 'Where land meets sea in perfect harmony',
    category: 'Residential',
    year: '2023',
    location: 'Sentosa, Singapore',
    client: 'Private Client',
    area: '3,200 sq ft',
    description:
      'A beachfront property designed to blur the boundaries between interior and exterior. Natural materials, a muted coastal palette, and panoramic glazing create a seamless connection with the surrounding seascape.',
    scope: [
      'Interior Design',
      'Space Planning',
      '3D Visualization',
      'Material Selection',
      'Art Curation',
      'Landscape Coordination',
    ],
    heroImage: {
      src: '/images/projects/coastal-hero.jpg',
      alt: 'Coastal Retreat living room with ocean view',
    },
    gallery: [
      { src: '/images/projects/coastal-1.jpg', alt: 'Coastal Retreat terrace' },
      { src: '/images/projects/coastal-2.jpg', alt: 'Coastal Retreat dining room' },
      { src: '/images/projects/coastal-3.jpg', alt: 'Coastal Retreat master suite' },
      { src: '/images/projects/coastal-4.jpg', alt: 'Coastal Retreat spa bathroom' },
    ],
    featured: true,
  },
  {
    slug: 'artisan-cafe',
    title: 'Artisan Café',
    subtitle: 'A third place designed for community',
    category: 'Commercial',
    year: '2023',
    location: 'Tiong Bahru, Singapore',
    client: 'Brew Collective Pte Ltd',
    area: '950 sq ft',
    description:
      'A specialty coffee shop that balances the warmth of artisanal craft with a refined spatial experience. The design creates distinct zones for different modes of gathering while maintaining visual cohesion throughout.',
    scope: [
      'Concept Design',
      'Interior Design',
      '3D Visualization',
      'Furniture Design',
      'Signage Design',
      'Contractor Coordination',
    ],
    heroImage: {
      src: '/images/projects/cafe-hero.jpg',
      alt: 'Artisan Café interior with timber and brass details',
    },
    gallery: [
      { src: '/images/projects/cafe-1.jpg', alt: 'Artisan Café counter and bar' },
      { src: '/images/projects/cafe-2.jpg', alt: 'Artisan Café seating area' },
      { src: '/images/projects/cafe-3.jpg', alt: 'Artisan Café exterior shopfront' },
      { src: '/images/projects/cafe-4.jpg', alt: 'Artisan Café material details' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/cafe-render-1.jpg', alt: '3D render of café interior' },
        reality: { src: '/images/projects/cafe-real-1.jpg', alt: 'Completed café interior' },
        caption: 'Main Counter — Render vs Reality',
      },
    ],
    featured: true,
  },
  {
    slug: 'wellness-studio',
    title: 'Wellness Studio',
    subtitle: 'Design that nurtures body and mind',
    category: 'Commercial',
    year: '2023',
    location: 'Orchard, Singapore',
    client: 'Aura Wellness Group',
    area: '2,400 sq ft',
    description:
      'A holistic wellness studio designed around principles of biophilic design. The space guides visitors through a carefully choreographed sequence of environments, from the energising reception to tranquil treatment rooms.',
    scope: [
      'Interior Design',
      'Space Planning',
      '3D Visualization',
      'Lighting Design',
      'Material Selection',
      'FF&E Procurement',
    ],
    heroImage: {
      src: '/images/projects/wellness-hero.jpg',
      alt: 'Wellness Studio reception with living wall',
    },
    gallery: [
      { src: '/images/projects/wellness-1.jpg', alt: 'Wellness Studio treatment room' },
      { src: '/images/projects/wellness-2.jpg', alt: 'Wellness Studio yoga space' },
      { src: '/images/projects/wellness-3.jpg', alt: 'Wellness Studio lounge' },
      { src: '/images/projects/wellness-4.jpg', alt: 'Wellness Studio corridor' },
    ],
  },
  {
    slug: 'heritage-shophouse',
    title: 'Heritage Shophouse',
    subtitle: 'Preserving character, reimagining function',
    category: 'Design & Built',
    year: '2022',
    location: 'Joo Chiat, Singapore',
    client: 'Private Client',
    area: '2,800 sq ft',
    description:
      'A sensitive restoration and conversion of a heritage shophouse into a contemporary family home. The design respects the building\'s architectural DNA — original Peranakan tiles, timber louvres, and airwells — while introducing modern comforts and spatial fluidity.',
    scope: [
      'Design & Build',
      'Interior Design',
      'Conservation Planning',
      '3D Visualization',
      'Material Selection',
      'Full Project Management',
    ],
    heroImage: {
      src: '/images/projects/shophouse-hero.jpg',
      alt: 'Heritage Shophouse restored facade and interior courtyard',
    },
    gallery: [
      { src: '/images/projects/shophouse-1.jpg', alt: 'Heritage Shophouse airwell courtyard' },
      { src: '/images/projects/shophouse-2.jpg', alt: 'Heritage Shophouse restored tiles' },
      { src: '/images/projects/shophouse-3.jpg', alt: 'Heritage Shophouse modern kitchen' },
      { src: '/images/projects/shophouse-4.jpg', alt: 'Heritage Shophouse upper floor bedroom' },
    ],
    comparison: [
      {
        render: {
          src: '/images/projects/shophouse-render-1.jpg',
          alt: '3D render of shophouse interior',
        },
        reality: {
          src: '/images/projects/shophouse-real-1.jpg',
          alt: 'Completed shophouse interior',
        },
        caption: 'Courtyard & Living — Render vs Reality',
      },
    ],
    featured: true,
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects
  return projects.filter((p) => p.category === category)
}
