"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface SpotlightSectionProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  spotlightSize?: number
}

export function SpotlightSection({
  children,
  className = "",
  spotlightColor = "rgba(59, 130, 246, 0.15)",
  spotlightSize = 400,
}: SpotlightSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 30, stiffness: 200 }
  const spotlightX = useSpring(mouseX, springConfig)
  const spotlightY = useSpring(mouseY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsInView(true)}
      onMouseLeave={() => setIsInView(false)}
    >
      {/* Spotlight gradient that follows mouse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: spotlightX,
          top: spotlightY,
          width: spotlightSize,
          height: spotlightSize,
          x: -spotlightSize / 2,
          y: -spotlightSize / 2,
          background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
          opacity: isInView ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  )
}

