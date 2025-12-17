"use client"

import { motion } from "framer-motion"

interface FloatingShapesProps {
  className?: string
  variant?: "hero" | "dark" | "light"
}

export function FloatingShapes({ className = "", variant = "hero" }: FloatingShapesProps) {
  const colors = {
    hero: ["rgba(59, 130, 246, 0.3)", "rgba(147, 51, 234, 0.3)", "rgba(236, 72, 153, 0.2)"],
    dark: ["rgba(59, 130, 246, 0.15)", "rgba(147, 51, 234, 0.15)", "rgba(16, 185, 129, 0.1)"],
    light: ["rgba(59, 130, 246, 0.1)", "rgba(147, 51, 234, 0.1)", "rgba(236, 72, 153, 0.08)"],
  }

  const shapes = [
    { size: 300, x: "10%", y: "20%", duration: 20, delay: 0 },
    { size: 200, x: "70%", y: "60%", duration: 25, delay: 2 },
    { size: 150, x: "80%", y: "10%", duration: 18, delay: 4 },
    { size: 250, x: "20%", y: "70%", duration: 22, delay: 1 },
    { size: 100, x: "50%", y: "40%", duration: 15, delay: 3 },
  ]

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: colors[variant][i % colors[variant].length],
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            scale: [1, 1.1, 0.9, 1.05, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

