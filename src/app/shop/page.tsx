import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';


interface IProducts {
    id:string,
    name: string;
    image: string;
    price: string;
}

const Product = async () => {
    const data: IProducts[] = await client.fetch(`*[_type == "product"]{
          id,
          name ,
          image,
          price,
      }`)
    console.log(data)
    return (
        <div className='flex flex-col  items-center justify-center  mx-auto max-w-screen-2xl space-x-6 space-y-7 sm:grid  md:grid-cols-2 lg:grid-cols-4'>
            {
                data.map((item:IProducts)=>{
                    return(
                        <div key={item.id} className=' items-center justify-center hover:scale-110  max-w-screen-sm  '>
                            <Link href={`/prodynamic/${item.id}`}>
                            {
                                item.image && (
                                    <Image src={urlFor(item.image).url()}
                                        alt={item.name || 'product image'}
                                        width={300}
                                        height={300}
                                    />
                                )
                            }
                            <h2 className='font-bold text-xl'>{item.name}</h2>
                            <h3 className='font-semisemibold text-xl text-slate-500'>${item.price}</h3>
                            </Link>npm run dev
                        </div>
                    )
                })
            }
        </div>
        

                         )}

   export default Product