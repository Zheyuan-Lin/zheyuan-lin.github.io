"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
}

export function TypewriterEffect({
  text,
  speed = 100,
  delay = 0,
  className = "",
  cursor = true,
}: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting to type
    if (!isTyping && currentIndex === 0) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    // Start typing
    if (isTyping && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.substring(0, currentIndex + 1))
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    return () => {}
  }, [text, speed, delay, currentIndex, isTyping])

  return (
    <span className={className}>
      {displayText}
      {cursor && currentIndex < text.length && <span className="animate-blink">|</span>}
    </span>
  )
}

