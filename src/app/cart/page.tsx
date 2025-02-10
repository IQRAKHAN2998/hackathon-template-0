"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
// import { urlFor } from "@/sanity/lib/image";
import { Trash2 } from "lucide-react";
import { Headersection } from "../layout/headersection";
import Link from "next/link";

type QuantityState = { [key: string]: number };

export default function CartPage() {
  const { cart, removeFromCart, getGrandTotal, quantities, setQuantities } = useCart();


  
  const handleQuantityChange = (productId: string, change: number) => {
    setQuantities((prevQuantities: QuantityState) => {
      const updatedQuantities = { ...prevQuantities };

      if (!updatedQuantities[productId]) {
        updatedQuantities[productId] = 1;
      }

      updatedQuantities[productId] = Math.max(updatedQuantities[productId] + change, 1);
      
      return updatedQuantities;
    });
};


  const getSubtotal = (price: string | number, productId: string) => {
    const priceString = price.toString();  // Ensure the price is a string
    const numericPrice = parseFloat(priceString.replace(/,/g, ""));
    if (isNaN(numericPrice)) return 0;
    return numericPrice * (quantities[productId] || 1); // Subtotal for this product
  };

  if (!cart) {
    return ("not found")
  }
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
            {cart.map((product, index) => (
              <li
                key={product?._id || index}
                className="grid grid-cols-4 items-center border-b pb-4 gap-4 text-center"
              >
                {/* Product Image and Name */}
                <div className="flex flex-col items-center">
                  {/* // If imagePath is directly a URL (not a reference object) */}
                  {product?.imagePath ? (
                    <Image
                      src={product?.imagePath ? product?.imagePath : '/default-image.jpg'}
                      alt="product image"
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}



                  <h3 className="font-bold mt-2">{product?.name}</h3>
                </div>

                {/* Price */}
                <p className="text-slate-500">${product?.price}</p>

                {/* Quantity */}
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(product?._id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="font-semibold">{quantities[product?._id] || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(product?._id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal */}
                <div className="flex flex-col items-center">
                  <p className="text-slate-500">
                    {isNaN(Number(product?.price?.toString().replace(/,/g, "")))
                      ? "Invalid Data"
                      : getSubtotal(product?.price, product?._id)}
                  </p>
                  <button
                    onClick={() => removeFromCart(product?._id)}
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

        {/* <Link href="/checkout">
          <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">Check Out</button></Link>
           */}
          <Link href="/checkout">
          <button
           className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">
            Proceed to payment
            </button>
            </Link>
           
      </div>



    </div>
  );
}

