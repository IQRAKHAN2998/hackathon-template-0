import React from 'react'
import { Headersection } from '../layout/headersection'
import Button from '../shared/button'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
 incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc 
 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
   aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
    in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque
     elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum`


interface Ishortimg {
    id: string,
    simage: string,
    description: string
}
interface Blog {
    id: string
    Image: string,
    Description: string,
    simage?: string
}
interface IProducts {
    _id: string,
    name: string,
    imagePath: string,
    price: string,
    discountPercentage: string,
    tags: string,
    isFeaturedProduct: boolean,
    stockLevel: number,
    category: string
  }
const shortimg: Ishortimg[] =
    [
        {
            id: "110",
            simage: "/Rectangle 69 (1).png",
            description: "Going all-in with millennial design"
        },
        {
            id: "120",
            simage: "/Rectangle 69 (2).png",
            description: "Exploring new ways of decorating"
        },
        {
            id: "130",
            simage: "/Rectangle 69 (3).png",
            description: "Handmade pieces that took time to make"
        },
        {
            id: "140",
            simage: "/Rectangle 69 (4).png",
            description: "Modern home in Milan"
        },
        {
            id: "150",
            simage: "/Rectangle 69.png",
            description: "Colorful office redesign"
        },
    ]



const blog: Blog[] = [
    {
        id: "160",
        Image: "/Rectangle 14.png",
        Description: "Going all-in with millennial design",

    },
    {
        id: "170",
        Image: "/Rectangle 15.png",
        Description: "Going all-in with millennial design",

    }, {
        id: "180",
        Image: "/Rectangle 14.png",
        Description: "Going all-in with millennial design",

    },

]

const Blog = async () => {
    const res = await client.fetch(`*[_type == "product"]{
    category,
    stockLevel
  }`,[0])
  console.log(res)
    return (
       <>
       <div>
            <Headersection text="Blog" tittle="Blog" />
        </div >
            <div className='flex justify-around sm:mx-40 flex-col mt-10  sm:flex-row space-x-5 '>
                {/* leftside */}

                <div className='flex flex-col py-10  '>

                    {blog.map((item :Blog) => (
                        <div key={item.id} className="blog-item py-5">
                            <Image src={item.Image} alt={item.Description} width={750} height={200} />
                            <h2 className='font-bold mt-5'>{item.Description}</h2>
                            <p className='whitespace-pre-line space-y-1 mt-5'>{para}</p>
                            <Button text="Read more" />
                        </div>
                    ))}

                </div>


                <div className=' space-y-14 justify-items-center'>
                    {/* right side */}
                    
                    <h2 className='font-bold text-4xl'>Categories</h2>
                    <ul className='flex space-x-7 gap-10 text-xl text-slate-400'>
                        <li className='space-y-10'>
                          
                            {
                                
                                res.map((item: IProducts) => {
                                    return(
                                        <h1 key={item._id}> {item.category}</h1> 
                                    )
                                  
                                })
                            }

                        </li>

                        <li className='space-y-10'>
                        {
                                
                                res.map((item:IProducts ) => {
                                    return(
                                        <h1 key={item._id}> {item.stockLevel}</h1> 
                                    )
                                  
                                })
                            }

                        </li>
                    </ul>
                    <div className='justify-items-start'>
                        <h2 className='font-bold text-4xl'>Recent Posts</h2>
                        <ul className='flex'>
                            <li >
                                {
                                    shortimg.map((item) => {
                                        return (
                                            <div key={item.id} className='flex justify-center items-center space-x-5'>
                                                <Image src={item.simage} alt="sortimg" width={80} height={80} className=' my-10'></Image>
                                                <h2>{item.description}</h2>

                                            </div>
                                        )
                                    })
                                }

                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </ >
        




    )
}
export default Blog