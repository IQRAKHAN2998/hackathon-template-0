"use client";
import { useState, useEffect } from "react";

interface IProducts {
  id: string;
  _id: string;
  name: string;
  imagePath: string;
  price: string;
  discountPercentage: string;
  tags: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<IProducts[]>([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const parsedWishlist: IProducts[] = JSON.parse(storedWishlist);
      setWishlist(parsedWishlist);
    }
  }, []);

  const addToWishlist = (product: IProducts) => {
    const newWishlist = [...wishlist, product];
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const removeFromWishlist = (id: string) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const checkIfInWishlist = (id: string): boolean => {
    return wishlist.some((item) => item.id === id);
  };

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    checkIfInWishlist,
  };
};
