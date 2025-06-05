import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Check, ChevronLeft, ChevronRight, Link, X } from 'lucide-react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Header/>
       <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://web.archive.org/web/20250519130759/https://res.cloudinary.com/bj69/image/upload/v1676369884/Group_36881_uvnxjv.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">Comprehensive MSK Care for Employers</h1>
          <p className="text-white text-xl max-w-3xl mx-auto">
            Reduce healthcare costs and improve employee wellness with our complete musculoskeletal care solution
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="bg-[#0473B9] cursor-pointer text-white px-8 py-3 rounded-md font-medium hover:bg-[#035a93] transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Comprehensive MSK Care Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Comprehensive MSK Care Solution</h2>
          <p className="text-center max-w-4xl mx-auto mb-12">
            Thriveortho Health empowers your employees to live a safe and healthy lifestyle. We start with on-site
            injury-prevention using a 3D movement scan technology, followed by on-demand online PT consultations, and
            transition to in-clinic care only when necessary in through a seamless process to achieve immediate care and
            fast recovery.
          </p>

          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-05%20at%2011.07.56%E2%80%AFAM-RzzCnltqQqWZhGtlXxc8UUZbrcS9UD.png"
              alt="Telehealth session with healthcare provider"
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* What we Provide */}
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            className="min-h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://web.archive.org/web/20250406010900/https://res.cloudinary.com/djk8zmysz/image/upload/v1705392695/Web/web/employee-stretching-in-office_h6yrkg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="bg-[#0473B9] text-white p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What we Provide</h2>

            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Injury Prevention</h3>
                  <p>
                    We provide an on-site 3D movement scan to assess injury risk exposure and work-readiness. Just
                    within a few minutes of whole body MSK scanning, employees are assessed and educated to avoid
                    work-related injuries.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">On-Demand Online PTs</h3>
                  <p>
                    With a vast network of MSK therapy companies, employees get to consult with PTs and other
                    rehabilitation providers about their MSK pains, injuries, and health needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Hybrid Care</h3>
                  <p>
                    Employees needing in-clinic care are seamlessly transitioned to a high quality physical therapy and
                    other clinics. Continuous care is provided through our hybrid model, home exercise programs (HEP)
                    and HIPAA-compliant communications with network providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSK and Related Chronic Diseases */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">MSK and Related Chronic Diseases are Crippling Employers</h2>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-[#4abe8a] flex items-center justify-center">
                      <span className="text-xl font-bold">90%</span>
                    </div>
                  </div>
                  <p>
                    90% of the nations $4.1T in annual healthcare expenditure are for people with chronic and mental
                    health conditions.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-[#e74c3c] flex items-center justify-center">
                      <span className="text-xl font-bold">$1T</span>
                    </div>
                  </div>
                  <p>
                    About $1T spent on musculoskeletal related conditions such as osteoarthritis, lower back pain and
                    rheumatoid arthritis.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-[#f39c12] flex items-center justify-center">
                      <span className="text-xl font-bold">44%</span>
                    </div>
                  </div>
                  <p>
                    44% of employers ranked MSK pain severe enough to warrant surgery as the top condition impacting
                    their costs.
                  </p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-[#3498db] flex items-center justify-center">
                      <span className="text-xl font-bold">85%</span>
                    </div>
                  </div>
                  <p>85% of employers ranked MSK pain among the top three conditions impacting their costs.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://res.cloudinary.com/djk8zmysz/image/upload/v1704806597/Web/web/msk-related-chronic-diseases_j0wbdu.webp"
                alt="Person with neck pain"
                width={500}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Managing Chronic Health Conditions */}
      <section className="pl-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Managing Chronic Health Conditions</h2>
          <p className="text-center max-w-4xl mx-auto mb-12">
            Thriveortho offers over 4,000 home exercise video programs covering MSK and chronic diseases.
          </p>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x">
                <div className="min-w-[300px] flex-shrink-0 snap-center">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#0473B9] text-white py-3 px-4 text-center text-xl font-semibold">Obesity</div>
                    <div className="h-48 bg-gray-200">
                      <Image
                        src="https://www.somatichealth.com/images/manageSlideone.jpg"
                        alt="Obesity"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                  
                <div className="min-w-[300px] flex-shrink-0 snap-center">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#0473B9] text-white py-3 px-4 text-center text-xl font-semibold">Diabetes</div>
                    <div className="h-48 bg-gray-200">
                      <Image
                        src="https://www.somatichealth.com/images/manageSlideTwo.jpg"
                        alt="Diabetes"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-[300px] flex-shrink-0 snap-center">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#0473B9] text-white py-3 px-4 text-center text-xl font-semibold">Diabetes</div>
                    <div className="h-48 bg-gray-200">
                      <Image
                        src="https://www.somatichealth.com/images/manageSlideThree.jpg"
                        alt="Diabetes"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="min-w-[300px] flex-shrink-0 snap-center">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-[#0473B9] text-white py-3 px-4 text-center text-xl font-semibold">Asthma</div>
                    <div className="h-48 bg-gray-200">
                      <Image
                        src="https://www.somatichealth.com/images/manageSlideFour.jpg"
                        alt="Asthma"
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous</span>
            </button>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg z-10">
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next</span>
            </button> */}
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Cost Savings</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="flex justify-center">
              <div className="relative">
                <div className="flex items-end gap-12 h-64">
                  <div className="flex flex-col h-full justify-end">
                    <div className="w-32 bg-[#5fbec9] h-[40%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      Surgery Visits
                    </div>
                    <div className="w-32 bg-[#0473B9] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      PT Visits
                    </div>
                    <div className="w-32 bg-[#3498db] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      ER Visits
                    </div>
                    <div className="w-32 bg-[#5dade2] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      PCP Visits
                    </div>
                  </div>

                  <div className="flex flex-col h-full justify-end">
                    <div className="w-32 bg-[#5fbec9] h-[25%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      Surgery Visits
                    </div>
                    <div className="w-32 bg-[#0473B9] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      PT Visits
                    </div>
                    <div className="w-32 bg-[#3498db] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      ER Visits
                    </div>
                    <div className="w-32 bg-[#5dade2] h-[20%] flex items-center justify-center text-white font-semibold p-2 text-center">
                      PCP Visits
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <X className="text-red-500" />
                    <span>Traditional Care System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500" />
                    <span>Thriveortho Care System</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg mb-4">Our solution reduces the most expensive cost for our members.</p>
              <p className="mb-8">
                The Thriveortho approach uses AI/computer vision to create more employee accountability to ensure that the
                dollars result in a significant ROI
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M3 6H21M19 6V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Medical Cost Savings</h3>
                  </div>
                  <p>On average, $3.27 is saved for every $1 spent on wellness</p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-full">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold">Absenteeism Costs</h3>
                  </div>
                  <p>On Average, costs are reduced by $2.37 for every dollar invested</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MSK Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">MSK Conditions</h2>
          <div className="relative flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-05%20at%2011.15.05%E2%80%AFAM-zdJtBKx2qwVitETnvVbhrMPSK83SPe.png"
              alt="MSK Conditions diagram"
              width={800}
              height={600}
              className="max-w-full h-auto"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <button className="w-3 h-3 rounded-full bg-[#0473B9]"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
              <button className="w-3 h-3 rounded-full bg-gray-300"></button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section id="contact" className="py-12 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get Started</h2>
              <p>Thriveortho engages with your employees and delivers care remotely for better outcomes.</p>
            </div>
            <div>
              <span
                className="inline-block bg-[#0473B9] text-white px-6 py-3 rounded-md font-medium hover:bg-[#035a93] transition-colors"
              >
                CONTACT US
              </span>
            </div>
          </div>
        </div>
      </section>

   
    </main>
    <Footer/>
    </>
  )
}

export default page