import React from 'react'
import { Headersection } from '../layout/headersection'
import Button from '../shared/button'
const para = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
 incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc.`

const blog = [
    {
        Image: "/Rectangle 14.png",
        Description: "Going all-in with millennial design",

    },
    {
        Image: "/Rectangle 15.png",
        Description: "Going all-in with millennial design",

    }, {
        Image: "/Rectangle 14.png",
        Description: "Going all-in with millennial design",


    },
]

const Blog = () => {
    return (
        <><div>
            <Headersection text="Blog" tittle="Blog" />
        </div >
            {/* <div className=' sm:flex-row mt-10  '> */}
                {/* leftside */}

                <div className='flex flex-col items-center justify-center '>

                    {blog.map((item, index) => (
                        <div key={index} className="blog-item">
                            <img src={item.Image} alt={item.Description} />
                            <h2 className='font-bold mt-5'>{item.Description}</h2>
                            <p className='whitespace-pre-line space-y-1 mt-5'>{para}</p>
                            <Button text="Read more" />
                        </div>
                    ))}

                </div>

               

                      
                        {/* </div> */}

                 
        </>
    )
}
export default Blog