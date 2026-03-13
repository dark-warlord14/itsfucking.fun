"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"
import { useState } from "react"
import { ArrowUpRight, Shield, BarChart2, Globe } from "lucide-react"

const projects = [
  {
    id: "resume",
    title: "Shantanu Ghumade",
    subtitle: "Interactive Resume",
    description:
      "Senior Application Security Engineer. OSCP & OSWE certified. 6+ years across AppSec, Cloud Security, and DevSecOps — with a builder mindset.",
    url: "https://resume.aivault.securityjunky.com/",
    displayUrl: "resume.aivault.securityjunky.com",
    label: "View Resume",
    icon: Shield,
    tag: "Security",
    accentColor: "#a3e635",
    highlights: ["OSCP & OSWE Certified", "6+ Years AppSec", "AI Security Tooling"],
  },
  {
    id: "polylens",
    title: "PolyLens",
    subtitle: "Market Intelligence Dashboard",
    description:
      "High-probability market discovery for Polymarket. Smart filters, real-time data, and liquidity intelligence for the new prediction economy.",
    url: "https://polylens.aivault.securityjunky.com/",
    displayUrl: "polylens.aivault.securityjunky.com",
    label: "Open Dashboard",
    icon: BarChart2,
    tag: "Finance",
    accentColor: "#4ade80",
    highlights: ["Real-Time Markets", "Liquidity Filters", "Probability Ranges"],
  },
]

function BrowserMockup({ url, accentColor }: { url: string; accentColor: string }) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden mb-6 border"
      style={{ borderColor: `${accentColor}25`, background: "rgba(255,255,255,0.03)" }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ background: "rgba(255,255,255,0.04)", borderBottom: `1px solid ${accentColor}15` }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        {/* Address bar */}
        <div
          className="flex-1 mx-2 rounded-md px-3 py-1 flex items-center gap-2 text-xs"
          style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}
        >
          <Globe className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{url}</span>
        </div>
      </div>
      {/* "Screen" area — a subtle gradient pane */}
      <div
        className="h-20 w-full"
        style={{
          background: `linear-gradient(135deg, ${accentColor}08 0%, transparent 60%)`,
        }}
      />
    </div>
  )
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <StaggerItem>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group block h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        aria-label={`Open ${project.title}`}
      >
        {/* Glow halo */}
        <motion.div
          className="absolute -inset-px rounded-3xl blur-xl pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${project.accentColor} 0%, transparent 70%)` }}
          animate={{ opacity: isHovered ? 0.35 : 0 }}
          transition={{ duration: 0.35 }}
        />

        {/* Card body */}
        <div
          className="relative glass rounded-3xl p-8 md:p-10 h-full overflow-hidden"
          style={{ borderColor: `${project.accentColor}20` }}
        >
          {/* Hover wash */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}08, transparent)` }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
          />

          {/* Browser mockup */}
          <BrowserMockup url={project.displayUrl} accentColor={project.accentColor} />

          {/* Top row */}
          <div className="relative z-10 flex items-start justify-between mb-5">
            <motion.div
              className="flex items-center justify-center w-11 h-11 rounded-2xl"
              style={{
                background: `${project.accentColor}18`,
                border: `1px solid ${project.accentColor}35`,
              }}
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.35 }}
            >
              <Icon className="w-5 h-5" style={{ color: project.accentColor }} />
            </motion.div>

            <div className="flex items-center gap-2">
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  background: `${project.accentColor}14`,
                  color: project.accentColor,
                  border: `1px solid ${project.accentColor}25`,
                }}
              >
                {project.tag}
              </span>
              <motion.div
                animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight
                  className="w-5 h-5 transition-colors"
                  style={{ color: isHovered ? project.accentColor : "var(--muted-foreground)" }}
                />
              </motion.div>
            </div>
          </div>

          {/* Text block */}
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: project.accentColor }}>
              {project.subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-3 text-foreground text-balance">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-6">
              {project.description}
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <motion.span
                  key={h}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: `${project.accentColor}12`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}25`,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {h}
                </motion.span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <motion.div
            className="relative z-10 mt-8 flex items-center gap-2 font-semibold text-sm"
            style={{ color: project.accentColor }}
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.label}
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>

          {/* Corner accents */}
          <AnimatePresence>
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 rounded-tl-3xl pointer-events-none"
                  style={{ borderColor: project.accentColor }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 rounded-br-3xl pointer-events-none"
                  style={{ borderColor: project.accentColor }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2, delay: 0.07 }}
                />
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.a>
    </StaggerItem>
  )
}

export function ShowcaseSection() {
  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Projects
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif mb-6">
            Things I{" "}
            <motion.span
              className="gradient-text inline-block"
              whileHover={{ rotate: [0, -3, 3, 0], transition: { duration: 0.3 } }}
            >
              actually built
            </motion.span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
            Real projects, running in production. Click to explore.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.15}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
