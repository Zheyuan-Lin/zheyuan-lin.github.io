"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { techLogos } from "@/data/portfolio"

interface TechIconProps {
  tech: string
  size?: "sm" | "md" | "lg"
  showTooltip?: boolean
  delay?: number
}

const sizes = {
  sm: "w-6 h-6",
  md: "w-8 h-8", 
  lg: "w-10 h-10",
}

export function TechIcon({ tech, size = "md", showTooltip = true, delay = 0 }: TechIconProps) {
  const [imageError, setImageError] = useState(false)
  const logoUrl = techLogos[tech.toLowerCase()]
  
  const hasIcon = logoUrl && !imageError

  return (
    <motion.div
      className="group relative flex items-center justify-center"
      whileHover={{ scale: 1.2, y: -4 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay * 0.05 }}
    >
      {hasIcon ? (
        <img 
          src={logoUrl} 
          alt={tech}
          className={`${sizes[size]} object-contain`}
          onError={() => setImageError(true)}
          loading="lazy"
        />
      ) : (
        <span className="text-xs px-3 py-1.5 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-purple-600">
          {tech}
        </span>
      )}
      
      {/* Tooltip */}
      {showTooltip && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 border border-gray-700">
          {tech}
        </span>
      )}
    </motion.div>
  )
}

interface TechStackProps {
  stack: string[]
  size?: "sm" | "md" | "lg"
  limit?: number
}

export function TechStack({ stack, size = "md", limit }: TechStackProps) {
  const displayStack = limit ? stack.slice(0, limit) : stack
  
  return (
    <div className="flex gap-4 flex-wrap items-center">
      {displayStack.map((tech, i) => (
        <TechIcon key={tech} tech={tech} size={size} delay={i} />
      ))}
    </div>
  )
}

