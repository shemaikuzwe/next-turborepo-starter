"use client"
import { Product } from "@next-starter/db"
import { Button } from "@next-starter/ui/components/button"
import { Check, Zap, Grid, Package } from "lucide-react"
import { use } from "react"

interface Props {
  productsPromise: Promise<Product[]>
}

export default function Pricing({ productsPromise }: Props) {
  const products = use(productsPromise)

  // Handle case when no products exist
  if (products.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Products Available</h3>
          <p className="text-gray-600">There are currently no pricing plans available. Please check back later.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`rounded-xl border bg-white p-6 shadow-sm relative ${
              product.isPopular ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            {product.isPopular && (
              <div className="absolute right-6 top-6">
                <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                product.isPopular ? 'bg-blue-100' : 'bg-blue-50'
              }`}>
                {product.isPopular ? (
                  <Grid className="h-5 w-5 text-blue-500" />
                ) : (
                  <Zap className="h-5 w-5 text-blue-500" />
                )}
              </div>
              <h3 className="text-3xl font-bold">${product.price.toLocaleString()}</h3>
            </div>

            <h4 className="mt-2 text-xl font-semibold text-gray-900">{product.name}</h4>

            {product.description && (
              <p className="mt-4 text-gray-600">{product.description}</p>
            )}

            <Button variant={product.isPopular ? "default" : "outline"} size="lg">
              Get Started
            </Button>

            {product.features.length > 0 && (
              <div className="mt-8">
                <h4 className="text-lg font-medium">What&apos;s Included:</h4>
                <ul className="mt-4 space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {product.isPopular ? (
                        <div className="rounded-sm bg-blue-500 p-0.5 shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <Check className="h-5 w-5 text-blue-200 shrink-0 mt-0.5" />
                      )}
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
