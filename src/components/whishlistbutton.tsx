"use client";
import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../app/usewhishlisthook/page';  // Import custom hook
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.css";

interface IProducts {
  id: string;
  _id?: string;
  name: string;
  imagePath: string;
  price: string;
  discountPercentage?: string;
  tags?: string;
  isFeaturedProduct?: boolean;
  stockLevel?: number;
  category?: string;
}


// interface AddToWishlistButtonProps {
//   product: IProducts;
// }

// const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product }) => {
//   const { addToWishlist, removeFromWishlist, checkIfInWishlist } = useWishlist();
//   const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

//   useEffect(() => {
//     setIsInWishlist(checkIfInWishlist(product.id));
//   }, [product, checkIfInWishlist]);

//   const handleClick = () => {
//     if (isInWishlist) {
//       removeFromWishlist(product.id);
//       toast.warn(`${product.name} removed from wishlist`);
//     } else {
//       addToWishlist(product);
//       toast.success(`${product.name} added to wishlist`);
//     }
//     setIsInWishlist(!isInWishlist);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`text-xl ${isInWishlist ? 'text-red-500' : 'text-gray-500'} hover:text-red-700`}
//     >
//       <Heart className="w-6 h-6" />
//       <ToastContainer />
//     </button>
//   );
// };

// export default AddToWishlistButton;


interface AddToWishlistButtonProps {
  product: IProducts;
}


const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product }) => {
  const { addToWishlist, removeFromWishlist, checkIfInWishlist } = useWishlist();
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  useEffect(() => {
    setIsInWishlist(checkIfInWishlist(product.id));
  }, [product, checkIfInWishlist]);

  const handleClick = () => {
    const wishlistProduct = {
      ...product,
      _id: product.id,
      discountPercentage: "0",
      tags: "",
      isFeaturedProduct: false,
      stockLevel: 0,
      category: "Uncategorized",
    };

    if (isInWishlist) {
      removeFromWishlist(product.id);
      toast.warn(`${product.name} removed from wishlist`);
    } else {
      addToWishlist(wishlistProduct); // Pass full product object
      toast.success(`${product.name} added to wishlist`);
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-xl ${isInWishlist ? 'text-red-500' : 'text-gray-500'} hover:text-red-700`}
    >
      <Heart className="w-6 h-6" />
      <ToastContainer />
    </button>
  );
};
export default AddToWishlistButton