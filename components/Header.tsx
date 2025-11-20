"use client"

import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-xl hover:text-primary transition-colors">
          <span className="text-gradient">Zheyuan Lin</span>
        </a>
        <ModeToggle />
      </div>
    </header>
  )
}

