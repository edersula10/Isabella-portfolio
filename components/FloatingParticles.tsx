"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "5%", delay: 0, duration: 8, size: 3, color: "#2EAD5E" },
  { left: "12%", delay: 2, duration: 10, size: 2, color: "#E8638B" },
  { left: "22%", delay: 4, duration: 7, size: 3, color: "#2EAD5E" },
  { left: "33%", delay: 1, duration: 9, size: 2, color: "#E8638B" },
  { left: "42%", delay: 3, duration: 6, size: 4, color: "#2EAD5E" },
  { left: "55%", delay: 5, duration: 8, size: 2, color: "#2EAD5E" },
  { left: "65%", delay: 0.5, duration: 11, size: 2, color: "#E8638B" },
  { left: "75%", delay: 2.5, duration: 7, size: 3, color: "#2EAD5E" },
  { left: "85%", delay: 4.5, duration: 9, size: 2, color: "#E8638B" },
  { left: "93%", delay: 1.5, duration: 6, size: 3, color: "#2EAD5E" },
];

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -800],
            opacity: [0, 0.8, 0.8, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
