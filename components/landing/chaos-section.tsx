"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ScrollReveal, Parallax } from "./scroll-reveal"
import { 
  Zap, Heart, Star, Flame, Sparkles, Sun, Moon, Cloud, 
  Music, Camera, Coffee, Gamepad2, Palette, Wand2, Ghost, Pizza
} from "lucide-react"
import { type MouseEvent } from "react"

const floatingIcons = [
  { icon: Zap,      color: "#a3e635" },  // lime-400
  { icon: Heart,    color: "#84cc16" },  // lime-500
  { icon: Star,     color: "#bef264" },  // lime-300
  { icon: Flame,    color: "#4ade80" },  // green-400
  { icon: Sparkles, color: "#a3e635" },
  { icon: Sun,      color: "#d9f99d" },  // lime-200
  { icon: Moon,     color: "#86efac" },  // green-300
  { icon: Cloud,    color: "#6ee7b7" },  // emerald-300
  { icon: Music,    color: "#a3e635" },
  { icon: Camera,   color: "#84cc16" },
  { icon: Coffee,   color: "#bef264" },
  { icon: Gamepad2, color: "#4ade80" },
  { icon: Palette,  color: "#a3e635" },
  { icon: Wand2,    color: "#d9f99d" },
  { icon: Ghost,    color: "#86efac" },
  { icon: Pizza,    color: "#6ee7b7" },
]

function ChaosIcon({ 
  icon: Icon, 
  color, 
  index 
}: { 
  icon: typeof Zap
  color: string
  index: number 
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { damping: 10, stiffness: 100 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  
  const rotate = useTransform(
    [springX, springY],
    ([latestX, latestY]) => (latestX as number) * 0.5 + (latestY as number) * 0.5
  )

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className="relative cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        rotate: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.05,
          type: "spring",
          stiffness: 200
        }
      }}
      viewport={{ once: true }}
      style={{ x: springX, y: springY, rotate }}
      whileHover={{ 
        scale: 1.3,
        transition: { type: "spring", stiffness: 400 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl glass flex items-center justify-center"
        style={{
          boxShadow: `0 0 30px -5px ${color}60`,
        }}
        whileHover={{
          boxShadow: `0 0 50px -5px ${color}`,
        }}
      >
        <Icon 
          className="w-8 h-8 sm:w-10 sm:h-10" 
          style={{ color }}
        />
      </motion.div>
      
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{ border: `2px solid ${color}` }}
        initial={{ opacity: 0, scale: 1 }}
        whileHover={{
          opacity: [0, 0.5, 0],
          scale: [1, 1.5, 1.8],
          transition: { duration: 1, repeat: Infinity }
        }}
      />
    </motion.div>
  )
}

export function ChaosSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px w-full"
            style={{
              background: `linear-gradient(90deg, transparent, var(--glow-primary)40, transparent)`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Parallax speed={0.3}>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
              The internet needs more{" "}
              <motion.span 
                className="inline-block"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="gradient-text">chaos</span>
              </motion.span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Embrace the beautiful mess. Life is too short for boring websites.
            </p>          </ScrollReveal>
        </Parallax>

        {/* Chaos grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
          {floatingIcons.map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <ChaosIcon 
                icon={item.icon} 
                color={item.color} 
                index={index} 
              />
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <ScrollReveal className="mt-16 text-center" delay={0.3}>
          <motion.div 
            className="inline-block glass rounded-2xl px-8 py-4"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 50px -10px var(--glow-primary)"
            }}
          >
            <p className="text-lg">
              <span className="text-muted-foreground">Fun fact: </span>
              <motion.span 
                className="font-semibold text-foreground"
                animate={{ opacity: [1, 0.75, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Every hover here is carefully crafted to spark joy
              </motion.span>
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
