

import Link from 'next/link';
import React from 'react';
import { Footersection } from './footersection';

const Footer = () => {
  const foot = `400 University Drive Suite 200 Coral \n Gables, \n
        FL 33134 USA`;

  return (
    <>
    <Footersection/>
      {/* Footer Wrapper */}
      <div className="flex flex-col sm:flex-row sm:justify-around mt-10 items-center gap-8">
        
        {/* Address Section */}
        <div className="text-[#9F9F9F] whitespace-pre-line py-5 text-center sm:text-left">
          {foot}
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-col items-center">
          <h2 className="text-[#9F9F9F] font-medium mb-4">Links</h2>
          <div className="font-bold space-y-4 flex flex-col items-center sm:items-start">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-[#9F9F9F] font-medium mb-4">Help</h2>
          <div className="font-bold space-y-4 flex flex-col items-center sm:items-start">
            <Link href="/">Payments Options</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Privacy Policies</Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-[#9F9F9F] font-medium mb-4">Newsletter</h2>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
              className="block w-full sm:w-auto underline rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-2 py-1"
            />
            <button className="text-lg font-bold underline">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t-2 border-gray-500 my-4" />

      {/* Empty Bottom Section */}
      <div></div>
    </>
  );
};

export default Footer;
