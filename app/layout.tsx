import type { Metadata } from 'next'
import { Outfit, Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Cursor from '@/components/Cursor'
import SideNav from '@/components/SideNav'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tanishq Bhambri | AI Product Manager & Data Strategist',
  description: 'Official portfolio of Tanishq Bhambri, Data Analytics & IoT Lead and aspiring AI Product Manager specializing in Palantir Foundry (AIP), GenAI / RAG pipelines, and CSPO® product strategy.',
  keywords: [
    'Tanishq Bhambri',
    'Tanishq Bhambri Portfolio',
    'Tanishq Bhambri Resume',
    'AI Product Manager',
    'AI Product Owner',
    'Data Analytics Lead',
    'Palantir Foundry AIP',
    'GenAI Engineer',
    'CSPO Product Owner',
    'Hexaware Technologies',
    'Infosys'
  ],
  authors: [{ name: 'Tanishq Bhambri', url: 'https://www.linkedin.com/in/tanishqbhambri' }],
  creator: 'Tanishq Bhambri',
  verification: {
    google: '9nzqNsMzEzNwAHWrIsg1dKH-jCS-d06abceSL4OJ3wg',
  },
  openGraph: {
    title: 'Tanishq Bhambri | AI Product Manager & Data Strategist',
    description: 'Explore projects, experience, and certifications of Tanishq Bhambri across Palantir Foundry, GenAI pipelines, and AI product ownership.',
    siteName: 'Tanishq Bhambri Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanishq Bhambri | AI Product Manager & Data Strategist',
    description: 'Official portfolio of Tanishq Bhambri, Data Analytics & IoT Lead and aspiring AI Product Manager.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tanishq Bhambri',
  jobTitle: 'Data Analytics & IoT Lead / Aspiring AI Product Manager',
  worksFor: {
    '@type': 'Organization',
    name: 'Hexaware Technologies',
  },
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'Chitkara University',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'Indira Gandhi National Open University (IGNOU)',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/tanishqbhambri',
    'https://github.com/bhambri26',
    'https://www.credly.com/badges/dcece867-b192-4752-8f40-71ab28487b46',
  ],
  knowsAbout: [
    'AI Product Management',
    'Product Backlog Management',
    'Certified Scrum Product Owner (CSPO)',
    'Palantir Foundry (AIP)',
    'Generative AI',
    'Large Language Models (LLMs)',
    'Retrieval-Augmented Generation (RAG)',
    'Claude by Anthropic',
    'Data Science & Machine Learning',
    'Python',
    'SQL',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="9nzqNsMzEzNwAHWrIsg1dKH-jCS-d06abceSL4OJ3wg" />
        
        {/* Google Analytics tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-888Y3CNJX1"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-888Y3CNJX1');
            `,
          }}
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="noise-overlay" />
        <Cursor />
        <SideNav />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
