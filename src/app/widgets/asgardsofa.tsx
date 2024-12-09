import Image from 'next/image'
import React from 'react'
import Button from '../shared/button'
import { Calendar, Clock } from 'lucide-react'


const blogdesign = [{
    id: 1,
    image: "/Rectangle 13.png",
}, {
    id: 2,
    image: "/Rectangle 14.png"
},
{
    id: 3,
    image: "/Rectangle 15.png"
}]

export const AsgardSofa = () => {
    return (
        <section>
            <div className='  bg-[#FFF9E5] mt-20 flex flex-col-reverse sm:flex-row justify-center  items-center '>
                <div className='max-w-full h-auto  '>
                    <Image src="/Asgaard sofa 1.png" alt="asgaard sofa" height={539} width={1200} ></Image>
                </div>
                <div className=' sm:mt-10  space-y-5'>
                    <h2 className='font-semibold text-3xl sm:text-5xl'>New Arrivals</h2>
                    <h2 className='font-extrabold text-4xl sm:text-6xl'>Asgaard Sofa</h2>
                    <button className='border-2 border-black px-16 py-5 hover:scale-105 hover:bg-slate-500 '>Order Now</button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-20 '>
                <h2 className='text-4xl font-semibold font-sans py-6'>Our Blogs</h2>
                <h2 className='text-[#9F9F9F]'>Find a bright ideal to suit your taste with our great selection</h2>
            </div>
            <div className='flex justify-center items-center mt-10 flex-col space-x-10 max-w-screen-full sm:flex-row '>
                {
                    blogdesign.map((item) => {
                        return (
                            <div key="i" className='space-y-5 text-center mt-14'>
                                <Image src={item.image} alt='blogimg' width={300} height={300}></Image>
                                <h2>Going all-in with millennial design</h2>
                                <Button text="Read more" />
                                <div className='flex gap-2 items-center justify-center'>
                                    < ><Clock />5 min</>
                                     <><Calendar />12<sup>th</sup> Oct 2022</>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center mt-10'>
                <Button text="View All Post" />
            </div>

            <div className=' relative max-w-screen-2xl mx-auto mt-10'>

                <Image src="/Rectangle 17.png" alt="bgpics" width={1900} height={500} ></Image>
                <div className='space-y-2 sm:space-y-5 text:2xl absolute inset-0 justify-center items-center flex flex-col'>
                    <h2 className='font-bold  sm:text-4xl'>Our Instagram</h2>
                    <h3 className='font-semibold '>Follow our store on Instagram</h3>
                    <button className='border sm:py-4 px-12 rounded-full font-semibold shadow-xl'>follow us</button>
                </div>
            </div>
        </section>
    )
}
