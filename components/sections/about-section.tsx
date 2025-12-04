"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function AboutSection() {
  const aboutSectionRef = useRef<HTMLElement>(null)
  const ribbon1Ref = useRef<HTMLDivElement>(null)
  const ribbon2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ribbon1Ref.current) {
        gsap.to(ribbon1Ref.current, {
          x: 100,
          duration: 3, // Reduced duration from 8 to 3 seconds for faster animation
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      }

      if (ribbon2Ref.current) {
        gsap.to(ribbon2Ref.current, {
          x: -100,
          duration: 4, // Reduced duration from 10 to 4 seconds for faster animation
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      }
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={aboutSectionRef}
      id="about-section"
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute top-10 left-10 w-12 h-12 rounded-full border-2 border-white/20" />
      <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full border-2 border-white/20" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Streetwear.</span>
            <span className="text-gray-400">Quality.</span>
            <span className="text-gray-500">Style.</span>
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 text-white">Urban Collection.</h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-4 text-gray-300">&More</h2>
        </div>
      </div>

      <div
        ref={ribbon1Ref}
        className="absolute top-[15%] -right-20 rotate-[25deg] bg-white/10 backdrop-blur-sm h-12 min-w-[600px]"
      />

      <div
        ref={ribbon2Ref}
        className="absolute bottom-[25%] -left-20 rotate-[25deg] bg-gray-800/40 backdrop-blur-sm h-12 min-w-[600px]"
      />
    </section>
  )
}
