"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import { SkillBadge } from "@/components/skill-badge"

// Group skills by category for better organization
const skillsByCategory = {
  Languages: ["Java", "Python", "C#", "C++", "R", "JavaScript", "TypeScript", "Shell", "Matlab"],
  "Frameworks & Libraries": ["Spring Boot", "Django", "Angular", "React", "Vue.js"],
  "Cloud & DevOps": ["Git", "Azure", "AWS ECS", "AWS S3", "Kubernetes", "Docker", "CI/CD"],
  "AI & Machine Learning": ["PyTorch", "TensorFlow", "LLM", "RAG", "LangChain", "Transformer"],
  "Databases & Tools": ["MongoDB", "PostgreSQL", "Redis", "gRPC", "JIRA", "ELK"],
}

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto overflow-hidden rounded-xl">
            <Image
              src="/self.jpg"
              alt="Zheyuan Lin"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="border-2 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Zheyuan Lin</CardTitle>
              <CardDescription>Software Engineer & ML Enthusiast</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                I'm a passionate software engineer with experience in backend development, machine learning, and
                full-stack solutions. I specialize in building scalable and performant applications using modern
                technologies.
              </p>
              <p className="mb-4">
                My journey in software development began with a strong foundation in computer science and mathematics,
                which has allowed me to tackle complex problems with analytical thinking and creative solutions.
              </p>
              <p>
                I'm always eager to learn new technologies and tackle challenging problems. When I'm not coding, you can
                find me exploring new technologies and contributing to open-source projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Technical Skills</h2>

        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-center">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill, index) => (
                <SkillBadge key={`${category}-${skill}`} skill={skill} index={index + categoryIndex * 5} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Education</h2>
        <Card className="border-2 hover:border-primary/50 transition-all duration-300">
          <CardHeader>
            <CardTitle>Bachelor of Science in Computer Science and Mathematics</CardTitle>
            <CardDescription>Emory University | May 2026 | GPA: 3.96/4.00</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Relevant Coursework: Computer Architecture (C), Machine Learning (Python), Systems Programming, Operating
              System Concepts
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

