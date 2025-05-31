"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What is SaaSify and how does it work?",
    answer: "SaaSify is a comprehensive SaaS platform that provides businesses with the tools they need to scale efficiently. Our platform includes analytics, automation, team collaboration, and enterprise-grade security features. Simply sign up, choose your plan, and start building with our intuitive interface and extensive API."
  },
  {
    question: "Can I try SaaSify before committing to a paid plan?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, test integrations, and see how it fits your business needs before making any commitment."
  },
  {
    question: "How secure is my data with SaaSify?",
    answer: "Security is our top priority. We use bank-grade encryption, SOC 2 Type II compliance, GDPR compliance, and regular security audits. Your data is stored in secure, geographically distributed data centers with 24/7 monitoring and automated backups."
  },
  {
    question: "Can I integrate SaaSify with my existing tools?",
    answer: "Yes! SaaSify offers 200+ pre-built integrations with popular tools like Slack, Salesforce, HubSpot, and more. We also provide a robust REST API and webhooks for custom integrations. Our developer documentation makes it easy to connect with any system."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 customer support via chat, email, and phone. All plans include access to our knowledge base, video tutorials, and community forum. Enterprise customers get dedicated success managers and priority support with guaranteed response times."
  },
  {
    question: "Can I change my plan at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. There are no long-term contracts or cancellation fees - you have complete flexibility."
  },
  {
    question: "Do you offer custom enterprise solutions?",
    answer: "Absolutely! We work with enterprise customers to create custom solutions that meet their specific needs. This includes custom integrations, dedicated infrastructure, advanced security features, and tailored onboarding. Contact our enterprise team for a consultation."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You maintain full control of your data. Before cancellation, you can export all your data in standard formats. We provide a 30-day grace period after cancellation where you can still access and download your data. After that, data is securely deleted according to our privacy policy."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Everything you need to know about SaaSify. Can't find what you're looking for? 
            <a href="#" className="text-blue-600 hover:text-blue-500 ml-1">Contact our support team</a>.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-4">
              Our team is here to help you get started with SaaSify.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
