"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { ShoppingCart } from "lucide-react";


const Navbar = () => {
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((acc, it) => acc + it.quantity, 0);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold text-red-600">
          🍽️ FoodRush
        </Link>

        <div className="flex items-center gap-6 text-gray-800">
          <Link href="/" className="hover:text-red-600">
            Home
          </Link>
          <Link href="/menu" className="hover:text-red-600">
            Menu
          </Link>
          <Link
            href="/cart"
            className="relative hover:text-red-600 flex items-center"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M6 6h13l-1 7H7z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="19" cy="20" r="1" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
