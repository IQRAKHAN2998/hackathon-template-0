import { Product } from '@/app/context/CartContext';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

// Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia", // API version update kiya
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { cartItems } = req.body;

      // Create line items from cartItems
      const line_items = cartItems.map((item: Product) => ({
        price_data: {
          currency: 'usd', // Apna currency set karen (USD example ke liye)
          product_data: {
            name: item.name,
            images: [item.imagePath || 'default.jpg'], // Default image agar item ka image na ho
          },
          unit_amount: Number(item.price) * 100, // Stripe ko price cents mein chahiye hota hai
        },
        quantity: 1, // Har item ki quantity 1 hai
      }));

      // Create Checkout Session with success and cancel URLs
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'], // Only card payment accepted
        line_items, // Cart items ko line items ke roop mein pass kiya
        mode: 'payment', // One-time payment mode
        success_url: `${process.env.BASE_URL}/shippoData`, // URL for successful payment
        cancel_url: `${process.env.BASE_URL}/checkout`, // URL for cancelled payment
      });

      // Return the session URL to frontend for redirection
      res.status(200).json({ url: session.url, sessionId: session.id }); // Return session URL and sessionId
    } catch (error) {
      console.error('Stripe session creation error:', error);
      res.status(500).json({ message: 'Failed to create Stripe session' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' }); // Method not allowed for non-POST requests
  }
}

