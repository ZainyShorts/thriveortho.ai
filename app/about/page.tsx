"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Linkedin } from "lucide-react"
import Header from "../component/Header"
import Footer from "../component/Footer"

interface TeamMember {
  name: string
  title: string
  description: string
  image: string
  linkedin?: string
}

// Leadership Team with direct blob URLs
const leadershipTeam = [
  {
    name: "Dr. Zeeshan Butt",
    title: "CEO & Co-Founder",
    description: "Orthopedic Surgeon & Healthcare Technology Leader",
    image: "https://www.somatichealth.com/images/team/dr-z.webp",
  },
  {
    name: "Tony Schueth",
    title: "CTO & Co-Founder",
    description: "Technology Executive & Healthcare Innovation Expert",
    image: "https://www.somatichealth.com/images/team/tony.webp",
  },
  {
    name: "Jasmel Acosta",
    title: "Chief Operating Officer",
    description: "Operations Leader & Healthcare Management Expert",
    image: "https://www.somatichealth.com/images/team/jasmel-acosta.webp",
  },
  {
    name: "Chris Burns",
    title: "Chief Financial Officer",
    description: "Financial Executive & Strategic Planning Leader",
    image: "https://www.somatichealth.com/images/team/chris-burns.webp",
  },
  {
    name: "Scott Catron",
    title: "Chief Revenue Officer",
    description: "Sales & Revenue Growth Executive",
    image: "https://www.somatichealth.com/images/team/scott-catron.webp",
  },
  {
    name: "Sezgin Ayabakan",
    title: "Chief Technology Officer",
    description: "Software Engineering & Product Development Leader",
    image: "https://www.somatichealth.com/images/team/sezgin.webp",
  },
  {
    name: "George Likourezos",
    title: "Chief Medical Officer",
    description: "Clinical Excellence & Medical Strategy Leader",
    image: "https://www.somatichealth.com/images/team/george.webp",
  },
];

// Advisory Board with direct blob URLs
const advisoryBoard = [
  {
    name: "Ken Melani, M.D.",
    title: "Advisory Board Chairman & Former CEO of",
    description: "Highmark Insurance",
    image: "https://www.somatichealth.com/images/team/ken-melani.webp",
  },
  {
    name: "Arnold Milstein, M.D., MPH",
    title: "Director of the Clinical Excellence Program at",
    description: "Stanford Medicine",
    image: "https://www.somatichealth.com/images/team/arnold-m.webp",
  },
  {
    name: "Dan Fletcher, M.D.",
    title: "Orthopedic Surgeon, Rothman Orthopaedics",
    description: "",
    image: "https://www.somatichealth.com/images/team/dan.webp",
  },
  {
    name: "Alex Bendersky, DPT",
    title: "Digital Health Leader, Thought Leader",
    description: "",
    image: "https://www.somatichealth.com/images/team/alex-bendersky.webp",
  },
  {
    name: "Chris Bise, DPT, Ph.D.",
    title: "Professor of Physical Therapy, UPMC",
    description: "",
    image: "https://www.somatichealth.com/images/team/chris-bise.webp",
  },
  {
    name: "Ryan Comeau, DC",
    title: "CEO, Kinetisense",
    description: "",
    image: "https://www.somatichealth.com/images/team/ryan-comeau.webp",
  },
  {
    name: "Charles K. Kerby, III, JD",
    title: "ERISA Attorney, and President and CEO of",
    description: "Liberte Group LLC.",
    image: "https://www.somatichealth.com/images/team/kerby.jpg",
  },
  {
    name: "Kent McNeal",
    title: "CFO, Americare Wellness",
    description: "",
    image: "https://www.somatichealth.com/images/team/kent.webp",
  },
  {
    name: "Colleen Murphy, MBA",
    title: "Founder of Asparity (Exit to ADP)",
    description: "",
    image: "https://www.somatichealth.com/images/team/colleen-m.jpg",
  },
  {
    name: "Steve Putterman, FSA",
    title: "Partner (Retired), Mercer",
    description: "",
    image: "https://www.somatichealth.com/images/team/steve-putterman.webp",
  },
  {
    name: "Nicholas Woodward, DPT",
    title: "Orthopedic Rehabilitation Specialist at",
    description: "Spaulding Rehabilitation Hospital",
    image: "https://www.somatichealth.com/images/team/nicholas-woodward.webp",
  },
];
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center text-[#0473B9]"
        style={{
          height: "calc(100vh - 80px)",
          backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/01/19/15/05/computer-1149148_1280.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {/* <h1 className="text-5xl text-gray-50 md:text-6xl font-bold mb-6">
            A Comprehensive
            <br />
            MSK Healthcare Platform
          </h1> */}
          {/* <p className="text-2xl md:text-3xl font-light text-gray-50">From Prevention To Rehabilitation</p> */}
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Thriveortho, we're revolutionizing musculoskeletal healthcare by providing comprehensive,
                technology-driven solutions that span from prevention to rehabilitation. Our platform empowers
                healthcare providers and employers to deliver personalized, evidence-based care that improves outcomes
                while reducing costs.
              </p>
              <p className="text-lg text-gray-600">
                We believe that everyone deserves access to high-quality MSK care, regardless of their location or
                circumstances. Through our innovative approach combining clinical expertise with cutting-edge
                technology, we're making this vision a reality.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://media.istockphoto.com/id/2047970581/photo/modern-rehabilitation-physiotherapy-at-work-with-client-holding-dumbbell.jpg?b=1&s=612x612&w=0&k=20&c=lMpUmX5RRSZXYGuaLNh5Ri2KpaQOe4sPU4OnYBlurFg="
                alt="Our Mission"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team brings together decades of experience in healthcare, technology, and business to drive
              innovation in musculoskeletal care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 inline-block">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.title}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Advisory Board</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our Advisory Board comprises a distinguished group of clinical and industry healthcare leaders,
              collectively bringing over a half millennium of groundbreaking innovation and unwavering commitment to
              population health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 inline-block">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full mx-auto object-cover"
                  />
                  <button className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.title}</p>
                {member.description && <p className="text-sm text-gray-500 mt-1">{member.description}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
              <p className="text-lg text-gray-600">
                Thriveortho engages with your employees and delivers care remotely for better outcomes.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button className="bg-[#0473B9] text-white px-8 py-3 text-lg">CONTACT US</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}
