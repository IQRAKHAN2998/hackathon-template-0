// pages/api/orders.ts
import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Ensure this is set in .env
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const {  totalPrice, customerInfo } = req.body;

      const order = await client.create({
        _type: "order",
        user: customerInfo.name,
        email: customerInfo.email,
        address: customerInfo.address,
        totalPrice: totalPrice,
        createdAt: new Date().toISOString(),
      });

      res.status(200).json({ orderId: order._id }); // Send back the Sanity order ID
    } catch (error) {
      console.error("Sanity order save error:", error);
      res.status(500).json({ message: "Failed to place order" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
