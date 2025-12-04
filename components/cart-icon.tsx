"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/cart-context";

export function CartIcon() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="relative p-2 rounded-full bg-dark-400 hover:bg-dark-300 transition-colors duration-200 hidden"
      aria-label="Open shopping cart"
    >
      <ShoppingCart className="w-6 h-6 text-gray-100" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
