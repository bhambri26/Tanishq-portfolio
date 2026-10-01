import type { Metadata } from 'next'
import { Outfit, Inter, Space_Grotesk } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Cursor from '@/components/Cursor'
import { Analytics } from '@vercel/analytics/next'

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

        {/* ─── Security: Block DevTools / Right-Click / Copy ─── */}
        <Script
          id="security-guard"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Block right-click context menu
                document.addEventListener('contextmenu', function(e) {
                  e.preventDefault();
                  return false;
                });

                // Block keyboard shortcuts for DevTools / View Source / Save / Copy
                document.addEventListener('keydown', function(e) {
                  var key = e.key || e.keyCode;
                  var ctrl = e.ctrlKey || e.metaKey;

                  // F12 - DevTools
                  if (key === 'F12' || key === 123) { e.preventDefault(); return false; }

                  // Ctrl+U - View Source
                  if (ctrl && (key === 'u' || key === 'U' || key === 85)) { e.preventDefault(); return false; }

                  // Ctrl+S - Save
                  if (ctrl && (key === 's' || key === 'S' || key === 83)) { e.preventDefault(); return false; }

                  // Ctrl+Shift+I - DevTools
                  if (ctrl && e.shiftKey && (key === 'i' || key === 'I' || key === 73)) { e.preventDefault(); return false; }

                  // Ctrl+Shift+J - Console
                  if (ctrl && e.shiftKey && (key === 'j' || key === 'J' || key === 74)) { e.preventDefault(); return false; }

                  // Ctrl+Shift+C - Element Picker
                  if (ctrl && e.shiftKey && (key === 'c' || key === 'C' || key === 67)) { e.preventDefault(); return false; }

                  // Ctrl+A - Select All
                  if (ctrl && (key === 'a' || key === 'A' || key === 65)) { e.preventDefault(); return false; }

                  // Ctrl+C - Copy
                  if (ctrl && (key === 'c' || key === 'C')) { e.preventDefault(); return false; }

                  // Ctrl+P - Print
                  if (ctrl && (key === 'p' || key === 'P' || key === 80)) { e.preventDefault(); return false; }
                });

                // Block drag on all elements
                document.addEventListener('dragstart', function(e) {
                  e.preventDefault();
                  return false;
                });

                // Detect DevTools open via size diff (desktop only)
                var devtools = { open: false };
                var threshold = 160;
                setInterval(function() {
                  if (window.outerWidth - window.innerWidth > threshold ||
                      window.outerHeight - window.innerHeight > threshold) {
                    if (!devtools.open) {
                      devtools.open = true;
                      document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0a0a;color:#f5a623;font-family:monospace;font-size:1.2rem;text-align:center;padding:2rem;">⚠️ Unauthorized access attempt detected.<br/>This site is protected.</div>';
                    }
                  }
                }, 500);
              })();
            `
          }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        {/* Animated gradient background */}
        <div className="bg-canvas" aria-hidden="true">
          <div className="bg-blob bg-blob-1" />
          <div className="bg-blob bg-blob-2" />
          <div className="bg-blob bg-blob-3" />
          <div className="bg-blob bg-blob-4" />
        </div>
        <div className="noise-overlay" />
        <Cursor />
        <main className="relative z-10">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
