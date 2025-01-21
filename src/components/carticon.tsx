"use client"
import { useCart } from '@/app/context/CartContext';
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
        const { cartCount } = useCart(); // Use cartCount from context
    
    return (
      <div className='fixed top-[750px] right-[40px] z-50'>
          <div className="relative inline-block" >
        {/* Cart Icon */ }

    <Link href="/cart" ><ShoppingCart
     className="hover:scale-110 sm:hidden transition-transform duration-200 h-16 w-16 text-gray-800 md:h-8 md:w-8"/></Link>

    {cartCount > 0 && (
        <span
           className="absolute -top-2 -right-2  bg-red-600 text-white text-sm rounded-full px-2 py-1 shadow-lg">
            {cartCount}
        </span>
    )}
        </div >
      </div>
  )
}
export default CartIcon