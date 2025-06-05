import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-36 h-20 ">
              <Image src="/images/logo.png" width={100} height={20} alt="" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#0473B9]">
              Home
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
                Solutions
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/providers"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                  >
                    For Providers
                  </Link>
                  <Link
                    href="/employers"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                  >
                    For Employers
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
                Products
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/products/thriveortho-engage"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                  >
                    ThriveorthoEngage
                  </Link>
                  <Link
                    href="/products/thriveortho-3d-scan"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                  >
                    Thriveortho3DScan
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/pricing"
              className="text-gray-700 hover:text-[#0473B9]"
            >
              Pricing
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
                Resources
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                  >
                    Blog
                  </Link>
                  {/* <Link
                      href="/resources/case-studies"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                    >
                      Case Studies
                    </Link> */}
                  {/* <Link
                      href="/resources/whitepapers"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
                    >
                      Whitepapers
                    </Link> */}
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#0473B9]">
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#0473B9]"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              variant="outline"
              className="text-[#0473B9] border-[#0473B9] hover:bg-blue-50"
            >
              <Link href="/signup">SIGN UP</Link>
            </Button>
            <Button
              asChild
              className="bg-[#0473B9] cursor-pointer hover:bg-blue-700"
            >
              <Link href="/login">LOG IN</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header