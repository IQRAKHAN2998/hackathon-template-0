"use client";
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react"; // Heart icon
import { useWishlist } from "@/hooks/usewishlist"; // Custom hook for wishlist

const WishlistButton = () => {
  const { wishlist } = useWishlist(); // Fetch wishlist from custom hook
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    // Update wishlist count whenever the wishlist changes
    if (wishlist) {
      setWishlistCount(wishlist.length);
    }
  }, [wishlist]); // Effect will run whenever wishlist updates

  return (
    <div className="relative">
      <button className="text-xl text-gray-500 hover:text-red-700">
        <Heart className="w-6 h-6" />
      </button>
      <div className="absolute top-0 right-0 text-sm bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
        {wishlistCount > 0 ? wishlistCount : null}
      </div>
    </div>
  );
};

export default WishlistButton;
