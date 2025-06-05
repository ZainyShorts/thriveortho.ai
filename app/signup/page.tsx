"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Info } from "lucide-react"
import { useState } from "react"

export default function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    phoneNumber: "",
    countryCode: "us",
    country: "us",
    referralCode: "",
    agreeToTerms: false,
  })

  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasNumber: false,
    hasSpecialChar: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const checkPasswordRequirements = (password: string) => {
    setPasswordRequirements({
      minLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%&?]/.test(password),
    })
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Required field validations
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (
      !passwordRequirements.minLength ||
      !passwordRequirements.hasNumber ||
      !passwordRequirements.hasSpecialChar
    ) {
      newErrors.password = "Password must meet all requirements"
    }
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.referralCode.trim()) newErrors.referralCode = "Referral code is required"
    if (!formData.agreeToTerms) newErrors.terms = "You must agree to the terms and conditions"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

    // Special handling for password
    if (field === "password" && typeof value === "string") {
      checkPasswordRequirements(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Form submitted:", formData)
      // Here you would typically send the data to your backend
      alert("Account created successfully!")
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md space-y-6">
          {/* Logo and Branding */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-32 h-12 rounded-full flex items-center justify-center">
                <img src={"/images/logo.png"} alt="Logo" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Thrive<span className="text-blue-600">ortho.ai</span>
                </h1>
                <p className="text-xs text-gray-600 tracking-wider">MOVEMENT AS MEDICINE</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Create Your Account</h2>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && <p className="text-xs text-red-500">{errors.firstName}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && <p className="text-xs text-red-500">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  className={`w-full px-3 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>

              {/* Password Requirements */}
              <div className="space-y-1 text-xs text-gray-500">
                <div
                  className={`flex items-center space-x-2 ${passwordRequirements.minLength ? "text-green-600" : ""}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordRequirements.minLength ? "bg-green-600 border-green-600" : "border-gray-300"}`}
                  >
                    {passwordRequirements.minLength && <span className="text-white text-xs">✓</span>}
                  </span>
                  <span>8 characters minimum</span>
                </div>
                <div
                  className={`flex items-center space-x-2 ${passwordRequirements.hasNumber ? "text-green-600" : ""}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordRequirements.hasNumber ? "bg-green-600 border-green-600" : "border-gray-300"}`}
                  >
                    {passwordRequirements.hasNumber && <span className="text-white text-xs">✓</span>}
                  </span>
                  <span>One number</span>
                </div>
                <div
                  className={`flex items-center space-x-2 ${passwordRequirements.hasSpecialChar ? "text-green-600" : ""}`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${passwordRequirements.hasSpecialChar ? "bg-green-600 border-green-600" : "border-gray-300"}`}
                  >
                    {passwordRequirements.hasSpecialChar && <span className="text-white text-xs">✓</span>}
                  </span>
                  <span>One special character (Allowed Characters: !@#$%&?)</span>
                </div>
              </div>
              {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Gender and Date of Birth */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gender" className="text-sm font-medium text-gray-700">
                  Gender <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger className={`w-full ${errors.gender ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-xs text-red-500">{errors.gender}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-sm font-medium text-gray-700">
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  required
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                  placeholder="dd/mm/yyyy"
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dateOfBirth && <p className="text-xs text-red-500">{errors.dateOfBirth}</p>}
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number (Optional)
              </Label>
              <div className="flex">
                <Select value={formData.countryCode} onValueChange={(value) => handleInputChange("countryCode", value)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">US (+1)</SelectItem>
                    <SelectItem value="ca">CA (+1)</SelectItem>
                    <SelectItem value="uk">UK (+44)</SelectItem>
                    <SelectItem value="au">AU (+61)</SelectItem>
                    <SelectItem value="de">DE (+49)</SelectItem>
                    <SelectItem value="fr">FR (+33)</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="flex-1 ml-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* Country and Referral Code */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium text-gray-700">
                  Country <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger className={`w-full ${errors.country ? "border-red-500" : ""}`}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && <p className="text-xs text-red-500">{errors.country}</p>}
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  <Label htmlFor="referralCode" className="text-sm font-medium text-gray-700">
                    Referral Code <span className="text-red-500">*</span>
                  </Label>
                  <Info className="h-3 w-3 text-gray-400" />
                </div>
                <Input
                  id="referralCode"
                  type="text"
                  required
                  value={formData.referralCode}
                  onChange={(e) => handleInputChange("referralCode", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.referralCode ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.referralCode && <p className="text-xs text-red-500">{errors.referralCode}</p>}
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  className="mt-1"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                />
                <div className="text-xs text-gray-600 leading-relaxed">
                  <Label htmlFor="terms" className="cursor-pointer">
                    I agree to receive promotional messages from Thrive Ortho AI up to 10 msgs/month. This agreement
                    isn't a condition of any purchase. I also agree to the{" "}
                    <Link href="/terms" className="text-blue-600 hover:text-blue-800 underline">
                      Terms of Use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">
                      Privacy Policy
                    </Link>
                    . Msg & Data rates may apply. By submitting this form, I agree that my mobile information will not
                    be shared with third parties/affiliates for marketing/promotional purposes. All the above categories
                    exclude my text messaging originator opt-in date and consent; this information will not be shared
                    with any third parties, except for the necessary opt-in data required to facilitate the SMS service.
                    Text STOP to opt-out Text HELP for assistance.{" "}
                    <Link href="mailto:support@thriveortho.ai" className="text-blue-600 hover:text-blue-800 underline">
                      support@thriveortho.ai
                    </Link>
                  </Label>
                </div>
              </div>
              {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0473B9] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200"
            >
              Continue
            </Button>
          </form>

          {/* Sign In Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {"Already have an account? "}
              <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
