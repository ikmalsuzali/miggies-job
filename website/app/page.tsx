import Hero from '@/components/home/Hero'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import RenderToReality from '@/components/home/RenderToReality'
import Process from '@/components/home/Process'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import JsonLd, { websiteSchema, personSchema, professionalServiceSchema } from '@/components/seo/JsonLd'

export default function Home() {
  return (
    <>
      <JsonLd data={[websiteSchema(), personSchema(), professionalServiceSchema()]} />
      <Hero />
      <FeaturedProjects />
      <RenderToReality />
      <Process />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
