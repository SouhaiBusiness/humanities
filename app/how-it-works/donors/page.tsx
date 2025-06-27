import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Search, Shield, BarChart, ArrowRight, DollarSign } from "lucide-react"
import Link from "next/link"

export default function HowItWorksDonorsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">For Donors</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It Works for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Donors</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover verified associations and make meaningful donations with complete transparency and security.
            </p>
            <Button size="lg" asChild>
              <Link href="/associations">
                <Heart className="h-5 w-5 mr-2" />
                Start Donating Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple 3-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Making a difference has never been easier. Follow these simple steps to start supporting causes you care
              about.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>1. Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Browse through our curated list of verified associations. Use filters to find causes that align with
                  your values and interests.
                </p>
              </CardContent>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>

            <Card className="text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>2. Verify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Review detailed information about each association, including their mission, impact, and verification
                  status. All associations are pre-screened.
                </p>
              </CardContent>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>3. Donate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Make secure donations directly to associations. Track your impact and receive updates on how your
                  contributions are making a difference.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Donate Through Our Platform?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We ensure your donations have maximum impact while providing complete transparency and security.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Verified Associations</h3>
                <p className="text-gray-600">
                  Every association on our platform is thoroughly vetted and verified by our team.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Payments</h3>
                <p className="text-gray-600">
                  All transactions are processed securely with bank-level encryption and fraud protection.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Complete Transparency</h3>
                <p className="text-gray-600">
                  See exactly where your money goes and track the impact of your donations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Tax Receipts</h3>
                <p className="text-gray-600">Automatically receive tax-deductible receipts for all your donations.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Impact Tracking</h3>
                <p className="text-gray-600">Get regular updates on how your donations are making a real difference.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">No Hidden Fees</h3>
                <p className="text-gray-600">
                  100% of your donation goes to the association. We don't take any commission.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Causes You Can Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find associations working in areas you're passionate about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Social Causes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Support organizations fighting poverty, homelessness, and social inequality.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <BarChart className="h-4 w-4 text-green-600" />
                  </div>
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Help provide quality education and learning opportunities for all.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-purple-600" />
                  </div>
                  <span>Health</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Support healthcare initiatives and medical research organizations.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Search className="h-4 w-4 text-orange-600" />
                  </div>
                  <span>Environment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contribute to environmental conservation and climate change initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-red-600" />
                  </div>
                  <span>Sports</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Support youth sports programs and athletic development initiatives.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <BarChart className="h-4 w-4 text-pink-600" />
                  </div>
                  <span>Cultural</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Preserve cultural heritage and support arts and cultural programs.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Security is Our Priority</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We use industry-leading security measures to protect your personal information and donations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">SSL Encryption</h3>
                  <p className="text-gray-600">All data transmission is protected with 256-bit SSL encryption.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">PCI Compliance</h3>
                  <p className="text-gray-600">We meet the highest standards for payment card security.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fraud Protection</h3>
                  <p className="text-gray-600">Advanced fraud detection systems monitor all transactions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Privacy Protection</h3>
                  <p className="text-gray-600">Your personal information is never shared without your consent.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your donations are processed through the same secure systems used by major financial institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start supporting verified associations today and see the real impact of your generosity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/associations">
                <Heart className="h-5 w-5 mr-2" />
                Browse Associations
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/rankings">
                <BarChart className="h-5 w-5 mr-2" />
                View Top Associations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
