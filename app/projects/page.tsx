"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"

const projects = [
  {
    title: "General Business Management System Framework",
    description:
      "Deployed cloud-native microservices on AWS EKS via Kubernetes, achieving seamless scalability for 10k+ concurrent users. Implemented performance monitoring with Prometheus, Grafana, and ELK Stack, reducing system downtime by 25%. Automated CI/CD pipelines using Helm, cutting deployment times by 40% and reducing manual intervention by 60%.",
    technologies: ["Spring Cloud", "Vue.js", "Nginx", "ELK", "Sentinel", "Zookeeper", "AWS EKS", "Kubernetes"],
    github: "https://github.com/Zheyuan-Lin",
    demo: "#",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "TDDaily: Online Video Data Tracking and Visualization",
    description:
      "Built a web app with 1k+ weekly users and 12k+ page views, enabling 24/7 tracking of 435k+ Bilibili videos. Designed interactive dashboards for video trends, subscriber growth, and real-time rankings using ECharts. Developed multithreaded Python crawlers (urllib3) to fetch API data, storing it in MySQL for efficient querying. Created RESTful APIs with Hibernate ORM, improving backend scalability and supporting CRUD operations.",
    technologies: ["Spring Boot", "Redis", "MyBatis", "Python", "MySQL", "ECharts", "Hibernate"],
    github: "https://github.com/Zheyuan-Lin",
    demo: "#",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Tech Lead in Emory CS Club",
    description:
      "Developed a Cold Start Pop-up Manager to consolidate and prioritize pop-ups, improving user experience by controlling frequency and reducing fatigue; built a task queue system for caching and handling pop-up activities. Engineered an LFU-based File Cache Manager using C++, providing create, query, and delete interfaces. Leveraged NoSQL for persistent storage and recursive locking for thread safety, achieving a 98% cache hit rate.",
    technologies: ["C++", "React.js", "JavaScript", "NoSQL"],
    github: "https://github.com/Zheyuan-Lin",
    demo: "#",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    title: "Chinese License Plate Recognition",
    description:
      "Trained a custom Computer Vision model to detect and recognize Chinese license plates with 95% accuracy. Pre-processed 1k+ car images using affine transformation and color space separation for text extraction. Built the model from scratch without PyTorch, achieving a 95% success rate in real-world testing.",
    technologies: ["Python", "Computer Vision", "Image Processing"],
    github: "https://github.com/Zheyuan-Lin",
    demo: "#",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        My Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <SkillBadge key={i} skill={tech} index={i} />
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

