"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Mail } from "lucide-react"
import TypewriterComponent from "@/components/typewriter"
import Logo from "@/components/logo"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mx-auto mb-6"
        >
          <Logo variant="long" size="lg" animated={true} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 h-12"
        >
          <TypewriterComponent
            texts={["Software Developer", "Frontend Developer", "Backend Developer", "React & Next.js Expert"]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" className="gap-2">
            <Mail size={18} />
            Contact Me
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://github.com/umesh-saini" target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
          <Button variant="ghost" size="icon" asChild>
            <a href="#about">
              <ArrowDown />
              <span className="sr-only">Scroll down</span>
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
