"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  animated?: boolean
  variant?: "short" | "long"
}

export default function Logo({ size = "md", animated = true, variant = "short" }: LogoProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  // Size configurations
  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  }

  // Render the short logo (US initials)
  if (variant === "short") {
    return (
      <div className="relative flex items-center justify-center">
        {/* Background shape */}
        <motion.div
          initial={animated ? { scale: 0, rotate: -180 } : { scale: 1, rotate: 0 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${sizes[size]} bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center`}
        />

        {/* U letter */}
        <motion.div
          initial={animated ? { y: -20, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
          className="absolute text-lg font-bold text-primary-foreground"
          style={{ left: size === "lg" ? "calc(50% - 10px)" : "calc(50% - 10px)" }}
        >
          U
        </motion.div>

        {/* S letter */}
        <motion.div
          initial={animated ? { y: 20, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
          className="absolute text-lg font-bold text-primary-foreground"
          style={{ left: size === "lg" ? "calc(50% + 2px)" : "calc(50% + 2px)" }}
        >
          S
        </motion.div>
      </div>
    )
  }

  // Render the long logo (UMESH SAINI)
  const letters = "UMESH SAINI".split("")

  return (
    <div className="relative flex items-center justify-center">
      {/* Background element */}
      <motion.div
        initial={animated ? { width: 0 } : { width: "320px" }}
        animate={{ width: "320px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-20 bg-gradient-to-r from-primary to-primary/70 rounded-lg"
      />

      {/* Letters animation */}
      <div className="absolute flex">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={animated ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.3 + index * 0.07,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className={`text-3xl font-bold ${letter === " " ? "mx-2" : "mx-0.5"} text-primary-foreground`}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Underline */}
      <motion.div
        initial={animated ? { width: 0, opacity: 0 } : { width: "280px", opacity: 1 }}
        animate={{ width: "280px", opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute h-0.5 bg-primary-foreground/70 bottom-4"
      />

      {/* Decorative dot */}
      <motion.div
        initial={animated ? { scale: 0 } : { scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.4, duration: 0.3, type: "spring" }}
        className="absolute w-2 h-2 bg-primary-foreground rounded-full"
        style={{ bottom: "12px", right: "calc(50% - 140px)" }}
      />
    </div>
  )
}
