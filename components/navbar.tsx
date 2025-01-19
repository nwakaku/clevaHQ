import React from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { href: "/syreos" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image
                alt="img"
                height={120}
                src={"/clevaLogo.svg"}
                width={120}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-[#DBFB8E] transition-colors duration-300 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button className="text-gray-300 hover:text-white" variant="light">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
