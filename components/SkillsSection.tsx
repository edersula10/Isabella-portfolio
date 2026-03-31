"use client";

import { motion } from "framer-motion";
import { skills, certifications } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";

export default function SkillsSection() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="section-padding">
      <div className="container-main">
        <SectionLabel number="05" title="Skills & Certifications" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {skillCategories.map(([category, items], index) => (
            <AnimatedReveal key={category} delay={index * 0.1}>
              <div className="group">
                <h3 className="font-display text-body-lg font-semibold text-text-primary mb-5 pb-3 border-b border-border group-hover:border-accent/30 transition-colors duration-500">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((skill, i) => (
                    <motion.li
                      key={i}
                      className="text-body-sm text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-default"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        {/* Certifications */}
        <AnimatedReveal delay={0.4}>
          <div className="mt-section-sm">
            <h3 className="font-mono text-caption uppercase text-accent/80 tracking-widest mb-8">
              Clinical & Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex flex-col py-4 px-5 border border-border/50 rounded-sm hover:border-accent/20 transition-colors duration-300"
                >
                  <span className="text-body-sm text-text-primary font-medium">
                    {cert.name}
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-mono text-caption text-accent-secondary">
                      {cert.issuer}
                    </span>
                    <span className="font-mono text-caption text-text-muted">
                      {cert.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.5}>
          <div className="divider mt-section" />
        </AnimatedReveal>
      </div>
    </section>
  );
}
