"use client"

import { motion } from "framer-motion"

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary gradient orb */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)",
          left: "-10%",
          top: "-20%",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Secondary gradient orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow-secondary) 0%, transparent 70%)",
          right: "-10%",
          top: "20%",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Accent gradient orb */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--glow-accent) 0%, transparent 70%)",
          left: "30%",
          bottom: "-10%",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
