"use client"
import { LayoutGrid, ShoppingBag, SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import CartStyle from '../shared/cartstyle'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'


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
            <div className='py-3 flex flex-row bg-[#9F9F9F] justify-around font-semibold '>
               
                    <ul className='hidden sm:block '>
                        <li className='flex flex-row  gap-12'>
                            <h2 className='flex flex-row'>  <SlidersHorizontal />Filter</h2>
                            <LayoutGrid  />
                            <h2 className=' sm:block'>Showing 1-16 of 132 results</h2>
                       
                            <label htmlFor="name" className=" sm:block mt-4 text-md font-semibold text-gray-800 ">
                                Show
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="16"
                                className="mt-1 block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />

                            <label htmlFor="name" className=" sm:block mt-4 text-md font-semibold text-gray-800 ">
                                Short by
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder=" default"
                                className="mt-1 sm:block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </li>
                    </ul>

               

                <div>
                    <Sheet>
                        <SheetTrigger className="md:hidden">
                            <ShoppingBag />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <ul className="bg-white flex flex-col font-medium">
                                    <li className="space-x-5  flex space-y-12 items-start flex-col">
                                        <Link href="/" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Filter</Link>
                                        <Link href="/about" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Showing 1-16 of 132 results</Link>
                                        <Link href="/shop" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">                <div className='flex space-x-4'>
                                            <label htmlFor="name" className=" sm:block mt-4 text-md font-semibold text-gray-800 ">
                                                Show
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder="16"
                                                className="mt-1 block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            />


                                        </div></Link>
                                        <Link href="/about" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">  <label htmlFor="name" className=" sm:block mt-4  text-md font-semibold text-gray-800 ">
                                            Short by
                                        </label>
                                            <input
                                                type="text"
                                                id="name"
                                                placeholder=" default"
                                                className="mt-1 sm:block border py-1 rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                            /></Link>


                                    </li>
                                </ul>
                                <SheetDescription>

                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
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