import { siteConfig } from "@/data/portfolio";

/**
 * Site footer with copyright and quick links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-white/[0.06] px-6 py-8 md:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-slate-500">
          © {year}{" "}
          <span className="text-slate-400">{siteConfig.name}</span>. Built with
          Next.js, React Three Fiber & GSAP.
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {[
              { label: "LinkedIn", href: siteConfig.social.linkedin },
              { label: "GitHub", href: siteConfig.social.github },
              { label: "Email", href: `mailto:${siteConfig.email}` },
              { label: "Resume", href: siteConfig.resumeUrl },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 transition-colors hover:text-neon-cyan"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
