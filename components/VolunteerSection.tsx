"use client";

import { volunteer } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";

export default function VolunteerSection() {
  return (
    <section id="involvement" className="section-padding">
      <div className="container-main">
        <SectionLabel number="04" title="Community Involvement" />

        <AnimatedReveal delay={0.1}>
          <p className="text-body-lg text-text-secondary max-w-content mb-12 md:mb-16">
            Medicine is rooted in service. My community involvement has exposed me
            to the social determinants of health, taught me to connect with people
            from all walks of life, and reinforced my commitment to compassionate,
            patient-centered care.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {volunteer.map((item, index) => (
            <AnimatedReveal key={index} delay={0.1 + index * 0.08}>
              <div className="group border border-border rounded-sm p-8 hover:border-accent/30 transition-all duration-500 hover:bg-bg-elevated/50">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-body-lg font-semibold text-text-primary group-hover:text-accent transition-colors duration-500">
                    {item.organization}
                  </h3>
                  <span className="font-mono text-caption text-text-muted whitespace-nowrap ml-4">
                    {item.dates}
                  </span>
                </div>

                <p className="font-mono text-caption uppercase text-accent/70 mb-3">
                  {item.role}
                </p>

                <p className="text-body-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.4}>
          <div className="divider mt-section" />
        </AnimatedReveal>
      </div>
    </section>
  );
}
