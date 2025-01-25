// src/hooks/useWishlist.ts
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

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist) || []);
      } catch {
        console.error("Failed to parse wishlist from localStorage");
      }
    }
  }, []);

  const updateLocalStorage = (newWishlist: IProducts[]) => {
    setWishlist(newWishlist);
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };

  const addToWishlist = (product: IProducts) => {
    const newWishlist = [...wishlist, product];
    updateLocalStorage(newWishlist);
  };

  const removeFromWishlist = (id: string) => {
    const newWishlist = wishlist.filter((item) => item.id !== id);
    updateLocalStorage(newWishlist);
  };

  const checkIfInWishlist = (id: string): boolean =>
    wishlist.some((item) => item.id === id);

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    checkIfInWishlist,
  };
};

// // src/hooks/useWishlist.ts
// import { useState, useEffect } from "react";

// interface IProducts {
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: string;
//   discountPercentage: string;
//   tags: string;
//   isFeaturedProduct: boolean;
//   stockLevel: number;
//   category: string;
// }

// export const useWishlist = () => {
//   const [wishlist, setWishlist] = useState<IProducts[]>([]);

//   useEffect(() => {
//     const storedWishlist = localStorage.getItem("wishlist");
//     if (storedWishlist) {
//       const parsedWishlist: IProducts[] = JSON.parse(storedWishlist);
//       setWishlist(parsedWishlist);
//     }
//   }, []);

//   const addToWishlist = (product: IProducts) => {
//     const newWishlist = [...wishlist, product];
//     setWishlist(newWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(newWishlist));
//   };

//   const removeFromWishlist = (id: string) => {
//     const newWishlist = wishlist.filter((item) => item.id !== id);
//     setWishlist(newWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(newWishlist));
//   };

//   const checkIfInWishlist = (id: string): boolean => {
//     return wishlist.some((item) => item.id === id);
//   };

//   return {
//     wishlist,
//     addToWishlist,
//     removeFromWishlist,
//     checkIfInWishlist,
//   };
// };
