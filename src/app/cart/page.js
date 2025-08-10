"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Button from "../../components/Button";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, total } =
    useCart();

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-red-600">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 mt-4">🛒 Your cart is empty.</p>
      ) : (
        <div className="space-y-4 mt-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white rounded-xl p-4 shadow-md"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100} 
                  height={100} 
                  className="object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-red-500 font-bold">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-gray-200 px-3 py-1 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="text-right mt-4">
            <p className="text-lg font-semibold mb-2">Total: ₹{total}</p>
            <Link href="/checkout">
              <Button className="w-full sm:w-auto">Proceed to Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
