import { FC } from "react"

const Button :FC<{text:string}> = ({text}) => {
   
  return (
    <button className=" text-xl
     text-black 
     hover:scale-105 hover:shadow-lg duration-700 underline
     font-semibold ">{text}  </button>
  )
}

export default Button

