import Pricing from "@/components/pricing"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the perfect plan for your project needs</p>
        </div>

        <Pricing />

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Need a custom solution?{" "}
            <a href="#" className="text-blue-500 font-medium">
              Contact us
            </a>{" "}
            for a personalized quote.
          </p>
        </div>
      </div>
    </div>
  )
}
