"use client"

import { useState } from "react"

const experiences = [
  {
    id: 1,
    title: "Web Developer & Curriculum Facilitator",
    company: "Blended Learning and Study Center",
    period: "2025 (6 months)",
    description: "Managed and maintained the center's website, ensuring optimal performance, security, and user experience across all devices. Facilitated the development and implementation of comprehensive curriculum materials for blended learning programs. Collaborated with educators and administrators to create digital learning resources and interactive content. Implemented content management systems to streamline course delivery and student engagement. Designed and developed responsive web pages to showcase programs, courses, and student resources. Conducted regular website audits and updates to improve functionality and accessibility. Integrated learning management systems (LMS) with the website for seamless student registration and course access. Provided technical support and training to staff on website management and digital tools. Optimized website performance and SEO to increase online visibility and student enrollment.",
    skills: ["Web Development", "CMS", "Curriculum Development", "LMS Integration", "Educational Technology", "SEO", "Content Management", "Responsive Design"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Speedax (Fintech)",
    period: "2024 - 2025",
    description: "Developed and maintained user-facing features for a modern fintech platform, focusing on secure and intuitive financial interfaces. Built responsive web applications using modern JavaScript frameworks to deliver seamless user experiences across devices. Implemented secure payment processing interfaces and integrated with various financial APIs and third-party services. Collaborated with backend developers to ensure smooth data flow and API integration for financial transactions. Designed and developed reusable UI components following industry best practices and design systems. Conducted thorough testing and debugging to ensure high security standards and error-free financial operations. Optimized application performance to handle high-volume transactions and real-time data updates. Worked closely with UX/UI designers to translate wireframes and mockups into functional, pixel-perfect interfaces. Implemented data visualization components for financial analytics and reporting dashboards. Ensured compliance with financial industry standards and regulations in all frontend implementations.",
    skills: ["React", "JavaScript", "TypeScript", "Financial APIs", "Payment Integration", "Security Best Practices", "Data Visualization", "Responsive Design", "API Integration"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Maitech Studio",
    period: "2025 - Present",
    description: "Designed the layout and user interface of the web application using Wordpress and Elementor. Developed the website and modified plugins using PHP. Implemented responsive design principles to ensure the application is mobile-friendly and accessible across various devices. Collaborated with the design team to create visually appealing and user-friendly interfaces. Integrated third-party APIs and services to enhance application functionality. Conducted thorough testing and debugging to ensure high-quality code and a seamless user experience. Worked effectively with the project manager to meet client specific needs and deadlines. Built custom features using PHP.",
    skills: ["WordPress", "Elementor", "PHP", "Responsive Design", "API Integration", "Testing & Debugging"],
  },
  {
    id: 4,
    title: "Front End Developer",
    company: "Grearn Africa",
    period: "Contract based",
    description: "Collaborated with a cross-functional team to develop user-friendly and responsive mobile applications. Built reusable UI components and ensured seamless integration with backend APIs. Implemented clean, maintainable, and scalable code using modern front-end frameworks and libraries. Optimized app performance to ensure smooth functionality on both iOS and Android platforms. Designed intuitive and visually appealing interfaces, aligning with the company's branding and user requirements. Conducted thorough testing and debugging to ensure high-quality code and a seamless user experience. Utilized version control systems like Git for efficient team collaboration and code management. Provided post-launch support and resolved issues reported by users to enhance app reliability. Collaborated with the UX/UI design team to translate wireframes and prototypes into functional applications.",
    skills: ["React Native", "UI Components", "API Integration", "iOS", "Android", "Git", "UX/UI Design", "Performance Optimization"],
  },
  {
    id: 5,
    title: "Freelance Ecommerce Developer",
    company: "Remote",
    period: "2024 (Contract based)",
    description: "Designed and developed responsive and user-friendly e-commerce platforms tailored to client needs. Integrated payment gateways, inventory management systems, and third-party APIs to ensure seamless functionality. Collaborated with clients to create customized solutions for enhanced user experience and performance optimization. Provided ongoing support and maintenance, including updates to UI/UX and troubleshooting technical issues. Developed a functional admin dashboard for managing products, orders, and customer data. Overseeing website updates to align with promotional strategies and brand goals.",
    skills: ["E-commerce Development", "Payment Gateway Integration", "Inventory Management", "Admin Dashboard", "UI/UX", "Performance Optimization"],
  },
  {
    id: 6,
    title: "Freelance Developer",
    company: "Oluwasola Ajao & Co. (Chartered Accountant and Tax Practitioner)",
    period: "2023 (Contract based)",
    description: "Designed and developed a dynamic and responsive website tailored to the firm's brand and services. Created a professional blog section to showcase tax tips, financial advice, and industry insights. Integrated SEO strategies to improve website visibility and attract targeted traffic. Implemented a secure contact form for client inquiries and feedback. Ensured cross-browser compatibility and optimized the website for both desktop and mobile devices. Collaborated with stakeholders to align the website's functionality and content with the firm's goals. Provided post-launch support, including regular updates and maintenance for the website and blog. Optimized page speed and performance for a seamless user experience.",
    skills: ["Web Development", "WordPress", "SEO", "Responsive Design", "Blog Development", "Performance Optimization", "Cross-browser Compatibility"],
  },
]

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <p className="text-primary font-semibold mb-3 tracking-widest uppercase text-sm">Professional Journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Experience & Timeline</h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/30 md:transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative md:flex md:gap-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                onClick={() => toggleExpanded(exp.id)}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-4 -translate-x-[17px] md:translate-x-[-21px] w-12 h-12 md:w-10 md:h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/40 z-10">
                  <div
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${expandedId === exp.id ? "bg-primary w-3 h-3 md:w-4 md:h-4" : "bg-primary/60"}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 cursor-pointer group">
                  <div
                    className={`relative p-6 rounded-xl transition-all duration-300 overflow-hidden ${
                      expandedId === exp.id
                        ? "bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 border border-primary/30 shadow-lg shadow-primary/10"
                        : "bg-background border border-border/20 hover:border-primary/40"
                    }`}
                  >
                    {/* Background gradient accent */}
                    <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {exp.title}
                          </h3>
                          <p className="text-sm md:text-base font-medium text-primary/80 mt-1">{exp.company}</p>
                          
                          {/* Skills */}
                          <div className="mt-3">
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 hover:border-primary/60 transition-colors"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-xs md:text-sm font-semibold text-primary/60 whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>

                      {/* Expandable content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedId === exp.id ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
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
