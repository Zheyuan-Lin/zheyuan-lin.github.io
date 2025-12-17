"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  magnetStrength?: number
  as?: "button" | "a"
  target?: string
}

export function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  magnetStrength = 0.3,
  as = "button",
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    x.set(distanceX * magnetStrength)
    y.set(distanceY * magnetStrength)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  const Component = as === "a" ? motion.a : motion.button

  return (
    <div
      ref={ref}
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <Component
        href={href}
        onClick={onClick}
        target={target}
        className={`relative overflow-hidden ${className}`}
        style={{
          x: xSpring,
          y: ySpring,
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Ripple effect on hover */}
        <motion.span
          className="absolute inset-0 bg-white/20 rounded-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1.5 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          style={{ originX: 0.5, originY: 0.5 }}
        />
        
        {/* Content with slight magnetic effect */}
        <motion.span
          className="relative z-10 flex items-center gap-2"
          style={{
            x: useSpring(useMotionValue(0), springConfig),
            y: useSpring(useMotionValue(0), springConfig),
          }}
        >
          {children}
        </motion.span>
      </Component>
    </div>
  )
}

