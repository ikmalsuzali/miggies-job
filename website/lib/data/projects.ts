import { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'aetas-damansara',
    title: 'Aetas',
    subtitle: 'Japandi elegance in a luxury condominium',
    category: 'Residential',
    year: '2025',
    client: 'Private Client',
    area: '3,110 sq ft',
    description:
      'A spacious condominium designed around the Japandi concept — blending Japanese minimalism with Scandinavian warmth. The design features light oak timber panelling, organic sculptural lighting, and a restrained palette of cream, sand, and natural stone. Every space flows seamlessly from the living area through to private quarters, with careful attention to material transitions and ambient lighting.',
    scope: [
      'Interior Design',
      'Space Planning',
      '3D Visualization',
      'Material Selection',
      'Furniture Layout',
      'Lighting Design',
    ],
    heroImage: {
      src: '/images/projects/aetas-damansara/hero.jpg',
      alt: 'Aetas living room with soft neutral tones and timber details',
      crop: { x: 175, y: 578, width: 753, height: 422 },
    },
    gallery: [
      { src: '/images/projects/aetas-damansara/1.jpg', alt: 'Living room and dining area' },
      { src: '/images/projects/aetas-damansara/2.jpg', alt: 'Kitchen with island counter' },
      { src: '/images/projects/aetas-damansara/3.jpg', alt: 'Kitchen detail and appliances' },
      { src: '/images/projects/aetas-damansara/4.jpg', alt: 'Study room and entertainment area' },
      { src: '/images/projects/aetas-damansara/5.jpg', alt: 'Master bedroom and guest bedroom' },
      { src: '/images/projects/aetas-damansara/6.jpg', alt: 'Bedroom and wardrobe corridor' },
    ],
    featured: true,
  },
  {
    slug: 'mercu-maybank',
    title: 'Mercu Maybank',
    subtitle: 'Modern minimalist corporate office',
    category: 'Commercial',
    year: '2024',
    client: 'Rhenus Logistics',
    area: '4,987 sq ft',
    description:
      'A corporate office for Rhenus Logistics designed with a modern minimalist approach. The space features bold blue brand accents against timber and neutral tones, biophilic elements with indoor plants, and a functional layout spanning open workstations, meeting rooms, a conference hall, and pantry. This was a full design & build project with render-to-reality delivery.',
    scope: [
      'Design & Build',
      'Interior Design',
      '3D Visualization',
      'Furniture Layout',
      'Branding Integration',
      'Project Management',
    ],
    heroImage: {
      src: '/images/projects/mercu-maybank/hero.jpg',
      alt: 'Office with timber panelling and a blue rug',
      crop: { x: 73, y: 279, width: 855, height: 567 },
    },
    gallery: [
      { src: '/images/projects/mercu-maybank/1.jpg', alt: 'Open plan workstations' },
      { src: '/images/projects/mercu-maybank/2.jpg', alt: 'Office workspace with mural wall' },
      { src: '/images/projects/mercu-maybank/3.jpg', alt: 'Workstation area with plants' },
      { src: '/images/projects/mercu-maybank/4.jpg', alt: 'Office area with partition' },
      { src: '/images/projects/mercu-maybank/5.jpg', alt: 'Conference room' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/mercu-maybank/hero.jpg', alt: '3D render of office', crop: { x: 73, y: 279, width: 855, height: 567 } },
        reality: { src: '/images/projects/mercu-maybank/hero.jpg', alt: 'Completed office', crop: { x: 1212, y: 146, width: 596, height: 396 } },
        caption: 'Office — Render vs Reality',
      },
    ],
    featured: true,
  },
  {
    slug: 'wisma-consplant',
    title: 'Wisma Consplant',
    subtitle: 'Modern contemporary corporate workspace',
    category: 'Commercial',
    year: '2023',
    client: 'Rhenus Logistics',
    area: '3,600 sq ft',
    description:
      'A complete design & build corporate office featuring a modern contemporary concept. The space includes open plan workstations, meeting rooms, a conference room, phone booths, a pantry with dining, and a branded reception. Every render was delivered to near-exact specification in the built space, showcasing the render-to-reality capability across multiple areas.',
    scope: [
      'Design & Build',
      'Interior Design',
      '3D Visualization',
      'Space Planning',
      'Branding Integration',
      'Full Project Management',
    ],
    heroImage: {
      src: '/images/projects/wisma-consplant/hero.jpg',
      alt: 'Completed conference room with timber panelling',
      crop: { x: 1073, y: 279, width: 854, height: 567 },
    },
    gallery: [
      { src: '/images/projects/wisma-consplant/1.jpg', alt: 'Corporate values wall' },
      { src: '/images/projects/wisma-consplant/2.jpg', alt: 'Open office workspace' },
      { src: '/images/projects/wisma-consplant/3.jpg', alt: 'Workstation with timber divider' },
      { src: '/images/projects/wisma-consplant/4.jpg', alt: 'Open plan office area' },
      { src: '/images/projects/wisma-consplant/5.jpg', alt: 'Printing area' },
      { src: '/images/projects/wisma-consplant/6.jpg', alt: 'Pantry nook' },
      { src: '/images/projects/wisma-consplant/7.jpg', alt: 'Conference room' },
      { src: '/images/projects/wisma-consplant/8.jpg', alt: 'Meeting room with workstations' },
      { src: '/images/projects/wisma-consplant/9.jpg', alt: 'Pantry kitchen' },
      { src: '/images/projects/wisma-consplant/10.jpg', alt: 'Dining and break area' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/wisma-consplant/hero.jpg', alt: '3D render of conference room', crop: { x: 74, y: 324, width: 852, height: 478 } },
        reality: { src: '/images/projects/wisma-consplant/hero.jpg', alt: 'Completed conference room', crop: { x: 1073, y: 279, width: 854, height: 567 } },
        caption: 'Conference Room — Render vs Reality',
      },
    ],
    featured: true,
  },
  {
    slug: 'allevia-mont-kiara',
    title: 'Allevia',
    subtitle: 'Modern contemporary luxury living',
    category: 'Residential',
    year: '2025',
    client: 'Private Client',
    area: '1,900 sq ft',
    description:
      'A luxury condominium designed with a modern contemporary concept. The space features a warm palette of timber, stone, and subtle metallic accents. Custom joinery and built-in cabinetry maximise every square foot while maintaining a sense of openness and sophistication throughout the foyer, living, dining, bedrooms, and study.',
    scope: [
      'Interior Design',
      'Space Planning',
      '3D Visualization',
      'Material Selection',
      'Custom Joinery Design',
      'Furniture Layout',
    ],
    heroImage: {
      src: '/images/projects/allevia-mont-kiara/hero.jpg',
      alt: 'Allevia living room with custom shelving',
      crop: { x: 1073, y: 579, width: 751, height: 422 },
    },
    gallery: [
      { src: '/images/projects/allevia-mont-kiara/1.jpg', alt: 'Dining area and living room' },
      { src: '/images/projects/allevia-mont-kiara/2.jpg', alt: 'Master bedroom and walk-in wardrobe' },
      { src: '/images/projects/allevia-mont-kiara/3.jpg', alt: 'Wardrobe and kids bedroom' },
      { src: '/images/projects/allevia-mont-kiara/4.jpg', alt: 'Study room and bedroom detail' },
      { src: '/images/projects/allevia-mont-kiara/5.jpg', alt: 'Study and laundry area' },
      { src: '/images/projects/allevia-mont-kiara/6.jpg', alt: 'Shoe cabinet and foyer storage' },
    ],
    featured: true,
  },
  {
    slug: 'one-menerung',
    title: 'One Menerung',
    subtitle: 'Sophisticated luxury with earthy tones',
    category: 'Residential',
    year: '2025',
    client: 'Private Client',
    area: '3,200 sq ft',
    description:
      'A generous condominium designed with a modern contemporary luxury concept. The palette draws from nature — olive greens, warm walnut, and terracotta accents against herringbone flooring. The home includes a spacious living and dining area, gourmet kitchen, study, home gym, and multiple bedrooms with bespoke joinery throughout.',
    scope: [
      'Interior Design',
      'Space Planning',
      '3D Visualization',
      'Material Selection',
      'Furniture Layout',
      'Lighting Design',
    ],
    heroImage: {
      src: '/images/projects/one-menerung/hero.jpg',
      alt: 'One Menerung kitchen with dark cabinetry and marble finishes',
      crop: { x: 74, y: 276, width: 852, height: 573 },
    },
    gallery: [
      { src: '/images/projects/one-menerung/1.jpg', alt: 'Living room and TV feature wall' },
      { src: '/images/projects/one-menerung/2.jpg', alt: 'Dining area with kitchen island' },
      { src: '/images/projects/one-menerung/3.jpg', alt: 'Master bedroom' },
      { src: '/images/projects/one-menerung/4.jpg', alt: 'Bathroom with green tile accents' },
      { src: '/images/projects/one-menerung/5.jpg', alt: 'Kitchen and laundry area' },
      { src: '/images/projects/one-menerung/6.jpg', alt: 'Family area and study' },
      { src: '/images/projects/one-menerung/7.jpg', alt: 'Study room' },
      { src: '/images/projects/one-menerung/8.jpg', alt: 'Home gym' },
    ],
    featured: true,
  },
  {
    slug: 'rini-homes',
    title: 'Rini Homes 2',
    subtitle: 'Bold contemporary terrace house transformation',
    category: 'Residential',
    year: '2022',
    client: 'Private Client',
    area: '2,900 sq ft',
    description:
      'A consultation project for a double-storey terrace house. The design features a bold monochromatic palette with marble accents, a statement staircase, and a custom altar area. This project includes render-to-reality comparisons demonstrating close alignment between 3D visualization and the completed built space.',
    scope: [
      'Design Consultation',
      'Interior Design',
      '3D Visualization',
      'Material Selection',
      'Furniture Layout',
    ],
    heroImage: {
      src: '/images/projects/rini-homes/hero.jpg',
      alt: 'Bedroom with timber panelling and a built-in dressing table',
      crop: { x: 73, y: 257, width: 853, height: 610 },
    },
    gallery: [
      { src: '/images/projects/rini-homes/1.jpg', alt: 'Altar area render vs reality' },
      { src: '/images/projects/rini-homes/2.jpg', alt: 'Staircase and entrance foyer' },
      { src: '/images/projects/rini-homes/3.jpg', alt: 'Living room with marble TV wall' },
      { src: '/images/projects/rini-homes/4.jpg', alt: 'Living and dining area' },
      { src: '/images/projects/rini-homes/5.jpg', alt: 'Dining area with ring pendants' },
    ],
    comparison: [
      {
        render: { src: '/images/projects/rini-homes/hero.jpg', alt: '3D render of bedroom', crop: { x: 73, y: 257, width: 853, height: 610 } },
        reality: { src: '/images/projects/rini-homes/hero.jpg', alt: 'Completed bedroom', crop: { x: 1130, y: 279, width: 761, height: 569 } },
        caption: 'Bedroom — Render vs Reality',
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
