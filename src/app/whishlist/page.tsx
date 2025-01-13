"use client";

import React, { useState } from "react";
import { Product } from "../context/CartContext";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image"; // Agar aap Sanity use kar rahe hain toh

export default function WishlistPage() {
  
  const [wishlist, setWishlist] = useState<Product[]>([]); // Wishlist state

  // Add product to wishlist
  const addToWishlist = (product: Product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  // Remove product from wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-center text-3xl font-bold mb-8">Your Wishlist</h1>

      {/* Display wishlist products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {wishlist.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your wishlist is empty.</p>
        ) : (
          <ul className="space-y-6">
            {wishlist.map((product) => (
              <li key={product.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                <div className="flex items-center">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={50}
                    height={50}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-xl">{product.name}</h3>
                    <p className="text-gray-500">Price: Rs.{product.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => addToWishlist(product)}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Wishlist Footer */}
      <div className="flex justify-center mt-8">
        <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300"
          
          onClick={() => alert("Proceeding to checkout...")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
