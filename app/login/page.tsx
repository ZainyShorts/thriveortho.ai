import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Background Image */}
      <div
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550831107-1553da8c8464?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        {/* Optional overlay for better contrast if needed */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo and Branding */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-32 h-12  rounded-full flex items-center justify-center">
                {/* <div className="w-4 h-4 bg-white rounded-full"></div> */}
                <img src={'/images/logo.png'} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Thrive<span className="text-blue-600">ortho.ai</span>
                </h1>
                <p className="text-xs text-gray-600 tracking-wider">MOVEMENT AS MEDICINE</p>
              </div>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8">Welcome to Patient Portal</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Username/Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </Label>
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 underline">
                  Forgot Password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#0473B9] text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
            >
              SIGN IN
            </Button>
          </form>

          {/* Create Account Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {"Don't have an account? "}
              <Link href="/signup" className="text-blue-600 hover:text-blue-800 underline">
                Create one
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 space-y-1 pt-8">
            <p>Copyright © 2021 All rights reserved by Somatic Health Inc.</p>
            <div className="space-x-4">
              <Link href="/terms" className="hover:text-gray-700 underline">
                Terms of Use
              </Link>
              <span>and</span>
              <Link href="/privacy" className="hover:text-gray-700 underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
