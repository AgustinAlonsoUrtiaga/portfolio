"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"

const experiences = [
  {
    title: "Software Engineer",
    company: "Ignitix",
    period: "October 2023 - Present",
    responsibilities: [
      "Building full-stack applications with a focus on Java and React/Redux.",
      "Leveraging Typescript to ensure type safety and maintainable code.",
      "Optimizing queries and tuning performance in Postgres databases.",
      "Integrating and implementing RESTful APIs and third-party API services.",
      "Applying asynchronous programming techniques to improve performance.",
      "Working in UNIX environments and Docker, automating processes and managing deployments, and experience with Jenkins CI.",
      "Collaborating through GitHub and Slack, ensuring smooth team workflows.",
      "Ensuring high standards of quality and delivering user-friendly experiences.",
      "Active participation in remote teams, taking ownership of tasks and challenges."
    ]
  },
  {
    title: "Software Engineer",
    company: "SMS Sudamérica",
    period: "January 2022 - September 2023",
    responsibilities: [
      "Developed web applications using React for frontend and Java for backend services.",
      "Worked extensively with Docker to containerize applications and manage microservices.",
      "Managed and deployed projects on Linux environments with Git for version control.",
      "Participated in Agile Scrum teams, ensuring continuous delivery and collaboration.",
      "Gained strong experience in remote collaboration and problem-solving."
    ]
  }
]

export function Experience() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} id="experience" className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-32">
        <div className={cn("max-w-4xl mx-auto space-y-16 slide-up", isInView && "in-view")}>
          <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={cn(
                  "grid md:grid-cols-[200px,1fr] gap-8 slide-up",
                  isInView && "in-view",
                  "transition-all duration-500",
                  { "delay-300": index === 1 }
                )}
              >
                <div className="text-primary">
                  <p className="font-semibold">{exp.period}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-primary">{exp.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

