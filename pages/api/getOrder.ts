import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

// Sanity Client Setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Ensure this is set in .env
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const query = `
        *[_type == "order"] | order(createdAt desc) {
          _id,
          user,
          email,
          address,
          cartItems[] {
            productId,
            name,
            image,
            price,
            quantity
          },
          totalPrice,
          paymentStatus,
          createdAt
        }
      `;

      const orders = await client.fetch(query);

      res.status(200).json(orders);
    } catch (error) {
      console.error("Sanity fetch error:", error);
      res.status(500).json({ message: "Failed to fetch orders" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
