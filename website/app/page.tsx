import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import RenderToReality from '@/components/home/RenderToReality'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import JsonLd, { websiteSchema, personSchema, professionalServiceSchema, reviewSchema } from '@/components/seo/JsonLd'
import { testimonials } from '@/lib/data/testimonials'

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteSchema(), personSchema(), professionalServiceSchema(), reviewSchema(testimonials)]} />
      <Hero />
      <FeaturedProjects />
      <RenderToReality />
      <Process />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
