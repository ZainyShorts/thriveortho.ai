import Footer from "@/app/component/Footer";
import Header from "@/app/component/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Monitor,
  MessageSquare,
  CreditCard,
  CheckCircle,
} from "lucide-react";

function page() {
  return (
    <div>
      {" "}
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                {/* <div className="w-6 h-6 bg-blue-600 rounded mr-2"></div> */}
                <Image src="/images/logo.png" width={200} height={20} alt="" />

              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Comprehensive Patient Engagement Solution
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Intelligent technology to improve patient outcomes, reduce
                costs, and enhance care delivery
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/Rtm-header_zydqom.webp"
                  alt="Thriveortho Platform Dashboard"
                  width={600}
                  height={400}
                  // className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">
                  New Patient Referrals and Intake
                </h2>
                <p className="text-blue-100 max-w-2xl">
                  Seamlessly integrate new patient referral from healthcare,
                  surgery groups and other physician-based clinics. We offer a
                  Turn-key Remote Therapeutic Monitoring (RTM) billing
                  capability, a HIPAA-compliant web-based portal and smartphone
                  app, home exercise programs spanning over 1,000 COPD-19.
                </p>
              </div>
              <Button
                variant="secondary"
                size="lg"
                className="whitespace-nowrap"
              >
                Enroll New Patients Now
              </Button>
            </div>
          </div>
        </section>

        {/* RTM Codes Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get over $160 per Patient monthly Reimbursement through RTM
                Codes from CMS and Commercial Payers
              </h2>
              <p className="text-gray-600 max-w-4xl mx-auto">
                CMS introduced RTM codes in 2022 to encourage continuous of care
                for patients with CMS issues potentially making providers
                generate an additional revenue of up to $160 per patient, per
                episode of care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Badge className="mb-4 bg-teal-100 text-teal-800">
                    SETUP
                  </Badge>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98975 <span className="text-lg font-normal">$18.38</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remote therapeutic monitoring setup and patient education;
                    initial set-up and patient education on use of equipment
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Badge className="mb-4 bg-orange-100 text-orange-800">
                    DEVICE
                  </Badge>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98977 <span className="text-lg font-normal">$55.77</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    RTM device(s) supply with daily recording or programmed
                    alert(s) transmission to monitor respiratory system
                    including, but not limited to, peak expiratory flow rate
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Badge className="mb-4 bg-blue-100 text-blue-800">
                    TREATMENT
                  </Badge>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98980 <span className="text-lg font-normal">$50.16</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remote therapeutic monitoring treatment management services,
                    physician or other qualified healthcare professional time in
                    a calendar month requiring at least 20 minutes
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Badge className="mb-4 bg-purple-100 text-purple-800">
                    ADDITIONAL
                  </Badge>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    98981 <span className="text-lg font-normal">$40.84</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Remote therapeutic monitoring treatment management services,
                    physician or other qualified healthcare professional time in
                    a calendar month; each additional 20 minutes
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-gray-500">
              *Reimbursement amounts listed are a national average based on CMS
              2023 and may vary by payer and are subject to geographic
              variation.
            </p>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              4 Steps to get RTM reimbursement
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  1. Prescribe
                </h3>
                <p className="text-gray-600">
                  Prescribe from within system clinical document, ordering, and
                  care plan capabilities to drive patient engagement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  2. Monitor
                </h3>
                <p className="text-gray-600">
                  Evaluate patient records and examine data and complete
                  documentation for reimbursement.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  3. Engage
                </h3>
                <p className="text-gray-600">
                  Connect with the patient through appropriate to secure
                  messaging for clinical guidance and support.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  4. Bill
                </h3>
                <p className="text-gray-600">
                  Qualifying documentation for insurance and collect payments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Exercise Programs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Home Exercise Programs (HEPs)
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Comprehensive HEP library from 1,000+ exercises videos
                      covering COPD conditions
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Automatically assigned patient adherence to the prescribed
                      HEP exercises
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Biometric and satisfaction surveys to keep the patients
                      engaged and/or track with their treatment
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/youga-mat.webp"
                  alt="Person doing home exercises"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Artificial Intelligence */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/videocall-rom_xucwbe.webp"
                  alt="AI Interface"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Artificial Intelligence
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      AI-powered tool virtually measuring Range of Motion (ROM)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Easy record-keeping of ROM measurements stored in PDF file
                      format or video files
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Continuous assessment of improvement in mobility
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Visits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Video Visits
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Secure video & audio interface that ensures the privacy of
                      all records
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      AI-powered Patient Assessment tool to monitor patient
                      progress
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Native Exercise Programs and Therapies delivered digitally
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/videocall-room.webp"
                  alt="Video call interface"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* RTM Billing Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/rtm-bill.webp"
                  alt="Billing dashboard"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  RTM Billing Support
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Automatic collection of RTM data
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Streamlined compliance tracking
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Documentation support for RTM billing
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      RTM Dashboard for monitor code release background and
                      completion level for each patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Reported Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Patient Reported Outcomes
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Automated collection of patient reported outcome measures
                      (PROMs)
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Regular patient engagement</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Timely alerts for providers</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/images/survery-materials.webp"
                  alt="Patient outcomes dashboard"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Care Coordination */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/care-referral.webp"
                  alt="Care coordination interface"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Care Coordination
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Better care coordination between providers and caregivers
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Smooth sharing of data with other specialists to ease
                      transitions of care
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">
                      Care management with pediatric family members to ensure
                      better outcomes for patients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-[#0473B9] ">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Seamless RTM</h2>
            <h3 className="text-2xl font-semibold text-white mb-8">
              Reimbursement with No-Upfront Fees
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default page;
