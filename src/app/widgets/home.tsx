import React from 'react'
import Button from '../shared/button'
import Image from 'next/image'

const Home = () => {
    const seater = `Rocket Single \n Seater`
    return (
        <section>
            <div className='bg-[#FBEBB5] flex items-center justify-center flex-col  sm:flex-row sm:max-w-screen-3xl max-w-full max-h-screen '>
                <div className='mt-16 ml-10 sm:mt-10 sm:ml-52 text-7xl  font-semibold'>
                    {/* right side */}
                    <h1 className='whitespace-pre-line pt-2 '>{seater}</h1>
                    <p className='font-bold'><Button text='Shop Now' /></p>
                </div>
                <div className=' '>
                    {/* left side */}
                    <Image src="/sofaseater.png" alt='sofa-seater' width="600" height="500"></Image>
                </div>
            </div>
            {/* mid part */}
            <div className='flex flex-col pt-16 sm:flex-row bg-[#FAF4F4] justify-items-center sm:max-w-screen-3xl min-w-full h-auto'>
                {/* left side */}
                <div className='flex items-center '>
                    <div className=' sm:mt-36 sm:ml-48  '>
                        <h2 className='font-bold text-xl sm:text-2xl '>Side table</h2>
                        <Button text="view More" />
                    </div>
                    <Image src="/sidetable 1.png" alt='sidetable' width={500} height={500} ></Image>

                </div>

                {/* right side */}
                <div className='flex items-center  '>
                    <div className='sm:mt-36 sm:ml-48'>
                        <h2 className='font-bold text-xl sm:text-2xl '>Side table</h2>
                        <Button text="view More" />
                    </div>
                   
                    <Image src="/cloudsofa.png" alt='sidetable' width={500} height={500}></Image>
                </div>
            </div>

        </section>
    )
}

export default Home