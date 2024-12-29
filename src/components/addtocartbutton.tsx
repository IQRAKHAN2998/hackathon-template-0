"use client";
import { useCart } from "@/app/context/CartContext";

interface AddToCartButtonProps {
  product: {
    id: string;
    image :string,
    name: string;
    price: string;
  };
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
   
    <button
      onClick={() => addToCart(product)} // Product cart mein add karo
      className="px-4 py-2  text-white rounded bg-black hover:text-black hover:bg-[#fbebb5]"
    >
      Add to Cart
    </button>
    </>
  );
};

export default AddToCartButton;
