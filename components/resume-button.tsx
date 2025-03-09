"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileDown, Check, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [isDownloaded, setIsDownloaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      // Create a link element
      const link = document.createElement("a")

      // Set link properties
      // Replace with actual resume path in production
      link.href = "/resume.pdf"
      link.download = "YourName_Resume.pdf"

      // Append to body, click, and remove
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setIsDownloading(false)
      setIsDownloaded(true)

      // Reset downloaded state after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="relative">
      <Button
        variant="secondary"
        size="lg"
        className={`relative overflow-hidden transition-all duration-300 ${
          isDownloaded ? "bg-green-500/20 text-green-600 dark:bg-green-500/30 dark:text-green-400" : ""
        }`}
        onClick={handleDownload}
        disabled={isDownloading}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {isDownloading ? (
            <motion.div
              key="downloading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="h-4 w-4 border-2 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span>Downloading...</span>
            </motion.div>
          ) : isDownloaded ? (
            <motion.div
              key="downloaded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-2"
            >
              <Check className="h-4 w-4" />
              <span>Downloaded!</span>
            </motion.div>
          ) : (
            <motion.div
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Resume</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Background animation */}
        <span
          className={`absolute inset-0 bg-primary/10 transform scale-x-0 transition-transform origin-left ${
            isHovered && !isDownloaded ? "scale-x-100" : ""
          }`}
        />
      </Button>

      {/* Floating resume preview */}
      <AnimatePresence>
        {isHovered && !isDownloading && !isDownloaded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-card border rounded-lg shadow-lg p-3 z-50 w-48"
          >
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-2 rounded">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">YourName_Resume.pdf</p>
                <p className="text-xs text-muted-foreground">Last updated: Mar 2025</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

