// src/app/api/shippoOrder/route.ts
import axios from "axios";

const API_KEY = process.env.SHIPPO_API_KEY;

interface Parcel {
  length: number;
  width: number;
  height: number;
  distance_unit: string;
  weight: number;
  mass_unit: string;
}

export async function POST(request: Request) {
  try {
    const { addressFrom, addressTo, parcels, orderId, totalAmount } = await request.json();

    console.log("Request body:", { addressFrom, addressTo, parcels, orderId, totalAmount });

    // Ensure parcels have the correct type
    const parcelData = parcels.map((parcel: Parcel) => ({
      length: parcel.length,
      width: parcel.width,
      height: parcel.height,
      distance_unit: parcel.distance_unit,
      weight: parcel.weight,
      mass_unit: parcel.mass_unit,
    }));

    const response = await axios.post(
      "https://api.goshippo.com/shipments/",
      {
        address_from: addressFrom,
        address_to: addressTo,
        parcels: parcelData,
        async: false,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const shipment = response.data;

    console.log("Shipment Object ID (Tracking Number):", shipment.object_id);

    return new Response(
      JSON.stringify({
        orderId,
        totalAmount,
        trackingNumber: shipment.object_id,
        eta: shipment.eta || "3-5 business days",
        status: "Shipment created successfully!",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error("Error creating shipment:", error.response?.data || error.message);

      return new Response(
        JSON.stringify({
          message: "Failed to create shipment",
          error: error.response?.data || error.message,
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } else {
      console.error("Unexpected error:", error);

      return new Response(
        JSON.stringify({
          message: "Unexpected error occurred",
          error: "Unknown error",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }
}


// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios"; // Importing AxiosError for better type inference

// const API_KEY = process.env.SHIPPO_API_KEY;

// export default async function shippoOrder(req: NextApiRequest, res: NextApiResponse) { 
//     if (req.method !== "POST") { 
//         return res.status(405).json({ message: "Method Not Allowed" }); 
//     } 

//     console.log("Request body:", req.body);
//     const { addressFrom, addressTo, parcels, orderId, totalAmount } = req.body; 

//     try { 
//         const response = await axios.post( 
//             "https://api.goshippo.com/shipments/", 
//             { 
//                 address_from: addressFrom, 
//                 address_to: addressTo, 
//                 parcels, 
//                 async: false, 
//             }, 
//             { 
//                 headers: { 
//                     Authorization: `Bearer ${API_KEY}`,
//                     "Content-Type": "application/json", 
//                 }, 
//             } 
//         ); 

//         const shipment = response.data; 

//         res.status(200).json({ 
//             orderId, 
//             totalAmount, 
//             trackingNumber: shipment.object_id, 
//             eta: shipment.eta || "3-5 business days", 
//             status: "Shipment created successfully!", 
//         }); 
        
//         console.log("Shipment Object ID (Tracking Number):", shipment.object_id);

//     } catch (error: unknown) {
//         // TypeScript check to ensure error is an AxiosError instance
//         if (axios.isAxiosError(error)) {
//             console.error("Error creating shipment:", error.response?.data || error.message);
            
//             // Add response status code to the log for better debugging
//             if (error.response) {
//                 console.error("Response Status:", error.response.status);
//                 console.error("Response Data:", error.response.data);
//             }

//             res.status(500).json({ 
//                 message: "Failed to create shipment", 
//                 error: error.response?.data || error.message 
//             });
//         } else {
//             // If the error is not an AxiosError, handle it differently
//             console.error("Unexpected error:", error);
//             res.status(500).json({ message: "Unexpected error occurred", error: "Unknown error" });
//         }
//     }
// }
