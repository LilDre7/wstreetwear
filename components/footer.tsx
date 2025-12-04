"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="relative w-full bg-black text-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Left: Brand */}
          <div className="md:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold italic tracking-tight">VLOM.UST</h2>
          </div>

          {/* Center: Navigation */}
          <div className="md:col-span-4 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-lime-400 transition-colors text-sm uppercase tracking-wider"
            >
              [ HOME ]
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-lime-400 transition-colors text-sm uppercase tracking-wider"
            >
              ABOUT
            </Link>
            <Link
              href="/testimonials"
              className="block text-white hover:text-lime-400 transition-colors text-sm uppercase tracking-wider"
            >
              TESTIMONIALS
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-lime-400 transition-colors text-sm uppercase tracking-wider"
            >
              CONTACT
            </Link>
            <Link
              href="/store"
              className="block text-white hover:text-lime-400 transition-colors text-sm uppercase tracking-wider"
            >
              STORE
            </Link>
          </div>

          {/* Right: Newsletter Signup */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              SIGN UP
              <br />
              TO OUR
              <br />
              NEWSLETTER
            </h3>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR EMAIL"
                className="w-full bg-slate-100 text-black placeholder-black/60 px-6 py-4 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-lime-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-lime-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-zinc-900 transition-colors"
              >
                ↗
              </button>
            </form>
          </div>
        </div>

        {/* Large Brand Text */}
        <div className="my-12 md:my-16">
          <h2
            className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black italic leading-none text-white whitespace-nowrap"
            style={{
              transform: "skewY(-2deg)",
              letterSpacing: "-0.03em",
            }}
          >
            VLOM.UST
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10 text-xs">
          {/* Copyright */}
          <div className="space-y-1">
            <p className="text-white uppercase tracking-wider">© VLOM.UST /</p>
            <p className="text-white uppercase tracking-wider">ALL RIGHTS RESERVED</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 uppercase tracking-wider">
            <Link href="/shipping" className="text-white hover:text-lime-400 transition-colors">
              SHIPPING
            </Link>
            <Link href="/handling" className="text-white hover:text-lime-400 transition-colors">
              HANDLING
            </Link>
            <Link href="/disclaimer" className="text-white hover:text-lime-400 transition-colors">
              DISCLAIMER
            </Link>
            <Link href="/offer" className="text-white hover:text-lime-400 transition-colors">
              PUBLIC OFFER
            </Link>
          </div>

          {/* Social */}
          <div className="flex gap-6 uppercase tracking-wider">
            <Link href="#" className="text-slate-100 hover:text-lime-300 transition-colors">
              FACEBOOK
            </Link>
            <Link href="#" className="text-slate-100 hover:text-lime-300 transition-colors">
              INSTAGRAM
            </Link>
          </div>

          {/* Design Credit */}
          <div className="text-right space-y-1">
            <p className="text-white uppercase tracking-wider">DESIGN BY</p>
            <p className="text-white uppercase tracking-wider font-semibold underline">VLOM.UST STUDIO</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
