"use client"

import { motion } from "framer-motion"
import { Github, Mail, Linkedin, Twitter } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <a href="#home" className="flex items-center gap-2">
              <Logo variant="short" size="sm" animated={false} />
              <div>
                <div className="text-xl font-bold">
                  <span className="text-primary">Umesh</span>
                  <span className="text-foreground">Saini</span>
                </div>
                <p className="text-muted-foreground text-sm">Software Developer</p>
              </div>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4 mb-4 md:mb-0"
          >
            <a
              href="https://github.com/umesh-saini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:umeshsaini8085@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right text-sm text-muted-foreground"
          >
            <p>© {currentYear} Umesh Saini. All rights reserved.</p>
            <div className="mt-1 text-xs">
              <span className="animate-pulse">❤️</span> Thanks for visiting!
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
