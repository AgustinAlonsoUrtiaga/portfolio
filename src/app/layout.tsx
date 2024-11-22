import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/Siderbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agustin Alonso Urtiaga - Software Engineer',
  description: 'Portfolio of Agustin Alonso Urtiaga, a software engineer specializing in Next.js and Java',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "antialiased")}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
