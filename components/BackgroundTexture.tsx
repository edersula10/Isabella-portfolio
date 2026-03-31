"use client";

import { motion } from "framer-motion";

export default function BackgroundTexture() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage:
            "linear-gradient(rgba(46,173,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(46,173,94,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Dot pattern */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle, #2EAD5E 0.7px, transparent 0.7px)",
          backgroundSize: "22px 22px",
        }}
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
