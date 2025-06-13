// import { ChevronRight } from 'lucide-react'
// import React from 'react'
// import { Button } from "@/components/ui/button"
// import Link from 'next/link'
// import Image from 'next/image'
// const Header = () => {
//   return (
//     <header className="bg-white shadow-sm relative z-50">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-36 h-20 ">
//               <Image src="/images/logo.png" width={100} height={20} alt="" />
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="text-gray-700 hover:text-[#0473B9]">
//               Home
//             </Link>

//             <div className="relative group">
//               <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
//                 Solutions
//                 <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="py-2">
//                   <Link
//                     href="/providers"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                   >
//                     For Providers
//                   </Link>
//                   <Link
//                     href="/employers"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                   >
//                     For Employers
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
//                 Products
//                 <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="py-2">
//                   <Link
//                     href="/products/thriveortho-engage"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                   >
//                     ThriveorthoEngage
//                   </Link>
//                   <Link
//                     href="/products/thriveortho-3d-scan"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                   >
//                     Thriveortho3DScan
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <Link
//               href="/pricing"
//               className="text-gray-700 hover:text-[#0473B9]"
//             >
//               Pricing
//             </Link>

//             <div className="relative group">
//               <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
//                 Resources
//                 <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
//               </button>
//               <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//                 <div className="py-2">
//                   <Link
//                     href="/blog"
//                     className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                   >
//                     Blog
//                   </Link>
//                   {/* <Link
//                       href="/resources/case-studies"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                     >
//                       Case Studies
//                     </Link> */}
//                   {/* <Link
//                       href="/resources/whitepapers"
//                       className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]"
//                     >
//                       Whitepapers
//                     </Link> */}
//                 </div>
//               </div>
//             </div>

//             <Link href="/about" className="text-gray-700 hover:text-[#0473B9]">
//               About Us
//             </Link>
//             <Link
//               href="/contact"
//               className="text-gray-700 hover:text-[#0473B9]"
//             >
//               Contact Us
//             </Link>
//           </nav>

//           <div className="flex items-center space-x-4">
//             <Button
//               asChild
//               variant="outline"
//               className="text-[#0473B9] border-[#0473B9] hover:bg-blue-50"
//             >
//               <Link href="/signup">SIGN UP</Link>
//             </Button>
//             <Button
//               asChild
//               className="bg-[#0473B9] cursor-pointer hover:bg-blue-700"
//             >
//               <Link href="/login">LOG IN</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header


"use client"

import { ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const ResponsiveHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setOpenDropdown(null)
  }

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-36 h-20 ">
              <Image src="/images/logo.png" width={100} height={20} alt="Logo" />
            </div>
          </div>

          {/* Desktop Navigation */}
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

            <Link href="/pricing" className="text-gray-700 hover:text-[#0473B9]">
              Pricing
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-[#0473B9] flex items-center">
                Resources
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:rotate-90 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-[#0473B9]">
                    Blog
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-gray-700 hover:text-[#0473B9]">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0473B9]">
              Contact Us
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline" className="text-[#0473B9] border-[#0473B9] hover:bg-blue-50">
              <Link href="/signup">SIGN UP</Link>
            </Button>
            <Button asChild className="bg-[#0473B9] cursor-pointer hover:bg-blue-700">
              <Link href="/login">LOG IN</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-[#0473B9] focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link href="/" className="text-gray-700 hover:text-[#0473B9] py-2" onClick={toggleMenu}>
                Home
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#0473B9] py-2"
                >
                  <span>Solutions</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${openDropdown === "solutions" ? "rotate-90" : ""}`}
                  />
                </button>
                {openDropdown === "solutions" && (
                  <div className="pl-4 mt-2 border-l-2 border-gray-100">
                    <Link
                      href="/providers"
                      className="block py-2 text-gray-700 hover:text-[#0473B9]"
                      onClick={toggleMenu}
                    >
                      For Providers
                    </Link>
                    <Link
                      href="/employers"
                      className="block py-2 text-gray-700 hover:text-[#0473B9]"
                      onClick={toggleMenu}
                    >
                      For Employers
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#0473B9] py-2"
                >
                  <span>Products</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${openDropdown === "products" ? "rotate-90" : ""}`}
                  />
                </button>
                {openDropdown === "products" && (
                  <div className="pl-4 mt-2 border-l-2 border-gray-100">
                    <Link
                      href="/products/thriveortho-engage"
                      className="block py-2 text-gray-700 hover:text-[#0473B9]"
                      onClick={toggleMenu}
                    >
                      ThriveorthoEngage
                    </Link>
                    <Link
                      href="/products/thriveortho-3d-scan"
                      className="block py-2 text-gray-700 hover:text-[#0473B9]"
                      onClick={toggleMenu}
                    >
                      Thriveortho3DScan
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/pricing" className="text-gray-700 hover:text-[#0473B9] py-2" onClick={toggleMenu}>
                Pricing
              </Link>

              <div>
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-[#0473B9] py-2"
                >
                  <span>Resources</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${openDropdown === "resources" ? "rotate-90" : ""}`}
                  />
                </button>
                {openDropdown === "resources" && (
                  <div className="pl-4 mt-2 border-l-2 border-gray-100">
                    <Link href="/blog" className="block py-2 text-gray-700 hover:text-[#0473B9]" onClick={toggleMenu}>
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-[#0473B9] py-2" onClick={toggleMenu}>
                About Us
              </Link>

              <Link href="/contact" className="text-gray-700 hover:text-[#0473B9] py-2" onClick={toggleMenu}>
                Contact Us
              </Link>

              <div className="flex flex-col space-y-3 pt-2">
                <Button asChild variant="outline" className="text-[#0473B9] border-[#0473B9] hover:bg-blue-50 w-full">
                  <Link href="/signup" onClick={toggleMenu}>
                    SIGN UP
                  </Link>
                </Button>
                <Button asChild className="bg-[#0473B9] cursor-pointer hover:bg-blue-700 w-full">
                  <Link href="/login" onClick={toggleMenu}>
                    LOG IN
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default ResponsiveHeader
