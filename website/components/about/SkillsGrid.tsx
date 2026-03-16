'use client'

import { skills, skillCategories } from '@/lib/data/skills'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function SkillsGrid() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <ScrollReveal>
          <SectionHeading
            label="Capabilities"
            title="Skills & Expertise"
            subtitle="Proficiencies across software, design methodology, and technical delivery."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category} delay={catIndex * 0.1}>
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-brass mb-6 pb-3 border-b border-brass/20">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-ink">{skill.name}</span>
                        </div>
                        <div className="h-1 bg-cream-dark rounded-full overflow-hidden">
                          <div
                            className="h-full bg-brass/60 rounded-full transition-all duration-700"
                            style={{ width: `${(skill.proficiency / 5) * 100}%` }}
                          />
                        </div>
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
