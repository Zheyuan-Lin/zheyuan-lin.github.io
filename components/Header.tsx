"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold transition-colors hover:text-primary">
          Zheyuan Lin
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="ghost" className="hover:bg-primary/10">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-primary/10">
            <Link href="/experience">Experience</Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-primary/10">
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild variant="ghost" className="hover:bg-primary/10">
            <Link href="/contact">Contact</Link>
          </Button>
          <ModeToggle />
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b md:hidden p-4 flex flex-col space-y-2">
            <Button asChild variant="ghost" className="justify-start hover:bg-primary/10">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start hover:bg-primary/10">
              <Link href="/experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start hover:bg-primary/10">
              <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </Link>
            </Button>
            <Button asChild variant="ghost" className="justify-start hover:bg-primary/10">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
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

