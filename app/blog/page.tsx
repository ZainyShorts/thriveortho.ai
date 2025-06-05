import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "../component/Header"
import Footer from "../component/Footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Blog Title */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 text-center">Blogs</h1>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/blogs/thumb/somatic-health-and-kinetisense-to-commence-a-groundbreaking-clinical-study-with-rothman-orthopaedics-&-stanford-medicine.webp"
                alt="Digital Movement Analysis"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">March 3, 2025</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Revolutionizing MSK Prevention and Rehabilitation: The Future of Digital Movement Analysis
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Musculoskeletal (MSK) injuries and conditions remain one of the leading causes of pain, disability, and
                productivity loss worldwide.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/news/somatic-health-partners-with-kinetisense-to-expand-ai-powered-msk-solutions-for-employers-and-providers.avif"
                alt="AI in Musculoskeletal Care"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">February 11, 2025</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Transforming Musculoskeletal (MSK) Care with AI</h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Large language models (LLMs) and other Artificial Intelligence (AI) tools are revolutionizing healthcare
                delivery across multiple specialties.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/blogs/thumb/somatic-health-and-kinetisense-to-commence-a-groundbreaking-clinical-study-with-rothman-orthopaedics-&-stanford-medicine.webp"
                alt="Workplace Health"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">December 16, 2024</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Transform Workplace Health: Tackling the Surge in Musculoskeletal Disorders
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Private industry employers reported a staggering 2.8 million nonfatal workplace injuries and illnesses,
                a 7.5% increase from the previous year.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/blogs/thumb/transform-workplace-health-tackling-the-surge-in-musculoskeletal-disorders.webp"
                alt="Healthier Workforce"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">December 4, 2024</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Unlock the Power of a Healthier Workforce with Wellness in Motion
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                In today's demanding world, businesses can't afford productivity losses caused by musculoskeletal
                conditions and workplace injuries.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 5 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/pressRelease/Merger.webp"
                alt="HealthBus Partners"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">Oct 15, 2024</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                HealthBus Partners with Somatic Health to Transform AI-Powered MSK Solutions
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                HealthBus, a leader in integrated healthcare solutions, is thrilled to announce a strategic partnership
                with Somatic Health.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Blog Post 6 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
            <div className="relative h-64 w-full">
              <Image
                src="https://www.somatichealth.com/images/news/healthbus-partnership-with-somatic.avif"
                alt="MSK Care"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">Oct 11, 2024</p>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Unlock the Future of MSK Care: A Game-Changing Partnership
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                Introducing a revolutionary partnership between Somatic Health and Kinetisense, designed to transform
                how organizations approach musculoskeletal health.
              </p>
              <Link href="#" className="text-blue-600 font-medium flex items-center hover:underline">
                Read More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
