"use client"

import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-bold text-xl text-foreground">
          Zheyuan Lin
        </a>
        <ModeToggle />
      </div>
    </header>
  )
}

