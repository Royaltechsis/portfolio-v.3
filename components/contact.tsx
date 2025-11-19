"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer id="contact" className="py-20 md:py-32 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold mb-3 tracking-wider">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent outline-none transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent outline-none transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {submitted ? "Message Sent! 🎉" : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {[
            { icon: "🔗", label: "LinkedIn" },
            { icon: "🐙", label: "GitHub" },
            { icon: "🐦", label: "Twitter" },
            { icon: "📧", label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 text-lg"
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © 2025 Your Name. All rights reserved. | Crafted with ✨ and care
          </p>
        </div>
      </div>
    </footer>
  )
}
