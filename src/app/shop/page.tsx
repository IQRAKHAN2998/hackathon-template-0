"use client"
import { LayoutGrid, SlidersHorizontal } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import CartStyle from '../shared/cartstyle'


const sofadesisgn = [
    {
        slug: "trent",
        image: "/Trenton modular.png",
        description: "Trenton modular sofa_3",
        rupees: "Rs. 250,000.00"
    }, {
        slug: "Grani",
        image: "/Granitedining.png",
        description: "Granite dining table with dining chair",
        rupees: "Rs. 250,000.00"
    }, {
        slug: "out",
        image: "/Outdoorbar.png",
        description: "Outdoor bar table and stool",
        rupees: "Rs. 250,000.00"
    }, {
        slug: "pln",
        image: "/trenton modular.png",
        description: "Plain console with teak mirror",
        rupees: "Rs. 250,000.00"
    }, {
        slug: "grin",
        image: "/Plainconsole.png",
        description: "Grain coffee table",
        rupees: "Rs. 150,000.00"
    }, {
        slug: "knt",
        image: "/Kent coffee table 1.png",
        description: "Kent coffee table",
        rupees: "Rs. 250,000.00"
    }, {
        slug: "rond",
        image: "/Outdoor sofa set 1.png",
        description: "Round coffee table_color 2",
        rupees: "Rs. 251,000.00"
    }, {
        slug: "recl",
        image: "/Reclaimed teak Sideboard 1.png",
        description: "Reclaimed teak coffee table",
        rupees: "Rs. 25,200.00"
    }, {
        slug: "pln",
        image: "/Plain console_ 1.png",
        description: "Plain console_",
        rupees: "Rs. 252,000.00"
    }, {
        slug: "teak",
        image: "/Reclaimed teak Sideboard 1.png",
        description: "Reclaimed teak Sideboard",
        rupees: "Rs. 258,000.00"
    }, {
        slug: "sjp",
        image: "/Outdoor sofa set 1.png",
        description: "SJP_0825 ",
        rupees: "Rs. 20,000.00"
    }, {
        slug: "bella",
        image: "/Bella chair and table 1.png",
        description: "Bella chair and table",
        rupees: "Rs. 200,000.00"
    }, {
        slug: "sqr",
        image: "/cloudsofa.png",
        description: "Granite square side table",
        rupees: "Rs. 100,000.00"
    }, {
        slug: "asgrd",
        image: "/Asgaard sofa 1.png",
        description: "Asgaard sofa",
        rupees: "Rs. 244,000.00"
    },
    {
        slug: "maya",
        image: "/sofaseater.png",
        description: "Maya sofa three seater",
        rupees: "Rs. 115,000.00"
    },
    {
        slug: "sofa",
        image: "/sidetable 1.png",
        description: "Outdoor sofa set",
        rupees: "Rs. 244,000.00"
    },
]
const Shop = () => {
    const [selecteditem, setselecteditem] = useState("trent")
    const selecteditemdata = sofadesisgn.find((item) => item.slug === selecteditem)
    console.log(selecteditemdata)
    return (
        <div>
            <div className='flex py-3 bg-[#9F9F9F] justify-around items-center'>
                <div className='flex space-x-6 font-semibold items-center'>
                    <h2 className='flex'>  <SlidersHorizontal />Filter</h2>
                    <LayoutGrid className='hidden' />
                    <Image src="/Vector.png" alt="logo" width={20} height={20}></Image>
                    <Image src="/Line 5.png" alt="line" width={3} height={1} className='text-gray-800'></Image>
                    <h2 className='hidden sm:block'>Showing 1-16 of 132 results</h2>
                </div>
                <div className='flex space-x-4'>
                    <label htmlFor="name" className="hidden sm:block mt-4 text-md font-semibold text-gray-800 ">
                        Show
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="16"
                        className="mt-1 block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />

                    <label htmlFor="name" className="hidden sm:block mt-4  text-md font-semibold text-gray-800 ">
                        Short by
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder=" default"
                        className="mt-1 hidden sm:block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {

                    sofadesisgn.map((item) => (

                        <div onClick={() => setselecteditem(item.slug)} key="id" className="flex gap-x-4 items-center justify-center cursor-pointer">
                            <CartStyle
                                image={item.image}
                                description={item.description}
                                rupees={item.rupees} />



                        </div>))

                }
            </div>
        </div>)
}

export default Shop