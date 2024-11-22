"use client"

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Hero() {
  const [ref, isInView] = useIntersectionObserver<HTMLElement>()

  return (
    <section ref={ref} className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <div className="relative flex flex-col justify-center p-8 lg:p-16">
        <div className={cn("space-y-6 slide-up", isInView && "in-view")}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
            Full stack
            <br />
            Developer.
          </h1>
          <p className="text-lg sm:text-xl max-w-md">
            I like to craft solid and scalable frontend products with great user experiences.
          </p>
          <div className="space-y-4">
            <p className="text-sm">
              Highly skilled at progressive enhancement, design systems & UI Engineering.
            </p>
            <p className="text-sm">
              Proven experience building successful products for clients across several countries.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute left-0 bottom-0 w-32 h-32 decoration-dots opacity-20" />
        <div className="absolute left-16 top-16 w-32 h-32 rounded-full border border-current opacity-20" />
      </div>

      {/* Right Side */}
      <div className="relative bg-primary lg:min-h-screen flex items-center justify-center p-8">
        <div className={cn("relative z-10 scale-up", isInView && "in-view")}>
          <Image
            src="/cara.jpg"
            alt="Profile"
            width={400}
            height={500}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute right-8 bottom-8 w-48 h-48 decoration-dots opacity-20" />
        <div className="absolute right-32 top-32 w-24 h-24 border-2 border-current opacity-20 rotate-45" />
      </div>
    </section>
  )
}

