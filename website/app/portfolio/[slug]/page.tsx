import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/data/projects'
import ProjectHero from '@/components/project/ProjectHero'
import ProjectDetails from '@/components/project/ProjectDetails'
import ImageComparisonSlider from '@/components/project/ImageComparisonSlider'
import ProjectGallery from '@/components/project/ProjectGallery'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <>
      <ProjectHero project={project} />
      <ProjectDetails project={project} />

      {/* Render vs Reality comparison */}
      {project.comparison && project.comparison.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <ScrollReveal>
              <SectionHeading
                label="Render to Reality"
                title="Compare the Vision"
                subtitle="Drag the slider to compare the 3D render with the completed space."
              />
            </ScrollReveal>
            <div className="space-y-12">
              {project.comparison.map((pair, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <ImageComparisonSlider comparison={pair} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <ProjectGallery images={project.gallery} />

      {/* Back to portfolio */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <Button href="/portfolio" variant="outline">
            &larr; Back to Portfolio
          </Button>
        </div>
      </section>
    </>
  )
}
