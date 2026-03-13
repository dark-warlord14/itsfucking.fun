"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface FloatingIconProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  distance?: number
}

export function FloatingIcon({ 
  children, 
  className = "",
  delay = 0,
  duration = 3,
  distance = 15
}: FloatingIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={{
        y: [0, -distance, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface BounceIconProps {
  children: ReactNode
  className?: string
}

export function BounceIcon({ children, className = "" }: BounceIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
      whileHover={{
        scale: [1, 1.2, 0.9, 1.1, 1],
        rotate: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface SpinIconProps {
  children: ReactNode
  className?: string
}

export function SpinIcon({ children, className = "" }: SpinIconProps) {
  return (
    <motion.div
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
      whileHover={{
        rotate: 360,
        scale: 1.1,
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

interface PulseIconProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export function PulseIcon({ 
  children, 
  className = "",
  glowColor = "var(--glow-primary)"
}: PulseIconProps) {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: glowColor }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
