import type React from "react"
import { Space_Grotesk, Syne } from "next/font/google"
import "./globals.css"
import { CustomCursor } from "@/components/custom-cursor"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space",
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata = {
  title: "Zheyuan Lin - Software Engineer",
  description: "Personal website of Zheyuan Lin, a software engineer and ML enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-sans`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
