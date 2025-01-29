
import { client } from '@/sanity/lib/client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Headersection } from '../layout/headersection'
import Category from '../../components/categories'

interface IProducts {
  _id: string,
  name: string,
  imagePath: string,
  price: string,
  discountPercentage: string,
  tags: string,
  isFeaturedProduct: boolean,
  stockLevel: number,
  category: string
}

const Product = async () => {
  const query = await client.fetch(
    `*[_type == "product" ][]{
        _id,
        name,
        price,
        discountPercentage,
        tags,
        imagePath,
        isFeaturedProduct,
        stockLevel,
        category
    }`
  )
  if (!query) {
    return <h2>Product not available</h2>
  }

  return (
    <>
      <div>
        <Headersection text="Shop" tittle="Shop" />
      </div >
      <Category />
      <div className='max-w-screen-2xl mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {query.map((item: IProducts) => {
            return (
              <div key={item._id} className='flex flex-col items-center justify-center hover:scale-110'>
                <Link href={`/prodynamic/${item._id}`}>
                  <Image
                    src={item.imagePath ? item.imagePath : '/default-image.jpg'}
                    alt="product image"
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                
                <h2 className='font-bold text-xl text-center'>{item.name}</h2>
                <span className='flex space-x-5 justify-center'>
                  <h3 className='font-semibold text-xl text-red-900'>${item.price}</h3>
                  <h3 className='font-semibold text-xl text-slate-500 line-through'>${item.discountPercentage}</h3>
                </span>
                </Link>
              </div>

            )
          })}
        </div>
      </div>
    </>
  )
}

export default Product
