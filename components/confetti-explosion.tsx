"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Particle = {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: {
    x: number
    y: number
  }
  rotation: number
  rotationVelocity: number
}

export default function ConfettiExplosion() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      "#FF5252",
      "#FF4081",
      "#E040FB",
      "#7C4DFF",
      "#536DFE",
      "#448AFF",
      "#40C4FF",
      "#18FFFF",
      "#64FFDA",
      "#69F0AE",
      "#B2FF59",
      "#EEFF41",
      "#FFFF00",
      "#FFD740",
      "#FFAB40",
      "#FF6E40",
    ]

    // Create particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: 0,
      y: 0,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 15,
        y: (Math.random() - 0.5) * 15 - 3, // Mostly upward
      },
      rotation: Math.random() * 360,
      rotationVelocity: (Math.random() - 0.5) * 20,
    }))

    setParticles(newParticles)

    // Cleanup
    return () => {
      setParticles([])
    }
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: Math.random() > 0.3 ? "50%" : "0%",
            top: "50%",
            left: "50%",
            rotate: `${particle.rotation}deg`,
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{
            x: particle.velocity.x * 20,
            y: particle.velocity.y * 20,
            opacity: 0,
            rotate: `${particle.rotation + particle.rotationVelocity * 5}deg`,
          }}
          transition={{
            duration: 1 + Math.random(),
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

