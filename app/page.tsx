import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-semibold text-gray-800">SomaticHealth</span>
              <span className="text-sm text-gray-500 ml-2">MOVEMENT AS MEDICINE</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </Link>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 flex items-center">
                  Solutions
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/solutions/providers"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      For Providers
                    </Link>
                    <Link
                      href="/solutions/employers"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      For Employers
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 flex items-center">
                  Products
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/products/somatic-engage"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      SomaticEngage
                    </Link>
                    <Link
                      href="/products/somatic-3d-scan"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Somatic3DScan
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/pricing" className="text-gray-700 hover:text-blue-600">
                Pricing
              </Link>

              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 flex items-center">
                  Resources
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/resources/blog"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources/case-studies"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/resources/whitepapers"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      Whitepapers
                    </Link>
                  </div>
                </div>
              </div>

              <Link href="/about" className="text-gray-700 hover:text-blue-600">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button asChild variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                <Link href="/signup">SIGN UP</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href="/login">LOG IN</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/80 z-10"></div>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="https://web.archive.org/web/20250519005819/https://res.cloudinary.com/djk8zmysz/video/upload/v1727863135/Web/Homepage/somatic-health-homepage-background-video.webm" type="video/webm" />
        </video>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Movement as Medicine</h1>
          <p className="text-2xl md:text-3xl mb-8 font-light italic">MSK Care Reimagined</p>
          <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 text-lg">
            REQUEST DEMO
          </Button>
        </div>
      </section>

      {/* Injury Prevention Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-full h-64 rounded-xl relative overflow-hidden">
                  <Image
                    src="/images/digital-portal-msk-care.webp"
                    alt="Digital portal MSK care interface"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">From Injury Prevention to Faster Recovery</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somatic Health offers comprehensive injury prevention by AI-powered 3D movement assessments, hybrid
                "virtual + in-clinic" physical therapy on-demand, and remote health engagement through digital
                rehabilitation platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complete Prevention and Rehabilitation Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Somatic is a digital healthcare platform with AI-enabled technologies supporting MSK care from early
              online visit to remote therapeutic monitoring.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Prevention</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Movement Assessment for injury prevention, fall prevention and rehabilitations using Somatic 3D Scan
                Assessment. A comprehensive gait and balance, FMS and other functional movement analysis will be used to
                guide MSK strengthening and rehabilitation programs.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <Image
                    src="/images/woman-workout-home.webp"
                    alt="Woman doing workout at home"
                    width={300}
                    height={400}
                    className="mx-auto rounded-lg"
                  />
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Early Intervention</h3>
                <p className="text-gray-600 leading-relaxed">
                  Somatic Ecosystem provides an immediate access to physical therapy through AI-based MoveGPT or Virtual
                  Physical Therapy consultations with practitioners or health coaches available in all 50 states.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-blue-600 text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-4">In-Clinic</h3>
                <p className="leading-relaxed">
                  Easy and seamless referrals and team care coordination with local clinics. We partner with local
                  rehabilitation clinics to offer a full continuum of care by monitoring home exercise programs (HEP),
                  patient compliance & outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">In-Home</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your treatment plan is just a click away. Continue your treatment through personalized exercise plan
                  anywhere, anytime, on any device and at your pace and convenience. All the support and help from a
                  single app.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What We Deliver</h2>
            <p className="text-lg text-gray-600">Improved Patient Outcomes and Quality of Care</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">LOWER INJURY RATE</Button>
            <Button variant="outline" className="px-8 py-3">
              REDUCED HEALTHCARE COST
            </Button>
            <Button variant="outline" className="px-8 py-3">
              BETTER HEALTH OUTCOMES
            </Button>
            <Button variant="outline" className="px-8 py-3">
              HIGHER USER SATISFACTION
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex items-center">
              <ChevronLeft className="w-8 h-8 text-gray-400 mr-4" />
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Lower Injury Rate</h3>
                <p className="text-lg text-gray-600">
                  With the state-of-the-art Somatic 3D Scan, we can identify problems in advance and dramatically reduce
                  work-related injuries, prevent falls, and other MSK injuries.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-black rounded-2xl p-4 w-64 h-80">
                <Image
                  src="/images/higher-satisfaction-rate.webp"
                  alt="Higher satisfaction rate results"
                  width={240}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <ChevronRight className="w-8 h-8 text-gray-400 ml-4 self-center" />
            </div>
          </div>
        </div>
      </section>

      {/* News & Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Latest News & Insights</h2>
            <p className="text-lg text-gray-600">Your Source for Timely News and Insightful Updates</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-revolutionizing-msk.webp"
                  alt="Revolutionizing MSK Prevention and Rehabilitation"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">Blog</Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">March 3, 2025</p>
                <h3 className="text-xl font-bold text-gray-800">
                  Revolutionizing MSK Prevention and Rehabilitation: The Future of Digital...
                </h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-transforming-msk-ai.webp"
                  alt="Transforming Musculoskeletal Care with AI"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">Blog</Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">February 11, 2025</p>
                <h3 className="text-xl font-bold text-gray-800">Transforming Musculoskeletal (MSK) Care with AI</h3>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/blog-workplace-health.webp"
                  alt="Transform Workplace Health"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-blue-600">Blog</Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-gray-500 mb-2">December 16, 2024</p>
                <h3 className="text-xl font-bold text-gray-800">
                  Transform Workplace Health: Tackling the Surge in Musculoskeletal Disorders
                </h3>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              VIEW ALL UPDATES
            </Button>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Get Started</h2>
              <p className="text-lg text-gray-600">
                Somatic engages with your employees and delivers care remotely for better outcomes.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mt-6 md:mt-0">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-xl font-semibold">SomaticHealth</span>
              </div>
              <p className="text-sm text-blue-100 mb-4">MOVEMENT AS MEDICINE</p>
              <p className="text-blue-100">info@somatichealth.com</p>
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Providers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Employers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    About Somatic Health
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    SomaticEngage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Somatic3DScan
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    SMS Compliance: Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-100 hover:text-white">
                    SMS Compliance: Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-500 mt-12 pt-8 text-center">
            <p className="text-blue-100">Copyright © 2024 All rights reserved by Somatic Health</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
