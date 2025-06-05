import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#0473B9] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6 rounded-full">
              <div className="w-32 h-20 rounded-full ">
                <img src={"./images/logo-bg.jpeg"} className="rounded-full" />
              </div>
            </div>
            <p className="text-sm text-blue-100 mb-4">MOVEMENT AS MEDICINE</p>
            <p className="text-blue-100">askme@thriveortho.ai</p>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Providers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Employers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  About Thriveortho Health
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  ThriveorthoEngage
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Thriveortho3DScan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  SMS Compliance: Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-100 hover:text-white">
                  SMS Compliance: Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            Copyright © 2024 All rights reserved by thriveortho
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer