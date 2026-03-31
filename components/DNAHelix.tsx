"use client";

import { motion } from "framer-motion";

export default function DNAHelix({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 200 600"
      fill="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.06 }}
      transition={{ duration: 2 }}
    >
      {/* Left strand */}
      <motion.path
        d="M60 0 Q120 75 60 150 Q0 225 60 300 Q120 375 60 450 Q0 525 60 600"
        stroke="#2EAD5E"
        strokeWidth="1.5"
        strokeDasharray="600"
        strokeDashoffset={600}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />
      {/* Right strand */}
      <motion.path
        d="M140 0 Q80 75 140 150 Q200 225 140 300 Q80 375 140 450 Q200 525 140 600"
        stroke="#E8638B"
        strokeWidth="1.5"
        strokeDasharray="600"
        strokeDashoffset={600}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, direction: "reverse" as never }}
      />
      {/* Rungs */}
      {[40, 80, 115, 155, 190, 230, 265, 305, 340, 380, 415, 455, 490, 530, 565].map((y, i) => (
        <motion.line
          key={i}
          x1={i % 2 === 0 ? 70 : 65}
          y1={y}
          x2={i % 2 === 0 ? 130 : 135}
          y2={y}
          stroke={i % 3 === 0 ? "#E8638B" : "#2EAD5E"}
          strokeWidth="0.6"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
}
