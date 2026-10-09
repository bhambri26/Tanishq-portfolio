"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";
import { ArrowDown, Download, Mail, Briefcase } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
});

/**
 * Hero Section
 * Full-viewport hero with interactive 3D background, headline, and CTAs.
 */
export default function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Entrance animation on mount
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (headlineRef.current) {
      tl.fromTo(headlineRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 });
    }
    if (subtitleRef.current) {
      tl.fromTo(subtitleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=0.6");
    }
    if (ctaRef.current) {
      tl.fromTo(ctaRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
    }
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <HeroScene />

      {/* Gradient overlays for text readability */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,#0d0f12_70%)]" />

      {/* Content */}
      <div className="content-overlay relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neon-cyan/80">
          Portfolio
        </p>

        <h1
          ref={headlineRef}
          className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-white">{siteConfig.name}</span>
          <br />
          <span className="neon-text">{siteConfig.title}</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl"
        >
          {siteConfig.tagline}
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollTo("#projects")}
            className="btn-primary"
          >
            <Briefcase size={16} aria-hidden="true" />
            View Work
          </button>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="btn-secondary"
          >
            <Mail size={16} aria-hidden="true" />
            Contact Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo("#about")}
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-500 transition-colors hover:text-neon-cyan"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
