"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/components/providers/SmoothScrollProvider";
import { projects } from "@/data/portfolio";

/**
 * Featured Projects Section
 * Card grid with hover zoom and glow effects.
 */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useScrollAnimation(sectionRef);
  useScrollAnimation(gridRef, { delay: 0.2 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
      className="section-padding mx-auto max-w-7xl"
    >
      <div className="mb-12 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-neon-cyan">
          Portfolio
        </p>
        <h2 id="projects-heading" className="section-title">
          Featured Projects
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          Selected work showcasing AI/ML products, data platforms, and product strategy.
        </p>
      </div>

      <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="glass-panel-hover group overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
          >
            {/* Project thumbnail placeholder with gradient */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,211,238,0.15),transparent_60%)] transition-opacity duration-500 group-hover:opacity-150" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-bold text-white/5 transition-transform duration-500 group-hover:scale-110">
                  {project.title.charAt(0)}
                </span>
              </div>
              {/* Hover overlay links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-slate-950/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition-all hover:scale-110 hover:border-neon-cyan hover:text-neon-cyan"
                  >
                    <Github size={20} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    aria-label={`View ${project.title} live demo`}
                    className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition-all hover:scale-110 hover:border-neon-cyan hover:text-neon-cyan"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            {/* Card body */}
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-neon-cyan">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.summary}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.tech.map((tech) => (
                  <li key={tech}>
                    <span className="tag">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
