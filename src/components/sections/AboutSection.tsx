"use client";

import { useRef } from "react";
import { useScrollAnimation } from "@/components/providers/SmoothScrollProvider";
import { aboutContent } from "@/data/portfolio";

/**
 * About Me Section
 * Intro text with highlight stat cards in glassmorphism panels.
 */
export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef);
  useScrollAnimation(contentRef, { delay: 0.2 });
  useScrollAnimation(statsRef, { delay: 0.4 });

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      className="section-padding mx-auto max-w-7xl"
    >
      <div className="mb-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-cyan">
          About Me
        </p>
        <h2 id="about-heading" className="section-title">
          {aboutContent.headline}
        </h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Bio paragraphs */}
        <div ref={contentRef} className="space-y-5">
          {aboutContent.paragraphs.map((para, i) => (
            <p key={i} className="text-base leading-relaxed text-slate-400 md:text-lg">
              {para}
            </p>
          ))}
        </div>

        {/* Stat highlight cards */}
        <div ref={statsRef} className="grid grid-cols-2 gap-4">
          {aboutContent.highlights.map((item) => (
            <div
              key={item.label}
              className="glass-panel-hover flex flex-col items-center justify-center p-6 text-center"
            >
              <span className="font-display text-3xl font-bold neon-text md:text-4xl">
                {item.value}
              </span>
              <span className="mt-2 text-sm text-slate-400">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
