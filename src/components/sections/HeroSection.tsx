"use client";

import Image from "next/image";
import { useState } from "react";

const NAV_ITEMS = [
  {
    label: "TRANG CHỦ",
    href: "#hero",
  },
  {
    label: "BÁN CHẠY NHẤT",
    href: "#product",
  },
  {
    label: "RƯỢU CAO CẤP ",
    href: "#product",
  },
  {
    label: "LIÊN HỆ",
    href: "#footer",
  },
];

export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="hero" className="relative">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm h-[60px] sm:h-[70px] md:h-[84px]"
        style={{ backgroundImage: "url('/bg/header.png')" }}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0 z-10" onClick={(e) => handleNavClick(e, 'hero')}>
              <Image
                src="/logo/logo.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[72.68px] md:h-[72px] md:translate-x-5 lg:translate-x-20"
              />
            </div>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex space-x-[20px] lg:space-x-[30px] items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[#FCF19D] hover:text-[#fff] transition-colors duration-200 text-[16px] lg:text-[20px] font-regular whitespace-nowrap cursor-pointer"
                  tabIndex={0}
                  aria-label={item.label}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none focus:ring-2 focus:ring-[#FCF19D] rounded"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}
            >
              <span
                className={`block w-6 h-0.5 bg-[#FCF19D] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#FCF19D] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`block w-6 h-0.5 bg-[#FCF19D] mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a]/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="container mx-auto px-4 py-4">
            {NAV_ITEMS.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-[#FCF19D] hover:text-[#fff] hover:bg-white/10 transition-all duration-200 text-[16px] sm:text-[18px] font-regular py-3 px-4 rounded-lg cursor-pointer"
                tabIndex={0}
                aria-label={item.label}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </section>
  );
}

