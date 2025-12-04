"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { HoodieCard } from "@/components/hoodie-card"
import { PRODUCTS } from "@/lib/constants"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function ProductsSection() {
  const productCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (productCardsRef.current) {
        const cards = productCardsRef.current.querySelectorAll(".product-card")
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: productCardsRef.current,
              start: "top 85%",
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
    <section id="product-section" className="w-full py-12 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-4 md:grid-cols-6 gap-0 max-w-5xl mx-auto border-2 border-black">
            <div className="col-span-2 md:col-span-3 border-r-2 border-b-2 border-black bg-white p-4 md:p-6 flex items-center justify-center">
              <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">NEW</span>
            </div>
            <div className="col-span-2 md:col-span-3 border-b-2 border-black bg-zinc-100 p-4 md:p-6 flex items-center justify-center">
              <span
                className="text-xl md:text-3xl lg:text-4xl font-light italic text-black"
                style={{ fontFamily: "Georgia, serif" }}
              >
                COLLECTION
              </span>
            </div>
          </div>
        </div>

        <div ref={productCardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="product-card">
              <HoodieCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
