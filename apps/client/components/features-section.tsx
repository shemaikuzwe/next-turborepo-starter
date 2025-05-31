import { 
  Shield, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Lock,
  Smartphone,
  Headphones,
  Cloud
} from "lucide-react"

const features = [
  {
    name: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, SSO, and compliance certifications.",
    icon: Shield,
    color: "text-blue-600 bg-blue-100"
  },
  {
    name: "Lightning Fast",
    description: "Optimized performance with global CDN and edge computing for instant response times.",
    icon: Zap,
    color: "text-yellow-600 bg-yellow-100"
  },
  {
    name: "Team Collaboration",
    description: "Real-time collaboration tools with role-based permissions and workflow automation.",
    icon: Users,
    color: "text-green-600 bg-green-100"
  },
  {
    name: "Advanced Analytics",
    description: "Comprehensive dashboards with AI-powered insights and custom reporting.",
    icon: BarChart3,
    color: "text-purple-600 bg-purple-100"
  },
  {
    name: "Global Scale",
    description: "Multi-region deployment with auto-scaling infrastructure and 99.9% uptime SLA.",
    icon: Globe,
    color: "text-indigo-600 bg-indigo-100"
  },
  {
    name: "Data Protection",
    description: "GDPR compliant with automated backups, disaster recovery, and data sovereignty.",
    icon: Lock,
    color: "text-red-600 bg-red-100"
  },
  {
    name: "Mobile First",
    description: "Native mobile apps and responsive design for seamless experience across devices.",
    icon: Smartphone,
    color: "text-pink-600 bg-pink-100"
  },
  {
    name: "24/7 Support",
    description: "Expert support team available around the clock with dedicated success managers.",
    icon: Headphones,
    color: "text-orange-600 bg-orange-100"
  },
  {
    name: "Cloud Native",
    description: "Built for the cloud with microservices architecture and containerized deployment.",
    icon: Cloud,
    color: "text-cyan-600 bg-cyan-100"
  }
]

export default function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to scale your business
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to build, 
            grow, and manage your business efficiently.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="group relative">
              <div className="flex flex-col items-start p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center rounded-full bg-blue-50 px-6 py-3 text-sm font-medium text-blue-800">
            <Zap className="mr-2 h-4 w-4" />
            And many more features to discover
          </div>
        </div>
      </div>
    </section>
  )
}
