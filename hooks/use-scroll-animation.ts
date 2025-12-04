"use client"

import { useEffect, type RefObject } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimationConfig {
  from: gsap.TweenVars
  to: gsap.TweenVars
  start?: string
}

export function useScrollAnimation(ref: RefObject<HTMLElement>, config: AnimationConfig) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const ctx = gsap.context(() => {
      gsap.fromTo(element, config.from, {
        ...config.to,
        scrollTrigger: {
          trigger: element,
          start: config.start || "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [ref])
}

export function useStaggerAnimation(
  containerRef: RefObject<HTMLElement>,
  selector: string,
  config: AnimationConfig & { stagger?: number },
) {
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    const ctx = gsap.context(() => {
      const elements = container.querySelectorAll(selector)

      gsap.fromTo(elements, config.from, {
        ...config.to,
        stagger: config.stagger || 0.1,
        scrollTrigger: {
          trigger: container,
          start: config.start || "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    })

    return () => {
      ctx.revert()
    }
  }, [containerRef, selector])
}
