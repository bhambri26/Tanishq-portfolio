import type { Metadata } from 'next'
import { Outfit, Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'

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
  title: 'Tanishq Bhambri | Data Analytics Lead & AI Product Strategist',
  description: 'Data Analytics & IoT Lead with 9 years of experience across Palantir Foundry (AIP), GenAI/RAG pipelines, and enterprise AI product strategy. CSPO® Certified.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="noise-overlay" />
        <Cursor />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
