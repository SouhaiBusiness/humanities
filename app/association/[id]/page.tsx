import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Users, Heart, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { fakeAssociations } from "@/lib/fake-data"
import { notFound } from "next/navigation"

interface AssociationDetailPageProps {
  params: {
    id: string
  }
}

export default function AssociationDetailPage({ params }: AssociationDetailPageProps) {
  const association = fakeAssociations.find((assoc) => assoc._id === params.id)

  if (!association) {
    notFound()
  }

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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Associations
              </Link>
            </Button>
          </div>

          {/* Header Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <Image
                    src={association.logo || "/placeholder.svg"}
                    alt={`${association.name} logo`}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{association.name}</h1>
                      <div className="flex items-center space-x-4 mb-3">
                        <Badge className={getCategoryColor(association.category)}>
                          {association.category.charAt(0).toUpperCase() + association.category.slice(1)}
                        </Badge>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {association.city}, {association.country}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-4 w-4 mr-1" />
                          {association.members} members
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600 font-medium">Verified</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{association.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Section */}
              <Card>
                <CardHeader>
                  <CardTitle>About Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">{association.description}</p>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to making a lasting impact in our community and beyond. Through dedicated efforts
                    and community support, we continue to expand our reach and effectiveness in addressing critical
                    needs.
                  </p>
                </CardContent>
              </Card>

              {/* Impact Section */}
              <Card>
                <CardHeader>
                  <CardTitle>Our Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                      <div className="text-gray-600">People Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                      <div className="text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
                      <div className="text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">New community center opened</p>
                        <p className="text-sm text-gray-500">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Volunteer training program launched</p>
                        <p className="text-sm text-gray-500">1 month ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Partnership with local schools established</p>
                        <p className="text-sm text-gray-500">2 months ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Card */}
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-900">
                    <Heart className="h-5 w-5 mr-2" />
                    Support This Cause
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 mb-4">Your donation can make a real difference in our community.</p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Button>
                  <p className="text-xs text-blue-700 mt-2 text-center">100% of donations go directly to the cause</p>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">{association.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">{association.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-600">
                        {association.address}
                        <br />
                        {association.city}, {association.postalCode}
                        <br />
                        {association.country}
                      </p>
                    </div>
                  </div>

                  {association.website && (
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-gray-400" />
                      <div>
                        <p className="font-medium">Website</p>
                        <a
                          href={association.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Visit Website
                        </a>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded</span>
                    <span className="font-medium">{association.createdAt.getFullYear()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Members</span>
                    <span className="font-medium">{association.members}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <Badge className={getCategoryColor(association.category)}>{association.category}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-600 font-medium">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
