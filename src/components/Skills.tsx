"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "React / Redux",
  "Node.js",
  "Java",
  "PostgreSQL",
  "Docker",
  "Linux / UNIX",
  "Git / GitHub",
  "Scrum / Agile Methodologies",
  "TypeScript",
  "Next.js",
  "RESTful APIs",
  "Jenkins CI"
]

export function Skills() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} id="skills" className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 py-32">
        <div className={cn("max-w-4xl mx-auto space-y-16 slide-up", isInView && "in-view")}>
          <h2 className="text-4xl sm:text-5xl font-bold">Skills</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {skills.map((skill, index) => (
              <Card key={index} className={cn("scale-up", isInView && "in-view", "transition-all duration-500", `delay-${index * 100}`)}>
                <CardContent className="p-4">
                  <p className="text-lg font-medium">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

