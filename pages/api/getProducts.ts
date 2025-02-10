import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, 
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const query = `*[_type == "product"] {
        _id,
        name,
        imagePath,
        price,
        stock
      }`;

      const products = await client.fetch(query);
      res.status(200).json(products);
    } catch (error) {
      console.error("Sanity fetch error:", error);
      res.status(500).json({ message: "Failed to fetch products" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
