import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";
import { Product } from "@/app/context/CartContext";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Ensure this is set in .env
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { totalPrice, customerInfo, cartItems, paymentStatus } = req.body;

      if (!customerInfo || !cartItems || cartItems.length === 0) {
        return res.status(400).json({ message: "Invalid order data" });
      }

      const order = await client.create({
        _type: "order",
        user: customerInfo.name,
        email: customerInfo.email,
        address: customerInfo.address,
        cartItems: cartItems.map((item: Product) => ({
          _key: item._id, // Unique identifier
          productId: item._id,
          name: item.name,
          image: item.imagePath,
          price: item.price,
          
        })),
        totalPrice: totalPrice,
        paymentStatus: paymentStatus || "pending", // Default pending
        createdAt: new Date().toISOString(),
      });

      res.status(200).json({ success: true, orderId: order._id }); // Return order ID
    } catch (error) {
      console.error("Sanity order save error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      res.status(500).json({ message: "Failed to place order", error: errorMessage });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
