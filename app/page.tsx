"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code2, Database, Github, Linkedin, Mail, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Zheyuan Lin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer & Data Systems Specialist
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable backend systems and ML pipelines that power real-world applications.
            From microservices handling 8K+ requests/second to ML models processing millions of data points.
          </p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-8">
              <Link href="/about">
                About Me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8">
              <Link href="/experience">Experience</Link>
            </Button>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center space-x-4 pt-4"
          >
            <a
              href="https://github.com/Zheyuan-Lin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/zheyuan-lin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:zheyuan.lin@emory.edu"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in building high-performance systems and intelligent solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Backend Engineering */}
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Backend Engineering</h3>
            <p className="text-muted-foreground">
              Building scalable microservices, APIs, and distributed systems. Experience with Spring Boot,
              gRPC, Kafka, and cloud platforms handling thousands of requests per second.
            </p>
          </div>

          {/* Data Systems */}
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Data Systems & ML</h3>
            <p className="text-muted-foreground">
              Developing ETL pipelines, ML models, and analytics platforms. Working with PySpark,
              PostgreSQL, Redis, and ML frameworks to process millions of data points.
            </p>
          </div>

          {/* Full Stack */}
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Full Stack Development</h3>
            <p className="text-muted-foreground">
              Creating complete web applications with React, Angular, and Node.js.
              From interactive dashboards to real-time collaboration platforms.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-8">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.5M+</div>
              <div className="text-sm text-muted-foreground">Investment Decisions Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">8K+</div>
              <div className="text-sm text-muted-foreground">Requests/Second Handled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">45K+</div>
              <div className="text-sm text-muted-foreground">Videos Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.5%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl font-bold">Let's Build Something Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Looking for a software engineer who can deliver scalable solutions?
            Let's discuss your next project.
          </p>
          <Button asChild size="lg" className="h-12 px-8">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
}

