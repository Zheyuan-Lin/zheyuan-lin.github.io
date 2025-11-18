"use client"

import { ModeToggle } from "@/components/mode-toggle"

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="font-bold">Zheyuan Lin</a>
        <ModeToggle />
      </div>
    </header>
  )
}

