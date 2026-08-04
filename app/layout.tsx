import type { Metadata } from 'next'
import { Syne, Space_Mono, DM_Sans } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tanishq Bhambri | Senior Data Analyst',
  description: 'Senior Data Analyst / Technology Analyst with 8 years of experience across Palantir Foundry, GenAI/RAG pipelines, and Oil & Gas analytics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} ${dmSans.variable} font-sans antialiased bg-background text-foreground`}>
        <div className="noise-overlay" />
        <Cursor />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}
