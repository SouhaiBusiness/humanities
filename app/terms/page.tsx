export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using the Humanities platform, you accept and agree to be bound by the terms and
                provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Platform Description</h2>
              <p className="text-gray-600 mb-4">
                Humanities is a platform that connects associations with donors. We provide tools and services to
                facilitate these connections while maintaining security and transparency.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Association Responsibilities</h2>
              <p className="text-gray-600 mb-4">As an association using our platform, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain current subscription payments</li>
                <li>Use donations for stated purposes</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Respect the rights of donors and other users</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Subscription and Payments</h2>
              <p className="text-gray-600 mb-4">
                Association subscriptions are $10 per year and must be renewed annually. Failure to maintain
                subscription may result in account suspension or termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Verification Process</h2>
              <p className="text-gray-600 mb-4">
                All associations must undergo our verification process before appearing publicly on the platform. We
                reserve the right to approve or reject applications at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Prohibited Activities</h2>
              <p className="text-gray-600 mb-4">You may not use our platform to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Harass or abuse other users</li>
                <li>Distribute malware or harmful content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe
                violates these Terms of Use or is harmful to other users or our platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                Humanities shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                resulting from your use of the platform.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via
                email or platform notification.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-600">
                For questions about these Terms of Use, please contact us at:
                <br />
                Email: legal@humanities.org
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Address: 123 Impact Street, Change City, CC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
