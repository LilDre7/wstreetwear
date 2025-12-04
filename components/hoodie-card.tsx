"use client"

import Image from "next/image"
import { useState, useRef, useEffect, memo } from "react"
import { useCart } from "@/contexts/cart-context"
import { ArrowRight } from "lucide-react"
import gsap from "gsap"
import type { Product } from "@/types/product"

interface HoodieCardProps extends Product {}

export const HoodieCard = memo(function HoodieCard({
  id,
  name,
  price,
  image1,
  image2,
  colors = ["black", "gray"],
}: HoodieCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { addItem, openCart } = useCart()
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const card = cardRef.current

    const ctx = gsap.context(() => {
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.01,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      card.addEventListener("mouseenter", handleMouseEnter)
      card.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter)
        card.removeEventListener("mouseleave", handleMouseLeave)
      }
    })

    return () => {
      ctx.revert()
    }
  }, [])

  const handleCardClick = () => {
    addItem({
      id,
      name,
      price,
      image: image1,
    })
    openCart()
  }

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white border-4 border-black aspect-square cursor-pointer overflow-hidden transition-all"
    >
      {/* Product Info - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-xs md:text-sm font-medium text-black tracking-wide">{name}</h3>
          <ArrowRight className="w-3 h-3 text-black" />
        </div>
        <p className="text-xs text-gray-600">${price.toFixed(0)}</p>

        {/* Color Variants Dots */}
        <div className="flex gap-1.5 mt-2">
          {colors.slice(0, 2).map((color, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Centered Product Image */}
      <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
        <div className="relative w-full h-full">
          <Image
            src={isHovered ? image2 : image1}
            alt={name}
            fill
            className="object-contain transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={id <= 2}
          />
        </div>
      </div>

      {/* Hover Overlay Effect */}
      {isHovered && <div className="absolute inset-0 bg-black/5 pointer-events-none" />}
    </div>
  )
})
