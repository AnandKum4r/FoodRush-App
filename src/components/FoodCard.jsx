"use client";

import Button from "./Button";
import { useCart } from "../context/CartContext";

const FoodCard = ({ item }) => {
  const { cartItems, addToCart, increaseQty, decreaseQty } = useCart();
  const inCart = cartItems.find((c) => c.id === item.id);

  return (
    <div className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition">
      <div className="w-32 h-32 mx-auto mb-3 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-red-500 font-bold mt-2">₹{item.price}</p>

      {inCart ? (
        <div className="flex items-center justify-center gap-3 mt-3">
          <button
            onClick={() => decreaseQty(item.id)}
            className="bg-gray-200 px-3 py-1 rounded text-lg"
          >
            -
          </button>
          <span className="text-lg font-semibold">{inCart.quantity}</span>
          <button
            onClick={() => increaseQty(item.id)}
            className="bg-gray-200 px-3 py-1 rounded text-lg"
          >
            +
          </button>
        </div>
      ) : (
        <div className="mt-3">
          <Button onClick={() => addToCart(item)}>Add to Cart</Button>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
