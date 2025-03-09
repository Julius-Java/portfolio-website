"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A beautiful web application with modern design and smooth interactions.",
    longDescription:
      "This project showcases my ability to create beautiful user interfaces with smooth interactions. I used Next.js for the frontend, with Tailwind CSS for styling and Framer Motion for animations. The application features a responsive design, dark mode support, and accessibility considerations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=600&width=800",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Project Two",
    description: "An interactive dashboard with real-time data visualization.",
    longDescription:
      "This dashboard provides real-time data visualization for business metrics. It features interactive charts, filterable data tables, and customizable views. Built with React and D3.js, it connects to a Firebase backend for real-time updates. The UI is designed to be intuitive and user-friendly, with a focus on data clarity.",
    tags: ["React", "D3.js", "Firebase"],
    image: "/placeholder.svg?height=600&width=800",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Project Three",
    description: "A mobile-first e-commerce platform with seamless checkout experience.",
    longDescription:
      "This e-commerce platform was built with a mobile-first approach, ensuring a great shopping experience on all devices. It features a seamless checkout process with Stripe integration, product filtering, search functionality, and user accounts. The backend is powered by Next.js API routes and a PostgreSQL database.",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    image: "/placeholder.svg?height=600&width=800",
    links: {
      live: "#",
      github: "#",
    },
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent works. Each project was carefully crafted with attention to detail and user
          experience.
        </p>
      </motion.div>

      {/* Mobile Carousel View */}
      <div className="md:hidden mb-10">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg border"
            >
              <div className="relative h-[200px]">
                <Image
                  src={projects[currentIndex].image || "/placeholder.svg"}
                  alt={projects[currentIndex].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold">{projects[currentIndex].title}</h3>
                <p className="mt-2 text-muted-foreground">{projects[currentIndex].description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projects[currentIndex].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={projects[currentIndex].links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={projects[currentIndex].links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm z-10"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-muted"}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-muted-foreground">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => setSelectedProject(project.id)}>
                  Learn More
                </Button>
              </div>
            </div>

            <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
              <motion.div
                className="relative h-[250px] md:h-[300px] w-full rounded-xl overflow-hidden perspective"
                whileHover={{
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  rotateX: 5,
                  z: 10,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project.id)}
                style={{ cursor: "pointer" }}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                <motion.div
                  className="absolute inset-0 bg-primary/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="px-4 py-2 bg-background/80 backdrop-blur-sm rounded-md text-sm font-medium">
                    View Details
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-card rounded-xl shadow-xl border max-w-3xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[300px]">
                <Image
                  src={projects.find((p) => p.id === selectedProject)?.image || "/placeholder.svg"}
                  alt={projects.find((p) => p.id === selectedProject)?.title || "Project"}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/50 backdrop-blur-sm rounded-full"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{projects.find((p) => p.id === selectedProject)?.title}</h3>
                <p className="mt-4 text-muted-foreground">
                  {projects.find((p) => p.id === selectedProject)?.longDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {projects
                    .find((p) => p.id === selectedProject)
                    ?.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-muted rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <Button asChild>
                    <a
                      href={projects.find((p) => p.id === selectedProject)?.links.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit Project
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={projects.find((p) => p.id === selectedProject)?.links.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

