import type React from "react"
import { Source_Sans_3, Merriweather } from "next/font/google"
import "./globals.css"

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
})

const merriweather = Merriweather({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "700"],
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
      <body className={`${sourceSans.variable} ${merriweather.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
