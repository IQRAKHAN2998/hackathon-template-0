// src/app/whishlist/page.tsx
"use client";  // Ensure this is included for client-side rendering
import { useWishlist } from "@/hooks/usewishlist"; // Correct path to your hook

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div>
      <h1>Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((product) => (
            <li key={product.id}>
              <img src={product.imagePath} alt={product.name} width={50} height={50} />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistPage; // Default export is correct

// "use client";
// import Image from "next/image";
// import { Trash2 } from "lucide-react";
// import { useWishlist } from "../usewhishlisthook/page";  // Import custom hook
// import AddToCartButton from "@/components/addtocartbutton";

// interface IProducts {
//   id: string;
//   _id: string;
//   name: string;
//   imagePath: string;
//   price: string;
//   category:string;
//   stockLevel:number;
//   isFeaturedProduct:boolean;
//   tags:string;
//   discountPercentage:string;
// }


// export type Product = {
//   id: string;
//   name: string;
//   price: string; // Price as string with commas
//   imagePath: string;
// };

// export default function WishlistPage() {
//   const { wishlist, removeFromWishlist } = useWishlist();  // Using custom hook

//   return (
//     <div className="bg-gray-100 min-h-screen py-10">
//       <h1 className="text-center text-3xl font-bold mb-8">Your Wishlist</h1>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {wishlist.length === 0 ? (
//           <p className="text-center text-xl text-gray-600">Your wishlist is empty.</p>
//         ) : (
//           <ul className="space-y-6">
//             {wishlist.map((product, index) => {
//               // Price ko string mein convert kiya agar wo number nahi hai
//               const price = typeof product.price === "string" ? parseFloat(product.price.replace(/,/g, "")) : product.price;

//               // Product ko IProducts mein cast kiya
//               // const castedProduct = { ...product, price: price.toString() } as IProducts;
//               const castedProduct = { 
//                 ...product, 
//                 price: price.toString(), 
//                 discountPercentage: product.discountPercentage,  // Add missing properties
//                 tags: product.tags, 
//                 isFeaturedProduct: product.isFeaturedProduct, 
//                 stockLevel: product.stockLevel,
//                 category: product.category
//               } as IProducts;
//               return (
//                 <li key={product?._id || index} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
//                   <div className="flex items-center">
//                     {product?.imagePath ? (
//                       <Image
//                         src={product?.imagePath ? product?.imagePath : "/default-image.jpg"}
//                         alt="product image"
//                         width={200}
//                         height={200}
//                         className="object-cover"
//                       />
//                     ) : (
//                       <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
//                         No Image
//                       </div>
//                     )}
//                     <div className="ml-4">
//                       <h3 className="font-semibold text-xl">{product?.name}</h3>
//                       <p className="text-gray-500">Price: Rs.{price}</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-4">
//                     {/* Casted product ko AddToCartButton mein pass kiya */}
//                     <AddToCartButton product={castedProduct} />
//                     <button
//                     onClick={() => {
//                         console.log("Removing product with ID:", product?._id);
//                         removeFromWishlist(product.id)
//                         }}
//                      className="text-red-500 hover:text-red-700"
//                              >
//                      <Trash2 className="w-5 h-5" />
//                           </button>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//       <div className="flex justify-center mt-8">
//         <button className="text-xl my-5 border-2 border-[#B88E2F] py-2 px-4 rounded-lg hover:bg-[#B88E2F] hover:text-white transition duration-300">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// }

