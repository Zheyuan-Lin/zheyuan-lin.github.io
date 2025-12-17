"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { personalInfo, experiences, projects, currently, interests, quote } from "@/data/portfolio"
import { TiltCard } from "@/components/tilt-card"
import { MagneticButton } from "@/components/magnetic-button"
import { SpotlightSection } from "@/components/spotlight-section"
import { ParallaxImage } from "@/components/parallax-image"
import { FloatingShapes } from "@/components/floating-shapes"
import { TextReveal, CharReveal } from "@/components/text-reveal"

// Stagger animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
      {/* Hero Header with Parallax */}
      <motion.header 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Animated Background */}
        <FloatingShapes variant="hero" />
        
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/adventure.png"
            alt="Adventure background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/70 via-gray-950/50 to-gray-950" />
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Profile Photo with Hover Effect */}
          <motion.div 
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-blue-500/20">
              <Image src={personalInfo.photo} alt={personalInfo.name} fill className="object-cover" />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-[family-name:var(--font-syne)]">
            <CharReveal delay={0.5}>{personalInfo.name}</CharReveal>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-blue-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {personalInfo.title}
          </motion.p>
          
          <motion.p 
            className="text-lg text-blue-200/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            GPA: {personalInfo.gpa}
          </motion.p>
          
          <motion.p 
            className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-300 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Contact Links with Magnetic Effect */}
          <motion.div 
            className="flex gap-4 justify-center mt-10 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            {[
              { label: "GitHub", href: personalInfo.links.github },
              { label: "LinkedIn", href: personalInfo.links.linkedin },
              { label: "Email", href: `mailto:${personalInfo.email}` },
              { label: "CV", href: personalInfo.links.cv },
            ].map((link) => (
              <MagneticButton
                key={link.label}
                as="a"
                href={link.href}
                target="_blank"
                className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 transition-colors"
                data-cursor-hover
              >
                {link.label}
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.header>

      {/* Experience Section with Spotlight */}
      <SpotlightSection 
        className="py-24 bg-gray-900"
        spotlightColor="rgba(59, 130, 246, 0.12)"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-syne)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TextReveal>Experience</TextReveal>
          </motion.h2>
          
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={itemVariants}>
                <TiltCard className="bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50">
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                      <h3 className="font-bold text-2xl text-white">{exp.title}</h3>
                      <span className="text-sm text-blue-300 bg-blue-500/20 px-4 py-2 rounded-full font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>

                    {/* Tech Stack with Stagger */}
                    <motion.div 
                      className="flex gap-2 flex-wrap mb-6"
                      variants={containerVariants}
                    >
                      {exp.stack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="text-xs px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg shadow-blue-500/20"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ delay: techIndex * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Highlights */}
                    <ul className="text-sm text-gray-300 space-y-3">
                      {exp.highlights.slice(0, 3).map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex gap-3 group"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <span className="text-blue-400 font-bold group-hover:text-blue-300 transition-colors">→</span>
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SpotlightSection>

      {/* Projects Section */}
      <SpotlightSection 
        className="py-24 bg-gray-950"
        spotlightColor="rgba(147, 51, 234, 0.1)"
      >
        <FloatingShapes variant="dark" />
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-syne)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TextReveal>Projects</TextReveal>
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, i) => (
              <motion.div key={i} variants={itemVariants}>
                <TiltCard className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 h-full">
                  <div className="relative h-56 overflow-hidden">
                    <ParallaxImage 
                      src={project.image} 
                      alt={project.title}
                      className="h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-5 leading-relaxed text-sm">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="flex gap-2 flex-wrap mb-5">
                      {project.stack.slice(0, 5).map((tech) => (
                        <motion.span 
                          key={tech} 
                          className="text-xs px-3 py-1.5 rounded-full text-gray-300 font-medium bg-gray-800 border border-gray-700"
                          whileHover={{ scale: 1.05, borderColor: "rgba(147, 51, 234, 0.5)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {project.link && (
                      <MagneticButton
                        as="a"
                        href={project.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
                        data-cursor-hover
                        data-cursor-text="Open"
                      >
                        View Project
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </MagneticButton>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SpotlightSection>

      {/* Personal Section */}
      <SpotlightSection 
        className="py-24 bg-gray-900"
        spotlightColor="rgba(16, 185, 129, 0.1)"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 font-[family-name:var(--font-syne)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TextReveal>Currently</TextReveal>
          </motion.h2>

          {/* Current Activities */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "📚", label: "Reading", value: currently.reading },
              { icon: "🧠", label: "Learning", value: currently.learning },
              { icon: "🎵", label: "Listening", value: currently.listening },
              { icon: "☕", label: "Brewing", value: currently.brewing },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-800/60 backdrop-blur-sm p-5 rounded-xl border border-gray-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-2xl mr-3">{item.icon}</span>
                <span className="font-bold text-emerald-400">{item.label}:</span>
                <span className="text-gray-300 ml-2">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Interests */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {interests.map((interest, i) => (
              <motion.div 
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10, rotateY: 5 }}
                className="text-center p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/10"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {interest.icon}
                </motion.div>
                <h3 className="font-bold mb-2 text-white">{interest.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Life Photos with Parallax */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { src: "/sunset_code.png", alt: "Sunset coding" },
              { src: "/cat.png", alt: "My cat" },
              { src: "/coffee_art.png", alt: "Coffee art" },
            ].map((photo, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="h-72 rounded-2xl overflow-hidden shadow-2xl"
              >
                <ParallaxImage 
                  src={photo.src} 
                  alt={photo.alt}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <TiltCard className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 inline-block max-w-3xl">
              <blockquote className="text-2xl italic text-gray-300 leading-relaxed">
                <span className="text-5xl text-blue-400/50">"</span>
                {quote}
                <span className="text-5xl text-blue-400/50">"</span>
              </blockquote>
            </TiltCard>
          </motion.div>
        </div>
      </SpotlightSection>

      {/* Footer */}
      <footer className="relative py-20 overflow-hidden">
        <FloatingShapes variant="dark" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent" />
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-[family-name:var(--font-syne)]">
            <TextReveal>Get In Touch</TextReveal>
          </h2>
          
          <motion.div 
            className="space-y-4 text-gray-300"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: "✉️", value: personalInfo.email },
              { icon: "📞", value: personalInfo.phone },
              { icon: "📍", value: personalInfo.location },
            ].map((item, i) => (
              <motion.p 
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-lg"
              >
                <span className="mr-2">{item.icon}</span>
                {item.value}
              </motion.p>
            ))}
          </motion.div>

          <motion.div 
            className="mt-10 pt-10 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Zheyuan Lin. Built with Next.js & Framer Motion.
            </p>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  )
}
