"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github, TrendingUp, Users, Zap, Award } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projectCategories = [
  {
    title: "Analytics & Data Processing",
    icon: TrendingUp,
    projects: [
      {
        title: "TDDaily - Video Analytics Platform",
        description: "Built an analytics platform tracking 45K+ Bilibili videos with a microservices backend using Spring Cloud and Spring Boot frameworks.",
        impact: "45K+ videos tracked, 75% cache hit rate, real-time data processing",
        technologies: ["Spring Cloud", "Spring Boot", "Kubernetes", "Redis Sentinel", "MySQL", "RabbitMQ", "Python"],
        highlights: ["Microservices Architecture", "High Availability Caching", "Async Processing"],
        github: "https://github.com/Zheyuan-Lin",
        demo: "#",
        image: "/placeholder.svg?height=300&width=600",
        stats: { videos: "45K+", hitRate: "75%", uptime: "99.9%" }
      }
    ]
  },
  {
    title: "Research & Visualization",
    icon: Users,
    projects: [
      {
        title: "Lumos Visualization Interface",
        description: "Built a research platform with Angular and D3.js, studying cognitive biases in data interpretation for CHI 2026 submission.",
        impact: "99.5% uptime, <100ms latency for 10+ concurrent sessions, 5K+ interaction events/session",
        technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "Docker", "PostgreSQL", "WebSocket", "D3.js"],
        highlights: ["Real-time Collaboration", "Bias Detection", "Research Platform"],
        github: "https://github.com/Zheyuan-Lin",
        demo: "#",
        image: "/placeholder.svg?height=300&width=600",
        stats: { uptime: "99.5%", latency: "<100ms", events: "5K+" }
      }
    ]
  }
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
          Featured Projects
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Innovative solutions that solve real-world problems and create meaningful impact
        </p>
      </motion.div>

      <div className="space-y-16">
        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-600 rounded-xl flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: projectIndex * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-card/80">
                    <div className="lg:flex">
                      {/* Image Section */}
                      <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>

                      {/* Content Section */}
                      <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                        <div>
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="text-base leading-relaxed">
                              {project.description}
                            </CardDescription>
                          </CardHeader>

                          <CardContent className="p-0 space-y-6">
                            {/* Impact Section */}
                            <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-4 rounded-lg">
                              <h4 className="font-semibold text-sm text-primary mb-2">IMPACT & RESULTS</h4>
                              <p className="text-sm text-muted-foreground">{project.impact}</p>
                            </div>

                            {/* Key Features */}
                            <div>
                              <h4 className="font-semibold text-sm mb-3">KEY HIGHLIGHTS</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.highlights.map((highlight, i) => (
                                  <Badge key={i} variant="secondary" className="text-xs">
                                    {highlight}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="font-semibold text-sm mb-3">TECHNOLOGIES</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 pt-4">
                              {Object.entries(project.stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                  <div className="text-lg font-bold text-primary">{value}</div>
                                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </div>

                        <CardFooter className="p-0 pt-6 flex gap-3">
                          <Button asChild variant="outline" size="sm" className="flex-1">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <Github className="h-4 w-4" />
                              Code
                            </Link>
                          </Button>
                          <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-blue-600">
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Demo
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl border"
      >
        <h3 className="text-2xl font-bold mb-4">Interested in collaborating?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always excited to work on innovative projects that make a difference.
          Let's build something amazing together!
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </motion.div>
    </div>
  )
}

