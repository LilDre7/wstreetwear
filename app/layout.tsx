import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";
import { SplashScreen } from "@/components/splash-screen";
import { Logo } from "@/components/logo";
import { CustomCursor } from "@/components/custom-cursor";
import { CartProvider } from "@/contexts/cart-context";
import { CartDrawer } from "@/components/cart-drawer";
import { CartIcon } from "@/components/cart-icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SDFM 2520 - Premium Hoodies",
  description: "Premium streetwear and comfortable hoodies",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-gray-100`}>
        <CartProvider>
          <SplashScreen />
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
            {/* <Logo /> */}
          </div>
          <div className="fixed top-4 right-4 z-50 pointer-events-auto">
            <CartIcon />
          </div>
          {children}
          <footer className="w-full py-6 px-4 bg-dark-600 text-gray-400">
            <div className="container mx-auto text-center font-mono">
              <p>
                &copy; 2025 CREATE FOR
                <a className="text-slate-100 px-1" href="https://github.com/LilDre7" target="_blank" rel="noopener noreferrer">
                  ALVAR0. 
                </a>
                FREE TO USE
              </p>
            </div>
          </footer>
          <CustomCursor />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
