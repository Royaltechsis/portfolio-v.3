"use client"

import { useState, useEffect } from "react"

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className={`mb-8 flex justify-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
            <div className="relative w-40 h-40 animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-lg opacity-75 animate-pulse" />
              <img
                src="/me.jpg"
                alt="Profile"
                className="relative w-40 h-40 rounded-full object-cover border-4 border-background shadow-lg hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          <p className={`text-primary font-semibold mb-4 tracking-widest uppercase text-sm transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>Software Engineer</p>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            Automating{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x">
              Digital Experiences
            </span>{" "}
            with Code
          </h1>

          <p className={`text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed font-light transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            I build intelligent systems and seamless applications that turn complex workflows into effortless experiences. Let's automate the future together.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 denpm run lay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <button
              onClick={() => {
                setActiveSection("portfolio")
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                setActiveSection("resume")
                document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Learn About Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
       {/*  <div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div> */}
      </div>
    </section>
  )
}
