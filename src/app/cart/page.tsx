"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import { urlFor } from "@/sanity/lib/image";
import { Trash2 } from "lucide-react";
import { Headersection } from "../layout/headersection";
import { useState } from "react";



export default function CartPage() {
  const { cart, removeFromCart } = useCart();


  const [quantity, setQuantity] = useState<{ [key: string]: number }>({});  // Track quantity for each product

  const handleQuantityChange = (productId: string, change: number) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: prevQuantity[productId] ? prevQuantity[productId] + change : 1,
    }));
  };

  const getSubtotal = (price: string, productId: string) => {
    const numericPrice = parseFloat(price.replace(/,/g, "")); // Price ko number me convert karte hain (commas ko remove kar ke)
    if (isNaN(numericPrice)) return 0; // Agar price invalid ho, to 0 return karo
    return numericPrice * (quantity[productId] || 1); // Quantity ke mutabiq subtotal calculate karo
  };




  return (
    
    <div>
      <Headersection text="Cart" tittle='Cart' />

      <div className="">
        <ul >
          <li className="flex flex-row space-x-16 justify-center items-center  bg-[#fbebb5]">
            <h2>product</h2>
            <h2>price</h2>
            <h2>quantity</h2>
            <h2>subTotal</h2>
          </li>
        </ul>
      </div>

      <div className="mt-11 sm:max-w-6xl sm:mx-auto  flex flex-row justify-center items-center ">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4 space-x-0 max-w-screen-sm  ">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-row ">
                <span className="flex flex-col justify-center items-center mx-auto sm:mx-20">
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    width={20}
                    height={20}
                    className="w-20 h-20 object-cover bg-[#fbebb5]"
                  />
                  <h3 className="font-bold">{product.name}</h3>
                </span>
                <div className="flex sm:space-x-10 space-x-10 justify-center items-center">


                  <p className="text-slate-500">{product.price}</p>
                  <div className="font-semibold text-base sm:space-x-2 ">
                    <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                    <span>{quantity[product.id] || 1}</span>
                    <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                  </div>
                  <p className="text-slate-500">
                    {isNaN(Number(product.price.replace(/,/g, "")))
                      ? "Invalid Data"
                      : getSubtotal(product.price, product.id)}
                  </p>



                  <button onClick={() => removeFromCart(product.id)} className=""><Trash2 /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

