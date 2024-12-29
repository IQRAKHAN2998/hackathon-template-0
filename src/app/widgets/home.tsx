import React from 'react'
import Button from '../shared/button'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
    const seater = `Rocket Single \n Seater`
    return (
        <section>
            <div className='bg-[#FBEBB5] flex items-center justify-center flex-col  sm:flex-row sm:max-w-screen-3xl max-w-full max-h-screen '>
                <div className='mt-16 mb-7 ml-10 sm:mt-10 sm:ml-52 text-7xl  font-semibold'>
                    {/* right side */}
                    <h1 className='whitespace-pre-line pt-2 '>{seater}</h1>
                    <Link href="/shop" className='font-bold'><Button text='Shop Now' /></Link>
                </div>
                <div className=' '>
                    {/* left side */}
                    <Image src="/sofaseater.png" alt='sofa-seater' width="600" height="500"></Image>
                </div>
            </div>
            {/* mid part */}
            <div className='flex  pt-16 md:flex-row bg-[#FAF4F4] flex-col max-w-screen-3xl  h-auto'>
                {/* left side */}
                <div className='flex items-center'>
                    <div className=' sm:mt-36 sm:ml-48  '>
                        <h2 className='font-bold text-lg sm:text-2xl '>Side_table</h2>
                        <Button text="view More" />
                    </div>
                    <Image src="/sidetable 1.png" alt='sidetable' width={400} height={400} ></Image>

                </div>

                {/* right side */}
                <div className='flex items-center  '>
                    <div className='sm:mt-36 sm:ml-48'>
                        <h2 className='font-bold text-xl sm:text-2xl '>Side_table</h2>
                        <Button text="view More" />
                    </div>
                   
                    <Image src="/cloudsofa.png" alt='sidetable' width={400} height={400}></Image>
                </div>
            </div>

        </section>
    )
}

export default Home