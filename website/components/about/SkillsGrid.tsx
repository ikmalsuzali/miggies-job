'use client'

import ScrollReveal from '@/components/ui/ScrollReveal'

const capabilities = [
  {
    title: 'Software & Tools',
    items: ['3ds Max', 'SketchUp', 'Corona Renderer', 'V-Ray', 'AutoCAD', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  {
    title: 'Design Expertise',
    items: ['Space Planning', 'Concept Development', 'Material Selection', 'FF&E Specification', 'Lighting Design', 'Colour Theory'],
  },
  {
    title: 'Project Delivery',
    items: ['Construction Drawings', '3D Visualization', 'Project Coordination', 'Site Supervision', 'Budgeting & Timelines', 'Client Relations'],
  },
]

export default function SkillsGrid() {
  return (
    <section className="py-28 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <ScrollReveal>
          <div className="mb-16 lg:mb-24">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[0.95]">
              Capabilities
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {capabilities.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] text-ink-muted mb-8 pb-4 border-b border-ink/10">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-ink">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
