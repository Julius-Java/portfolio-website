"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type Particle = {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInWindow, setIsMouseInWindow] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Generate particles
    const particleCount = window.innerWidth < 768 ? 20 : 40
    const newParticles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `hsla(${Math.random() * 360}, 80%, 70%, 0.6)`,
      })
    }

    setParticles(newParticles)

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Mouse enter/leave handlers
    const handleMouseEnter = () => setIsMouseInWindow(true)
    const handleMouseLeave = () => setIsMouseInWindow(false)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseenter", handleMouseEnter)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Animation frame for particle movement
  useEffect(() => {
    if (particles.length === 0) return

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Basic movement
          let newX = particle.x + particle.speedX
          let newY = particle.y + particle.speedY

          // Boundary check
          if (newX < 0 || newX > window.innerWidth) {
            particle.speedX *= -1
            newX = particle.x + particle.speedX
          }

          if (newY < 0 || newY > window.innerHeight) {
            particle.speedY *= -1
            newY = particle.y + particle.speedY
          }

          // Mouse interaction
          if (isMouseInWindow) {
            const dx = mousePosition.x - newX
            const dy = mousePosition.y - newY
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              // Push particles away from mouse
              const angle = Math.atan2(dy, dx)
              const force = (100 - distance) / 1500
              newX -= Math.cos(angle) * force * 5
              newY -= Math.sin(angle) * force * 5
            }
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const animationId = requestAnimationFrame(animateParticles)
    return () => cancelAnimationFrame(animationId)
  }, [particles, mousePosition, isMouseInWindow])

  if (typeof window === "undefined") return null

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            x: particle.x,
            y: particle.y,
            zIndex: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
          }}
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

