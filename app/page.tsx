"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Experience from "@/components/experience"
import Resume from "@/components/resume"
import Blog from "@/components/blog"
import Testimonials from "@/components/testimonials"
import CompaniesMarquee from "@/components/companies-marquee"
import Interests from "@/components/interests"
import Contact from "@/components/contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <main className="relative w-full">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Portfolio />
      <Experience />
      <About />
      <Resume />
{/*       <Blog />
 */}      {/* <Testimonials /> */}
{/*       <CompaniesMarquee />
/*  */}      {/* <Interests /> */}
 */      <Contact />
    </main>
  )
}
