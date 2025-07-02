import { Button } from "@/components/ui/button"
import { Heart, Users, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium" data-aos='fade-right'>
                <Heart className="h-4 w-4 mr-2" />
                Connecting Hearts, Creating Impact
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight" data-aos='fade-right'>
                Bridge the Gap Between
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Associations{" "}
                </span>
                & Donors
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed" data-aos='fade-right'>
                Empower meaningful connections between passionate associations and generous donors. Our platform ensures
                transparency, trust, and maximum impact for every contribution.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Associations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">10K+</div>
                <div className="text-sm text-gray-600">Donors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">$2M+</div>
                <div className="text-sm text-gray-600">Donated</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="/association/subscribe">
                  <Users className="h-5 w-5 mr-2" />
                  Join as Association
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/associations">
                  <Globe className="h-5 w-5 mr-2" />
                  Explore Associations
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Verified Associations
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                Secure Payments
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                100% Transparent
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative" data-aos='fade-left'>
            <div className="relative z-10">
              <Image
                src="/poepleconnecting.jpg?height=600&width=600"
                alt="People connecting and helping each other"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg z-20" data-aos='fade-right'>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">New Donation</div>
                  <div className="text-xs text-gray-500">$250 to Education Fund</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg z-20" data-aos='fade-left'>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Association Verified</div>
                  <div className="text-xs text-gray-500">Clean Water Initiative</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
