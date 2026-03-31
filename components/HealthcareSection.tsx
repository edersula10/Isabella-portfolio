"use client";

import { motion } from "framer-motion";
import { healthcareFocus } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";
import DNAHelix from "./DNAHelix";

const iconMap: Record<string, JSX.Element> = {
  stethoscope: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  ),
  hospital: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6v4" />
      <path d="M14 8h-4" />
      <rect width="20" height="18" x="2" y="4" rx="2" />
      <path d="M6 22v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
    </svg>
  ),
  microscope: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  ),
  book: (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      <path d="M8 7h6" />
      <path d="M8 11h8" />
    </svg>
  ),
};

export default function HealthcareSection() {
  return (
    <section id="healthcare" className="section-padding relative overflow-hidden">
      <DNAHelix className="absolute left-0 top-0 w-[80px] h-[500px]" />

      <div className="container-main relative z-10">
        <SectionLabel number="02" title="Path to Medicine" />

        <AnimatedReveal delay={0.1}>
          <p className="text-display-sm font-display font-medium text-text-primary leading-relaxed mb-6 max-w-content">
            My journey to medicine is guided by a commitment to serve — combining rigorous scientific training with real-world experience in community health, patient interaction, and compassionate care.
          </p>
          <p className="text-body-lg text-text-secondary max-w-content mb-16">
            Every experience below is building toward a career where I can make a meaningful difference in the lives of patients and communities.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {healthcareFocus.map((item, index) => (
            <AnimatedReveal key={item.title} delay={0.15 + index * 0.1}>
              <motion.div
                className="group border border-border rounded-sm p-8 md:p-10 hover:border-accent/40 transition-all duration-500 relative overflow-hidden"
                style={{ background: "rgba(14, 42, 28, 0.5)" }}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-accent group-hover:text-accent-hover transition-colors duration-500">
                    {iconMap[item.icon]}
                  </div>
                  <span className="font-mono text-caption uppercase text-accent-secondary bg-accent-secondary/10 px-3 py-1 rounded-sm border border-accent-secondary/20">
                    {item.status}
                  </span>
                </div>

                <h3 className="font-display text-display-sm font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                  {item.title}
                </h3>

                <p className="text-body text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal delay={0.5}>
          <div className="divider mt-section" />
        </AnimatedReveal>
      </div>
    </section>
  );
}
