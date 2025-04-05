"use client"

import { useEffect, useState } from "react"

interface MultiTypewriterEffectProps {
  texts: string[]
  speed?: number
  typingDelay?: number
  deletingDelay?: number
  pauseDelay?: number
  className?: string
  cursor?: boolean
  loop?: boolean
}

export function MultiTypewriterEffect({
  texts,
  speed = 100,
  typingDelay = 1000,
  deletingDelay = 50,
  pauseDelay = 2000,
  className = "",
  cursor = true,
  loop = true,
}: MultiTypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Handle typing
    if (isTyping && !isPaused) {
      if (currentIndex < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, currentIndex + 1))
          setCurrentIndex((prevIndex) => prevIndex + 1)
        }, speed)
      } else {
        // Finished typing current text
        setIsPaused(true)
        timeout = setTimeout(() => {
          setIsPaused(false)
          setIsTyping(false)
        }, pauseDelay)
      }
    }
    // Handle deleting
    else if (!isTyping && !isPaused) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(texts[currentTextIndex].substring(0, currentIndex - 1))
          setCurrentIndex((prevIndex) => prevIndex - 1)
        }, deletingDelay)
      } else {
        // Finished deleting, move to next text
        setCurrentTextIndex((prevIndex) =>
          loop || prevIndex < texts.length - 1 ? (prevIndex + 1) % texts.length : prevIndex,
        )
        setIsTyping(true)
        timeout = setTimeout(() => {
          // Delay before starting to type the next text
        }, typingDelay)
      }
    }

    return () => clearTimeout(timeout)
  }, [texts, currentIndex, currentTextIndex, isTyping, isPaused, speed, deletingDelay, pauseDelay, typingDelay, loop])

  return (
    <span className={className}>
      {displayText}
      {cursor && <span className="animate-blink">|</span>}
    </span>
  )
}

