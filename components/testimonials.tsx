"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView, useAnimationControls } from "framer-motion"
import { Quote } from "lucide-react"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Akintola Olwatobi",
    role: "Senior Mobile App Engineer",
    company: "Intelligent Innovations, Lagos Nigeria",
    content:
      "Julius is a very competent developer and he is eager to learn new concepts or understand how an existing concept/system works.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Chiamaka Esonwune",
    role: "Graphic / UI Designer",
    company: "",
    content:
      "He's very thorough and pays attention to details",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 3,
    name: "Onyenankie Kelvin",
    role: "Backend Developer",
    company: "Student Cornr",
    content:
      "Working with Julius as a backend developer has been an amazing experience. As a frontend developer, he understands the importance of good structure and proper coding practices. He delivers excellent UI implementations and ensures smooth integration between the frontend and backend, making collaboration seamless and efficient.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder",
    company: "DesignLab",
    content:
      "Rare to find someone who excels at both design and development. The interactive elements added to our platform increased user engagement by 40%.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Patel",
    role: "UX Lead",
    company: "InnovateUI",
    content:
      "A true professional who understands the balance between aesthetics and functionality. The animations were smooth and purposeful.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "CTO",
    company: "FutureTech",
    content:
      "Exceptional problem-solving skills and technical knowledge. Transformed our complex requirements into an intuitive and playful interface.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimationControls()

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-16 mt-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Don't just take my word for it - here's what clients have to say about working with me.
        </p>
      </motion.div>

      {/* Marquee container */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => {
          setIsPaused(true)
          controls.stop()
        }}
        onMouseLeave={() => {
          setIsPaused(false)
          controls.start("animate")
        }}
      >
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background to-transparent z-10"></div>

        {/* First row - left to right */}
        <motion.div
          className="flex gap-6 py-4"
          initial="initial"
          animate={controls}
          variants={{
            initial: { x: 0 },
            animate: {
              x: [0, -1920],
              transition: {
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 40,
                  ease: "linear",
                },
              },
            },
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Second row - right to left (reversed direction) */}
        <motion.div
          className="flex gap-6 py-4"
          initial="initial"
          animate={controls}
          variants={{
            initial: { x: -1920 },
            animate: {
              x: [0, -3840],
              transition: {
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 50,
                  ease: "linear",
                },
              },
            },
          }}
        >
          {[...allTestimonials].reverse().map((testimonial, index) => (
            <TestimonialCard key={`rev-${testimonial.id}-${index}`} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      {isPaused && (
        <div className="text-center mt-4 text-sm text-muted-foreground animate-pulse">
          Marquee paused — hover away to resume
        </div>
      )}
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-card border rounded-xl p-6 shadow-sm flex flex-col min-w-[300px] max-w-[350px] relative"
      whileHover={{
        y: -5,
        scale: 1.02,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Quote icon */}
      <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground p-2 rounded-full">
        <Quote className="h-4 w-4" />
      </div>

      {/* Rating stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial content */}
      <p className="text-foreground italic mb-4 flex-grow">"{testimonial.content}"</p>

      {/* Client info */}
      <div className="flex items-center mt-4">
        {/* {testimonial.avatar && (
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
            <Image
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        )} */}
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-primary/10"
        animate={isHovered ? { scale: 1.5, opacity: 0.8 } : { scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

