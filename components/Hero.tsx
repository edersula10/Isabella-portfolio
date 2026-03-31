"use client";

import { motion } from "framer-motion";
import { hero, siteConfig, education } from "@/lib/data";
import FloatingMolecule from "./FloatingMolecule";
import DNAHelix from "./DNAHelix";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 pt-32 overflow-hidden">
      {/* Decorative elements */}
      <FloatingMolecule
        className="absolute right-[5%] top-[15%] opacity-[0.07]"
        size={180}
        duration={14}
      />
      <FloatingMolecule
        className="absolute left-[3%] bottom-[20%] opacity-[0.05]"
        size={120}
        duration={18}
      />
      <DNAHelix className="absolute right-0 top-0 w-[100px] h-[600px]" />

      {/* Atom decoration */}
      <motion.svg
        className="absolute left-[10%] top-[30%] opacity-[0.05] pointer-events-none"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#2EAD5E" strokeWidth="0.8" fill="none" />
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#E8638B" strokeWidth="0.8" fill="none" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#2EAD5E" strokeWidth="0.8" fill="none" transform="rotate(-60 50 50)" />
        <circle cx="50" cy="50" r="4" fill="#2EAD5E" opacity="0.4" />
      </motion.svg>

      <div className="container-main relative z-10">
        {/* Availability badge */}
        <motion.div
          className="flex items-center gap-2 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-accent"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-caption uppercase text-text-secondary">
            {siteConfig.availability}
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="font-display text-display-xl font-bold uppercase text-text-primary"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>
        </div>

        {/* Tagline and info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8 md:mt-12">
          <motion.p
            className="md:col-span-5 text-body-lg text-text-secondary max-w-lg text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            className="md:col-span-3 md:col-start-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-4">
              <div>
                <span className="font-mono text-caption uppercase text-text-muted block mb-1">
                  Education
                </span>
                <span className="text-body-sm text-text-primary block">
                  {education.institution}
                </span>
                <span className="text-body-sm text-accent">
                  {education.pathway}
                </span>
              </div>
              <div>
                <span className="font-mono text-caption uppercase text-text-muted block mb-1">
                  Location
                </span>
                <span className="text-body-sm text-text-primary">
                  {siteConfig.location}
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2 md:col-start-11"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-row md:flex-col gap-4">
              <a
                href={hero.cta.primary.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(hero.cta.primary.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 text-body-sm text-text-primary hover:text-accent transition-colors duration-300"
              >
                <span>{hero.cta.primary.label}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &darr;
                </span>
              </a>
              <a
                href={hero.cta.secondary.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(hero.cta.secondary.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 text-body-sm text-text-secondary hover:text-accent transition-colors duration-300"
              >
                <span>{hero.cta.secondary.label}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-6 md:left-8 lg:left-12 hidden md:flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.div
            className="w-px h-12 bg-accent/40 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="font-mono text-[10px] uppercase text-text-muted tracking-widest">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
