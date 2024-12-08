import Link from "next/link";
import { Heart, Menu, Search, ShoppingCart, UserRoundX } from "lucide-react"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {

    return (
        <main>

            <div className="flex justify-center  font-bold text-2lg bg-[#fbebb5] text-black p-4  space-x-14 sm:space-x-60 sticky top-0">
                <ul className=" hidden md:block">
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
                    <Link href=""><Heart /></Link>
                    <Link href="/cart"><ShoppingCart /></Link>

                </div>
            </div>
        </main>
    )
}