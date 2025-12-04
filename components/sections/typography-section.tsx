"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function TypographySection() {
  const typographyRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (typographyRef.current) {
        const cells = typographyRef.current.querySelectorAll(".typo-cell")
        gsap.fromTo(
          cells,
          { scale: 0, rotation: -5 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: typographyRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    })

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section ref={typographyRef} className="w-full py-16 md:py-24 bg-black">
      <div className="grid grid-cols-4 md:grid-cols-6 gap-0 border-2 border-white">
        <div className="typo-cell col-span-1 md:col-span-1 border-r-2 border-b-2 border-white bg-zinc-900 p-4 md:p-6 flex items-center justify-center">
          <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white">FACES</span>
        </div>
        <div className="typo-cell col-span-1 md:col-span-2 border-r-2 border-b-2 border-white bg-black p-4 md:p-6 flex items-center justify-center">
          <span
            className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            THAT
          </span>
        </div>
        <div className="typo-cell col-span-2 md:col-span-3 border-b-2 border-white bg-zinc-900 p-4 md:p-6 flex items-center justify-center">
          <span className="text-xl md:text-3xl lg:text-4xl font-bold text-white">PAINT</span>
        </div>
        <div className="typo-cell col-span-1 border-r-2 border-white bg-black p-4 md:p-6 flex items-center justify-center">
          <span
            className="text-2xl md:text-4xl lg:text-5xl font-light italic text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            A
          </span>
        </div>
        <div className="typo-cell col-span-2 md:col-span-3 border-r-2 border-white bg-zinc-900 p-4 md:p-6 flex items-center justify-center">
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">THOUSAND</span>
        </div>
        <div className="typo-cell col-span-1 md:col-span-2 border-white bg-black p-4 md:p-6 flex items-center justify-center">
          <span
            className="text-xl md:text-3xl lg:text-4xl font-light italic text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            WORDS!
          </span>
        </div>
      </div>
    </section>
  )
}
