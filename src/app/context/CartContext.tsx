 "use client";


interface CartContextType {
  cartCount: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  getGrandTotal: () => number; // Grand total function
}

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

export type Product = {
  id: string;
  name: string;
  price: string; // Price as string with commas
  imagePath: string;
}

interface CartContextType {
  cartCount: number;
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  getGrandTotal: () => number; // Grand total function
  quantities: { [key: string]: number }; // To store quantities for each product
  setQuantities: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>; // To update quantities
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});  // To store quantities

  // Local storage se cart data ko retrieve karna
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedQuantities = localStorage.getItem("quantities");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

    if (savedQuantities) {
      setQuantities(JSON.parse(savedQuantities));
    }
  }, []);

  // Cart mein product add karna aur local storage mein save karna
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    setQuantities((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("quantities", JSON.stringify(quantities));  // Save quantities to local storage
  };

  // Cart se product remove karna aur local storage ko update karna
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id]; // Remove quantity for the deleted product
    setQuantities(updatedQuantities);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("quantities", JSON.stringify(updatedQuantities));  // Update quantities in local storage
  };

  // Cart count derived from cart length
  const cartCount = cart.length;

  // Grand total calculation function
  const getGrandTotal = (): number => {
    return cart.reduce((total, product) => {
      const quantity = quantities[product.id] || 1;  // Get quantity for each product
      const priceString = product.price.toString(); // Convert price to string (if not already)
      const numericPrice = parseFloat(priceString.replace(/,/g, "")); // Remove commas and parse to number
      return isNaN(numericPrice) ? total : total + numericPrice * quantity; // Add valid price to total
    }, 0);
  };
  

  return (
    <CartContext.Provider
      value={{
        cartCount,
        cart,
        addToCart,
        removeFromCart,
        getGrandTotal,
        quantities, // Expose quantities state
        setQuantities, // Expose setQuantities function to update quantities
      }}
    >
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
