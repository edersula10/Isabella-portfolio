"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimatedRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const directionMap = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
    none: { y: 0, x: 0 },
  };

  const offset = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: offset.y, x: offset.x }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
