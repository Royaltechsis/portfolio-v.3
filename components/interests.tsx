"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"
import Image from "next/image"

const interests = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing moments through the lens - visual storytelling is my creative outlet.",
    type: "image",
    media: "/professional-photography.jpg",
  },
  {
    id: 2,
    title: "Travel & Culture",
    description: "Exploring new places and immersing myself in different cultures shapes my perspective.",
    type: "image",
    media: "/travel-destinations.jpg",
  },
  {
    id: 3,
    title: "Design & Art",
    description: "From digital design to traditional art, creating beautiful things fuels my passion.",
    type: "image",
    media: "/creative-design-art.jpg",
  },
  {
    id: 4,
    title: "Wellness & Yoga",
    description: "Finding balance through mindfulness, fitness, and taking care of my mental health.",
    type: "image",
    media: "/yoga-wellness-meditation.jpg",
  },
  {
    id: 5,
    title: "Reading & Learning",
    description: "Always learning new things - books, podcasts, and personal development are my fuel.",
    type: "image",
    media: "/books-learning-education.jpg",
  },
  {
    id: 6,
    title: "Community & Mentoring",
    description: "Giving back and helping others grow is incredibly rewarding.",
    type: "image",
    media: "/community-mentoring.jpg",
  },
]

export default function Interests() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [liked, setLiked] = useState(new Set())

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? interests.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === interests.length - 1 ? 0 : prev + 1))
  }

  const toggleLike = () => {
    const newLiked = new Set(liked)
    if (newLiked.has(currentSlide)) {
      newLiked.delete(currentSlide)
    } else {
      newLiked.add(currentSlide)
    }
    setLiked(newLiked)
  }

  const currentInterest = interests[currentSlide]
  const isLiked = liked.has(currentSlide)

  return (
    <section id="interests" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold mb-3 tracking-wider">Beyond the Code</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">My Interests & Passions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Life is more than coding. Here's what keeps me inspired, energized, and connected.
          </p>
        </div>

        <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden">
          {/* Carousel media display */}
          <div className="relative w-full h-96 md:h-[500px] bg-muted overflow-hidden">
            {currentInterest.type === "image" && (
              <Image
                src={currentInterest.media || "/placeholder.svg"}
                alt={currentInterest.title}
                fill
                className="object-cover transition-all duration-500"
              />
            )}
            {currentInterest.type === "video" && (
              <video src={currentInterest.media} className="w-full h-full object-cover" controls />
            )}

            <button
              onClick={toggleLike}
              className="absolute top-4 right-4 p-3 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-black transition-all duration-200 hover:scale-110"
            >
              <Heart
                size={24}
                className={`transition-all duration-200 ${isLiked ? "fill-rose-500 text-rose-500" : "text-foreground"}`}
              />
            </button>

            {/* Slide counter */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
              {currentSlide + 1} / {interests.length}
            </div>
          </div>

          {/* Content section */}
          <div className="p-8 md:p-10">
            <h3 className="text-3xl font-bold mb-3 text-foreground">{currentInterest.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{currentInterest.description}</p>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <button
                  onClick={goToPrevious}
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-200 hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-all duration-200 hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Slide indicators */}
              <div className="flex gap-2">
                {interests.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-accent w-8" : "bg-border/50 w-2 hover:bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
