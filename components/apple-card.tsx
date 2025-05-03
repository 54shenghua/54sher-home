"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"

interface AppleCardProps {
  children: React.ReactNode
  className?: string
  depth?: number
  backgroundColor?: string
}

export default function AppleCard({
  children,
  className = "",
  depth = 10,
  backgroundColor = "rgba(255, 255, 255, 0.05)",
}: AppleCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX
    const mouseY = e.clientY

    const rotateXValue = ((mouseY - centerY) / (rect.height / 2)) * -depth
    const rotateYValue = ((mouseX - centerX) / (rect.width / 2)) * depth

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
    setScale(1.02)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: "transform 0.2s ease-out",
        backgroundColor,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(${135 + rotateY}deg, transparent, rgba(255, 255, 255, 0.3) ${50 + rotateX}%, transparent)`,
          transform: "translateZ(1px)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}

