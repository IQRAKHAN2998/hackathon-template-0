"use client";


import { Product, useCart } from "@/app/context/CartContext";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"


interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();
  // const [showMessage, setShowMessage] = useState<string | null>(null); // To manage the toast message
  const notify = () => 
  toast.success(`${product?.name} has been added to the cart!`, {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });

  const handleAddToCart = () => {
    addToCart(product); // Add product to cart
    notify(); // Show message
    

    // Hide message after 3 seconds
    // setTimeout(() => {
    //   setShowMessage(null); 
    // }, 2000); // Message disappears after 3 seconds
  };

  return (
    <>
      {/* ShadCN Toast Notification */}
     

      <button
        onClick={handleAddToCart} // Trigger addToCart and toast message
        className="px-4 py-2 text-white rounded bg-black hover:text-black hover:bg-[#fbebb5]"
      >
        Add to Cart
      </button>
      
      <ToastContainer/>
    </>
  );
};

export default AddToCartButton;
