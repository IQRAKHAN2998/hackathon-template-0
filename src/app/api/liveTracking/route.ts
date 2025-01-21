import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface TrackingDetails {
  tracking_number: string;
  carrier: string;
  status: string;
  eta: string;
  tracking_history: Array<{
    status: string;
    status_date: string;
    location?: {
      city?: string;
      state?: string;
      country?: string;
    };
    status_details?: string;
  }>;
}

const SHIPPO_API_KEYS = process.env.SHIPPO_API_KEY;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { trackingNumber, carrier } = req.body;

    try {
      const trackingDetails = await axios.get<TrackingDetails>(
        `https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`,
        {
          headers: {
            "Authorization": `ShippoToken ${SHIPPO_API_KEYS}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      console.log("Shippo API Response:", trackingDetails.data);

      const combinedData = {
        trackingDetails: trackingDetails.data,
      };

      res.status(200).json(combinedData);
    } catch (error: unknown) {
      // TypeScript check to ensure error is an instance of Error
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
        res.status(400).json({ message: "Failed to fetch data", error: error.message });
      } else {
        console.error("An unexpected error occurred:", error);
        res.status(400).json({ message: "Failed to fetch data", error: "Unknown error" });
      }
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
