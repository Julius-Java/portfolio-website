"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Palette, Database, Globe, Zap } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Code className="h-6 w-6" />,
    color: "bg-pink-500/10 text-pink-500",
    items: ["React", "Next.js", "HTML/CSS", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Design",
    icon: <Palette className="h-6 w-6" />,
    color: "bg-purple-500/10 text-purple-500",
    items: ["Figma", "Responsive Design", "Animation"],
  },
  {
    category: "Backend",
    icon: <Database className="h-6 w-6" />,
    color: "bg-blue-500/10 text-blue-500",
    items: ["Node.js", "Express", "Sails JS", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Other",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-green-500/10 text-green-500",
    items: ["Git", "Testing", "Performance Optimization", "SEO"],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Expertise</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Here are some technologies and tools I work with to bring ideas to life.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={itemVariants}
            className="bg-card rounded-xl p-6 shadow-sm border relative overflow-hidden group"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
            onMouseEnter={() => setActiveSkill(skill.category)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"
              initial={{ opacity: 0 }}
              animate={{ opacity: activeSkill === skill.category ? 1 : 0 }}
            />

            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className={`p-2 rounded-lg ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.category}</h3>
            </div>

            <ul className="space-y-2 relative z-10">
              {skill.items.map((item, itemIndex) => (
                <motion.li
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ x: -10, opacity: 0 }}
                  animate={
                    activeSkill === skill.category
                      ? { x: 0, opacity: 1, transition: { delay: itemIndex * 0.05 } }
                      : { x: 0, opacity: 1 }
                  }
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-primary/5 z-0"
              animate={activeSkill === skill.category ? { scale: 1.5, opacity: 0.8 } : { scale: 1, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              className="absolute top-4 right-4 text-primary/40 z-0"
              animate={activeSkill === skill.category ? { rotate: 15, scale: 1.2 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Zap className="h-6 w-6" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

