"use client";

import { useState } from "react";
import FoodCard from "../components/FoodCard";
import { foods } from "../data/foods";

const categories = ["All", "Burgers", "Pizzas", "Drinks", "Snacks", "Desserts"];

export default function Home() {
  const [selected, setSelected] = useState("All");
  const filtered = selected === "All" ? foods.slice(0, 6) : foods.filter(f => f.category === selected);

  return (
    <div className="space-y-8">
      <section className="bg-red-500 text-white rounded-xl px-8 py-8 text-center shadow-md">
        <h1 className="text-4xl font-bold">Delicious Food Delivered Fast 🚀</h1>
        <p className="mt-2">Get 20% OFF on your first order today!</p>
      </section>

      <section>
        <h2 className="text-3xl font-extrabold text-red-600 mb-4">Browse by Category</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`px-5 py-2 rounded-full border font-medium ${selected===c ? "bg-red-500 text-white" : "bg-white text-gray-700 hover:bg-red-50"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-4">Popular Items</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(item => <FoodCard key={item.id} item={item} />)}
        </div>
      </section>
    </div>
  );
}
