import { Product } from "@/app/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

type CheckoutProps = {
  cartItems: Product[];
  totalPrice: number;
  customerInfo: { name: string; email: string; address: string };
};

export default function Checkout({ cartItems, totalPrice, customerInfo }: CheckoutProps) {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  // ✅ Function to Save Order in Sanity
  const handlePlaceOrder = async () => {
    if (!customerInfo?.name || !customerInfo?.email || !customerInfo?.address) {
      alert("Please fill in all customer details.");
      return;
    }

    setIsPlacingOrder(true);
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems, totalPrice, customerInfo }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Order placed successfully! Order ID: " + data.orderId);
      } else {
        alert("Failed to place order: " + data.message);
      }
    } catch (error) {
      console.error("Order Placement Error:", error);
      alert("Error placing order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  // ✅ Function to Handle Stripe Payment
  const handleCheckout = async () => {
    setIsPaying(true);
    const stripe = await stripePromise; // Load Stripe.js here

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const data = await response.json();
      console.log("Stripe API Response:", data); // Debugging line

      if (data?.sessionId && stripe) {
        await stripe.redirectToCheckout({ sessionId: data.sessionId }); // Use sessionId returned from your API
      } else {
        alert("Error starting checkout.");
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Payment failed. Please try again.");
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      {cartItems.map((item) => (
        <div key={item._id} className="flex justify-between border-b p-4">
          <div className="flex items-center space-x-4">
            <Image src={item.imagePath || "/default.jpg"} alt={item.name} width={80} height={80} />
            <span>{item.name}</span>
          </div>
          <p>Rs. {item.price}</p>
        </div>
      ))}
      <h2 className="text-2xl font-bold mt-6">Total: Rs. {totalPrice}</h2>

      {/* ✅ Place Order Button (Sanity) */}
      <button
        onClick={handlePlaceOrder}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
        disabled={isPlacingOrder || isPaying}
      >
        {isPlacingOrder ? "Placing Order..." : "Place Order"}
      </button>

      {/* ✅ Pay with Stripe Button */}
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 w-full"
        disabled={isPlacingOrder || isPaying}
      >
        {isPaying ? "Redirecting..." : "Pay with Stripe"}
      </button>
    </div>
  );
}
