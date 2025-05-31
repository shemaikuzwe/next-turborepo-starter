import { Button } from "@next-starter/ui/components/button"
import { ArrowRight, Play, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-[url(&quot;data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E&quot;)] opacity-40"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 mb-8">
            <Star className="mr-2 h-4 w-4 fill-current" />
            Trusted by 10,000+ businesses worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SaaSify
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            The complete SaaS platform that scales with your business. From startups to enterprises, 
            we provide the tools you need to succeed in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-purple-500 border-2 border-white"></div>
                <div className="h-8 w-8 rounded-full bg-orange-500 border-2 border-white"></div>
              </div>
              <span>Join 10,000+ happy customers</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span>4.9/5 from 2,000+ reviews</span>
            </div>
          </div> */}
        </div>

        {/* Hero Image/Dashboard Preview */}
        {/* <div className="mt-16 sm:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl bg-white p-2 shadow-2xl ring-1 ring-gray-900/10">
              <div className="rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-90">Uptime</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-colors">
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-sm opacity-90">Active Users</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
