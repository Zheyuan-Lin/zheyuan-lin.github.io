"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('hero')}
          className="text-2xl font-bold transition-colors hover:text-primary"
        >
          Zheyuan Lin
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hover:bg-primary/10"
            onClick={() => scrollToSection('about')}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-primary/10"
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-primary/10"
            onClick={() => scrollToSection('personal')}
          >
            Personal
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-primary/10"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="hover:bg-primary/10"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden p-4 flex flex-col space-y-2">
            <Button
              variant="ghost"
              className="justify-start hover:bg-primary/10"
              onClick={() => scrollToSection('about')}
            >
              About
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-primary/10"
              onClick={() => scrollToSection('experience')}
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-primary/10"
              onClick={() => scrollToSection('personal')}
            >
              Personal
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-primary/10"
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              className="justify-start hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
            <div className="flex justify-start">
              <ModeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

