"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <div className="flex items-center justify-center mb-4">
              <Image src="/images/logo.png" width={200} height={20} alt="" />
            </div>
            <p className="text-sm text-gray-500 mb-2">Powered by Kinematic</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 px-4">
              MSK Care Reimagined with 3D Assessments
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Somatic 3D Scan is the world's most advanced MSK assessment
              technology based on 3D lidar and large language model AI.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <Image
                src="/images/scan-header-image.avif"
                alt="3D Scan Technology with person exercising and device interfaces"
                width={800}
                height={400}
                className=" w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Better MSK Care Section */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/images/acheive-better.avif"
                alt="MSK assessment technology in action"
                width={500}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Achieve Better MSK Care and Lasting Results
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                The Somatic 3D Scan is the world's most advanced musculoskeletal
                (MSK) assessment and treatment technology, utilizing
                cutting-edge 3D lidar and AI algorithms. Our proprietary
                technology features an AI-powered, evidence-based marker-less
                joint capture analysis system (Kinestesian) with the leading
                ICD-10-based rehabilitation video library (Somatic HEP Library).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* On-Site 3D Scans Section */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                On-Site 3D Scans
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                We offer on-site MSK 3D scan services and solutions to employers
                and providers for injury prevention, fall prevention,
                work-readiness assessments, sports and fitness MSK health
                tracking, patient evaluations, and more. The 3D MSK assessment
                takes just 1-3 minutes, after which our AI algorithms recommend
                personalized therapeutic home exercises to prevent injuries,
                reduce falls, and improve MSK health based on the evaluation
                results.
              </p>
            </div>
            <div>
              <Image
                src="/images/on-site-3d-scans.avif"
                alt="On-site 3D scanning devices and tablets"
                width={500}
                height={400}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Mobile Layout - Simple stacked design */}
          <div className="block lg:hidden">
            {/* Image at top on mobile */}
            <div className="mb-8">
              <Image
                src="/images/3d-assessment-old-lady.avif"
                alt="Woman exercising with dumbbells"
                width={700}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>

            {/* Content cards below image on mobile */}
            <div className="space-y-6">
              {[
                {
                  title: "Workplace",
                  description:
                    "Minimize injury risk. Enhance workplace health and productivity. Increase employee retention.",
                },
                {
                  title: "Active aging",
                  description:
                    "Minimize the risk of falls. Enhance client well-being with expert care. Boost functional capacity.",
                },
                {
                  title: "Clinical",
                  description:
                    "Increase revenue per patient, enhance patient retention, and generate passive billable events.",
                },
                {
                  title: "Performance",
                  description:
                    "Optimize athletic performance. Maximize revenue per athlete. Improve athlete retention.",
                },
                {
                  title: "Well-being",
                  description:
                    "Enhance efficiency and performance. Prevent injuries. Maintain wellness.",
                },
                {
                  title: "Veteran care",
                  description:
                    "Enhance veteran well-being. Data-driven care throughout the patient journey. Healthcare cost savings.",
                },
              ].map((item, index) => (
                <div key={item.title}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet Layout - Parallax effect */}
          <div className="hidden lg:block lg:pl-32 lg:pr-32">
            {/* Full width image background */}
            <div className="relative  w-full h-screen lg:h-[100vh]">
              <Image
                src="/images/3d-assessment-old-lady.avif"
                alt="Woman exercising with dumbbells"
                width={1400}
                height={800}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />

              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

              {/* Sticky sidebar overlay */}
              <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full">
                <div className="sticky top-10 h-[calc(100vh-5rem)] overflow-y-auto p-4  no-scrollbar">
                  <div className="space-y-6">
                    {[
                      {
                        title: "Workplace",
                        description:
                          "Minimize injury risk. Enhance workplace health and productivity. Increase employee retention.",
                      },
                      {
                        title: "Active aging",
                        description:
                          "Minimize the risk of falls. Enhance client well-being with expert care. Boost functional capacity.",
                      },
                      {
                        title: "Clinical",
                        description:
                          "Increase revenue per patient, enhance patient retention, and generate passive billable events.",
                      },
                      {
                        title: "Performance",
                        description:
                          "Optimize athletic performance. Maximize revenue per athlete. Improve athlete retention.",
                      },
                      {
                        title: "Well-being",
                        description:
                          "Enhance efficiency and performance. Prevent injuries. Maintain wellness.",
                      },
                      {
                        title: "Veteran care",
                        description:
                          "Enhance veteran well-being. Data-driven care throughout the patient journey. Healthcare cost savings.",
                      },
                    ].map((item, index) => (
                      <div key={item.title}>
                        <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/95 border-white/20">
                          <CardContent className="p-4 sm:p-6">
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}

                    {/* Extra spacing at bottom for smooth scroll completion */}
                    <div className="h-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-8 sm:py-12 lg:py-16 relative">
        <div className="container mx-auto px-4">
         
          <div className="relative w-full h-screen lg:h-[120vh]">
            <Image
              src="/images/3d-assessment-old-lady.avif"
              alt="Woman exercising with dumbbells"
              width={1400}
              height={800}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />

           
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

           
            <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full">
              <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto p-4  no-scrollbar">
                <div className="space-y-6">
                  {[
                    {
                      title: "Workplace",
                      description:
                        "Minimize injury risk. Enhance workplace health and productivity. Increase employee retention.",
                    },
                    {
                      title: "Active aging",
                      description:
                        "Minimize the risk of falls. Enhance client well-being with expert care. Boost functional capacity.",
                    },
                    {
                      title: "Clinical",
                      description:
                        "Increase revenue per patient, enhance patient retention, and generate passive billable events.",
                    },
                    {
                      title: "Performance",
                      description:
                        "Optimize athletic performance. Maximize revenue per athlete. Improve athlete retention.",
                    },
                    {
                      title: "Well-being",
                      description:
                        "Enhance efficiency and performance. Prevent injuries. Maintain wellness.",
                    },
                    {
                      title: "Veteran care",
                      description:
                        "Enhance veteran well-being. Data-driven care throughout the patient journey. Healthcare cost savings.",
                    },
                  ].map((item, index) => (
                    <div key={item.title}>
                      <Card className="hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/95 border-white/20">
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}

                  
                  <div className="h-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <AnimatedSection> */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Get Started
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Somatic engages with your employees and delivers care remotely
                for better outcomes.
              </p>
            </div>
            <Button
              size="lg"
              className="whitespace-nowrap hover:scale-105 transition-transform duration-200"
            >
              Contact Us
            </Button>
          </div>
          {/* </AnimatedSection> */}
        </div>
      </section>

      {/* <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
            <div className="lg:col-span-2">
              <Image
                src="/images/3d-assessment-old-lady.avif"
                alt="Woman exercising with dumbbells"
                width={700}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>

        
            <div className="space-y-6">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Workplace
                  </h3>
                  <p className="text-sm text-gray-600">
                    Minimize injury risk. Enhance workplace health and
                    productivity. Increase employee retention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Active aging
                  </h3>
                  <p className="text-sm text-gray-600">
                    Minimize the risk of falls. Enhance client well-being with
                    expert care. Boost functional capacity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Clinical</h3>
                  <p className="text-sm text-gray-600">
                    Increase revenue per patient, enhance patient retention, and
                    generate passive billable events.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Performance
                  </h3>
                  <p className="text-sm text-gray-600">
                    Optimize athletic performance. Maximize revenue per athlete.
                    Improve athlete retention.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Well-being
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enhance efficiency and performance. Prevent injuries.
                    Maintain wellness.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Veteran care
                  </h3>
                  <p className="text-sm text-gray-600">
                    Enhance veteran well-being. Data-driven care throughout the
                    patient journey. Healthcare cost savings.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
}
