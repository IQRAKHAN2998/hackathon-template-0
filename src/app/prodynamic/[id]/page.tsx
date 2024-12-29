import AddToCartButton from '@/components/addtocartbutton';
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import { ChevronRight, Circle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Iparams {
    id: string
}
interface IProducts {
    id: string,
    name: string;
    image: string;
    price: string;
}
const IdPage = async ({ params }: { params: Promise<Iparams> }) => {


    const { id } = await params
    const data = await client.fetch(`*[_type == "product"]{
              id,
              name ,
              image,
              price,
          }`)
    const res = data.find((item: IProducts) => item.id === id)

    if (!res) {
        <h2>product not available</h2>
    }
    return (
        <div className='mt-11 sm:max-w-4xl mx-auto'>
            <div className='flex space-x-2'>
                <Link href="/" className='text-slate-500'>Home  </Link>
                <ChevronRight />
                <Link href="/shop" className='text-slate-500'>Shop  </Link>
                <ChevronRight />
                <Image src="/Line 5.png" alt="line" width={2} height={2}></Image>
                <h2 className='font-bold'>{res.name}</h2>


            </div>
            <div className='flex space-x-5 my-6 flex-col sm:flex-row '>

                {
                    res.image && (
                        <Image src={urlFor(res.image).url()}
                            alt={res.name || 'product image'}
                            width={1500}
                            height={400}
                            className='bg-[#fbebb5] ' />
                    )
                }
                <span className='flex-col text-2xl space-y-5 space-x-2'>
                    <h2 className='font-semibold font-serif '>{res.name}</h2>
                    <h2 className='text-slate-500'>{res.price}</h2>
                    <p className='text-base'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.

                    </p>
                    <h2 className='text-slate-500 text-base'>Size</h2>
                    <span className='space-x-3 text-base '>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2 '>L</button>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2'>XL</button>
                        <button className='border rounded-lg bg-slate-100 hover:bg-[#fbebb5] px-2'>XS</button>
                    </span>
                    <h2 className='text-slate-500 text-base'>Color</h2>
                    <span className='space-x-2 text-lg'>
                        <button className='rounded-full bg-black'><Circle /></button>
                        <button className='rounded-full  bg-[#CDBA7B]'><Circle /></button>
                        <button className='rounded-full bg-[#816DFA]'><Circle /></button>




                    </span>

                    <span >
                        <AddToCartButton product={res} /> {/* Client component */}
                    </span>
                </span>


            </div>

        </div>
    )
}
export default IdPage