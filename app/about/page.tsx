import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
              <Link href="/" className="text-xl font-semibold text-gray-800">
                SomaticHealth
              </Link>
              <span className="text-sm text-gray-500 ml-2">MOVEMENT AS MEDICINE</span>
            </div>
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About SomaticHealth</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Revolutionizing musculoskeletal care through AI-powered movement analysis and digital rehabilitation
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At SomaticHealth, we believe that movement is medicine. Our mission is to transform musculoskeletal care
                by making advanced movement analysis and rehabilitation accessible to everyone, everywhere.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through cutting-edge AI technology and 3D movement assessment, we're creating a future where injuries
                are prevented before they happen and recovery is faster, more effective, and more personalized than ever
                before.
              </p>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8">
              <Image
                src="/images/digital-portal-msk-care.webp"
                alt="Digital healthcare technology"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We continuously push the boundaries of what's possible in healthcare technology to deliver better
                  outcomes.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Accessibility</h3>
                <p className="text-gray-600">
                  Quality healthcare should be available to everyone, regardless of location or circumstances.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our platform, from technology to patient care.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600">Meet the experts driving innovation in digital healthcare</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Former Director of Digital Health at Mayo Clinic with 15+ years in healthcare innovation.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Michael Chen</h3>
                <p className="text-blue-600 mb-4">CTO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  AI researcher and former Google engineer specializing in computer vision and machine learning.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dr. Emily Rodriguez</h3>
                <p className="text-blue-600 mb-4">Chief Medical Officer</p>
                <p className="text-gray-600 text-sm">
                  Board-certified physiatrist with expertise in musculoskeletal medicine and rehabilitation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare providers who are already using SomaticHealth to deliver better patient
            outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Request Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
