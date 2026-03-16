import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import ScrollReveal from '@/components/ui/ScrollReveal'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ashikin Azidee for residential and commercial interior design projects in Singapore.',
}

export default function ContactPage() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
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
  )
}
