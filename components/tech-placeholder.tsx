"use client"

import { useEffect, useState } from "react"

export default function TechPlaceholder() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden group">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary rounded-full animate-float opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Rotating Circle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-32 h-32">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow" />
          
          {/* Middle rotating ring - opposite direction */}
          <div className="absolute inset-4 border-2 border-accent/30 rounded-full animate-spin-reverse" />
          
          {/* Inner pulsing circle */}
          <div className="absolute inset-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse-slow" />
          
          {/* Center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors duration-500 group-hover:scale-110 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scanning Line Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan opacity-30" />
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />
      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors duration-300" />

      {/* Binary Code Rain Effect */}
      <div className="absolute inset-0 flex justify-around opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col text-xs font-mono text-primary animate-scroll-up"
            style={{
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          >
            {[...Array(20)].map((_, j) => (
              <span key={j} className="leading-tight">
                {Math.random() > 0.5 ? "1" : "0"}
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Glowing Dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-ping opacity-40" />
      <div
        className="absolute top-3/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-accent rounded-full animate-ping opacity-40"
        style={{ animationDelay: "2s" }}
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-center">
          <p className="text-primary/60 font-mono text-sm tracking-wider">PROJECT_PLACEHOLDER</p>
          <p className="text-primary/40 font-mono text-xs mt-1">{"</>  BUILDING_SOMETHING_AMAZING  </>"}</p>
        </div>
      </div>
    </div>
  )
}
