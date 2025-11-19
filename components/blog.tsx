"use client"

const blogPosts = [
  {
    id: 1,
    title: "The Art of Minimalist Web Design",
    excerpt: "Exploring how less can be more in creating elegant, functional web experiences.",
    date: "November 1, 2024",
    readTime: "5 min read",
    category: "Design",
    image: "/minimalist-design-aesthetic.jpg",
  },
  {
    id: 2,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for architecting large-scale React applications.",
    date: "October 28, 2024",
    readTime: "8 min read",
    category: "Development",
    image: "/react-development-code.jpg",
  },
  {
    id: 3,
    title: "User Research That Actually Matters",
    excerpt: "How to conduct meaningful research that drives real design decisions.",
    date: "October 20, 2024",
    readTime: "6 min read",
    category: "UX",
    image: "/user-research-workshop.jpg",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-accent font-semibold mb-3 tracking-wider">Latest Articles</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Blog</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts on design, development, and the craft of building digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </div>

                {/* Meta */}
                <div className="mt-auto pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors">
            Read All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
