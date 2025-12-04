"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { scale: 0.5, opacity: 0, rotation: -10 },
          { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "power3.out" },
        )
      }
    })

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          if (containerRef.current) {
            gsap.to(containerRef.current, {
              opacity: 0,
              scale: 1.1,
              duration: 0.8,
              ease: "power2.in",
              onComplete: () => setIsComplete(true),
            })
          }
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      ctx.revert()
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-dark-900",
        isComplete ? "pointer-events-none" : "",
      )}
    >
      <div ref={textRef} className="mb-8">
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">VLOM.UST</h1>
      </div>

      {/* Matrix-style loading text */}
      <div className="font-mono text-white mb-4 h-6">{`LOADING_SYSTEM: ${matrixText}`}</div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-dark-400 rounded-full overflow-hidden">
        <div className="h-full bg-white transition-all duration-100 ease-out" style={{ width: `${progress}%` }} />
      </div>

      {/* Progress percentage */}
      <div className="mt-2 font-mono text-sm text-white">{`${progress}%`}</div>
    </div>
  )
}
