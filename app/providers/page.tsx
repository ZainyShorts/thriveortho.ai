import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import Header from "../component/Header"
import Footer from "../component/Footer"

export default function provider() {
  return (
    <>
    <Header/>
    <main className="min-h-screen">
      {/* Hero Section */}

      <section
        className="relative w-full min-h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-05%20at%2010.37.29%E2%80%AFAM-kaTh7AU9VRavNcGKhwzgnZmnNUobni.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>

      </section>

      {/* Digital Pathway Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Digital Pathway for New Patient Referrals and Onboarding
          </h2>
          <p className="text-center max-w-4xl mx-auto mb-8">
            We support on-demand inquiries and online assessment for rehabilitation clinics to in-take new patients. New
            patients are referred to our networked PT and other rehabilitation providers from multiple sources such as
            employers, surgery groups and other physician-based clinics.
          </p>
          <p className="text-center max-w-4xl mx-auto mb-12">
            Partner with us as part of the Centers of Excellence for Non-invasive MSK Care.
          </p>

          {/* Somatic Health's Turnkey RTM Solution */}
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2d76b8] mb-12">
            Somatic Health's Turnkey RTM Solution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M3 5H21V19H3V5Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M7 9H17" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 13H17" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Comprehensive Provider Dashboard</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Secure Data Recording</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Improved Patient Engagement</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M16 18L22 12L16 6"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Accessible via Multiple Devices</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M12 11H16" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16H16" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 11H8.01" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 16H8.01" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">Improved Clinical Outcomes</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 border rounded-lg">
              <div className="text-[#2d76b8]">
                <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" fill="white" fillOpacity="0.01" />
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="#2d76b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M14 2V8H20" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 13H8" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 17H8" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 9H9H8" stroke="#2d76b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">RTM Billing Documentation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Engagement Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Patient Engagement Solution</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Automated patient reminders and surveys</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>4000+ home exercise videos for rehabilitation care</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>HIPAA-compliant messaging and video calls</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">

              <Image
                src="https://images.pexels.com/photos/20860597/pexels-photo-20860597/free-photo-of-physiotherapist-massaging-leg-and-hip.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Patient Engagement"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reduce Readmission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center md:order-2">
              <Image
                src="https://media.istockphoto.com/id/1525276064/photo/a-young-physiotherapist-guiding-an-elderly-woman-through-rehabilitation-exercises-empowering.jpg?b=1&s=612x612&w=0&k=20&c=dYspKQMfC_tkKXv7IVL_DLJi-9WGxACxVwZhQy06Z0Y="
                alt="Reduce Readmission"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-8">Reduce Readmission</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>
                    Surveys and educational materials keeping patients motivated to follow the prescribed treatment
                    plans
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Monitoring patients remotely ensures timely care and reduce risk of readmission</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>
                    Digital solution enabling Skilled Nursing Facilities (SNFs) and Assisted Living Facilities (ALFs) to
                    efficiently manage patients' therapies
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Faster Recovery Time */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Faster Recovery Time</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Prescribe HEPs easily through the comprehensive provider portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Improve patient engagement and compliance through remote monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Ensure better clinical outcomes and faster recovery time</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://media.istockphoto.com/id/1478745519/photo/close-up-of-physiotherapist-working-with-patient-on-the-bed.jpg?b=1&s=612x612&w=0&k=20&c=d6Orfio7LBRMm5B1rhFGL3R_K5XiR136m2H_yjojjmc="
                alt="Faster Recovery"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reduce No-shows */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-center justify-center md:order-2">
              <Image
                src="https://media.istockphoto.com/id/1833325851/photo/nurse-supporting-patient-learning-to-walk.jpg?b=1&s=612x612&w=0&k=20&c=lnpaV6hNkZlK7FDjwTMFCtkDANKSAuILDAe4AL2uvoM="
                alt="Reduce No-shows"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-8">Reduce No-shows</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Automated appointment reminders significantly reducing no-shows</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>SomaticEngage Solution enabling expansion of clinic appointments to video visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Online appointments providing flexibility for the patients to access care remotely</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Increase Patient Satisfaction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Increase Patient Satisfaction</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Assess patient satisfaction through automated Patient-Reported Outcomes (PROs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Keep patients engaged and motivated through real-time communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-[#2d76b8] mt-1 flex-shrink-0" />
                  <span>Enhance patient satisfaction through quality care delivery</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="https://media.istockphoto.com/id/1079107724/photo/patient-at-the-physiotherapy-doing-physical-exercises-with-his-therapist.jpg?b=1&s=612x612&w=0&k=20&c=z6aNOOgVF5WYb5798w8YGbh2osYS1AOnDY_iQbDxEeM="
                alt="Patient Satisfaction"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Providers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-bold">Benefits for Providers</h2>
            </div>
            <div className="md:ml-auto">
              <Link
                href="#"
                className="bg-[#2d76b8] text-white px-6 py-3 rounded-md font-medium hover:bg-[#1d5a9a] transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#2d76b8] text-white p-8 rounded-lg flex items-center justify-center text-center h-40">
              <h3 className="text-xl font-bold">New Revenue for Providers</h3>
            </div>
            <div className="bg-[#2d76b8] text-white p-8 rounded-lg flex items-center justify-center text-center h-40">
              <h3 className="text-xl font-bold">Improve Patient Satisfaction</h3>
            </div>
            <div className="bg-[#2d76b8] text-white p-8 rounded-lg flex items-center justify-center text-center h-40">
              <h3 className="text-xl font-bold">Monitor Patient Remotely</h3>
            </div>
            <div className="bg-[#2d76b8] text-white p-8 rounded-lg flex items-center justify-center text-center h-40">
              <h3 className="text-xl font-bold">Risk Stratification</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Reinventing Recovery Care Management */}
      {/* <section className="py-16 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Reinventing Recovery Care Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg"
                  alt="AI-Computer Vision"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">AI-Computer Vision</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg"
                  alt="Prescribe Home Exercise Videos"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">Prescribe Home Exercise Videos</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image
                  src="/placeholder.svg"
                  alt="Remote Therapeutic Monitoring"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold">Remote Therapeutic Monitoring</h3>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <Image src="/placeholder.svg" alt="Post-Recovery" width={150} height={150} className="rounded-lg" />
              </div>
              <h3 className="text-lg font-semibold">Post-Recovery</h3>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      
    </main>
    <Footer/>
    </>
  )
}
