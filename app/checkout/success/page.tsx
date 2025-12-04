"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Package, Mail } from "lucide-react"
import Link from "next/link"
import confetti from "canvas-confetti"

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const [orderNumber] = useState(() => Math.floor(Math.random() * 900000) + 100000)

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#000000", "#ffffff", "#gray"],
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#000000", "#ffffff", "#gray"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full" />
            <CheckCircle className="w-24 h-24 text-green-500 relative" />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-4xl font-bold text-gray-100 mb-4">Order Confirmed!</h1>
        <p className="text-gray-400 text-lg mb-8">
          Thank you for your purchase. Your order has been successfully processed.
        </p>

        {/* Order Details */}
        <div className="bg-dark-800 rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-3 text-gray-100">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Order Number:</span>
              <span className="font-mono text-xl">#{orderNumber}</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-gray-400">
              <Mail className="w-5 h-5" />
              <span>A confirmation email has been sent to your inbox</span>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-dark-800 rounded-lg p-6 text-left">
            <h3 className="font-bold text-gray-100 mb-2">Estimated Delivery</h3>
            <p className="text-gray-400 text-sm">Your order will arrive in 5-7 business days</p>
          </div>
          <div className="bg-dark-800 rounded-lg p-6 text-left">
            <h3 className="font-bold text-gray-100 mb-2">Track Your Order</h3>
            <p className="text-gray-400 text-sm">You'll receive tracking info via email once shipped</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-gray-100 text-dark-900 hover:bg-gray-200 font-semibold">Continue Shopping</Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="bg-transparent text-gray-100 border-gray-700"
          >
            View Order Details
          </Button>
        </div>
      </div>
    </div>
  )
}
