"use client"

import { 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiWordpress 
} from "react-icons/si"

const skillIcons: { [key: string]: React.ReactNode } = {
  // Backend
  Node: <SiNodedotjs className="text-green-600" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-600" />,
  // Frontend
  React: <SiReact className="text-cyan-500" />,
  "React Native": <SiReact className="text-cyan-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  WordPress: <SiWordpress className="text-blue-700" />,
}

const skills = [
  { name: "Node", level: 75 },
  { name: "Express", level: 75 },
  { name: "TypeScript", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "MongoDB", level: 76 },
  { name: "React", level: 80 },
  { name: "React Native", level: 65 },
  { name: "TailwindCSS", level: 99 },
  { name: "Next.js", level: 60 },
  { name: "WordPress", level: 90 },
]

const strengths = [
  { strenght: "Critical Thinking" },
  { strenght: "Problem Solving" },
  { strenght: "Teamwork" },
  { strenght: "Open-Mindedness" },
  { strenght: "Adaptability" },
]

const education = [
  {
    institution: "Federal University of Technology, Akure (FUTA)",
    program: "B.Tech Software Engineering",
    duration: "2023 - Present",
  },
  {
    institution: "Web3Bridge Cohort XI",
    program: "Senior Web 2 Developer Certification",
    duration: "2024",
  },
  {
    institution: "Web3Bridge Cohort XII",
    program: "Web 3 Developer Certification",
    duration: "2025 - Present",
  },
  {
    institution: "She Codes Africa Mentorship Program",
    program: "Backend Developer Certification",
    duration: "2024 - Present",
  },
  {
    institution: "D'Online Harvest Academy",
    program: "Junior Front-end Developer Certificate",
    duration: "2020 - Present",
  },
  {
    institution: "Google Developer Student Club (GDSC)",
    program: "Hackathon Finalist",
    duration: "2024",
  },
]

export default function Resume() {
  return (
    <section id="resume" className="py-20 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <p className="text-primary font-semibold mb-3 tracking-widest uppercase text-sm">Expertise & Background</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Skills, Education & More</h2>
          <p className="text-foreground/70 text-lg">Everything you need to know about my professional capabilities.</p>
        </div>

        {/* Skills with Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground animate-slide-in-left">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 hover:scale-105 hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl flex items-center group-hover:scale-125 transition-transform duration-300">
                      {skillIcons[skill.name] || "⚙️"}
                    </span>
                    <span className="font-semibold text-foreground">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 animate-shimmer"
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground animate-slide-in-right">Core Strengths</h3>
          <div className="flex flex-wrap gap-3">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 hover:border-primary/60 hover:scale-110 hover:-translate-y-1 transition-all duration-300 font-medium animate-fade-in cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.strenght}
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-foreground animate-slide-in-left">Education & Certifications</h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border/40 rounded-xl hover:border-primary/40 hover:scale-102 hover:shadow-xl transition-all duration-300 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h4 className="font-bold text-lg text-foreground">{edu.institution}</h4>
                <p className="text-primary font-semibold mt-1">{edu.program}</p>
                <p className="text-foreground/60 text-sm mt-2">{edu.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "600ms" }}>
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-110 hover:-translate-y-1 transition-all duration-300 animate-glow">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download My Resume
          </button>
        </div>
      </div>
    </section>
  )
}
