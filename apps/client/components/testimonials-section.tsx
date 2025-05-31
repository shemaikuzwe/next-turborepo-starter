import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    content: "SaaSify transformed our business operations completely. The automation features saved us 40+ hours per week, and the analytics helped us increase revenue by 150%.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Inc.",
    avatar: "SC",
    rating: 5
  },
  {
    content: "The best investment we've made for our startup. The scalability and security features gave us confidence to grow from 10 to 1000+ customers seamlessly.",
    author: "Marcus Rodriguez",
    role: "CTO",
    company: "GrowthLabs",
    avatar: "MR",
    rating: 5
  },
  {
    content: "Outstanding support and incredibly intuitive platform. Our team was up and running in just 2 days. The ROI has been phenomenal - 300% in the first quarter.",
    author: "Emily Watson",
    role: "Operations Director",
    company: "ScaleUp Solutions",
    avatar: "EW",
    rating: 5
  },
  {
    content: "SaaSify's enterprise features are exactly what we needed. The compliance tools and security measures exceeded our expectations. Highly recommended!",
    author: "David Kim",
    role: "VP of Engineering",
    company: "Enterprise Corp",
    avatar: "DK",
    rating: 5
  },
  {
    content: "The analytics dashboard is a game-changer. We can now make data-driven decisions in real-time. Customer satisfaction increased by 45% since implementation.",
    author: "Lisa Thompson",
    role: "Product Manager",
    company: "InnovateTech",
    avatar: "LT",
    rating: 5
  },
  {
    content: "Seamless integration with our existing tools and workflows. The API documentation is excellent, and the developer experience is top-notch.",
    author: "Alex Johnson",
    role: "Lead Developer",
    company: "CodeCraft Studios",
    avatar: "AJ",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by businesses worldwide
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that trust SaaSify to power their growth and success.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">10,000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">99.9%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">Customer Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">24/7</div>
            <div className="text-sm text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
