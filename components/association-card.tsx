import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Users, ArrowRight } from "lucide-react"

interface Association {
  id: string
  name: string
  logo: string
  description: string
  category: string
  city: string
  status: string
}

interface AssociationCardProps {
  association: Association
}

export function AssociationCard({ association }: AssociationCardProps) {
  const getCategoryColor = (category: string) => {
    const colors = {
      social: "bg-blue-100 text-blue-800",
      sports: "bg-green-100 text-green-800",
      cultural: "bg-purple-100 text-purple-800",
      education: "bg-yellow-100 text-yellow-800",
      health: "bg-red-100 text-red-800",
      environment: "bg-emerald-100 text-emerald-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  // Extract first 2 sentences from description
  const shortDescription = association.description.split(".").slice(0, 2).join(".") + "."

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" data-aos='fade-up'>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={association.logo || "/favicon.png"}
              alt={`${association.name} logo`}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {association.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {association.city}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <Badge className={getCategoryColor(association.category)}>
            {association.category.charAt(0).toUpperCase() + association.category.slice(1)}
          </Badge>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">{shortDescription}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>Verified</span>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <Button asChild className="w-full group-hover:bg-blue-600 transition-colors">
          <Link href={`/association/${association.id}`}>
            Learn More
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
