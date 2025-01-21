// // src/app/whishlist/page.tsx
// "use client";  // Ensure this is included for client-side rendering
// import { useWishlist } from "@/hooks/useWishlist"; // Correct path to your hook

// const WishlistPage = () => {
//   const { wishlist, addToWishlist, removeFromWishlist, checkIfInWishlist } = useWishlist();

//   return (
//     <div>
//       <h1>Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <ul>
//           {wishlist.map((product) => (
//             <li key={product.id}>
//               <img src={product.imagePath} alt={product.name} width={50} height={50} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default WishlistPage; // Default export is correct



// // src/app/whishlist/page.tsx
// "use client";
// import { useWishlist } from "../../hooks/usewishlist"; // Correct path to your hook

// const WishlistPage = () => {
//   const { wishlist, addToWishlist, removeFromWishlist, checkIfInWishlist } = useWishlist();

//   return (
//     <div>
//       <h1>Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p>Your wishlist is empty.</p>
//       ) : (
//         <ul>
//           {wishlist.map((product) => (
//             <li key={product.id}>
//               <img src={product.imagePath} alt={product.name} width={50} height={50} />
//               <p>{product.name}</p>
//               <p>{product.price}</p>
//               <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default WishlistPage;
