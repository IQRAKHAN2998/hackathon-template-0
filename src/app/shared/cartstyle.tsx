"use client"
import Image from "next/image";
import { FC } from "react";

interface Iprops {
    image:string
    description: string;
    rupees: string;
   
}
const CartStyle: FC<Iprops> = ({  description, rupees,image }) => 
   (
        <div className="sm:flex-row flex-col justify-around mt-10">
            
                <Image src={image} alt={description} width={300} height={300} className="max-w-screen-xl h-500 "></Image>
                <div className="sm:mt-10">
                <p className=" text-black ">{description}</p>
                <h2 className=" text-20  font-bold text-black ">Rs:{rupees}</h2>
            
                </div>
        </div>
    )


export default  CartStyle