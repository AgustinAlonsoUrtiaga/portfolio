"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

export function Contact() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} id="contact" className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-32">
        <div className={cn("max-w-4xl mx-auto space-y-16 slide-up", isInView && "in-view")}>
          <h2 className="text-4xl sm:text-5xl font-bold">Contact</h2>
          <div className="space-y-8">
            <p className="text-xl">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-primary" />
                <a href="mailto:agustinalonsourtiaga78@gmail.com" className="hover:underline">
                  agustinalonsourtiaga78@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary" />
                <a href="tel:+541150299350" className="hover:underline">
                  +54 1150299350
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com/AgustinAlonsoUrtiaga"
                className="text-primary hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/agustin-alonso-urtiaga-116455195"
                className="text-primary hover:opacity-80 transition-opacity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

