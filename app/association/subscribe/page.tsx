import { SubscriptionForm } from "@/components/subscription-form"

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Join Our Platform</h1>
            <p className="text-lg text-gray-600">
              Connect with donors and expand your impact. Join thousands of associations already on our platform.
            </p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
              <span className="font-semibold">$10/year</span>
              <span className="ml-2">- Simple, transparent pricing</span>
            </div>
          </div>

          <SubscriptionForm />
        </div>
      </div>
    </div>
  )
}
