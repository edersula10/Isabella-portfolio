"use client";

import { motion } from "framer-motion";

interface MoleculeProps {
  className?: string;
  size?: number;
  duration?: number;
}

export default function FloatingMolecule({
  className = "",
  size = 160,
  duration = 12,
}: MoleculeProps) {
  return (
    <motion.svg
      className={`pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 160 140"
      fill="none"
      animate={{
        y: [0, -20, 0, 15, 0],
        x: [0, 10, 0, -10, 0],
        rotate: [0, 5, 0, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <circle cx="80" cy="35" r="10" stroke="#2EAD5E" strokeWidth="1.2" opacity="0.6" />
      <circle cx="45" cy="85" r="10" stroke="#E8638B" strokeWidth="1.2" opacity="0.6" />
      <circle cx="115" cy="85" r="10" stroke="#2EAD5E" strokeWidth="1.2" opacity="0.6" />
      <circle cx="80" cy="120" r="7" stroke="#E8638B" strokeWidth="1" opacity="0.5" />
      <line x1="80" y1="45" x2="52" y2="78" stroke="#2EAD5E" strokeWidth="0.8" opacity="0.4" />
      <line x1="80" y1="45" x2="108" y2="78" stroke="#2EAD5E" strokeWidth="0.8" opacity="0.4" />
      <line x1="52" y1="92" x2="74" y2="115" stroke="#E8638B" strokeWidth="0.8" opacity="0.4" />
      <line x1="108" y1="92" x2="86" y2="115" stroke="#E8638B" strokeWidth="0.8" opacity="0.4" />
      <motion.circle
        cx="80" cy="35" r="3" fill="#2EAD5E"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.circle
        cx="45" cy="85" r="3" fill="#E8638B"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      />
      <motion.circle
        cx="115" cy="85" r="3" fill="#2EAD5E"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
      />
    </motion.svg>
  );
}
