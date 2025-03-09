"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"

type Theme = "light" | "dark" | "system"

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("system")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Get initial theme from localStorage or default to system
    const savedTheme = localStorage.getItem("theme") as Theme | null
    if (savedTheme) {
      setTheme(savedTheme)
      applyTheme(savedTheme)
    } else {
      // Check system preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const applyTheme = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme)

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark")
    } else {
      // System preference
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme)
    applyTheme(newTheme)
    setIsOpen(false)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-5 w-5" />
      case "dark":
        return <Moon className="h-5 w-5" />
      default:
        return <Laptop className="h-5 w-5" />
    }
  }

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-background/80 backdrop-blur-sm border-primary/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: isOpen ? 30 : 0 }} transition={{ duration: 0.2 }}>
          {getThemeIcon()}
        </motion.div>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-background/80 backdrop-blur-sm border border-border rounded-lg shadow-lg p-2 z-50"
          >
            <div className="space-y-1">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleThemeChange("light")}
              >
                <Sun className="h-4 w-4 mr-2" />
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleThemeChange("dark")}
              >
                <Moon className="h-4 w-4 mr-2" />
                Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => handleThemeChange("system")}
              >
                <Laptop className="h-4 w-4 mr-2" />
                System
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

