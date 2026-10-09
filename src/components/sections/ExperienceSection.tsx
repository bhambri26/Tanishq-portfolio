"use client";

import { useRef } from "react";
import { MapPin, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/components/providers/SmoothScrollProvider";
import { experience } from "@/data/portfolio";

/**
 * Experience Timeline Section
 * Vertical timeline with scroll-triggered reveal animations.
 */
export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLOListElement>(null);

  useScrollAnimation(sectionRef);
  useScrollAnimation(timelineRef, { delay: 0.2 });

  return (
    <section
      id="experience"
      ref={sectionRef}
      aria-labelledby="experience-heading"
      className="section-padding mx-auto max-w-4xl"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-cyan">
          Career
        </p>
        <h2 id="experience-heading" className="section-title">
          Experience & Timeline
        </h2>
      </div>

      <ol ref={timelineRef} className="relative space-y-0">
        {/* Vertical line */}
        <div
          className="absolute left-[19px] top-2 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-neon-cyan/50 via-neon-blue/30 to-transparent md:left-1/2 md:-translate-x-px"
          aria-hidden="true"
        />

        {experience.map((item, index) => (
          <li
            key={item.id}
            className={`relative pb-12 md:grid md:grid-cols-2 md:gap-8 ${
              index % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"
            }`}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-[12px] top-2 z-10 h-4 w-4 rounded-full border-2 border-neon-cyan bg-slate-950 md:left-1/2 md:-translate-x-1/2"
              aria-hidden="true"
            />

            {/* Content card */}
            <div
              className={`ml-10 md:ml-0 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              }`}
            >
              <article className="glass-panel-hover p-6 text-left">
                <div className="mb-3 flex flex-wrap items-center gap-3 md:justify-start">
                  <span className="rounded-full bg-neon-cyan/10 px-3 py-1 text-xs font-medium text-neon-cyan">
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <MapPin size={12} aria-hidden="true" />
                    {item.location}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-neon-blue">
                  <Building2 size={14} aria-hidden="true" />
                  {item.company}
                </p>

                <ul className="mt-4 space-y-2" aria-label={`Achievements at ${item.company}`}>
                  {item.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-400"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan/60"
                        aria-hidden="true"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block" aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>
  );
}
