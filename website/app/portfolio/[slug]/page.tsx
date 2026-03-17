import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects, getProject } from '@/lib/data/projects'
import ProjectHero from '@/components/project/ProjectHero'
import ProjectDetails from '@/components/project/ProjectDetails'
import ImageComparisonSlider from '@/components/project/ImageComparisonSlider'
import ProjectGallery from '@/components/project/ProjectGallery'
import ScrollReveal from '@/components/ui/ScrollReveal'
import JsonLd, { projectSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

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
    title: `${project.title} — ${project.category} Interior Design`,
    description: `${project.subtitle}. ${project.area ? project.area + ' ' : ''}${project.category.toLowerCase()} interior design project in ${project.location} by Ashikin Azidee.`,
    alternates: {
      canonical: `/portfolio/${slug}`,
    },
    openGraph: {
      title: `${project.title} — ${project.category} Interior Design`,
      description: project.subtitle,
      url: `/portfolio/${slug}`,
      images: [
        {
          url: project.heroImage.src,
          width: 1200,
          height: 630,
          alt: project.heroImage.alt,
        },
      ],
    },
    twitter: {
      title: `${project.title} — ${project.category} Interior Design`,
      description: `${project.subtitle}. ${project.category} interior design in ${project.location} by Ashikin Azidee.`,
      images: [project.heroImage.src],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <>
      <JsonLd data={[
        projectSchema(project),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' },
          { name: project.title, url: `/portfolio/${slug}` },
        ]),
      ]} />
      <ProjectHero project={project} />
      <ProjectDetails project={project} />

      {/* Render vs Reality comparison */}
      {project.comparison && project.comparison.length > 0 && (
        <section className="py-20 lg:py-28 bg-cream-dark">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
            <ScrollReveal>
              <div className="mb-14">
                <h2 className="font-serif text-3xl lg:text-4xl font-light text-ink mb-4">
                  Render to Reality
                </h2>
                <p className="text-sm text-ink-light">
                  Drag the slider to compare the 3D render with the completed space.
                </p>
              </div>
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

      {/* Next project — fullwidth preview */}
      <Link
        href={`/portfolio/${nextProject.slug}`}
        className="group block relative overflow-hidden"
      >
        <div className="relative h-[40vh] lg:h-[50vh] bg-cream-dark">
          <Image
            src={nextProject.heroImage.src}
            alt={nextProject.heroImage.alt}
            fill
            className="object-cover transition-transform duration-[1.2s] group-hover:scale-[1.02]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ink/60 group-hover:bg-ink/50 transition-colors duration-500" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-3">
              Next Project
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl font-light text-cream">
              {nextProject.title}
            </h2>
          </div>
        </div>
      </Link>
    </>
  )
}
