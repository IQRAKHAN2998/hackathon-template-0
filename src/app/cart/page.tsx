import React from 'react'
import { Headersection } from '../layout/headersection'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

const Cart = () => {
    return (
        <>
            <Headersection text="Cart" tittle="Cart" />
            <div className='flex flex-col sm:flex-row items:center justify-center sm:justify-around'>

                <div className=' sm:w-6/12 mt-5'>
                    {/* leftside */}
                    <div className='bg-[#FFF9E5] flex justify-around text-xl font-semibold gap-3 max-w-screen-full'>
                        <h2>Product</h2>
                        <h2>Price</h2>
                        <h2>Quantity</h2>
                        <h2>Sub Total</h2>
                    </div>
                    <div className='mt-16 flex space-x-10'>
                        <div className='flex gap-4'>
                        <Image className='bg-[#FFF9E5]' src="/Asgaard sofa 1.png" alt="asgard sofa" width={80} height={50}></Image>
                        <h2 className='mt-5 text-[#9F9F9F]'>Asgaard Sofa</h2>
                        </div>
                   <div className='flex justify-around'>
                      <h2 className='mt-5 px-14 text-[#9F9F9F]'>Rs. 250,000,00</h2>
                    <h2 className='border rounded-lg border-black text-lg px-4'>1</h2>
                   <div className='space-x-5 flex'>
                   <h2 className='mt-5 px-14 font-bold'>Rs. 250,000,00</h2>
                   <Trash2 className='text-[#FBEBB9] text-xl '/>
                   </div>
                    </div>
                    
                    </div> 

                </div>
                <div className='bg-[#FFF9E5] mt-10 py-7 sm:px-24 text-center h-auto mx-28 text-xl font-semibold'>
                    {/* rightside */}
                    <h2 className='text-2xl font-bold'>Cart Totals</h2>
                   <div className='flex justify-center gap-7 py-7 items-center'>
                    <h2 className='text-black font-bold'>Sub Total</h2>
                    <h2 className='  text-[#9F9F9F]'> Rs.250,000.00</h2>
                   </div>
                   <div className='flex justify-center gap-7 py-7 items-center'>
                    <h2 className='text-black font-bold'>Total</h2>
                    <h2 className='  text-[#B88E2F]'> Rs.250,000.00</h2>
                    </div>
                  <div > <button className='border border-black py-4 px-12 rounded-md font-semibold '>Check Out</button></div> 
                   
                

                </div>
            </div>


        </>
    )
}
export default Cart