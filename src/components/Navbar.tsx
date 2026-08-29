"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation links definition
  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Why Paper Bags", href: "/why-paper-bags" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "py-4 bg-[#050505]/85 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
              <Image
                src="/logo.png"
                alt="Diarch Marketing Logo"
                width={40}
                height={40}
                priority
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className="text-xl md:text-2xl font-semibold tracking-tighter text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Diarch Marketing
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium transition-colors duration-300 hover:text-white ${isActive ? "text-[#FF4500]" : "text-gray-400"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Link (Desktop) & Menu Toggle (Mobile) */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest bg-white text-black hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </Link>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-[#FF4500] p-1 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Tablet Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center transition-all duration-500 ${isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center space-y-6 text-center">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl font-bold font-serif ${pathname === "/" ? "text-[#FF4500]" : "text-white"
              }`}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-2xl font-bold font-serif transition-colors duration-300 hover:text-[#FF4500] ${isActive ? "text-[#FF4500]" : "text-white/70"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-[#FF4500] text-black hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
