"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { type ReactNode, type MouseEvent } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  delay?: number
}

export function GlassCard({ 
  children, 
  className = "", 
  glowColor = "var(--glow-primary)",
  delay = 0 
}: GlassCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      ${glowColor}15,
      transparent 80%
    )
  `

  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Border gradient */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, ${glowColor}40, transparent, ${glowColor}20)`,
        }}
      />
      
      {/* Card content */}
      <div className="relative glass rounded-2xl p-6 overflow-hidden h-full">
        {/* Mouse follow gradient */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl transition-colors group-hover:border-primary/50" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-2xl transition-colors group-hover:border-primary/50" />
      </div>
    </motion.div>
  )
}

interface ExpandableCardProps {
  children: ReactNode
  expandedContent?: ReactNode
  className?: string
}

export function ExpandableCard({ 
  children, 
  expandedContent,
  className = "" 
}: ExpandableCardProps) {
  return (
    <motion.div
      className={`relative glass rounded-2xl p-6 cursor-pointer overflow-hidden ${className}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      layout
    >
      <motion.div layout="position">
        {children}
      </motion.div>
      
      {expandedContent && (
        <motion.div
          className="overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          whileHover={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pt-4 border-t border-border/50 mt-4">
            {expandedContent}
          </div>
        </motion.div>
      )}
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 opacity-0"
        style={{
          background: "linear-gradient(105deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0) 50%)",
        }}
        whileHover={{
          opacity: 1,
          x: ["0%", "100%"],
          transition: { duration: 0.8, ease: "easeInOut" }
        }}
      />
    </motion.div>
  )
}
