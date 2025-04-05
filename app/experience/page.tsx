"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { SkillBadge } from "@/components/skill-badge"

const experiences = [
  {
    title: "Backend Engineer Intern",
    company: "XiaoMi Technology",
    location: "Beijing, China",
    period: "May 2024 - Sep 2024",
    description: [
      "Optimized A/B testing frameworks for 400,000+ users using multi-armed bandit algorithms and statistical hypothesis testing, increasing user engagement metrics (CTR, DAU) by 12% through enhanced recommendation strategies.",
      "Designed and implemented an interactive tree diagram interface using D3.js and React, improving visualization of 10,000+ user tag relationships and delivery categorization, reducing manual analysis time by 30%.",
      "Architected a microservices-based system using Spring Cloud, Docker, and Kubernetes, reducing API latency by 20%.",
    ],
    skills: ["Spring Cloud", "Docker", "Kubernetes", "D3.js", "React", "A/B Testing"],
  },
  {
    title: "ML Research Assistant",
    company: "Emory Department of Quantitative Theory & Methods",
    location: "Atlanta, GA",
    period: "Oct 2023 - Oct 2024",
    description: [
      "Led development of a lyric analysis system for demographic inference with 92% precision, processing 250K+ songs.",
      "Engineered multi-model NLP pipeline to extract 15 distinct emotional and thematic dimensions from lyrics.",
      "Implemented automated bias detection using OpenAI's moderation API and Counterfactual Fairness methods, reducing demographic skew by 35% in final dataset.",
    ],
    skills: ["NLP", "Python", "Machine Learning", "OpenAI API", "Data Analysis"],
  },
  {
    title: "Full Stack Engineer",
    company: "Emory Biomedical Informatics NISys Lab",
    location: "Atlanta, GA",
    period: "May 2022 - Sep 2022",
    description: [
      "Built a Linux ACL management app for a 100TB+ research storage network, improving access control efficiency by 10x.",
      "Integrated secure LDAP authentication for 200+ users and enabled rootless deployment via hardened SystemD services.",
      "Developed a cross-platform solution for RHEL and Debian systems, reducing deployment time by 60%.",
      "Open-sourced the project (GPLv3) with full documentation; reached 100+ GitHub downloads in the first month.",
    ],
    skills: ["Linux", "LDAP", "SystemD", "Full Stack", "Open Source"],
  },
]

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Experience
      </motion.h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} | {exp.location} | {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <SkillBadge key={i} skill={skill} index={i} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground">
          Download my full resume for more details about my experience and qualifications.
        </p>
        <motion.a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  )
}

