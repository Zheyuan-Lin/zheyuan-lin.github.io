"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Zap,
  GraduationCap,
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  ExternalLink,
  Phone,
  Send,
  MessageSquare,
  Target,
  Lightbulb,
  Heart
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { SkillBadge } from "@/components/skill-badge"

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Invest ATL",
    location: "Atlanta, GA",
    period: "May 2025 - Aug 2025",
    description: "Built ML pipeline for affordable housing investment analysis using PySpark, Flask, and Redis.",
    technologies: ["python", "pytorch", "flask", "redis", "postgresql"]
  },
  {
    title: "Software Development Engineer Intern",
    company: "XiaoMi Technology",
    location: "Beijing, China",
    period: "May 2024 - Sep 2024",
    description: "Developed A/B testing platform with microservices architecture and real-time analytics.",
    technologies: ["java", "spring", "kafka", "redis", "grpc"]
  },
  {
    title: "Software Development Engineer Intern",
    company: "Bank of China",
    location: "Nanjing, China",
    period: "May 2023 - Sep 2023",
    description: "Built workflow automation system integrating with enterprise ERP and CRM platforms.",
    technologies: ["java", "spring", "redis", "rabbitmq", "mysql"]
  }
]

const projects = [
  {
    title: "TDDaily - Video Analytics Platform",
    description: "Analytics platform for video content tracking with microservices architecture.",
    technologies: ["spring", "kubernetes", "redis", "mysql", "python"],
    image: "/tdd.png"
  },
  {
    title: "Lumos Visualization Interface",
    description: "Research platform studying cognitive biases in data interpretation.",
    technologies: ["angular", "typescript", "nodejs", "d3", "postgresql"],
    image: "/lumos.png"
  }
]

