"use client"
import { LayoutGrid, ShoppingBag, SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'
import CartStyle from '../shared/cartstyle'
import Link from 'next/link'
import { sofaDesisgn } from './sofas'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"


const Shop = () => {

    return (
        <div>
            <div className='py-3 flex flex-row bg-[#9F9F9F] justify-around font-semibold '>

                <ul className='hidden sm:block '>
                    <li className='flex flex-row  gap-12'>
                        <h2 className='flex flex-row'>  <SlidersHorizontal />Filter</h2>
                        <LayoutGrid />
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

                    sofaDesisgn.map((item) => (
                        <div key={item.slug} className="flex gap-x-4 items-center justify-center cursor-pointer">
                            <Link href={`/shopdynmc/${item.slug}`}>
                                <CartStyle
                                    image={item.image}
                                    description={item.description}
                                    rupees={item.rupees} />
                            </Link>
                        </div>
                    ))

                }
            </div>




        </div>)
}

export default Shop