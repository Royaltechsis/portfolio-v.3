"use client"

import { useState } from "react"
import { projects } from "@/data/projects"

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [showPrivateModal, setShowPrivateModal] = useState(false)

  const handlePrivateRepoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPrivateModal(true)
  }

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-accent font-semibold mb-3 tracking-wider">Featured Work</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Recent Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my favorite projects that showcase my design and development expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-xl bg-card border border-border transition-all duration-300 hover:shadow-lg hover:border-accent/50"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-accent font-medium hover:text-accent/80 transition-colors duration-300 relative group"
                    >
                      View Project
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent/30 group-hover:w-full transition-all duration-300" />
                    </a>
                    
                    {project.isPrivate ? (
                      <button
                        onClick={handlePrivateRepoClick}
                        className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 relative group"
                      >
                        View Code
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-300" />
                      </button>
                    ) : (
                      <a
                        href={project.codeLink}
                        className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-300 relative group"
                      >
                        View Code
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/30 group-hover:w-full transition-all duration-300" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Repo Modal */}
      {showPrivateModal && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPrivateModal(false)}
        >
          <div 
            className="bg-card border border-border rounded-xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-center mb-3">Private Repository</h3>
            <p className="text-muted-foreground text-center mb-6">
              This project's source code is private and confidential. It was developed for a client or organization and cannot be publicly shared.
            </p>
            <button
              onClick={() => setShowPrivateModal(false)}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </>
  )
}
