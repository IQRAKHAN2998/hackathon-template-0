import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="flex flex-col space-y-2">
    <Link href="/admin/products" className="p-2 bg-gray-200 rounded-md text-center  text-black hover:bg-gray-300">
      Products Stock
    </Link>
    <Link href="orders" className="p-2 bg-gray-200 rounded-md text-center text-black hover:bg-gray-300">
      Orders
    </Link>
    <Link href="/admin/overviewpage" className="p-2 bg-gray-200 rounded-md text-center text-black hover:bg-gray-300">
      OverVeiw
    </Link>
  </div>
  
  )
}

export default SideBar