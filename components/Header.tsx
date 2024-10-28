'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../app/public/imgs/Final.png";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Example icons from Heroicons
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <header className="w-full px-5">
        <div className="container mx-auto my-4">
          <div className="flex flex-row justify-between items-center">
            {/* Hamburger Menu for small and medium screens */}
            <div className="flex md:hidden">
              {isMenuOpen ? (
                <XIcon
                  className="h-6 w-6 text-textColor cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <MenuIcon
                  className="h-6 w-6 text-textColor cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>

            {/* Logo in the center on small and medium screens */}
            <div className="flex-grow text-center flex justify-center md:flex-grow-0">
              <Image src={logo} alt="Logo" width={128} height={54} />
            </div>

            {/* Navigation links - hidden on small screens, visible on medium and above */}
            <div className="hidden md:flex gap-10 items-center">
              <Link href='/' className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Home
              </Link>
              <div className="relative">
                <button
                  className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline"
                  onClick={toggleServices}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md z-20 w-40">
                    <Link href='/services/amazon' className="block px-4 py-2 text-textColor hover:bg-gray-100" onClick={toggleServices}>
                      Amazon
                    </Link>
                    <Link href='/services/shopify' className="block px-4 py-2 text-textColor hover:bg-gray-100" onClick={toggleServices}>
                      Shopify
                    </Link>
                    <Link href='/services/tiktok' className="block px-4 py-2 text-textColor hover:bg-gray-100" onClick={toggleServices}>
                      TikTok
                    </Link>
                  </div>
                )}
              </div>
              <Link href='/about' className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                About
              </Link>
              <Link href='/contact-us' className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Contact Us
              </Link>
            </div>

            {/* Book a Call Button - hidden on small screens */}
            <Button className="hidden sm:inline-flex rounded-full px-auto py-4 w-32 h-12 bg-primaryColor hover:bg-secondaryColor text-base text-white z-10">
              Book a Call
            </Button>
          </div>

          {/* Dropdown Menu for small and medium screens */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <Link href='/' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Home
              </Link>
              <div className="block">
                <button
                  className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline"
                  onClick={toggleServices}
                >
                  Services
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <Link href='/services/amazon' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                      Amazon
                    </Link>
                    <Link href='/services/shopify' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                      Shopify
                    </Link>
                    <Link href='/services/tiktok' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                      TikTok
                    </Link>
                  </div>
                )}
              </div>
              <Link href='/about' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                About
              </Link>
              <Link href='/contact-us' className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
