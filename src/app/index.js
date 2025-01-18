// import client from '../sanityClient';


// // export async function getServerSideProps() {
// //   const products = await client.fetch(`*[_type == 'product']`);


// //   return {
// //     props: { products },
// //   };
// // }


// export default async function HomeSanity({ products }) {
//     const products = await client.fetch(`*[_type == 'product']{
//          id,
//         name,
//         imagePath,
//         price,
//         description,
//         discountPercentage,
//         isFeaturedProduct,
//         stockLevel,
//         category
//         }`);
//     return (
//         <div>
//             <h1>Products</h1>
//             <ul>
//                 {products.map((item) => (
//                     <li key={item._id}>
//                         <h2>{product.name}</h2>
//                         <img src={product.imagePath} alt={product.name} width="200" />
//                         <p>{product.description}</p>
//                         <p>Price: ${product.price}</p>
//                         <p>Category: {product.category}</p>
//                         <p>Stock Level: {product.stockLevel}</p>
//                         <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// import { client } from '@/sanity/lib/client';
// import { Image } from 'next-sanity/image';
// import React from 'react'
// // interface iproduct {
// //   _id: string,
// //   name: string,
// //   price: string,
// //   discountPercentage: string,
// //   tags: string,
// //   imageUrl:string
// // }
// const MyShop =  () => {
//   const query =  client.fetch(
//     `*[_type == "product" ][]{
//         _id,
//       name,
//       price,
//       discountPercentage,
//       tags,
//       "imageUrl": image.asset->url
//     }`
//   );
//   return (
//     <div>
//       <div className='flex justify-center items-center font-bold text-2xl'>
//         <h1 >hello</h1>
//       </div>
//       {
//         query.map((item) => {
//           return (

//             <div className=' flex flex-row justify-around' key={item._id}>

//   <div className='flex flex-col border justify-center items-center font-bold text-2xl'>
//     {/* {
//       <Image src={item.imageUrl} alt={item.name} width={200} height={200}></Image>
//     } */}
//               <h2 >{item._id}</h2>
//               <h2 className='text-slate-500'>{item.discountPercentage}</h2>
//               <h2 className='text-2xl underline'>{item.name}</h2>
//               <h2 className='text-red-600'>{item.price}</h2>
//               <p className='text-yellow-400'>{item.tags}</p>
//             </div>
//             </div>
          
//           )
//         })
//       }
//     </div>
//   )
// }

// export default MyShop