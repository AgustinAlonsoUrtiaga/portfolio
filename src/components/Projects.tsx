"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: "Real Terra",
    description: "A modern e-commerce platform built with NextJs and NodeJs",
    image: "/realTerraLogo.png",
    link: "https://www.realterrainvest.com/"
  },
  {
    title: "Rick & Morty",
    description: "An example of a UI page",
    image: "/rymlogo.png",
    link: "https://rick-and-morty-teal-nu.vercel.app/"
  },
]

export function Projects() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} id="projects" className="min-h-screen bg-primary text-primary-foreground">
      <div className="container mx-auto px-8 py-32">
        <div className={cn("max-w-4xl mx-auto space-y-16 slide-up", isInView && "in-view")}>
          <h2 className="text-4xl sm:text-5xl font-bold">Projects</h2>
          <div className="grid gap-16 md:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                className={cn(
                  "group cursor-pointer scale-up",
                  isInView && "in-view",
                  "transition-all duration-500",
                  { "delay-300": index === 1 }
                )}
              >
                <div className="bg-background p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-base text-muted-foreground">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

