"use client";

import { useRef, useState } from "react";
import {
  Layout,
  Database,
  Brain,
  Cloud,
  Wrench,
  LucideIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useScrollAnimation } from "@/components/providers/SmoothScrollProvider";
import { skillCategories } from "@/data/portfolio";

const SkillsCanvas = dynamic(
  () => import("@/components/three/SkillsCanvas"),
  { ssr: false }
);

/** Map icon string names to Lucide components */
const iconMap: Record<string, LucideIcon> = {
  Layout,
  Database,
  Brain,
  Cloud,
  Wrench,
};

/**
 * Skills Section
 * Interactive grid with hover glow + optional 3D canvas backdrop.
 */
export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useScrollAnimation(sectionRef);
  useScrollAnimation(gridRef, { delay: 0.3 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      aria-labelledby="skills-heading"
      className="section-padding mx-auto max-w-7xl"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-cyan">
          Expertise
        </p>
        <h2 id="skills-heading" className="section-title">
          Skills & Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          A multidisciplinary toolkit spanning product, data, AI, and cloud infrastructure.
        </p>
      </div>

      {/* 3D mini canvas */}
      <div className="mb-10">
        <SkillsCanvas />
      </div>

      {/* Skill category cards */}
      <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = iconMap[category.icon] ?? Wrench;
          const isActive = activeCategory === category.id;

          return (
            <div
              key={category.id}
              className="glass-panel-hover group cursor-default p-6 transition-transform duration-300 hover:scale-[1.02]"
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
              style={{
                boxShadow: isActive
                  ? `0 0 40px ${category.color}20`
                  : undefined,
                borderColor: isActive ? `${category.color}40` : undefined,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
                  style={{
                    backgroundColor: isActive ? `${category.color}20` : "rgba(255,255,255,0.05)",
                    color: category.color,
                  }}
                >
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2" aria-label={`${category.title} skills`}>
                {category.skills.map((skill) => (
                  <li key={skill}>
                    <span
                      className="tag transition-colors duration-300 group-hover:border-white/20"
                      style={{
                        borderColor: isActive ? `${category.color}30` : undefined,
                      }}
                    >
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
