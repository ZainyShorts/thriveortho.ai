"use client"

import { useState } from "react"
import { Check, X, Shield, RotateCcw, Accessibility, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Header from "../component/Header"
import Footer from "../component/Footer"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const features = [
    { name: "Admin Control", engage: true, rtm: true },
    { name: "Organization Account", engage: false, rtm: true },
    { name: "Compliance Tracking", engage: true, rtm: true },
    { name: "Home Exercise Programs", engage: true, rtm: true },
    { name: "Unlimited Free Video Visits", engage: true, rtm: true },
    { name: "RTM Dashboard", engage: false, rtm: true },
    { name: "RTM Billing", engage: false, rtm: true },
    { name: "Additional Provider", engage: "$29/seat/month", rtm: "Free Engage" },
  ]

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose a plan that's right for you</h1>
          <p className="text-lg text-gray-600 mb-8">
            Choose a plan that fits your need and upgrade your account to premium today! Also, get a{" "}
            <span className="font-semibold">14-day FREE trial</span>.
          </p>

          {/* Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <RotateCcw className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-[#0473B9] rounded-full flex items-center justify-center">
              <Accessibility className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
              <FolderOpen className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm ${!isAnnual ? "font-semibold" : "text-gray-500"}`}>Monthly</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span className={`text-sm ${isAnnual ? "font-semibold" : "text-gray-500"}`}>Annually</span>
          </div>

          {isAnnual && (
            <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              Save up to 50% when pay annually
            </div>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Engage Plan */}
          <Card className="relative border-2 border-[#0473B9]">
            <div className="absolute -top-3 left-4">
              <Badge className="bg-[#0473B9] text-white">RECOMMENDED ✓</Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Engage</CardTitle>
              <CardDescription>Best for organizations or clinics with multiple providers.</CardDescription>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">{isAnnual ? "299" : "49"}</span>
                <span className="text-gray-500">USD/{isAnnual ? "year" : "month"}</span>
                {isAnnual && (
                  <Badge variant="destructive" className="ml-2">
                    Save $289
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span>• Everything in Telehealth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Care Team & Referral</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Outcomes & Compliance Tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Ready-to-use HEPs</span>
                </li>
                <li className="text-gray-600">
                  <div>Additional Provider:</div>
                  <div className="ml-4">
                    <div>○ $29/seat/month</div>
                    <div>○ $199/seat/year</div>
                  </div>
                </li>
              </ul>
              <Button className="w-full bg-[#0473B9] hover:bg-blue-700">Start Your Free Trial Now</Button>
            </CardContent>
          </Card>

          {/* RTM Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">RTM</CardTitle>
              <CardDescription>Best for organizations or clinics with multiple providers.</CardDescription>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-green-500">FREE</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <span>• Everything in Engage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Pay-per-patient</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• RTM Reimbursement Guaranteed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Automated RTM Dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• RTM Billing Documentation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>• Unlimited Providers</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Compare Plans Link */}
        <div className="text-center mb-16">
          <button className="text-[#0473B9] hover:text-blue-700 font-medium">Compare all plans</button>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Full Feature Breakdown</h2>
            <p className="text-lg text-gray-600">Compare the features & benefits of each plan and choose best.</p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-gray-100 p-6 border-b">
                <div></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Engage</h3>
                  <p className="text-sm text-gray-600">Best for organizations or clinics with multiple providers.</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">RTM</h3>
                  <p className="text-sm text-gray-600">Best for organizations or clinics with multiple providers.</p>
                </div>
              </div>

              {/* Table Rows */}
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className={`grid grid-cols-3 p-4 border-b ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                >
                  <div className="font-medium">{feature.name}</div>
                  <div className="text-center">
                    {typeof feature.engage === "boolean" ? (
                      feature.engage ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-sm">{feature.engage}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof feature.rtm === "boolean" ? (
                      feature.rtm ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )
                    ) : (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        {feature.rtm}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}

              {/* Table Footer */}
              <div className="grid grid-cols-3 p-6 bg-gray-50">
                <div></div>
                <div className="text-center">
                  <Button className="bg-[#0473B9] hover:bg-blue-700">Start Your Free Trial Now</Button>
                </div>
                <div className="text-center">
                  <Button variant="outline">Contact Sales</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Section */}
        <Card className="bg-[#0473B9] text-white max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Larger Organization?</h3>
                <p className="text-blue-100">
                  Get a custom plan for your organization with dedicated support and features tailored to your
                  requirements.
                </p>
              </div>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#0473B9] whitespace-nowrap"
              >
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <Footer/>
    </>
  )
}
