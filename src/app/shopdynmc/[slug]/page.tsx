"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { sofaDesisgn } from '@/app/shop/sofas'
import Link from 'next/link'
import { ChevronRight, Circle } from 'lucide-react'


interface Params {
    params: {
        slug: string
    }
}
interface Isofa {
    slug: string,
    image: string ,
    description: string,
    rupees: string
}

const SlugPage = ({ params }: Params) => {

    const [quantity, setquantity] = useState(1)
    const [sofadesings, setsofadesign] = useState<Isofa>()
    // const [cart, setCart] = useState<any[]>([])


    
    const increment = () => setquantity(quantity + 1)
    const decremnet = () => setquantity(quantity > 1 ? quantity - 1 : 1)
    
    // const addToCart = () => {
    //     if (cart) {
    //       const item = {
    //         id: sofadesings.id,
    //         name: sofadesings.description,
    //         image: sofadesings.image,
    //         price: cart.rupees,
    //         quantity,
    //       };
    //       setCart((prevCart) => [...prevCart, item]);
    //       alert("Product added to cart!");
    //     }
    //   };


    useEffect(() => {
    const fetchdata = async ()=>{
    const {slug} = await params
    
    const designs = sofaDesisgn.find((item) => item.slug === slug)
    setsofadesign(designs)


}
fetchdata()

},[params])
      

    return (
        <div className='mt-11 sm:max-w-4xl mx-auto'>
            <div className='flex space-x-2'>
                <Link href="/" className='text-slate-500'>Home  </Link>
                <ChevronRight />
                <Link href="/shop" className='text-slate-500'>Shop  </Link>
                <ChevronRight />
                <Image src="/Line 5.png" alt="line" width={2} height={2}></Image>
                <h2 className='font-bold'>{sofadesings?.description}</h2>


            </div>
            <div className='flex space-x-5 my-6 flex-col sm:flex-row '>
                <Image className='bg-[#fbebb5] '
                    src={sofadesings?.image  || '/default-image.jpg'}
                    alt="sofadesign"
                    width={1500}
                    height={500} />
                <span className='flex-col text-2xl space-y-5'>
                    <h2 className='font-semibold font-serif '>{sofadesings?.description}</h2>

                    <h2 className='text-slate-500'>{sofadesings?.rupees}</h2>
                    <p className='text-base'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

                    </p>
                    <h2 className='text-slate-500 text-base'>Size</h2>
                    <span className='space-x-3 text-base '>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2 '>L</button>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2'>XL</button>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2'>XS</button>

                    </span>
                    <h2 className='text-slate-500 text-base'>Color</h2>
                    <span className='space-x-2 text-lg'>
                        <button className='rounded-full bg-black'><Circle /></button>
                        <button className='rounded-full  bg-[#CDBA7B]'><Circle /></button>
                        <button className='rounded-full bg-[#816DFA]'><Circle /></button>

                    </span>
                    <div className='flex space-x-5'>
                        <span className='flex border space-x-3 border-slate-500 rounded-md px-7'>
                            <button onClick={decremnet} >-</button>
                        <h2>{quantity}</h2>
                        <button onClick={increment}>+</button>
                        </span>
                        <span className='border hover:scale-105 hover:bg-slate-200 border-black rounded-md px-7'>
                        <button >Add to Cart</button>
                        
                        </span>
                    </div>
                </span>
            </div>

        </div>

    )
}

export default SlugPage
