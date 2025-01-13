"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { Trash2 } from "lucide-react";
import { Headersection } from "../layout/headersection";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart, getGrandTotal, quantities, setQuantities } = useCart();

  const handleQuantityChange = (productId: string, change: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[productId] ? prevQuantities[productId] + change : 1;
      const updatedQuantity = newQuantity > 0 ? newQuantity : 1;

      return {
        ...prevQuantities,
        [productId]: updatedQuantity,  // Update the quantity
      };
    });
  };

  const getSubtotal = (price: string, productId: string) => {
    const numericPrice = parseFloat(price.replace(/,/g, ""));
    if (isNaN(numericPrice)) return 0;
    return numericPrice * (quantities[productId] || 1); // Subtotal for this product
  };

  return (
    <div>
      <Headersection text="Cart" tittle="Cart" />
      <div className="mt-11 sm:max-w-6xl mx-auto px-4">
        {/* Table Headers */}
        <ul>
          <li className="grid grid-cols-4 bg-[#fbebb5] p-4 rounded-t text-center font-semibold">
            <h2>Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
          </li>
        </ul>

        {cart.length === 0 ? (
          <p className="text-center text-lg font-semibold mt-6">Your cart is empty.</p>
        ) : (
          <ul className="space-y-6 mt-5">
            {cart.map((product) => (
              <li
                key={product.id}
                className="grid grid-cols-4 items-center border-b pb-4 gap-4 text-center"
              >
                {/* Product Image and Name */}
                <div className="flex flex-col items-center">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-cover bg-[#fbebb5]"
                  />
                  <h3 className="font-bold mt-2">{product.name}</h3>
                </div>

                {/* Price */}
                <p className="text-slate-500">${product.price}</p>

                {/* Quantity */}
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(product.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{quantities[product.id] || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(product.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="flex flex-col items-center">
                  <p className="text-slate-500">
                    {isNaN(Number(product.price.replace(/,/g, "")))
                      ? "Invalid Data"
                      : getSubtotal(product.price, product.id)}
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    <Trash2 />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>



      <div className="bg-[#fbebb5] p-4 rounded-lg shadow-xl w-full sm:w-80 mx-auto mt-4 flex flex-col justify-center items-center">
        <h1 className="text-center font-semibold text-xl my-5">Cart Totals</h1>
        <span>
          <ul className="flex justify-around space-x-10 my-3">
            <li>
              <h2 className="text-xl font-semibold">SubTotal</h2>
              <h2 className="text-xl font-semibold">Total</h2>
            </li>
            <li>
              <h2 className="text-lg text-gray-600">Rs.{getGrandTotal()}</h2>
              <h2 className="text-2xl text-[#B88E2F]">Rs.{getGrandTotal()}</h2>
            </li>
          </ul>
        </span>

        <Link href="/checkout">
          <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">Check Out</button></Link>
      </div>



    </div>
  );
}

