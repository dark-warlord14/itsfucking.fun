"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, type ReactNode, type MouseEvent } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "ghost"
  onClick?: () => void
}

export function MagneticButton({ 
  children, 
  className = "", 
  variant = "primary",
  onClick 
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 glow-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
    ghost: "bg-transparent text-foreground hover:bg-secondary/50 border border-border/50 hover:border-border",
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      className={`
        relative px-8 py-4 rounded-xl font-semibold text-lg
        transition-colors duration-300 overflow-hidden
        ${variants[variant]}
        ${className}
      `}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className="relative z-10 flex items-center justify-center gap-2"
        style={{ transform: "translateZ(20px)" }}
      >
        {children}
      </motion.span>
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 -translate-x-full"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0))",
        }}
        whileHover={{
          translateX: "100%",
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      />
    </motion.button>
  )
}
