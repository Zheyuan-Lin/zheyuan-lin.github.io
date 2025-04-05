"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Github, Linkedin, Mail } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span>Hi, I'm </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              <TypewriterEffect text="Zheyuan Lin" speed={150} delay={500} />
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            A passionate software engineer specializing in building exceptional digital experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="group">
              <Link href="/about">
                About Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">My Projects</Link>
            </Button>
          </div>

          <div className="mt-12 flex justify-center space-x-4">
            <motion.a
              href="https://github.com/Zheyuan-Lin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-muted p-3 rounded-full hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/zheyuan-lin"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-muted p-3 rounded-full hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:zheyuan.lin@emory.edu"
              whileHover={{ y: -5 }}
              className="bg-muted p-3 rounded-full hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <section className="py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-lg p-6 border">
            <Code className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-muted-foreground">
              Building robust and scalable server-side applications and microservices.
            </p>
          </div>

          <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-lg p-6 border">
            <Code className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
            <p className="text-muted-foreground">
              Implementing ML models and NLP solutions for real-world applications.
            </p>
          </div>

          <div className="bg-card hover:shadow-lg transition-all duration-300 rounded-lg p-6 border">
            <Code className="h-10 w-10 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
            <p className="text-muted-foreground">Delivering end-to-end web applications with seamless integration.</p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

