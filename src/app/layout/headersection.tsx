import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface Iprops {
  tittle: string,
  text: string
}
export const Headersection = (props: Iprops) => {
  return (
    <div className='relative h-auto  '>
      <Image src="/Rectangle 1.png" alt="Rectangleheader1" width={1900} height={600} className='h-52 sm:h-auto'></Image>
      <div className='absolute -top-6 flex flex-col inset-0 sm:mt-20 space-y-4 mt-5 '>

        <div className=' flex justify-center items-center max-w-full h-auto  '>
          <Image src="/logo.png" alt="logo" width={100} height={100}></Image>
        </div>
        <h2 className='text-2xl font-bold text-center'>{props.tittle}</h2>
        <div className='flex justify-center items-center mt- '>
          <Link href="/" className='text-xl sm:text-2xl font-semibold'>Home</Link>
          <ChevronRight size={20} />
          <h2 className='text-2xl '>{props.text}</h2>
        </div>
      </div>
    </div>
  )
}
