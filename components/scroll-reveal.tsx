"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right"
  className?: string
  distance?: number
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  className = "",
  distance = 50,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.2 })

  const directionMap = {
    up: { y: distance, opacity: 0 },
    down: { y: -distance, opacity: 0 },
    left: { x: distance, opacity: 0 },
    right: { x: -distance, opacity: 0 },
  }

  const initial = directionMap[direction]
  const animate = isInView ? { x: 0, y: 0, opacity: 1 } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for Apple-like easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

