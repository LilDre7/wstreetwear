"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { totalItems, openCart } = useCart();

  const menuLinks = [
    { href: "#about-section", label: "ABOUT US" },
    { href: "#product-section", label: "SHOP" },
    { href: "#", label: "BLOG" },
    { href: "#", label: "PRICING" },
    { href: "#", label: "E-BOOK", badge: "NEW" },
    { href: "#", label: "CONTACT US" },
  ];

  const handleShopClick = () => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center w-full justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
                VLOM.UST
              </span>
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition-colors">
                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:bg-black" />
              </div>
            </Link>

            <div className="flex-1" />

            {/* Right Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Cart Icon */}
              <button
                onClick={openCart}
                className="relative text-white hover:text-zinc-400 transition-colors"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-6 h-6 text-gray-100" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </button>

              <Button
                variant="ghost"
                onClick={() => handleShopClick()}
                className="hidden sm:flex bg-white text-black hover:bg-zinc-200 font-medium px-4 md:px-6 h-9 md:h-10 rounded-full group text-sm"
              >
                SHOP NOW
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-zinc-400 transition-colors flex items-center gap-2"
                aria-label="Toggle menu"
              >
                <span className="hidden md:inline text-sm uppercase tracking-wider transition-transform duration-500 ease-in-out">
                  {isMenuOpen ? "Close" : "Menu"}
                </span>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black z-40 transform transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top Bar */}
        <div className="absolute top-0 left-0 right-0 border-b border-zinc-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
                  VLOM.UST
                </span>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-zinc-400 transition-colors flex items-center gap-2 md:gap-3"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="h-full flex flex-col pt-16 md:pt-20 pb-20 md:pb-24 overflow-y-auto">
          <div className="flex-1 flex items-center justify-center py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center">
                {/* Left Side - Large Text & Smiley */}
                <div className="relative">
                  <div className="space-y-2 md:space-y-4">
                    <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                      FIND DEVS
                    </h2>
                    <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                      FIND WORK
                    </h2>
                  </div>

                  {/* Smiley Face - Responsive sizing */}
                  <div className="absolute -right-4 sm:-right-8 lg:-right-12 top-1/2 -translate-y-1/2 opacity-30 lg:opacity-100">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full border-2 border-zinc-800 flex items-center justify-center">
                      <div className="flex gap-6 sm:gap-8 lg:gap-12 mb-4 sm:mb-6 lg:mb-8">
                        <div className="w-4 h-6 sm:w-6 sm:h-10 lg:w-8 lg:h-12 rounded-full border-2 border-zinc-700" />
                        <div className="w-4 h-6 sm:w-6 sm:h-10 lg:w-8 lg:h-12 rounded-full border-2 border-zinc-700" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Menu Panel */}
                <div className="w-full">
                  <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 lg:p-12">
                    <div className="flex items-center justify-between mb-8 lg:mb-12">
                      <span className="text-white text-xs sm:text-sm uppercase tracking-wider">
                        Menu
                      </span>
                      <div className="w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-white" />
                    </div>

                    <nav>
                      <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
                        {menuLinks.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight hover:text-zinc-400 transition-colors flex items-center gap-3"
                            >
                              {link.label}
                              {link.badge && (
                                <span className="bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded uppercase">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-800 mt-auto">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center justify-between gap-4 md:gap-6 py-4 md:py-6">
                <div className="flex flex-wrap gap-4 md:gap-6 text-white text-xs md:text-sm uppercase tracking-wider">
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    Site Policies
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    Help Desk
                  </Link>
                </div>

                <div className="flex flex-wrap gap-4 md:gap-6 text-white text-xs md:text-sm uppercase tracking-wider">
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-zinc-400 transition-colors"
                  >
                    Telegram
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-white text-xs md:text-sm">
                    VLOM.UST © 2025
                  </span>
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-lime-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
