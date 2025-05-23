import { Check, Zap, Grid } from "lucide-react"

export default function Pricing() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Basic Plan */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
              <Zap className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold">$1,500</h3>
          </div>

          <p className="mt-4 text-gray-600">Perfect for solo founders and early-stage startups.</p>

          <button className="mt-6 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-center font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            Get Started
          </button>

          <div className="mt-8">
            <h4 className="text-lg font-medium">What&apos;s Included:</h4>
            <ul className="mt-4 space-y-3">
              {[
                "Core MVP with essential features",
                "Delivery in 18 days",
                "Clean UI/UX design",
                "1 revision round",
                "1 week post-launch maintenance",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-blue-200 shrink-0 mt-0.5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="rounded-xl border bg-white p-6 shadow-sm relative">
          <div className="absolute right-6 top-6">
            <span className="inline-block rounded-full bg-blue-500 px-3 py-1 text-xs font-medium text-white">
              Popular
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Grid className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold">$2,800</h3>
          </div>

          <p className="mt-4 text-gray-600">For teams ready to scale or impress investors.</p>

          <button className="mt-6 w-full rounded-lg bg-gray-800 px-4 py-3 text-center font-medium text-white hover:bg-gray-700 transition-colors">
            Get Started
          </button>

          <div className="mt-8">
            <h4 className="text-lg font-medium">What&apos;s Included:</h4>
            <ul className="mt-4 space-y-3">
              {[
                "Extended MVP with advanced features",
                "Launch-ready in 15 days",
                "Premium UI/UX design",
                "2 revision rounds",
                "2 weeks post-launch maintenance",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="rounded-sm bg-blue-500 p-0.5 shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
