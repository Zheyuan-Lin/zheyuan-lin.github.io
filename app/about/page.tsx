"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"
import { GraduationCap, Heart, Lightbulb, Target } from "lucide-react"

// Simplified and organized skills
const skillCategories = {
  "Programming Languages": ["Java", "Python", "C#", "C++", "TypeScript", "JavaScript"],
  "Frameworks & Tools": ["Spring Boot", "React", "Vue.js", "Django", "Angular"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Git"],
  "AI & Data": ["PyTorch", "TensorFlow", "LangChain", "PostgreSQL", "MongoDB"]
}

const highlights = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Passionate about creating technology that makes a meaningful impact on people's lives"
  },
  {
    icon: Lightbulb,
    title: "Innovation-Focused",
    description: "Always exploring cutting-edge solutions and pushing the boundaries of what's possible"
  },
  {
    icon: Heart,
    title: "Collaboration-First",
    description: "Believing that the best solutions come from diverse teams working together"
  }
]

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A journey through technology, innovation, and continuous learning
        </p>
      </motion.div>

      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Hi, I'm Zheyuan 👋</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I'm a <span className="text-foreground font-semibold">software engineer and ML enthusiast</span> with a passion for building
                intelligent systems that solve real-world problems. My journey began with curiosity about how
                data can tell stories and has evolved into creating solutions that impact millions of users.
              </p>
              <p>
                Currently pursuing my degree at <span className="text-foreground font-semibold">Emory University</span>,
                I combine strong academic foundations with hands-on industry experience from companies like XiaoMi,
                where I've optimized systems for 400,000+ users and reduced API latency by 20%.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or diving deep into the latest AI research papers.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/self.jpg"
                alt="Zheyuan Lin"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-card to-card/50 p-6 rounded-2xl border"
            >
              <h3 className="text-xl font-semibold mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={`${category}-${skill}`} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
        <Card className="max-w-3xl mx-auto border-2 hover:border-primary/50 transition-all duration-300 shadow-lg">
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl">Bachelor of Science in Computer Science and Mathematics</CardTitle>
            <CardDescription className="text-lg">
              <div className="space-y-1">
                <div>🏫 Emory University</div>
                <div>📅 Expected Graduation: May 2026</div>
                <div>🎯 GPA: 3.96/4.00</div>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Key Coursework:</h4>
              <p className="text-muted-foreground">
                Computer Architecture, Machine Learning, Systems Programming, Operating System Concepts,
                Data Structures & Algorithms, Advanced Mathematics
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

