"use client"

import { AssociationCard } from "@/components/association-card"
import { useEffect, useState } from "react"
import { fakeAssociations } from "@/lib/fake-data"

interface AssociationGridProps {
  searchParams: {
    search?: string
    category?: string
    city?: string
  }
}

export function AssociationGrid({ searchParams }: AssociationGridProps) {
  const [associations, setAssociations] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAssociations = async () => {
      try {
        // Use fake data instead of API call
        let filteredAssociations = fakeAssociations

        if (searchParams.search) {
          const searchTerm = searchParams.search.toLowerCase()
          filteredAssociations = filteredAssociations.filter(
            (assoc) =>
              assoc.name.toLowerCase().includes(searchTerm) || assoc.description.toLowerCase().includes(searchTerm),
          )
        }

        if (searchParams.category && searchParams.category !== "all") {
          filteredAssociations = filteredAssociations.filter((assoc) => assoc.category === searchParams.category)
        }

        if (searchParams.city) {
          const cityTerm = searchParams.city.toLowerCase()
          filteredAssociations = filteredAssociations.filter((assoc) => assoc.city.toLowerCase().includes(cityTerm))
        }

        setAssociations(filteredAssociations)
      } catch (error) {
        console.error("Error fetching associations:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAssociations()
  }, [searchParams])

  if (loading) {
    return <div className="text-center py-8">Loading associations...</div>
  }

  if (associations.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg mb-4">No associations found</div>
        <p className="text-gray-400">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {associations.map((association) => (
        <AssociationCard key={association._id} association={association} />
      ))}
    </div>
  )
}
