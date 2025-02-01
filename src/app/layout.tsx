import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { CartProvider } from "./context/CartContext";
import CartIcon from "@/components/carticon";
import dynamic from "next/dynamic";
// import { ClerkProvider } from "@clerk/nextjs";
// import { Suspense } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata :Metadata = {
  title: "Furniture Market",
  icons: {
    icon: "/favicon.ico",  // Ensure this is correct
  },
};
const DynamicClerkProvider = dynamic(() =>
  import("@clerk/nextjs").then((mod) => mod.ClerkProvider) as Promise<
    React.ComponentType<{ children: React.ReactNode }>
  >
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <DynamicClerkProvider 
      // publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      >
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <CartProvider> {/* Wrap the app in CartProvider */}
          <Header />
          {children}
          <CartIcon/>
          <Footer />
          {/* <CartDetails /> Render the client component here */}
        </CartProvider>
      </body>
    </html>
    </DynamicClerkProvider>
  );
}
