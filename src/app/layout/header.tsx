"use client"
import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, UserRoundX } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useCart } from "../context/CartContext";
import { useWishlist } from "../../hooks/usewishlist";
import { useEffect, useState } from "react";


export default function Header() {
    const { cartCount } = useCart(); // Use cartCount from context
    const { wishlist } = useWishlist(); // Fetch wishlist from custom hook
    const [wishlistCount, setWishlistCount] = useState(0);
  
    useEffect(() => {
      // Update wishlist count whenever the wishlist changes
      if (wishlist) {
        setWishlistCount(wishlist.length);
      }
    }, [wishlist]); // Effect will run whenever wishlist updates
  

    return (
        <main className="sticky top-0 z-40">

            <div className="flex justify-center   font-bold text-2lg bg-[#fbebb5] text-black p-4  space-x-14 sm:space-x-60  ">
                <ul className=" hidden md:block  ">
                    <li className="space-x-5 ">
                        <Link href="/">Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                        <Link href="/blog">Blog</Link>


                    </li>
                </ul>
                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <ul className="bg-white flex flex-col font-medium">
                                <li className="space-x-5  flex space-y-12 items-start flex-col">
                                    <Link href="/" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Home</Link>
                                    <Link href="/about" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">About</Link>
                                    <Link href="/shop" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Shop</Link>
                                    <Link href="/blog" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Blog</Link>
                                    <Link href="/contact" className=" hover:bg-yellow-50   shadow-lg px-6 py-3">Contact</Link>

                                </li>
                            </ul>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <div className="flex space-x-4 sm:space-x-8">
                    <Link href="/myaccount"><UserRoundX /></Link>
                    <Link href="/checkout"><Search /></Link>
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <Link href="/whishlist"><Heart/></Link>
                            {wishlistCount > 0 && (
                               <span
                               style={{
                                   position: "absolute",
                                   top: "-5px",
                                   right: "-10px",
                                   backgroundColor: "red",
                                   color: "white",
                                   borderRadius: "50%",
                                   padding: "5px 10px",
                                   fontSize: "10px",
                               }}
                           >
                               {wishlistCount}
                           </span>
                            )}
                        
                    </div>


                    {/* Cart Icon */}
                    <div style={{ position: "relative", display: "inline-block" }}>
                        <Link href="/cart"><ShoppingCart /></Link>

                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-5px",
                                    right: "-10px",
                                    backgroundColor: "red",
                                    color: "white",
                                    borderRadius: "50%",
                                    padding: "5px 10px",
                                    fontSize: "10px",
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}