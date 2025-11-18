"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import {
  personalInfo,
  experiences,
  projects,
  currently,
  interests,
  lifePhotos,
  quote,
  techLogos
} from "@/data/portfolio"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

      {/* Intro */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className="text-xl text-muted-foreground">{personalInfo.title} • GPA {personalInfo.gpa}</p>
        <p className="text-muted-foreground">{personalInfo.bio}</p>
        <div className="flex gap-3 pt-2">
          <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
          </a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </Button>
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" /> Email
            </Button>
          </a>
          <a href={personalInfo.links.cv} download>
            <Button variant="outline" size="sm">CV</Button>
          </a>
        </div>
      </section>

      {/* Photo */}
      <section>
        <div className="relative w-64 h-80 mx-auto rounded-lg overflow-hidden">
          <Image src={personalInfo.photo} alt={personalInfo.name} fill className="object-cover" />
        </div>
      </section>

      {/* About */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">About Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground">
              I'm a software engineer who loves building distributed systems that actually work at scale.
              Currently pursuing CS & Math at Emory, I've shipped production code at Tencent, XiaoMi, and Ping An Technology,
              where I learned that the best systems are simple, observable, and resilient.
            </p>

            <p className="text-muted-foreground">
              When I'm not optimizing database queries or debugging race conditions, you'll find me brewing the perfect cup of coffee,
              shooting film photography, or trying to explain to my cat why her variable naming suggestions won't pass code review.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="border rounded-full px-3 py-1 text-xs bg-primary/5">
                🏆 AWS Certified Developer Associate
              </div>
              <div className="border rounded-full px-3 py-1 text-xs bg-primary/5">
                🏆 Certified Kubernetes Application Developer
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-3">
            <div className="relative w-full h-56 rounded-lg overflow-hidden">
              <Image src="/self3.png" alt="About me" fill className="object-cover" />
            </div>
            <div className="relative w-full h-48 rounded-lg overflow-hidden">
              <Image src="/person_with_glasses.png" alt="About me" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="space-y-3">
          <div className="text-sm font-semibold text-muted-foreground">Tech Stack</div>

          <div className="grid md:grid-cols-2 gap-3">
            <div className="border rounded-lg p-3 space-y-2">
              <div className="text-xs font-semibold">Languages & Frameworks</div>
              <div className="flex flex-wrap gap-2">
                {["java", "python", "go", "typescript", "spring", "flask", "nodejs"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1 text-xs">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-3 space-y-2">
              <div className="text-xs font-semibold">Distributed Systems</div>
              <div className="flex flex-wrap gap-2">
                {["kafka", "redis", "rabbitmq", "zookeeper", "grpc"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1 text-xs">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-3 space-y-2">
              <div className="text-xs font-semibold">Databases & Storage</div>
              <div className="flex flex-wrap gap-2">
                {["postgresql", "mysql", "redis", "clickhouse"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1 text-xs">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-3 space-y-2">
              <div className="text-xs font-semibold">Cloud & DevOps</div>
              <div className="flex flex-wrap gap-2">
                {["docker", "kubernetes", "aws", "prometheus"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1 text-xs">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech === "aws" ? "AWS" : tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            + GraphQL, WebSockets, Microservices, REST APIs, Event-driven Architecture, CI/CD, ELK Stack,
            Grafana, Jenkins, PySpark, Angular, React, Vue.js
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Experience</h2>
        {experiences.map((exp, i) => (
          <div key={i} className="border-l-2 border-muted pl-4 py-2 space-y-3">
            <div>
              <div className="font-semibold">{exp.title}</div>
              <div className="text-sm text-muted-foreground">{exp.period}</div>
            </div>

            {/* Description with proper formatting */}
            <div className="text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </div>

            {/* Tech Stack */}
            <div className="flex gap-2">
              {exp.stack.map((tech) => (
                <div key={tech} className="w-6 h-6 relative" title={tech}>
                  <Image
                    src={techLogos[tech] || "/placeholder.svg"}
                    alt={tech}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Highlights as bullet points */}
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span className="flex-1">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="space-y-3 border rounded-lg p-4">
              {/* Project Image */}
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="relative w-full h-48 rounded overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-48 rounded overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}

              {/* Project Title */}
              <div className="font-semibold">{project.title}</div>

              {/* Project Description */}
              <div className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </div>

              {/* Tech Stack */}
              <div className="flex gap-2">
                {project.stack.map((tech) => (
                  <div key={tech} className="w-6 h-6 relative" title={tech}>
                    <Image
                      src={techLogos[tech] || "/placeholder.svg"}
                      alt={tech}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Highlights as bullet points */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Project Link */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline inline-flex items-center gap-1">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">~/life/ <span className="text-muted-foreground text-base font-normal">collection()</span></h2>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {lifePhotos.map((photo, i) => (
            <div key={i} className="relative w-full h-48 rounded overflow-hidden">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Currently Section */}
        <div className="border-l-2 border-muted pl-4 space-y-2">
          <div className="font-mono text-sm text-muted-foreground">// Currently</div>
          <div className="space-y-1 text-sm">
            <div><span className="font-mono">reading:</span> <span className="text-muted-foreground">{currently.reading}</span></div>
            <div><span className="font-mono">learning:</span> <span className="text-muted-foreground">{currently.learning}</span></div>
            <div><span className="font-mono">listening:</span> <span className="text-muted-foreground">{currently.listening}</span></div>
            <div><span className="font-mono">brewing:</span> <span className="text-muted-foreground">{currently.brewing}</span></div>
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {interests.map((interest, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-2">
              <div className="font-semibold">{interest.icon} {interest.title}</div>
              <div className="text-sm text-muted-foreground">
                {interest.description}
              </div>
            </div>
          ))}
        </div>

        {/* Quote/Philosophy */}
        <div className="border rounded-lg p-6 text-center bg-muted/30">
          <div className="text-sm text-muted-foreground italic">
            "{quote}"
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-4 pb-12">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
        </div>
      </section>

    </div>
  )
}
