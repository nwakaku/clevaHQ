"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { href: "/syreos" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActiveLink = (href: string) => {
    if (!mounted) return false;

    if (href === "/projects") {
      return (
        pathname === "/projects" ||
        pathname === "/syre" ||
        pathname === "/reacher" ||
        pathname === "/qwik"
      );
    }
    return pathname === href;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                alt="img"
                height={80}
                width={80}
                src="/clevaLogo.svg"
                className="sm:h-[120px] sm:w-[120px] w-[80px] h-[80px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 lg:space-x-16">
              {navItems.map(
                (item) =>
                  item.label && (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-gray-100 hover:text-[#DBFB8E] transition-colors duration-300 text-base font-medium relative
                        after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] 
                        after:bg-[#DBFB8E] after:transition-transform after:duration-300
                        ${
                          isActiveLink(item.href)
                            ? " after:scale-x-100"
                            : "after:scale-x-0 hover:after:scale-x-100"
                        }`}>
                      {item.label}
                    </Link>
                  )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              className="text-[#DBFB8E] font-bold hover:text-white p-2"
              variant="light"
              isIconOnly
              onClick={toggleMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "min-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
        <div className="px-4 pt-2 pb-3 space-y-2 bg-black/50 backdrop-blur-md">
          {navItems.map(
            (item) =>
              item.label && (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2 text-base font-medium transition-colors duration-300 relative
                    ${
                      isActiveLink(item.href)
                        ? " after:scale-x-100"
                        : "text-gray-300 hover:text-[#DBFB8E] after:scale-x-0 hover:after:scale-x-100"
                    }
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                    after:bg-[#DBFB8E] after:transition-transform after:duration-300`}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
