"use client"

import { HeroSection } from "@/components/landing/hero-section"
import { WhySection } from "@/components/landing/why-section"
import { ChaosSection } from "@/components/landing/chaos-section"
import { ShowcaseSection } from "@/components/landing/showcase-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <HeroSection />
      <WhySection />
      <ChaosSection />
      <ShowcaseSection />
      <CTASection />
      <Footer />
    </main>
  )
}
