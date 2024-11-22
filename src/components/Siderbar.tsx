"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('.sidebar') && !target.closest('.menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="menu-button fixed top-6 right-6 z-50 p-2 hover:opacity-75 transition-opacity"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6 text-primary" />
      </button>

      <div
        className={cn(
          "sidebar fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "fixed right-0 top-0 h-full w-[300px] bg-background p-6 shadow-lg transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 hover:opacity-75 transition-opacity"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-primary" />
          </button>

          <nav className="mt-16 space-y-8">
            <Link
              href="/"
              className="block text-2xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#about"
              className="block text-2xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#experience"
              className="block text-2xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="/#skills"
              className="block text-2xl font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>

            <div className="pt-8 border-t border-muted">
              <h2 className="text-lg font-medium text-muted-foreground mb-4">SAY HELLO</h2>
              <div className="space-y-4">
                <a
                  href="mailto:agustinalonsourtiaga78@gmail.com"
                  className="block text-primary hover:underline"
                >
                  agustinalonsourtiaga78@gmail.com
                </a>
                <a
                  href="https://t.me/yourusername"
                  className="block text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  t.me/yourusername
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

