"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  opacity: number
  xOffset: number
}

// Seeded random number generator for consistent values
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function FloatingParticles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Generate particles with seeded random for consistency
  const particles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: seededRandom(i * 1.1) * 100,
    y: seededRandom(i * 2.2) * 100,
    size: seededRandom(i * 3.3) * 4 + 2,
    duration: seededRandom(i * 4.4) * 20 + 10,
    delay: seededRandom(i * 5.5) * 5,
    opacity: seededRandom(i * 6.6) * 0.5 + 0.1,
    xOffset: seededRandom(i * 7.7) * 50 - 25,
  }))

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xOffset, 0],
            opacity: [particle.opacity, particle.opacity * 2, particle.opacity],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
