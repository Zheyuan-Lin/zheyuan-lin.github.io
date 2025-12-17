"use client"

import { useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Image from "next/image"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  parallaxAmount?: number
}

export function ParallaxImage({
  src,
  alt,
  className = "",
  parallaxAmount = 20,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const springConfig = { damping: 25, stiffness: 200 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const imgX = useTransform(xSpring, [0, 1], [parallaxAmount, -parallaxAmount])
  const imgY = useTransform(ySpring, [0, 1], [parallaxAmount, -parallaxAmount])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const mouseX = (e.clientX - rect.left) / rect.width
    const mouseY = (e.clientY - rect.top) / rect.height

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor-view
    >
      <motion.div
        className="absolute inset-0"
        style={{
          x: imgX,
          y: imgY,
          scale: isHovered ? 1.1 : 1.05,
        }}
        transition={{ scale: { duration: 0.4 } }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Hover overlay with gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ 
          x: isHovered ? "100%" : "-100%",
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
    </motion.div>
  )
}

