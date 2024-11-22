"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"

export function About() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} id="about" className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 py-32">
        <div className={cn("max-w-4xl mx-auto space-y-16 slide-up", isInView && "in-view")}>
          <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Background</h3>
              <p className="text-lg">
                Experienced software engineer with a strong background in Next.js and Java, focused on building scalable
                full-stack applications. Skilled in server-side rendering, API integration, and delivering efficient,
                maintainable solutions. Driven by continuous learning and collaboration to create high-quality products.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Education</h3>
              <div>
                <p className="font-semibold">ORT Systems analyst</p>
                <p>In progress, start: July 2022</p>
                <p>Ends in: 2025</p>
              </div>
              <h3 className="text-2xl font-semibold mt-6">Languages</h3>
              <ul>
                <li>English - B2 Level</li>
                <li>Spanish - Native</li>
              </ul>
              <h3 className="text-2xl font-semibold mt-6">Location</h3>
              <p>Ravensburg, Baden-Wurtemberg, Germany</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

