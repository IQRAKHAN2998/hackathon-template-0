"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import Checkout from "@/components/Checkout";

export default function CheckoutPage() {
  const { cart, getGrandTotal } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cartItems: cart,
        totalPrice: getGrandTotal(),
        customerInfo: {
          name: formData.name,
          email: formData.email,
          address: formData.address,
        },
      }),
    });

    const data = await response.json();
    if (data.orderId) {
      alert(`Order placed successfully. Order ID: ${data.orderId}`);
    } else {
      alert("Failed to place order");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">Checkout</h1>
      
      {cart.length === 0 ? (
        <p className="text-center text-lg font-semibold text-gray-600">Your cart is empty.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="my-4">
            <Checkout cartItems={cart} totalPrice={getGrandTotal()} customerInfo={formData} />
          </div>
        </form>
      )}
    </div>
  );
}
