import type { Metadata } from 'next'
import { cormorant, outfit } from '@/lib/fonts'
import { siteConfig } from '@/lib/data/site'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_SG',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
