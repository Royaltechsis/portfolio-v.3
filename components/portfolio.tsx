"use client"

import { useState } from "react"

const projects = [
  {
    id: 1,
    title: "Infhinet",
    description: "An e-learning platform and community for tech enthusiasts",
    image: "/ecommerce-interface.jpg",
    tags: ["React", "Node.js", "Express", "TypeScript", "MongoDB", "Tailwind"],
    link: "https://infhinetclass.vercel.app",
    codeLink: "https://infhinetclass.vercel.app",
  },
  {
    id: 2,
    title: "Nuel's Store",
    description: "An e-commerce platform for gadgets. (sign up first to use)",
    image: "/ecommerce-dashboard.png",
    tags: ["React", "Redux Toolkit", "Firebase", "Tailwind CSS", "JavaScript"],
    link: "https://nuel-store-git-main-osenibunmi2023gmailcoms-projects.vercel.app/",
    codeLink: "https://github.com/Royaltechsis/Nuel-Store",
  },
  {
    id: 3,
    title: "Healthy Skincare",
    description: "A Website with ecommerce capabilities for HSC",
    image: "/ecommerce-interface.jpg",
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    link: "https://healthyskincareco.com/",
    codeLink: "https://healthyskincareco.com/",
  },
  {
    id: 4,
    title: "Oluwasola Ajao & Company",
    description: "A website for Oluwasola Ajao and Co (Chartered Accountants)",
    image: "/placeholder.jpg",
    tags: ["WordPress"],
    link: "https://oluwasolaajaoco.com/",
    codeLink: "https://oluwasolaajaoco.com/",
  },
  {
    id: 5,
    title: "Easy Banking Landing Page",
    description: "Landing page for an easy banking service. (Static landing page design)",
    image: "/analytics-dashboard.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    link: "https://easy-banking-landing-page-kappa.vercel.app/",
    codeLink: "https://github.com/Royaltechsis/easy-banking-landing-page",
  },
  {
    id: 6,
    title: "Infhinet Ways",
    description: "A personal Blogging platform",
    image: "/placeholder.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://infhinetblog.vercel.app/blog",
    codeLink: "https://github.com/Royaltechsis/infhinet-ways",
  },
  {
    id: 7,
    title: "My Tube",
    description: "A YouTube Video feed made with React.",
    image: "/react-development-code.jpg",
    tags: ["React", "Tailwind CSS", "YouTube API", "JavaScript"],
    link: "https://my-tube-inky.vercel.app",
    codeLink: "https://github.com/Royaltechsis/my-tube",
  },
  {
    id: 8,
    title: "Meme Generator",
    description: "Create and share memes easily.",
    image: "/placeholder.jpg",
    tags: ["React", "CSS", "JavaScript"],
    link: "https://meme-generator-lovat-seven.vercel.app",
    codeLink: "https://github.com/Royaltechsis/meme-generator",
  },
  {
    id: 9,
    title: "Oseni's LinkedIn Clone",
    description: "A LinkedIn clone with Google Auth.",
    image: "/placeholder.jpg",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    link: "https://osenis-linked-in-clone.vercel.app",
    codeLink: "https://github.com/Royaltechsis/Oseni-s-LinkedIn-Clone",
  },
  {
    id: 10,
    title: "Goal App",
    description: "A Web App that allows you to set and track your goals.",
    image: "/project-management-interface.jpg",
    tags: ["TypeScript", "Tailwind CSS", "React"],
    link: "https://goalapp-rho.vercel.app/",
    codeLink: "https://github.com/Royaltechsis/goalapp",
  },
  {
    id: 11,
    title: "To-do-list",
    description: "A to-do list website.",
    image: "/project-management-interface.png",
    tags: ["React", "JavaScript"],
    link: "https://to-do-list-project-lyart.vercel.app",
    codeLink: "https://github.com/Royaltechsis/to-do-list-project",
  },
  {
    id: 12,
    title: "Multi-Step Form",
    description: "A dynamic multi-step form implementation.",
    image: "/placeholder.jpg",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    link: "https://multi-step-form-bay-theta.vercel.app",
    codeLink: "https://github.com/Royaltechsis/multi-step-form",
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
