"use client";

import { experience } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-main">
        <SectionLabel number="03" title="Experience" />

        <div className="space-y-0">
          {experience.map((role, index) => (
            <AnimatedReveal key={index} delay={index * 0.1}>
              <div className="group border-t border-border py-10 md:py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  {/* Left: Meta */}
                  <div className="md:col-span-4">
                    <div className="flex items-start justify-between md:block">
                      <div>
                        <h3 className="font-display text-display-sm font-semibold text-text-primary group-hover:text-accent transition-colors duration-500">
                          {role.company}
                        </h3>
                        <p className="text-body text-text-secondary mt-1">
                          {role.role}
                        </p>
                      </div>
                      <div className="md:mt-3">
                        <span className="font-mono text-caption text-text-muted block">
                          {role.dates}
                        </span>
                        <span className="font-mono text-caption text-text-muted/60 block mt-0.5">
                          {role.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Achievements */}
                  <div className="md:col-span-7 md:col-start-6">
                    <ul className="space-y-3">
                      {role.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-body text-text-secondary"
                        >
                          <span className="text-accent/50 mt-[0.4em] flex-shrink-0">
                            &mdash;
                          </span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}

          {/* Bottom border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
