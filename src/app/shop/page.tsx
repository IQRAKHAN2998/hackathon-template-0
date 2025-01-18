import { client } from '@/sanity/lib/client'
// import { urlFor } from '@/sanity/lib/image'
// import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


interface IProducts {
    _id:string,
    name: string;
    imagePath: string;
    price: string;
    discountPercentage:string;
    tags:string
}

const Product = async () => {
  const query = await client.fetch(
    `*[_type == "product" ][]{
        _id,
      name,
      price,
      discountPercentage,
      tags,
      imagePath
    }`
  )
  if (!query) {
    <h2>product not available</h2>
}
  return (
    

    <div className='flex flex-col items-center justify-center mx-auto max-w-screen-2xl space-x-6 space-y-7 sm:grid md:grid-cols-2 lg:grid-cols-4'>
    
      {query.map((item: IProducts) => {
        return (
          <div key={item._id} className='items-center justify-center hover:scale-110 max-w-screen-sm'>
            <Link href={`/prodynamic/${item._id}`}>
            <p>{item.tags}</p>
              <Image
                src={item.imagePath ? item.imagePath : '/default-image.jpg'}
                alt="product image"
                width="200"
              />
            </Link>
            <h2 className='font-bold text-xl'>{item.name}</h2>
           <span className='flex space-x-5'>
           <h3 className='font-semibold text-xl text-red-900'>${item.price}</h3>
           <h3 className='font-semibold text-xl text-slate-500 line-through'>${item.discountPercentage}</h3>
           </span>
          
          </div>
        );
      })}
      </div>
   

    
  );
}
  export default Product;
  
