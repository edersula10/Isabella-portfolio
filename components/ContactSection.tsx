"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import SectionLabel from "./SectionLabel";
import AnimatedReveal from "./AnimatedReveal";

export default function ContactSection() {
  const links = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "LinkedIn", value: "linkedin.com/in/isabella-mammoliti", href: siteConfig.linkedin },
    { label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-main">
        <SectionLabel number="06" title="Contact" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Left: CTA */}
          <AnimatedReveal className="md:col-span-6" delay={0.1}>
            <h2 className="font-display text-display-lg font-bold uppercase text-text-primary mb-6">
              Let&apos;s
              <br />
              <span className="text-accent">Connect</span>
            </h2>
            <p className="text-body-lg text-text-secondary max-w-md">
              Whether you&apos;re a physician open to shadowing, a research lab
              looking for dedicated students, or someone who shares a passion
              for community health — I&apos;d love to hear from you.
            </p>
          </AnimatedReveal>

          {/* Right: Links */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="space-y-0">
              {links.map((link, index) => (
                <AnimatedReveal key={link.label} delay={0.2 + index * 0.08}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block border-t border-border py-5 hover:pl-2 transition-all duration-300"
                  >
                    <span className="font-mono text-caption uppercase text-text-muted block mb-1">
                      {link.label}
                    </span>
                    <span className="text-body text-text-primary group-hover:text-accent transition-colors duration-300 flex items-center gap-2">
                      {link.value}
                      <motion.span
                        className="inline-block text-accent/0 group-hover:text-accent/80 transition-colors"
                        whileHover={{ x: 2 }}
                      >
                        &nearr;
                      </motion.span>
                    </span>
                  </a>
                </AnimatedReveal>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
