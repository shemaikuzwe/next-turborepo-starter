import Pricing from "@/components/pricing"
import { getProducts } from "@/lib/data"


export default function PricingPage() {
  const productsPromise = getProducts()
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl"> pricing</h2>
          <p className="mt-4 text-xl text-gray-600">Choose the perfect plan</p>
        </div>

        <Pricing productsPromise={productsPromise} />
      </div>
    </div>
  )
}
