import PortfolioImage from '@/components/ui/PortfolioImage'
import { getProject } from '@/lib/data/projects'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  const project = getProject('aetas-damansara')!

  return (
    <section className="relative py-10 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 hero-intro">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-ink-muted mb-8 lg:mb-10">
              <span className="w-9 h-px bg-brass" aria-hidden="true" />
              Interior design & 3D visualisation
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl xl:text-[5.5rem] font-light text-ink leading-[0.92] tracking-[-0.035em] mb-7">
              Considered spaces.<br />
              <span className="italic text-brass-dark">Beautifully</span><br />
              realised.
            </h1>
            <p className="text-ink-light text-base lg:text-lg leading-relaxed max-w-md mb-8">
              From the first 3D render to the final detail. Thoughtful residential
              and commercial interiors, designed around the way you live and work.
            </p>
            <div className="flex flex-wrap items-center gap-5 mb-10 lg:mb-14">
              <Button href="/portfolio">View portfolio</Button>
              <Link href="/contact" className="link-hover py-3 text-xs font-medium uppercase tracking-[0.15em]">Start a project</Link>
            </div>
            <div className="flex gap-6 sm:gap-8 border-t border-ink/15 pt-6">
              <p className="text-xs text-ink-light"><span className="block font-serif text-3xl text-ink mb-1">6+</span>Years of experience</p>
              <p className="text-xs text-ink-light"><span className="block font-serif text-3xl text-ink mb-1">20+</span>Projects brought to life</p>
              <p className="hidden sm:block text-xs text-ink-light self-end leading-relaxed">From concept<br />to completion.</p>
            </div>
          </div>
          <Link href={`/portfolio/${project.slug}`} className="group block lg:col-span-6 relative hero-image">
            <div className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] relative overflow-hidden bg-cream-dark">
              <PortfolioImage image={project.heroImage} className="object-cover transition-transform duration-700 group-hover:scale-[1.025]" sizes="(max-width: 1024px) 100vw, 50vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 flex items-end justify-between gap-4 text-cream">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cream/80 mb-2">Featured residence · 2025</p>
                  <p className="font-serif text-3xl">{project.title}</p>
                </div>
                <span className="w-11 h-11 border border-cream/50 rounded-full flex items-center justify-center group-hover:bg-cream group-hover:text-ink transition-colors" aria-hidden="true">↗</span>
              </div>
            </div>
            <p className="flex justify-between gap-4 pt-4 text-[10px] uppercase tracking-[0.2em] text-ink-muted"><span>Residential · Interior design</span><span>View project ↗</span></p>
          </Link>
        </div>
      </div>
    </section>
  )
}
