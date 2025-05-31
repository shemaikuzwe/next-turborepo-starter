import Pricing from "@/components/pricing"
import { getProducts } from "@/lib/data"

export default function PricingSection() {
  const productsPromise = getProducts()
  return (
    <section className="py-20 sm:py-32 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
           Pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business. Start free, scale as you grow.
            All plans include our core features with no hidden fees.
          </p>
        </div>

        <Pricing productsPromise={productsPromise} />
      </div>
    </section>
  )
}
