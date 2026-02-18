"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import { personalInfo, researchInterests, experiences, projects, techLogos } from "@/data/portfolio"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-[family-name:var(--font-sans)]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="font-semibold text-2xl text-white hover:text-blue-400 transition-colors">
            {personalInfo.name}
          </Link>
          <nav className="flex gap-8">
            <Link href="#experience" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
              Research
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Sidebar */}
          <aside className="md:w-72 flex-shrink-0">
            {/* Profile Photo */}
            <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-gray-700 mb-8">
              <Image
                src={personalInfo.photo}
                alt={personalInfo.name}
                width={176}
                height={176}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name and Title */}
            <h2 className="text-2xl font-semibold text-white mb-2">{personalInfo.name}</h2>
            <p className="text-gray-400 text-lg mb-2">{personalInfo.title}</p>
            <p className="text-gray-500 mb-8">{personalInfo.email}</p>

            {/* Social Links */}
            <div className="space-y-4">
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-lg"
              >
                <Github size={22} />
                <span>Github</span>
              </a>
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-lg"
              >
                <Linkedin size={22} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-lg"
              >
                <Mail size={22} />
                <span>Email</span>
              </a>
              <a
                href={personalInfo.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-lg"
              >
                <FileText size={22} />
                <span>CV</span>
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* About Me */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-white mb-8 font-[family-name:var(--font-serif)]">About Me</h2>
              <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                {personalInfo.bio}
              </div>

              {/* Research Interests */}
              <div className="mt-8">
                <p className="text-gray-300 text-lg mb-4">My interests include:</p>
                <ul className="list-disc list-inside text-gray-300 text-lg space-y-2 ml-2">
                  {researchInterests.map((interest, i) => (
                    <li key={i}>{interest}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-semibold text-white mb-8 pb-3 border-b border-gray-800 font-[family-name:var(--font-serif)]">
                Experience
              </h2>
              <div className="space-y-10">
                {experiences.map((exp, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h3 className="font-semibold text-white text-xl">{exp.title}</h3>
                      <span className="text-base text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-lg mb-4">{exp.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex gap-4 flex-wrap items-center mb-4">
                      {exp.stack.map((tech) => {
                        const logoUrl = techLogos[tech.toLowerCase()]
                        return logoUrl ? (
                          <div key={tech} className="group/tech relative">
                            <Image
                              src={logoUrl}
                              alt={tech}
                              width={28}
                              height={28}
                              className="w-7 h-7 object-contain opacity-70 hover:opacity-100 transition-opacity"
                              unoptimized
                            />
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                              {tech}
                            </span>
                          </div>
                        ) : (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1.5 rounded bg-gray-800 text-gray-400"
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>

                    {/* Highlights */}
                    <ul className="text-base text-gray-400 space-y-2">
                      {exp.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-gray-600">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-24">
              <h2 className="text-3xl font-semibold text-white mb-8 pb-3 border-b border-gray-800 font-[family-name:var(--font-serif)]">
                Research & Projects
              </h2>
              <div className="space-y-10">
                {projects.map((project, i) => (
                  <div key={i} className="group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                      <h3 className="font-semibold text-white text-xl">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition-colors"
                          >
                            {project.title}
                          </a>
                        ) : (
                          project.title
                        )}
                      </h3>
                      {project.period && (
                        <span className="text-base text-gray-500">{project.period}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-lg mb-4">{project.description}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex gap-4 flex-wrap items-center mb-4">
                      {project.stack.map((tech) => {
                        const logoUrl = techLogos[tech.toLowerCase()]
                        return logoUrl ? (
                          <div key={tech} className="group/tech relative">
                            <Image
                              src={logoUrl}
                              alt={tech}
                              width={28}
                              height={28}
                              className="w-7 h-7 object-contain opacity-70 hover:opacity-100 transition-opacity"
                              unoptimized
                            />
                            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-500 opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap">
                              {tech}
                            </span>
                          </div>
                        ) : (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1.5 rounded bg-gray-800 text-gray-400"
                          >
                            {tech}
                          </span>
                        )
                      })}
                    </div>

                    {/* Highlights */}
                    <ul className="text-base text-gray-400 space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-gray-600">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-base text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">
          © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js.
        </div>
      </footer>
    </div>
  )
}
