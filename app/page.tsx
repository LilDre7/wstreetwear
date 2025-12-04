"use client"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { PRODUCTS } from "@/lib/constants"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { TypographySection } from "@/components/sections/typography-section"
import { ProductsSection } from "@/components/sections/products-section"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement>(null)
  const vlomTextRef = useRef<HTMLHeadingElement>(null)
  const ustTextRef = useRef<HTMLHeadingElement>(null)
  const productDisplayRef = useRef<HTMLDivElement>(null)
  const typographyRef = useRef<HTMLElement>(null)
  const productCardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section animations
      if (vlomTextRef.current && aboutSectionRef.current) {
        gsap.fromTo(
          vlomTextRef.current,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (ustTextRef.current && aboutSectionRef.current) {
        gsap.fromTo(
          ustTextRef.current,
          { x: 100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      if (productDisplayRef.current && aboutSectionRef.current) {
        gsap.fromTo(
          productDisplayRef.current,
          { y: 50, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: aboutSectionRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }

      // Typography section animations
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

      // Product cards animations
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
    <main className="relative flex flex-col items-center justify-between">
      <Navbar />
      <HeroSection />
      <AboutSection
        ref={aboutSectionRef}
        vlomTextRef={vlomTextRef}
        ustTextRef={ustTextRef}
        productDisplayRef={productDisplayRef}
      />
      <TypographySection ref={typographyRef} />
      <ProductsSection ref={productCardsRef} products={PRODUCTS} />
      <Footer />
    </main>
  )
}
