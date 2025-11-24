"use client"

import { useState } from "react"
import { BookOpen, Gem, Target, Sparkles, BookMarked, Heart, Handshake } from "lucide-react"

export default function About() {
  const [activeTab, setActiveTab] = useState<"story" | "values" | "approach">("story")

  const tabs = [
    { id: "story" as const, label: "My Story", icon: <BookOpen className="w-5 h-5" /> },
    { id: "values" as const, label: "Values", icon: <Gem className="w-5 h-5" /> },
    { id: "approach" as const, label: "Approach", icon: <Target className="w-5 h-5" /> },
  ]

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <p className="text-primary font-semibold mb-3 tracking-widest uppercase text-sm">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate software engineer dedicated to building innovative solutions
          </p>
        </div>

        {/* Profile Section */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img
                src="/me.jpg"
                alt="Profile"
                className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-background shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Oseni Oluwabunmi
              </h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                A <span className="text-primary font-semibold">Software Engineer</span> and digital solutions developer from Nigeria, currently pursuing B.Tech in Software Engineering at the Federal University of Technology, Akure (FUTA).
              </p>
              <p className="text-base text-foreground/80 leading-relaxed mb-3">
                I build products across fintech, agritech, education, real estate, and nonprofit sectors. My work spans mobile development, web applications, API integrations, learning platforms, and custom WordPress solutions.
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                I partner with organizations to create functional, scalable platforms that enhance user experience and drive measurable results. With a background in curriculum facilitation and content creation, I also translate technical concepts into learning experiences and brand-forward digital content—committed to building thoughtful, efficient, and user-centric solutions that make technology accessible and valuable.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold text-primary">8+</p>
                  <p className="text-xs text-muted-foreground">Experiences</p>
                </div>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold text-accent">21+</p>
                  <p className="text-xs text-muted-foreground">Projects</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 hover:scale-105 transition-transform duration-300">
                  <p className="text-2xl font-bold text-primary">4+</p>
                  <p className="text-xs text-muted-foreground">Years Coding</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-wrap gap-3 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-card border border-border hover:border-primary/40 hover:scale-105"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          {activeTab === "story" && (
            <div className="prose prose-lg max-w-none">
              <div className="p-8 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">My Journey into Tech</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  My coding journey began in 2020 when I discovered the power of transforming ideas into functional applications. What started as curiosity quickly evolved into a passion for solving complex problems through elegant code.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Throughout my journey, I've worked on diverse projects ranging from fintech applications and e-commerce platforms to mobile apps and AI-powered solutions. Each project has been a learning opportunity, pushing me to master new technologies and best practices.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Currently, I'm expanding my expertise in Web3 technologies while continuing to build impactful solutions for clients and contributing to open-source projects. I'm particularly passionate about automation and creating systems that make life easier for users.
                </p>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Quality First",
                  description: "I believe in writing clean, maintainable code that stands the test of time. Every line of code should serve a purpose.",
                  icon: <Sparkles className="w-8 h-8 text-primary" />,
                },
                {
                  title: "Continuous Learning",
                  description: "Technology evolves rapidly, and I'm committed to staying current with the latest tools, frameworks, and best practices.",
                  icon: <BookMarked className="w-8 h-8 text-accent" />,
                },
                {
                  title: "User-Centric Design",
                  description: "Great software isn't just about functionality—it's about creating intuitive experiences that users love.",
                  icon: <Heart className="w-8 h-8 text-primary" />,
                },
                {
                  title: "Collaboration",
                  description: "The best solutions emerge from teamwork. I thrive in environments where ideas are shared and innovation is encouraged.",
                  icon: <Handshake className="w-8 h-8 text-accent" />,
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3">{value.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-foreground">{value.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "approach" && (
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Understand",
                  description: "I start by deeply understanding the problem, user needs, and business goals. Clear requirements lead to better solutions.",
                },
                {
                  step: "02",
                  title: "Plan",
                  description: "I create a strategic roadmap, choosing the right technologies and architecture to ensure scalability and maintainability.",
                },
                {
                  step: "03",
                  title: "Build",
                  description: "I develop iteratively, focusing on clean code, best practices, and regular testing to ensure quality at every step.",
                },
                {
                  step: "04",
                  title: "Refine",
                  description: "I gather feedback, optimize performance, and continuously improve the solution based on real-world usage and insights.",
                },
              ].map((phase, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-card border border-border rounded-xl hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {phase.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2 text-foreground">{phase.title}</h4>
                    <p className="text-foreground/70 leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
