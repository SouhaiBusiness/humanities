import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, CreditCard, Shield, BarChart, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HowItWorksAssociationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">For Associations</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It Works for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Associations
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Join our platform and connect with donors who share your mission. Simple, secure, and effective.
            </p>
            <Button size="lg" asChild>
              <Link href="/association/subscribe">
                <Users className="h-5 w-5 mr-2" />
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started on our platform is easy. Follow these simple steps to begin connecting with donors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>1. Register</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fill out our comprehensive registration form with your association's details, mission, and contact
                  information.
                </p>
              </CardContent>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>

            <Card className="text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>2. Subscribe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pay the annual subscription fee of $10 to access our platform and connect with our donor network.
                </p>
              </CardContent>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>

            <Card className="text-center relative">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>3. Get Approved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team reviews your application within 24-48 hours to ensure legitimacy and quality standards.
                </p>
              </CardContent>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>4. Start Receiving</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Once approved, your association appears publicly and you can start receiving donations from our
                  network.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to successfully connect with donors and manage your fundraising efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Verified Donor Network</h3>
                <p className="text-gray-600">
                  Access to thousands of verified donors actively looking to support causes like yours.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Secure Transactions</h3>
                <p className="text-gray-600">
                  All donations are processed securely through our trusted payment partners.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Personal Dashboard</h3>
                <p className="text-gray-600">
                  Manage your profile, track donations, and update your information easily.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Marketing Support</h3>
                <p className="text-gray-600">
                  Get featured in our newsletters and social media to increase visibility.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics & Insights</h3>
                <p className="text-gray-600">Track your performance with detailed analytics and donor insights.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Our dedicated support team is always here to help you succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-gray-600 mb-8">
              One low annual fee gives you access to everything you need to succeed.
            </p>

            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">$10</div>
                <div className="text-gray-600">per year</div>
                <CardTitle className="mt-4">Everything Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Access to donor network</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Personal dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Marketing support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Analytics & reporting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 customer support</span>
                </div>

                <Button className="w-full mt-6" asChild>
                  <Link href="/association/subscribe">Get Started Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does the approval process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team typically reviews and approves applications within 24-48 hours. We may contact you if we need
                  additional information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens if my application is rejected?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  If your application doesn't meet our criteria, we'll provide feedback and allow you to resubmit with
                  corrections. Your subscription fee will be refunded if we cannot approve your application.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I update my association information after approval?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can update your profile, description, contact information, and other details anytime through
                  your personal dashboard.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I receive donations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Donations are transferred directly to your registered bank account. We process transfers weekly and
                  provide detailed reports of all transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of associations already using our platform to connect with donors and create positive impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/association/subscribe">
                <Users className="h-5 w-5 mr-2" />
                Join Now - $10/year
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