const techLogos: { [key: string]: string } = {
  "java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "spring": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "react": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "angular": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  "vue": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  "nodejs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "aws": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "postgresql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "mysql": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  "mongodb": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "redis": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  "kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
  "pytorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "tensorflow": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  "django": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  "git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "rabbitmq": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg",
  "d3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg",
  "grpc": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grpc/grpc-original.svg"
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section id="hero" className="py-20 md:py-32 flex flex-col items-center justify-center text-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
              Zheyuan Lin
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Passionate Software Engineer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building scalable backend systems that power real-world applications.
          </p>

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

      {/* About Section */}
      <section id="about" className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>

          {/* Simple Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/person_with_glasses.png"
                  alt="Zheyuan Lin"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left space-y-6"
            >
              <div className="space-y-4">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Computer Science & Mathematics student at Emory University.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I build scalable backend systems and ML pipelines.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate about creating technology that solves real problems.
                </p>
              </div>

              {/* Education Card */}
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Emory University</h3>
                    <p className="text-sm text-muted-foreground">CS & Math • GPA: 3.96 • Class of 2026</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Use</h3>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {["java", "python", "typescript", "spring", "react", "angular", "nodejs", "docker", "kubernetes", "aws", "postgresql", "redis"].map((tech) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-12 h-12 relative hover:scale-110 transition-transform"
                title={tech}
              >
                <Image
                  src={techLogos[tech] || "/placeholder.svg"}
                  alt={tech}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across industry environments
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:border-primary/50 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech) => (
                          <div key={tech} className="w-8 h-8 relative" title={tech}>
                            <Image
                              src={techLogos[tech] || "/placeholder.svg"}
                              alt={tech}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.period}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Personal Section */}
      <section id="personal" className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Beyond Code</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where algorithms meet artistry, and logic dances with creativity
          </p>
        </motion.div>

        {/* Personal Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Photo & Interests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/self.jpg"
                alt="Personal moment"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">When Terminal Sleep()</h3>
              <p className="text-muted-foreground">
                You'll find me lost in the pages of Liu Cixin's cosmic mysteries, crafting the perfect pour-over with mathematical precision, or hunting for that elusive perfect shot through my camera lens.
              </p>
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🧠</span> Neural Network Status: Human
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">☕</span>
                  <span className="text-muted-foreground">Coffee == fuel; // Optimized caffeine delivery system via pour-over methodology</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">📚</span>
                  <span className="text-muted-foreground">Currently parsing "The Three-Body Problem" - debugging reality.exe</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">🎮</span>
                  <span className="text-muted-foreground">Strategy games enthusiast - applying A* pathfinding to life decisions</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">📸</span>
                  <span className="text-muted-foreground">Capturing memories at 1/125s, f/2.8 - because life deserves good documentation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">🐱</span>
                  <span className="text-muted-foreground">Cat.exe running smoothly - providing emotional debugging support</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary text-lg">🎵</span>
                  <span className="text-muted-foreground">Lo-fi hip hop && jazz.play() - the soundtrack to late-night coding sessions</span>
                </div>
              </div>
            </Card>

            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="/cat.png"
                alt="My coding companion"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20 p-8 text-center relative overflow-hidden">
            <div className="absolute top-4 left-4 text-primary/20 text-sm font-mono">/* My Philosophy */</div>
            <div className="absolute bottom-4 right-4 text-primary/20 text-sm font-mono">console.log("inspiration");</div>
            <h3 className="text-2xl font-semibold mb-4">Code Philosophy v2.0</h3>
            <blockquote className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              "Technology should feel like magic, but be built with the discipline of a mathematician and the soul of an artist.
              The most elegant code doesn't just solve problems—it whispers poetry to the machine and makes tomorrow a little bit more wonderful."
            </blockquote>
          </Card>
        </motion.div>

        {/* Curated Life Moments - Reduced Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="font-mono text-primary">~/life/</span>moments.collection()
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: "adventure.png", desc: "Exploring new places", src: "/adventure.png" },
              { title: "coffee_art.png", desc: "Perfect latte art attempts", src: "/coffee_art.png" },
              { title: "sunset_code.HEIC", desc: "Coding during golden hour", src: "/sunset_code.png" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <Image
                    src={item.src}
                    alt={item.desc}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-mono text-sm">{item.title}</div>
                      <div className="text-xs opacity-80">{item.desc}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What Drives Me - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-blue-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="font-semibold mb-3 font-mono">curiosity.drive()</h4>
            <p className="text-sm text-muted-foreground">
              Every "what if?" is a new function to explore. I debug the universe one question at a time,
              treating life like an infinite repository of fascinating edge cases.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-green-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-semibold mb-3 font-mono">collaboration.sync()</h4>
            <p className="text-sm text-muted-foreground">
              The best algorithms emerge from diverse minds merging like perfectly crafted Git branches.
              Collective intelligence is greater than individual brilliance, always.
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group hover:border-purple-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="font-semibold mb-3 font-mono">impact.deploy()</h4>
            <p className="text-sm text-muted-foreground">
              Code is poetry written for machines to execute and humans to experience.
              Every function should make someone's day a little bit more magical.
            </p>
          </Card>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that solve real-world problems
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:border-primary/50 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Project Image */}
                  <div className="relative aspect-video md:aspect-square bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Content */}
                  <CardContent className="p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <div key={tech} className="w-8 h-8 relative" title={tech}>
                          <Image
                            src={techLogos[tech] || "/placeholder.svg"}
                            alt={tech}
                            fill
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 border-t">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-card border rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">zheyuan.lin@emory.edu</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">(857) 354-7800</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card border rounded-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Atlanta, Georgia</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Zheyuan-Lin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://linkedin.com/in/zheyuan-lin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="/zheyuan_cv.pdf"
                download="Zheyuan_Lin_CV.pdf"
                className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300"
                title="Download CV"
              >
                <ArrowRight className="w-6 h-6 text-white rotate-90" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 hover:border-primary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>
                  I typically respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or question..."
                      required
                      className="border-2 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all duration-300 h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

