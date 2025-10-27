"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "zheyuan.lin@emory.edu",
    href: "mailto:zheyuan.lin@emory.edu",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(857) 354-7800",
    href: "tel:+18573547800",
    color: "from-green-500 to-green-600"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Atlanta, Georgia",
    href: "#",
    color: "from-purple-500 to-purple-600"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Zheyuan-Lin",
    color: "from-gray-600 to-gray-700"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/zheyuan-lin",
    color: "from-blue-600 to-blue-700"
  }
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })

    setIsSubmitting(false)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, innovative projects, or potential collaborations.
              Whether you're looking for a software engineer, have questions about my work, or just want to connect,
              feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group"
              >
                <a
                  href={method.href}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-card to-card/80 border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{method.label}</div>
                    <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      {method.value}
                    </div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect on Social</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 shadow-lg bg-gradient-to-br from-card to-card/80">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>
                I typically respond within 24 hours. Let's start a conversation!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="border-2 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, question, or just say hello..."
                    required
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:shadow-lg transition-all duration-300 h-12"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Additional Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-20 p-8 bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl border"
      >
        <h3 className="text-2xl font-bold mb-4">Looking for collaboration?</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          I'm always open to discussing interesting projects, consulting opportunities,
          or potential full-time positions. Let's build something amazing together!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-blue-600">
            <a href="mailto:zheyuan.lin@emory.edu">
              <Mail className="w-4 h-4 mr-2" />
              Quick Email
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://linkedin.com/in/zheyuan-lin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn Connect
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

