"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, Users, Shield, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Humanities</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/associations" className="text-gray-700 hover:text-blue-600 transition-colors">
              Associations
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>

            {/* How it Works Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600 transition-colors">
                How it Works
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/how-it-works/donors">For Donors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/how-it-works/associations">For Associations</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link href="/association/login">
                <Users className="h-4 w-4 mr-2" />
                Association Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/association/subscribe">
                <Shield className="h-4 w-4 mr-2" />
                Join Platform
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/admin">
                <User className="h-4 w-4 mr-2" />
                Admin
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/associations" className="text-gray-700 hover:text-blue-600 transition-colors">
                Associations
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t space-y-2">
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/association/login">Association Login</Link>
                </Button>
                <Button className="w-full" asChild>
                  <Link href="/association/subscribe">Join Platform</Link>
                </Button>
                <Button variant="ghost" className="w-full" asChild>
                  <Link href="/admin">Admin</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
