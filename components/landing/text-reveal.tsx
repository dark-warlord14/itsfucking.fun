"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

interface AnimatedLettersProps {
  text: string
  className?: string
  delay?: number
}

export function AnimatedLetters({ text, className = "", delay = 0 }: AnimatedLettersProps) {
  const letters = text.split("")
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  }
  
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  }

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={letter === " " ? "w-4" : ""}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <motion.span 
      className={`relative inline-block ${className}`}
      whileHover="hover"
    >
      {text}
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{ color: "var(--glow-primary)", opacity: 0 }}
        variants={{
          hover: {
            opacity: 0.5,
            x: [0, -3, 3, -3, 0],
            y: [0, 2, -2, 2, 0],
            transition: { duration: 0.3 }
          }
        }}
        aria-hidden
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 pointer-events-none"
        style={{ color: "var(--glow-accent)", opacity: 0 }}
        variants={{
          hover: {
            opacity: 0.35,
            x: [0, 3, -3, 3, 0],
            y: [0, -2, 2, -2, 0],
            transition: { duration: 0.3, delay: 0.05 }
          }
        }}
        aria-hidden
      >
        {text}
      </motion.span>
    </motion.span>
  )
}
