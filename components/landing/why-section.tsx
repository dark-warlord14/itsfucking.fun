"use client"

import { motion } from "framer-motion"
import { GlassCard } from "./glass-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"
import { BounceIcon } from "./floating-icon"
import { Laugh, Rocket, Lightbulb, Sparkles } from "lucide-react"

const features = [
  {
    icon: Laugh,
    title: "Pure Joy",
    description: "Remember when the internet was about having fun, not doomscrolling? We're bringing that energy back.",
    color: "var(--glow-primary)",
  },
  {
    icon: Rocket,
    title: "Zero BS",
    description: "No corporate speak. No growth hacks. Just pure, unfiltered creativity and chaos.",
    color: "var(--glow-secondary)",
  },
  {
    icon: Lightbulb,
    title: "Wild Ideas",
    description: "A playground for the weirdest, most wonderful ideas that deserve to exist on the internet.",
    color: "var(--glow-accent)",
  },
]

export function WhySection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--glow-primary) 0%, transparent 70%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-4"
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
          >
            <Sparkles className="w-4 h-4" />
            The Manifesto
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
            Why{" "}
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              this
            </motion.span>{" "}
            exists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"We're on a mission to inject some much-needed chaos into the overly serious internet."}
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <GlassCard 
                className="h-full" 
                glowColor={feature.color}
                delay={index * 0.1}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <BounceIcon>
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}30, transparent)`,
                        boxShadow: `0 0 30px -10px ${feature.color}`,
                      }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                  </BounceIcon>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-3 text-foreground"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {feature.title}
                </motion.h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="h-0.5 mt-6 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${feature.color}, transparent)` }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
