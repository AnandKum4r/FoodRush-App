"use client";

import { useState } from "react";
import FoodCard from "../../components/FoodCard";
import { foods } from "../../data/foods";

const categories = [
  "All",
  ...Array.from(new Set(foods.map((f) => f.category))),
];

export default function Menu() {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All" ? foods : foods.filter((f) => f.category === selected);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-extrabold text-red-600">Menu</h2>

      <div className="overflow-x-auto pb-3">
        <div className="flex gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelected(c)}
              className={`px-4 py-2 rounded-full border ${
                selected === c
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
