"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Linkedin, Github } from "lucide-react"

const links = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dark-warlord14/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/dark-warlord14",
    icon: Github,
  },
]

export function Footer() {
  return (
    <footer className="relative py-16 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <motion.div
            className="text-3xl sm:text-4xl font-bold font-serif"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="gradient-text"
              whileHover={{ textShadow: "0 0 30px var(--glow-primary)" }}
            >
              itsfucking
            </motion.span>
            <motion.span
              className="text-primary"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              .fun
            </motion.span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-muted-foreground text-center flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500 inline" />
            </motion.span>
            {" "}and a healthy dose of chaos
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-32 h-px bg-gradient-to-r from-transparent via-border to-transparent"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map(({ label, href, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Icon className="w-4 h-4" />
                {label}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-xs text-muted-foreground/60 flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Sparkles className="w-3 h-3" />
            {new Date().getFullYear()} ItsFucking.FUN — all rights reserved (or not, who cares)
            <Sparkles className="w-3 h-3" />
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
