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
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">

      {/* Intro */}
      <section className="space-y-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 rounded-3xl -z-10"></div>
        <div className="space-y-3 relative z-10 py-8">
          <h1 className="text-5xl font-bold text-gradient">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground">{personalInfo.title} • <span className="text-primary font-semibold">GPA {personalInfo.gpa}</span></p>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{personalInfo.bio}</p>
        <div className="flex gap-3 pt-4 justify-center flex-wrap">
          <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="btn-enhanced">
              <Github className="w-4 h-4 mr-2" /> GitHub
            </Button>
          </a>
          <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="btn-enhanced">
              <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
            </Button>
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            <Button variant="outline" size="sm" className="btn-enhanced">
              <Mail className="w-4 h-4 mr-2" /> Email
            </Button>
          </a>
          <a href={personalInfo.links.cv} download>
            <Button variant="outline" size="sm" className="btn-enhanced">CV</Button>
          </a>
        </div>
      </section>

      {/* Photo */}
      <section className="relative">
        <div className="section-divider"></div>
        <div className="relative w-72 h-96 mx-auto image-enhanced">
          <Image src={personalInfo.photo} alt={personalInfo.name} fill className="object-cover" />
        </div>
      </section>

      {/* About */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="highlight-box">
              <p className="text-muted-foreground leading-relaxed">
                I'm a software engineer who loves building distributed systems that actually work at scale.
                Currently pursuing CS & Math at Emory, I've shipped production code at Tencent, XiaoMi, and Ping An Technology,
                where I learned that the best systems are simple, observable, and resilient.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              When I'm not optimizing database queries or debugging race conditions, you'll find me brewing the perfect cup of coffee,
              shooting film photography, or trying to explain to my cat why her variable naming suggestions won't pass code review.
            </p>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="tech-badge">
                🏆 AWS Certified Developer Associate
              </div>
              <div className="tech-badge">
                🏆 Certified Kubernetes Application Developer
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <div className="relative w-full h-60 image-enhanced">
              <Image src="/self3.png" alt="About me" fill className="object-cover" />
            </div>
            <div className="relative w-full h-52 image-enhanced">
              <Image src="/person_with_glasses.png" alt="About me" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-muted-foreground">Tech Stack</h3>
            <div className="w-16 h-0.5 bg-primary mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="card-enhanced p-4 space-y-3 hover-lift">
              <div className="text-sm font-semibold text-primary">Languages & Frameworks</div>
              <div className="flex flex-wrap gap-3">
                {["java", "python", "go", "typescript", "spring", "flask", "nodejs"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted transition-colors">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-enhanced p-4 space-y-3 hover-lift">
              <div className="text-sm font-semibold text-primary">Distributed Systems</div>
              <div className="flex flex-wrap gap-3">
                {["kafka", "redis", "rabbitmq", "zookeeper", "grpc"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted transition-colors">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-enhanced p-4 space-y-3 hover-lift">
              <div className="text-sm font-semibold text-primary">Databases & Storage</div>
              <div className="flex flex-wrap gap-3">
                {["postgresql", "mysql", "redis", "clickhouse"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted transition-colors">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-enhanced p-4 space-y-3 hover-lift">
              <div className="text-sm font-semibold text-primary">Cloud & DevOps</div>
              <div className="flex flex-wrap gap-3">
                {["docker", "kubernetes", "aws", "prometheus"].map((tech) => (
                  <div key={tech} className="flex items-center gap-2 text-sm bg-muted/50 rounded-lg px-3 py-2 hover:bg-muted transition-colors">
                    <div className="w-4 h-4 relative">
                      <Image src={techLogos[tech]} alt={tech} width={16} height={16} className="object-contain" />
                    </div>
                    <span className="capitalize">{tech === "aws" ? "AWS" : tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-muted/50 to-muted/30 rounded-lg p-4">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold">+</span> GraphQL, WebSockets, Microservices, REST APIs, Event-driven Architecture, CI/CD, ELK Stack,
                Grafana, Jenkins, PySpark, Angular, React, Vue.js
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="card-enhanced p-6 border-l-4 border-primary hover-lift">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="font-semibold text-lg">{exp.title}</div>
                  <div className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.period}</div>
                </div>

                {/* Description with proper formatting */}
                <div className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </div>

                {/* Tech Stack */}
                <div className="flex gap-3 flex-wrap">
                  {exp.stack.map((tech) => (
                    <div key={tech} className="flex items-center gap-2 bg-muted/50 rounded-lg px-2 py-1" title={tech}>
                      <Image
                        src={techLogos[tech] || "/placeholder.svg"}
                        alt={tech}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      <span className="text-xs capitalize">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Highlights as bullet points */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span className="flex-1">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="card-enhanced p-6 space-y-4 hover-lift group">
              {/* Project Image */}
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative w-full h-52 image-enhanced group-hover:scale-105 transition-transform duration-300">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-52 image-enhanced">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              )}

              {/* Project Title */}
              <div className="font-semibold text-xl">{project.title}</div>

              {/* Project Description */}
              <div className="text-muted-foreground leading-relaxed">
                {project.description}
              </div>

              {/* Tech Stack */}
              <div className="flex gap-3 flex-wrap">
                {project.stack.map((tech) => (
                  <div key={tech} className="flex items-center gap-2 bg-muted/50 rounded-lg px-2 py-1" title={tech}>
                    <Image
                      src={techLogos[tech] || "/placeholder.svg"}
                      alt={tech}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="text-xs capitalize">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Highlights as bullet points */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="flex-1">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Project Link */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                  <span>View Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Personal */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gradient">~/life/</span> <span className="text-muted-foreground text-lg font-normal">collection()</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {lifePhotos.map((photo, i) => (
            <div key={i} className="relative w-full h-56 image-enhanced hover-lift group">
              <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </div>

        {/* Currently Section */}
        <div className="card-enhanced p-6 border-l-4 border-primary">
          <div className="font-mono text-sm text-primary mb-4">// Currently</div>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div><span className="font-mono font-semibold">reading:</span> <span className="text-muted-foreground">{currently.reading}</span></div>
              <div><span className="font-mono font-semibold">learning:</span> <span className="text-muted-foreground">{currently.learning}</span></div>
            </div>
            <div className="space-y-2">
              <div><span className="font-mono font-semibold">listening:</span> <span className="text-muted-foreground">{currently.listening}</span></div>
              <div><span className="font-mono font-semibold">brewing:</span> <span className="text-muted-foreground">{currently.brewing}</span></div>
            </div>
          </div>
        </div>

        {/* Fun Facts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {interests.map((interest, i) => (
            <div key={i} className="card-enhanced p-6 hover-lift group">
              <div className="space-y-3">
                <div className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-2xl">{interest.icon}</span>
                  <span>{interest.title}</span>
                </div>
                <div className="text-muted-foreground leading-relaxed">
                  {interest.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote/Philosophy */}
        <div className="card-enhanced p-8 text-center bg-gradient-to-r from-primary/5 to-purple-600/5 border-primary/20">
          <div className="text-muted-foreground italic text-lg leading-relaxed">
            "{quote}"
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-8 pb-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="card-enhanced p-8 max-w-md mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <a href={`mailto:${personalInfo.email}`} className="text-lg hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
                <div className="text-sm text-muted-foreground">Drop me a line</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-lg">{personalInfo.phone}</span>
                <div className="text-sm text-muted-foreground">Call or text</div>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <span className="text-lg">{personalInfo.location}</span>
                <div className="text-sm text-muted-foreground">Currently based</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
