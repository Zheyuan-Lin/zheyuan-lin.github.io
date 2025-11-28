import Image from "next/image"
import { personalInfo, experiences, projects, currently, interests, quote } from "@/data/portfolio"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/adventure.png"
            alt="Adventure background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image src={personalInfo.photo} alt={personalInfo.name} fill className="object-cover" />
            </div>
            <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-blue-100">{personalInfo.title}</p>
            <p className="text-lg text-blue-200 mt-2">GPA: {personalInfo.gpa}</p>
          </div>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed text-blue-100">{personalInfo.bio}</p>

          {/* Contact Links */}
          <div className="flex gap-6 justify-center mt-8 text-sm flex-wrap">
            <a href={personalInfo.links.github} target="_blank" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">GitHub</a>
            <a href={personalInfo.links.linkedin} target="_blank" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">Email</a>
            <a href={personalInfo.links.cv} target="_blank" className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">CV</a>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6 bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h3 className="font-semibold text-xl text-white">{exp.title}</h3>
                  <span className="text-sm text-blue-300 bg-gray-700 px-4 py-2 rounded-lg font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4 text-base leading-relaxed">{exp.description}</p>

                {/* Tech Stack */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-lg text-white font-medium bg-blue-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="text-sm text-gray-300 space-y-2">
                  {exp.highlights.slice(0, 3).map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                <div className="relative h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded-lg text-white font-medium bg-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a href={project.link} target="_blank" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      View Project
                      <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Currently</h2>

          {/* Current Activities */}
          <div className="bg-gray-800 rounded-lg p-8 mb-12 shadow-lg">
            <div className="grid sm:grid-cols-2 gap-6 text-sm">
              <div className="bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-blue-300">📚 Reading:</span>
                <span className="text-gray-300 ml-2">{currently.reading}</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-blue-300">🧠 Learning:</span>
                <span className="text-gray-300 ml-2">{currently.learning}</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-blue-300">🎵 Listening:</span>
                <span className="text-gray-300 ml-2">{currently.listening}</span>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <span className="font-bold text-blue-300">☕ Brewing:</span>
                <span className="text-gray-300 ml-2">{currently.brewing}</span>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {interests.map((interest, i) => (
              <div key={i} className="text-center p-6 rounded-lg shadow-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-3">{interest.icon}</div>
                <h3 className="font-bold mb-3 text-white">{interest.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{interest.description}</p>
              </div>
            ))}
          </div>

          {/* Life Photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/sunset_code.png" alt="Personal" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/cat.png" alt="Cat" fill className="object-cover" />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image src="/coffee_art.png" alt="Adventure" fill className="object-cover" />
            </div>
          </div>

          {/* Quote */}
          <div className="text-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <blockquote className="text-xl italic text-gray-300 max-w-2xl mx-auto leading-relaxed">
                "{quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
          <div className="space-y-2 text-blue-100">
            <p>✉️ {personalInfo.email}</p>
            <p>📞 {personalInfo.phone}</p>
            <p>📍 {personalInfo.location}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}