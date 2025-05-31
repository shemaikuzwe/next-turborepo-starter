import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import PricingSection from "@/components/pricing-page"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"

// export const dynamic ="force-dynamic"
export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
