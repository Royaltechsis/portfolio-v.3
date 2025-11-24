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
        <div className="mb-16 text-center animate-fade-in-up">
          <p className="text-accent font-semibold mb-3 tracking-wider">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 hover:border-accent/50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 hover:border-accent/50"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-300 resize-none hover:border-accent/50"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 active:scale-[0.98]"
          >
            {submitted ? "Message Sent! 🎉" : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {[
            { icon: "🔗", label: "LinkedIn" },
            { icon: "🐙", label: "GitHub" },
            { icon: "🐦", label: "Twitter" },
            { icon: "📧", label: "Email" },
          ].map((social, i) => (
            <a
              key={social.label}
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 text-lg hover:scale-110 hover:shadow-lg hover:shadow-accent/20 animate-scale-in"
              style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="text-center pt-8 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <p className="text-muted-foreground text-sm">
            © 2025 Your Name. All rights reserved. | Crafted with ✨ and care
          </p>
        </div>
      </div>
    </footer>
  )
}
