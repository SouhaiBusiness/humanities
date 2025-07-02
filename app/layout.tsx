import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Aos from '@/components/Aos';


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Humanities - Connecting Associations & Donors",
  description: "A platform that bridges associations with generous donors to create meaningful impact in communities.",
  icons: {
  icon: '/favicon.ico',
  shortcut: '/favicon.ico',
  apple: '/favicon.ico'
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Aos>   
        <main className="min-h-screen">{children}</main>
        </Aos>
        <Footer />
      </body>
    </html>
  )
}
