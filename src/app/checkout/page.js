"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../context/CartContext";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

export default function Checkout() {
  const { cartItems, total, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    // simulate order
    alert(`Order placed! Thank you, ${form.name}`);
    clearCart();
    router.push("/"); // redirect to home
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-red-600">Checkout</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow mt-4"
      >
        <InputField
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputField
          label="Address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        <InputField
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        <Button type="submit" className="mt-4">
          Place Order
        </Button>
      </form>

      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items</p>
        ) : (
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
            <li className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total</span>
              <span>₹{total}</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
