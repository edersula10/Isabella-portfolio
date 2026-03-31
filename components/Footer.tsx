"use client";

import { siteConfig } from "@/lib/data";
import AnimatedReveal from "./AnimatedReveal";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12">
      <div className="container-main">
        <AnimatedReveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="font-display text-body-sm font-medium text-text-primary">
                {siteConfig.name}
              </span>
              <span className="hidden md:block h-px w-8 bg-border" />
              <span className="font-mono text-caption text-text-muted">
                &copy; {year}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-caption uppercase text-text-muted hover:text-accent transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-caption uppercase text-text-muted hover:text-accent transition-colors duration-300"
              >
                Email
              </a>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </footer>
  );
}
