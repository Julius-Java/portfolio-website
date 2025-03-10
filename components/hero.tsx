"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"
import ConfettiExplosion from "@/components/confetti-explosion"
import { ResumeButton } from "@/components/resume-button"
import myavatar from "@/public/me-avatar.jpg"

export default function Hero() {
  const [bounce, setBounce] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // 3D tilt effect for image
  const x = useMotionValue(0)
  const y2 = useMotionValue(0)

  const rotateX = useTransform(y2, [-100, 100], [10, -10])
  const rotateY = useTransform(x, [-100, 100], [-10, 10])

  const springConfig = { damping: 20, stiffness: 100 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y2.set(e.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y2.set(0)
  }

  return (
    <section className="py-20 md:py-28" ref={containerRef} id="#home">
      <motion.div style={{ y, opacity }} className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-primary inline-flex items-center gap-2">
              Hello! <Sparkles className="h-8 w-8 animate-pulse" />
            </span>
            <br />
            I'm Julius Emmanuel
          </h1>
          <motion.p
            className="mt-4 text-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            A creative web developer building delightful digital experiences.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                setShowConfetti(true)
                setTimeout(() => setShowConfetti(false), 2000)
              }}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-primary-foreground/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              {showConfetti && <ConfettiExplosion />}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
            <ResumeButton />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative perspective"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-muted shadow-xl"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* <Image src="/placeholder.svg?height=400&width=400" alt="Emmanuel Julius" fill className="object-cover" priority /> */}
            <Image src={myavatar} alt="Emmanuel Julius" fill className="object-cover" priority />

            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 h-16 w-16 bg-primary/20 rounded-full blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 h-24 w-24 bg-secondary/30 rounded-full blur-md"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          <motion.div
            className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-4 rounded-full shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ y: bounce ? -10 : 0 }}
            onHoverStart={() => setBounce(true)}
            onHoverEnd={() => setBounce(false)}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            transition={{
              y: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

