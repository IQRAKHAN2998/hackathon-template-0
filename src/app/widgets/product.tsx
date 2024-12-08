import React from 'react'
import CartStyle from '../shared/cartstyle'
import Button from '../shared/button'
interface productStyle {
    id: string,
    image: string
    description: string,
    rupees: string
}
const product: productStyle[] = [
    {
        id: "1",
        image: "/Trenton modular.png",
        description: "treton moduler Sofa Three",
        rupees: "25000.00"
    },
    {
        id: "2",
        image: "/Granitedining.png",
        description: "Granite dining table with dining chair",
        rupees: "25000.00"
    },
    {
        id: "3",
        image: "/Outdoorbar.png",
        description: "Outdoor bar table and stool",
        rupees: "25000.00"
    },
    {
        id: "4",
        image: "/Plainconsole.png",
        description: "Plain console with teak mirror",
        rupees: "25000.00"
    },

]


const Products = () => {
    return (
        <section>
            <div className=' flex flex-col space-y-5 justify-center items-center  h-64'>
                <h2 className='text-3xl font-bold'>Top Picks For You</h2>
                <h3 className='text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h3>
            </div>
            <div className='grid mt-10 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                {
                    product.map((item) =>
                    (
                        <CartStyle key="id"
                            image={item.image}
                            description={item.description}
                            rupees={item.rupees}
                        />
                    )
                    )
                }
            </div>

            <div className=' flex justify-center mt-10 font-bold items-center'>
                <Button text="View More" />
            </div>
        </section>
    )
}
export default Products

