'use client'
import { useState } from "react";
import Image from "next/image";
import logo from "../app/public/imgs/Final.png";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "@heroicons/react/outline"; // Example icons from Heroicons

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <div className="hidden md:flex gap-10">
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Home
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Services
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                About
              </h1>
              <h1 className="cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Contact Us
              </h1>
            </div>

            {/* Book a Call Button - hidden on small screens */}
            <Button className="hidden sm:inline-flex rounded-full px-auto py-4 w-32 h-12 bg-primaryColor hover:bg-secondaryColor text-base text-white z-10">
              Book a Call
            </Button>
          </div>

          {/* Dropdown Menu for small and medium screens */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              <h1 className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Home
              </h1>
              <h1 className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Services
              </h1>
              <h1 className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                About
              </h1>
              <h1 className="block cursor-pointer text-textColor hover:text-hoverTextColor hover:underline">
                Contact Us
              </h1>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
