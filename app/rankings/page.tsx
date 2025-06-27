import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Medal, Award, TrendingUp, Users, Heart, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data for top associations ranked by donations
const topAssociations = [
  {
    id: "1",
    rank: 1,
    name: "Global Water Foundation",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Providing clean water access to underserved communities worldwide through innovative solutions and sustainable infrastructure development.",
    category: "social",
    city: "San Francisco",
    totalDonations: 125000,
    donorCount: 1250,
    impactMetric: "500,000 people served",
    growth: "+45%",
  },
  {
    id: "2",
    rank: 2,
    name: "Education for Tomorrow",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Breaking barriers to education by providing resources, scholarships, and support to underprivileged students globally.",
    category: "education",
    city: "New York",
    totalDonations: 98500,
    donorCount: 890,
    impactMetric: "10,000 students helped",
    growth: "+32%",
  },
  {
    id: "3",
    rank: 3,
    name: "Green Earth Initiative",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Fighting climate change through reforestation, renewable energy projects, and environmental education programs.",
    category: "environment",
    city: "Portland",
    totalDonations: 87200,
    donorCount: 756,
    impactMetric: "1M trees planted",
    growth: "+28%",
  },
  {
    id: "4",
    rank: 4,
    name: "Healthcare Heroes Network",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Providing medical care and health education to remote and underserved communities around the world.",
    category: "health",
    city: "Chicago",
    totalDonations: 76800,
    donorCount: 634,
    impactMetric: "25,000 patients treated",
    growth: "+22%",
  },
  {
    id: "5",
    rank: 5,
    name: "Youth Sports Alliance",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Empowering young athletes through comprehensive sports training, mentorship, and character development programs.",
    category: "sports",
    city: "Los Angeles",
    totalDonations: 65400,
    donorCount: 523,
    impactMetric: "5,000 youth trained",
    growth: "+18%",
  },
  {
    id: "6",
    rank: 6,
    name: "Cultural Heritage Foundation",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Preserving and promoting cultural heritage through art, music, and educational programs that connect communities.",
    category: "cultural",
    city: "Boston",
    totalDonations: 54300,
    donorCount: 445,
    impactMetric: "50 cultural sites preserved",
    growth: "+15%",
  },
  {
    id: "7",
    rank: 7,
    name: "Food Security Network",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Combating hunger and food insecurity through food banks, nutrition education, and sustainable agriculture programs.",
    category: "social",
    city: "Denver",
    totalDonations: 48900,
    donorCount: 398,
    impactMetric: "100,000 meals provided",
    growth: "+12%",
  },
  {
    id: "8",
    rank: 8,
    name: "Tech Education Hub",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Bridging the digital divide by providing technology education and resources to underserved communities.",
    category: "education",
    city: "Austin",
    totalDonations: 42100,
    donorCount: 334,
    impactMetric: "2,000 students certified",
    growth: "+25%",
  },
  {
    id: "9",
    rank: 9,
    name: "Mental Health Support",
    logo: "/placeholder.svg?height=80&width=80",
    description:
      "Providing mental health resources, counseling services, and awareness programs to communities in need.",
    category: "health",
    city: "Seattle",
    totalDonations: 38700,
    donorCount: 287,
    impactMetric: "15,000 people supported",
    growth: "+20%",
  },
  {
    id: "10",
    rank: 10,
    name: "Animal Welfare Society",
    logo: "/placeholder.svg?height=80&width=80",
    description: "Protecting and caring for animals through rescue operations, veterinary care, and adoption programs.",
    category: "social",
    city: "Miami",
    totalDonations: 35200,
    donorCount: 256,
    impactMetric: "3,000 animals rescued",
    growth: "+8%",
  },
]

function getRankIcon(rank: number) {
  switch (rank) {
    case 1:
      return <Trophy className="h-6 w-6 text-yellow-500" />
    case 2:
      return <Medal className="h-6 w-6 text-gray-400" />
    case 3:
      return <Award className="h-6 w-6 text-amber-600" />
    default:
      return (
        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
          {rank}
        </div>
      )
  }
}

