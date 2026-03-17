import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ScrollReveal from '@/components/ui/ScrollReveal'
import JsonLd, { professionalServiceSchema, breadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Contact — Hire an Interior Designer in Malaysia',
  description:
    'Get in touch with Ashikin Azidee for residential and commercial interior design projects in Malaysia. Free consultation, 48-hour response.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact — Hire an Interior Designer in Malaysia',
    description:
      'Get in touch with Ashikin Azidee for residential and commercial interior design projects in Malaysia. Free consultation, 48-hour response.',
    url: '/contact',
  },
  twitter: {
    title: 'Contact — Hire an Interior Designer in Malaysia',
    description:
      'Get in touch for residential and commercial interior design projects in Malaysia. Free consultation, 48-hour response.',
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[
        professionalServiceSchema(),
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]),
      ]} />
      <section className="py-28 lg:py-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <ContactInfo />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
