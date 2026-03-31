"use client";

import { about, education } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="container-main">
        <SectionLabel number="01" title="About" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Main bio */}
          <AnimatedReveal className="md:col-span-7" delay={0.1}>
            <p className="text-display-sm font-display font-medium text-text-primary leading-relaxed mb-8">
              {about.bio}
            </p>
            <p className="text-body-lg text-text-secondary">
              {about.philosophy}
            </p>
          </AnimatedReveal>

          {/* Sidebar info */}
          <AnimatedReveal className="md:col-span-4 md:col-start-9" delay={0.3}>
            <div className="space-y-8">
              {/* Currently focused on */}
              <div>
                <span className="font-mono text-caption uppercase text-accent/80 block mb-3">
                  Currently
                </span>
                <p className="text-body text-text-secondary">
                  {about.focus}
                </p>
              </div>

              {/* Education card */}
              <div className="border border-border rounded-sm p-6">
                <span className="font-mono text-caption uppercase text-accent block mb-1">
                  {education.pathway}
                </span>
                <p className="text-body font-medium text-text-primary mt-2">
                  {education.institution}
                </p>
                <p className="text-body-sm text-text-secondary mt-1">
                  {education.degree}
                </p>
                <p className="font-mono text-caption text-text-muted mt-2">
                  {education.dates}
                </p>
              </div>

              {/* Relevant Coursework */}
              <div className="border border-border rounded-sm p-6">
                <span className="font-mono text-caption uppercase text-accent-secondary block mb-4">
                  Relevant Coursework
                </span>
                <ul className="space-y-2">
                  {education.relevantCourses.map((course, i) => (
                    <li key={i} className="flex items-center gap-2 text-body-sm text-text-secondary">
                      <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedReveal>
        </div>

        {/* Divider */}
        <AnimatedReveal delay={0.4}>
          <div className="divider mt-section" />
        </AnimatedReveal>
      </div>
    </section>
  );
}
