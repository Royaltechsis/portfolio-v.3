"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  title: string
  company: string
  quote: string
  image: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Creative Director",
    company: "Design Co.",
    quote:
      "Working with her was transformative. Her attention to detail and creative vision brought our project to life in ways we didn't expect. She's not just a developer—she's a creative partner.",
    image: "/professional-woman-1.jpg",
    color: "from-rose-300 to-pink-300",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Product Manager",
    company: "Tech Innovators",
    quote:
      "Her ability to translate complex requirements into elegant solutions is unmatched. She delivered our project ahead of schedule without compromising quality. Highly recommended!",
    image: "/professional-man-1.jpg",
    color: "from-purple-300 to-pink-300",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Founder & CEO",
    company: "StartUp Labs",
    quote:
      "The most professional and talented developer I've worked with. She understood our vision instantly and executed it flawlessly. Our users love the interface she designed.",
    image: "/professional-woman-2.png",
    color: "from-rose-300 to-orange-300",
  },
  {
    id: 4,
    name: "James Wilson",
    title: "Lead Designer",
    company: "Brand Studios",
    quote:
      "She bridges the gap between design and development perfectly. Collaborating with her elevated our entire project. A true professional and a joy to work with.",
    image: "/professional-man-2.png",
    color: "from-pink-300 to-purple-300",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold mb-3 tracking-wider">What People Say</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kind words from colleagues, clients, and collaborators
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-gradient-to-br from-background via-background to-background border border-border rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
            {/* Quote Icon */}
            <div className="mb-6">
              <Quote className="w-12 h-12 text-accent opacity-30" />
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-2xl font-medium mb-8 text-foreground italic leading-relaxed">
              "{current.quote}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 pt-8 border-t border-border">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${current.color} flex-shrink-0`}>
                <img
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{current.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {current.title} at {current.company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8 justify-center">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-accent text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-accent text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex gap-2 justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent w-8" : "bg-border w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
