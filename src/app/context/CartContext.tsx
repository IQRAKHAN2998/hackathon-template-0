"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

interface CartContextType {
  cartCount : number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;  // Remove function added here
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Local storage se cart data ko retrieve karna
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Cart mein product add karna aur local storage mein save karna
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save to local storage
  };

  // Cart se product remove karna aur local storage ko update karna
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));  // Save to local storage
  };

    // Cart count derived from cart length
    const cartCount = cart.length;
  return (
    <CartContext.Provider value={{ cartCount , cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
