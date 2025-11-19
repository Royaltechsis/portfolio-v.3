"use client"

interface Company {
  id: number
  name: string
  logo: string
}

const companies: Company[] = [
  { id: 1, name: "Company 1", logo: "Tech Solutions" },
  { id: 2, name: "Company 2", logo: "Design Hub" },
  { id: 3, name: "Company 3", logo: "Innovation Labs" },
  { id: 4, name: "Company 4", logo: "Digital Studio" },
  { id: 5, name: "Company 5", logo: "Creative Agency" },
  { id: 6, name: "Company 6", logo: "Brand Builders" },
]

export default function CompaniesMarquee() {
  return (
    <section id="companies" className="py-16 md:py-24 px-6 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <p className="text-accent font-semibold mb-3 tracking-wider">Featured Experience</p>
        <h2 className="text-3xl md:text-4xl font-bold">Companies I've Worked With</h2>
      </div>

      {/* Marquee Container */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-8 md:gap-12 whitespace-nowrap"
          style={{
            animation: "marquee 40s linear infinite",
            width: "fit-content",
          }}
        >
          {/* Original set */}
          {companies.map((company) => (
            <div
              key={`original-${company.id}`}
              className="flex-shrink-0 px-6 md:px-8 py-4 rounded-xl bg-muted border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
            >
              <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {company.logo}
              </p>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {companies.map((company) => (
            <div
              key={`duplicate-${company.id}`}
              className="flex-shrink-0 px-6 md:px-8 py-4 rounded-xl bg-muted border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 cursor-pointer group"
            >
              <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                {company.logo}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 16px));
          }
        }
      `}</style>
    </section>
  )
}