function getCategoryColor(category: string) {
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

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Trophy className="h-16 w-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Top Ranked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                Associations
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover the most impactful associations on our platform, ranked by total donations received and community
              impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/associations">
                  <Heart className="h-5 w-5 mr-2" />
                  Browse All Associations
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/how-it-works/donors">Learn How to Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$642K+</div>
              <div className="text-gray-600">Total Donations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5,821</div>
              <div className="text-gray-600">Total Donors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">Top Associations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">+23%</div>
              <div className="text-gray-600">Average Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 Podium */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top 3 Champions</h2>
            <p className="text-lg text-gray-600">The highest-performing associations making the biggest impact</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* 2nd Place */}
            <div className="md:order-1 md:mt-8">
              <Card className="text-center border-2 border-gray-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Medal className="h-12 w-12 text-gray-400" />
                  </div>
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={topAssociations[1].logo || "/placeholder.svg"}
                      alt={`${topAssociations[1].name} logo`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{topAssociations[1].name}</CardTitle>
                  <Badge className={getCategoryColor(topAssociations[1].category)}>{topAssociations[1].category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-600 mb-2">
                    ${topAssociations[1].totalDonations.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {topAssociations[1].donorCount} donors • {topAssociations[1].impactMetric}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/association/${topAssociations[1].id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 1st Place */}
            <div className="md:order-2">
              <Card className="text-center border-4 border-yellow-400 bg-gradient-to-b from-yellow-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-16 w-16 text-yellow-500" />
                  </div>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={topAssociations[0].logo || "/placeholder.svg"}
                      alt={`${topAssociations[0].name} logo`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{topAssociations[0].name}</CardTitle>
                  <Badge className={getCategoryColor(topAssociations[0].category)}>{topAssociations[0].category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-yellow-600 mb-2">
                    ${topAssociations[0].totalDonations.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    {topAssociations[0].donorCount} donors • {topAssociations[0].impactMetric}
                  </div>
                  <Button size="sm" asChild>
                    <Link href={`/association/${topAssociations[0].id}`}>View Champion</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* 3rd Place */}
            <div className="md:order-3 md:mt-8">
              <Card className="text-center border-2 border-amber-300">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    <Award className="h-12 w-12 text-amber-600" />
                  </div>
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={topAssociations[2].logo || "/placeholder.svg"}
                      alt={`${topAssociations[2].name} logo`}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-lg">{topAssociations[2].name}</CardTitle>
                  <Badge className={getCategoryColor(topAssociations[2].category)}>{topAssociations[2].category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-600 mb-2">
                    ${topAssociations[2].totalDonations.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-500 mb-4">
                    {topAssociations[2].donorCount} donors • {topAssociations[2].impactMetric}
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/association/${topAssociations[2].id}`}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Full Rankings List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Rankings</h2>
            <p className="text-lg text-gray-600">
              All top-performing associations ranked by total donations and impact
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-4">
            {topAssociations.map((association) => (
              <Card key={association.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-6">
                    {/* Rank */}
                    <div className="flex-shrink-0">{getRankIcon(association.rank)}</div>

                    {/* Logo */}
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={association.logo || "/placeholder.svg"}
                        alt={`${association.name} logo`}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>

                    {/* Association Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900 mb-1">{association.name}</h3>
                          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{association.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <Badge className={getCategoryColor(association.category)}>
                              {association.category.charAt(0).toUpperCase() + association.category.slice(1)}
                            </Badge>
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {association.city}
                            </span>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="text-right ml-6">
                          <div className="text-2xl font-bold text-green-600 mb-1">
                            ${association.totalDonations.toLocaleString()}
                          </div>
                          <div className="text-sm text-gray-500 mb-2">{association.donorCount} donors</div>
                          <div className="flex items-center text-sm">
                            <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                            <span className="text-green-600 font-medium">{association.growth}</span>
                          </div>
                        </div>
                      </div>

                      {/* Impact & Action */}
                      <div className="flex items-center justify-between mt-4 pt-4 border-t">
                        <div className="text-sm text-gray-600">
                          <strong>Impact:</strong> {association.impactMetric}
                        </div>
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/association/${association.id}`}>
                            View Details
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Support These Amazing Associations</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every donation makes a difference. Choose an association that aligns with your values and start making an
            impact today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/associations">
                <Heart className="h-5 w-5 mr-2" />
                Browse All Associations
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/how-it-works/donors">Learn How to Donate</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
