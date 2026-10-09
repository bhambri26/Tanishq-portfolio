# Tanishq Bhambri — 3D Interactive Portfolio

A modern, high-performance 3D portfolio built with **Next.js**, **React Three Fiber**, **GSAP**, **Lenis**, and **Tailwind CSS**.

## Quick Start

```bash
# 1. Navigate to project
cd ~/Projects/tanishq-portfolio

# 2. Setup project (macOS)
./setup.sh

# Or manually:
# npm install
# npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo in the [Vercel Dashboard](https://vercel.com/new).

## Deploy to Netlify

```bash
npm run build
# Drag the .next folder or connect via Git with build command: npm run build
```

Or use Netlify's Next.js plugin for automatic deployment.

## Customize Content

Edit **`src/data/portfolio.ts`** — all text, skills, experience, projects, and links live in one file.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| 3D | React Three Fiber + Drei |
| Animation | GSAP ScrollTrigger + Lenis |
| Styling | Tailwind CSS |
| Icons | Lucide React |

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Theme, glassmorphism utilities
│   ├── layout.tsx        # Root layout + fonts
│   └── page.tsx          # Single-page assembly
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # SmoothScrollProvider
│   ├── sections/         # Hero, About, Skills, Experience, Projects, Contact
│   └── three/            # HeroScene, SkillsCanvas (R3F)
└── data/
    └── portfolio.ts      # All portfolio content
```

## Performance Notes

- 3D scene auto-simplifies on mobile (< 768px): lower DPR, fewer geometry subdivisions, no star field
- React `<Suspense>` with custom loader for 3D asset loading
- Lenis smooth scroll synced with GSAP ScrollTrigger

## Contact Form

The form currently simulates submission. To go live, wire it to [Formspree](https://formspree.io), [Resend](https://resend.com), or your own API route.
