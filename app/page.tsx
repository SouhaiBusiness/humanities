import { HeroSection } from "@/components/hero-section"
import { AssociationGrid } from "@/components/association-grid"
import { SearchFilters } from "@/components/search-filters"
import { Suspense } from "react"

export default function HomePage({
  searchParams,
}: {
  searchParams: { search?: string; category?: string; city?: string }
}) {
  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Amazing Associations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find and support associations that align with your values and make a difference in your community.
            </p>
          </div>

          <SearchFilters />

          <Suspense fallback={<div className="text-center py-8">Loading associations...</div>}>
            <AssociationGrid searchParams={searchParams} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
