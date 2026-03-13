"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { MagneticButton } from "./magnetic-button"
import { Rocket, Sparkles, Zap } from "lucide-react"
import { type MouseEvent, useRef } from "react"

export function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section 
      ref={containerRef}
      className="relative py-32 px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            x: springX,
            y: springY,
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow-secondary) 0%, transparent 70%)",
            left: "30%",
            top: "60%",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ScrollReveal>
          <motion.div 
            className="relative glass-strong rounded-3xl p-12 sm:p-16 text-center overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, var(--glow-primary)30, transparent, var(--glow-secondary)30)",
                padding: "2px",
              }}
              animate={{
                background: [
                  "linear-gradient(135deg, var(--glow-primary)30, transparent, var(--glow-secondary)30)",
                  "linear-gradient(225deg, var(--glow-secondary)30, transparent, var(--glow-accent)30)",
                  "linear-gradient(315deg, var(--glow-accent)30, transparent, var(--glow-primary)30)",
                  "linear-gradient(135deg, var(--glow-primary)30, transparent, var(--glow-secondary)30)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Floating icons */}
            <motion.div
              className="absolute top-8 left-8 text-primary/40"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute bottom-8 right-8 text-accent/40"
              animate={{
                y: [0, 10, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Zap className="w-8 h-8" />
            </motion.div>

            {/* Content */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
                style={{
                  background: "linear-gradient(135deg, var(--glow-primary)30, var(--glow-secondary)30)",
                  boxShadow: "0 0 60px -10px var(--glow-primary)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 60px -10px var(--glow-primary)",
                    "0 0 80px -10px var(--glow-secondary)",
                    "0 0 60px -10px var(--glow-primary)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  rotate: [0, -10, 10, 0],
                  scale: 1.1,
                }}
              >
                <Rocket className="w-10 h-10 text-primary" />
              </motion.div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
                Want to see what{" "}
                <motion.span 
                  className="gradient-text inline-block"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  I can build?
                </motion.span>
              </h2>

              <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto text-pretty">
                {"Check out my resume or connect on LinkedIn. Let's build something fun together."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <MagneticButton variant="primary" onClick={() => window.open("https://resume.aivault.securityjunky.com/", "_blank")}>
                  <Rocket className="w-5 h-5" />
                  View Resume
                </MagneticButton>
                <MagneticButton variant="secondary" onClick={() => window.open("https://www.linkedin.com/in/dark-warlord14/", "_blank")}>
                  Connect on LinkedIn
                </MagneticButton>
              </div>
            </motion.div>

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)",
              }}
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                repeatDelay: 2,
              }}
            />
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
