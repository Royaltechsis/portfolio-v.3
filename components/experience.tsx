"use client"

import { useState } from "react"
import { experiences } from "@/data/experiences"

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-16 md:py-20 lg:py-32 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 md:mb-16 lg:mb-20 text-center px-2">
          <p className="text-primary font-semibold mb-2 md:mb-3 tracking-widest uppercase text-xs md:text-sm">Professional Journey</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Experience & Timeline</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-primary via-accent to-primary/30 md:transform md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative md:flex md:gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                onClick={() => toggleExpanded(exp.id)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-4 -translate-x-[17px] md:translate-x-[-21px] w-10 h-10 md:w-10 md:h-10 rounded-full bg-background border-3 md:border-4 border-primary flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 md:hover:scale-125 hover:shadow-lg hover:shadow-primary/40 z-10">
                  <div
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${expandedId === exp.id ? "bg-primary w-2.5 h-2.5 md:w-4 md:h-4" : "bg-primary/60"}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="ml-16 md:ml-0 md:w-1/2 cursor-pointer group">
                  <div
                    className={`relative p-4 md:p-6 rounded-xl transition-all duration-300 overflow-hidden ${
                      expandedId === exp.id
                        ? "bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/30 shadow-lg shadow-primary/10"
                        : "bg-background border border-border/20 hover:border-primary/40"
                    }`}
                  >
                    {/* Background gradient accent */}
                    <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent flex-1">
                              {exp.title}
                            </h3>
                            <span className="text-xs md:text-sm font-semibold text-primary/60 whitespace-nowrap md:hidden">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm lg:text-base font-medium text-primary/80 mt-1">{exp.company}</p>
                          
                          {/* Skills */}
                          <div className="mt-2 md:mt-3">
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-2 md:px-3 py-1 text-[10px] md:text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-primary/60 whitespace-nowrap hidden md:block">
                          {exp.period}
                        </span>
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedId === exp.id ? "max-h-[500px] md:max-h-96 opacity-100 mt-3 md:mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-foreground/70 text-xs md:text-sm lg:text-base leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
