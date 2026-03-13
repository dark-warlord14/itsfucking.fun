"use client"

import { motion } from "framer-motion"
import { AnimatedGradient } from "./animated-gradient"
import { FloatingParticles } from "./floating-particles"
import { MagneticButton } from "./magnetic-button"
import { AnimatedLetters, GlitchText } from "./text-reveal"
import { FloatingIcon } from "./floating-icon"
import { Sparkles, Zap, Star, Heart, Flame } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <AnimatedGradient />
      <FloatingParticles />
      
      {/* Floating decorative elements */}
      <FloatingIcon className="absolute top-20 left-[10%] text-4xl text-primary/60" delay={0}>
        <Sparkles className="w-8 h-8" />
      </FloatingIcon>
      <FloatingIcon className="absolute top-32 right-[15%] text-4xl text-accent/60" delay={0.5} duration={4}>
        <Zap className="w-10 h-10" />
      </FloatingIcon>
      <FloatingIcon className="absolute bottom-32 left-[20%] text-3xl text-primary/50" delay={1} duration={3.5}>
        <Star className="w-6 h-6" />
      </FloatingIcon>
      <FloatingIcon className="absolute top-40 left-[30%] text-2xl text-accent/40" delay={1.5} duration={4.5}>
        <Heart className="w-5 h-5" />
      </FloatingIcon>
      <FloatingIcon className="absolute bottom-40 right-[25%] text-3xl text-primary/60" delay={2} duration={3}>
        <Flame className="w-7 h-7" />
      </FloatingIcon>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/70"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.span>
            Welcome to the chaos
          </motion.span>
        </motion.div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-serif tracking-tight mb-6">
          <AnimatedLetters 
            text="Welcome to" 
            className="block text-foreground mb-2"
          />
          <span className="block">
            <GlitchText 
              text="itsfucking" 
              className="text-foreground"
            />
            <GlitchText 
              text=".fun" 
              className="text-primary"
            />
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty"
        >
          Because the internet should be{" "}
          <motion.span 
            className="text-foreground font-semibold inline-block"
            whileHover={{ 
              scale: 1.1, 
              rotate: [-5, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
          >
            fun
          </motion.span>{" "}
          again.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <MagneticButton variant="primary" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            <Zap className="w-5 h-5" />
            See My Projects
          </MagneticButton>
          <MagneticButton variant="ghost" onClick={() => window.open("https://resume.aivault.securityjunky.com/", "_blank")}>
            View Resume
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div 
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
