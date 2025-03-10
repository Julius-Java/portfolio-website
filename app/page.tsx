import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import FloatingElements from "@/components/floating-elements"
import MagicNav from "@/components/magic-nav"
import ThemeSwitcher from "@/components/theme-switcher"
import ParticleBackground from "@/components/particle-background"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      <div className="fixed top-6 right-6 z-50">
        <ThemeSwitcher />
      </div>
      <MagicNav />
      <div className="container mx-auto px-4 py-10 relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />

        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Julius Emmanuel. All rights reserved.</p>
          {/* <div className="mt-2 flex items-center justify-center gap-2">
            <Link href="/credits" className="text-primary hover:underline inline-flex items-center gap-1 group">
              View Credits <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div> */}
        </footer>
      </div>
    </main>
  )
}

