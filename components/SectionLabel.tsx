"use client";

import AnimatedReveal from "./AnimatedReveal";

interface SectionLabelProps {
  number: string;
  title: string;
  className?: string;
}

export default function SectionLabel({ number, title, className = "" }: SectionLabelProps) {
  return (
    <AnimatedReveal className={`flex items-center gap-4 mb-12 md:mb-16 ${className}`}>
      <span className="font-mono text-caption uppercase text-accent tracking-widest">
        {number}
      </span>
      <span className="h-px flex-1 max-w-[60px] bg-accent/40" />
      <span className="font-mono text-caption uppercase text-text-secondary tracking-widest">
        {title}
      </span>
    </AnimatedReveal>
  );
}
