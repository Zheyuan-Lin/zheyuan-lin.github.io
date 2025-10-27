"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { SkillBadge } from "@/components/skill-badge"
import { Building, Calendar, Download, MapPin, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const experiences = [
  {
    title: "Software Development Engineer Intern",
    company: "Invest ATL",
    location: "Atlanta, GA",
    period: "May 2025 - Aug 2025",
    type: "Industry Experience",
    description: [
      "🏠 Built ML pipeline for affordable housing investment analysis, processing 1,860+ applications, supporting $2.5M+ investment decisions.",
      "⚡ Developed PySpark ETL extracting 40+ features from PDFs, APIs, and databases with Google Maps and Census integration.",
      "🚀 Engineered Flask REST API serving predictions and feature extraction with ≤200ms P95 latency, implementing retry logic consistently.",
      "📊 Resolved Google Maps rate limiting using Redis caching, achieving 92% hit rate with 7-day TTL and OpenStreetMap fallback.",
      "🗺️ Built a geospatial scoring system using Shapely for school district boundary intersection and PostGIS spatial queries for analysis.",
      "🤖 Integrated LLM-based parser using GPT-4 API for structured PDF extraction, improving data quality and processing efficiency."
    ],
    skills: ["Python", "PySpark", "Flask", "Redis", "Google Maps API", "PostGIS", "GPT-4", "Machine Learning"],
    impact: { applications: "1.86K+", investment: "$2.5M+", hitRate: "92%" }
  },
  {
    title: "Software Development Engineer Intern",
    company: "XiaoMi Technology",
    location: "Beijing, China",
    period: "May 2024 - Sep 2024",
    type: "Industry Experience",
    description: [
      "🔬 Built an experiment assignment service enabling 50+ product teams running concurrent A/B tests using MurmurHash3 consistent hashing.",
      "⚡ Implemented 100 virtual nodes for stable user assignments and gRPC for low-latency communication, processing 8K+ req/s peak.",
      "🔄 Implemented DAG-based conflict detection via topological sort, preventing invalid experiment configurations, ensuring data reliability.",
      "📈 Migrated batch analytics to a real-time pipeline with Kafka processing 8M+ daily events and Redis caching for configs.",
      "🚀 Reduced P99 latency from 450ms to 85ms, accelerating iteration cycles from 5-7 days to same-day decisions significantly.",
      "🛠️ Debugged production memory leak caused by unbounded message buffer, resolved via backpressure with dynamic batching reducing memory."
    ],
    skills: ["Java", "gRPC", "Kafka", "Redis", "A/B Testing", "Microservices", "Performance Optimization"],
    impact: { teams: "50+", requests: "8K+/s", latency: "450ms→85ms" }
  },
  {
    title: "Software Development Engineer Intern",
    company: "Bank of China",
    location: "Nanjing, China",
    period: "May 2023 - Sep 2023",
    type: "Industry Experience",
    description: [
      "🏢 Developed workflow automation backend with Spring Boot and Flowable BPMN engine for enterprise HR and operations systems.",
      "🔧 Built a JSON-to-BPMN converter using recursive parsing, enabling 50+ departments to deploy approval workflows, reducing manual effort.",
      "⚡ Optimized approval routing, solving N+1 query problem from 500+ to 12 batched queries using Redis and MyBatis loading.",
      "📊 Achieved P95 latency ≤200ms, processing 10K+ monthly workflow instances with Redis manager hierarchy caching ensuring performance.",
      "🔗 Integrated workflows with ERP and CRM systems using RabbitMQ for async updates and REST APIs for synchronous queries.",
      "🐛 Debugged race condition with distributed locking using Redis SETNX, contributing to error reduction from 12% to 2%."
    ],
    skills: ["Spring Boot", "Flowable BPMN", "Redis", "MyBatis", "RabbitMQ", "Distributed Systems"],
    impact: { departments: "50+", workflows: "10K+/mo", errors: "12%→2%" }
  }
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
          Professional Experience
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Building impactful solutions across industry and research environments
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary to-blue-600 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg"></div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                <Card className="border-2 hover:border-primary/50 transition-all duration-500 shadow-lg hover:shadow-2xl bg-gradient-to-br from-card to-card/80 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="space-y-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      <div className="text-right text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {exp.type}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        KEY ACHIEVEMENTS
                      </h4>
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm leading-relaxed">{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Metrics */}
                    <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm text-primary mb-3">IMPACT METRICS</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(exp.impact).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">TECHNOLOGIES</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <SkillBadge key={i} skill={skill} index={i} />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl border"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Download className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Want to learn more?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Download my comprehensive resume for detailed information about my experience, projects, and qualifications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </motion.a>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

