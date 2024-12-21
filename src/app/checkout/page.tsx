import React from 'react';
import { Headersection } from '../layout/headersection';

const BillingDetails = () => {
  
  return (
   <> <Headersection text="Checkout" tittle='Check Out'/>
    <div className="max-w-screen-xl mx-auto py-10 px-5">
      <h1 className="text-2xl font-bold mb-6">Billing details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Form Section */}
        <div className="lg:col-span-2">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:col-span-2"
            />
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full sm:col-span-2">
              <option>Country / Region</option>
              <option>Sri Lanka</option>
              <option>Pakistan</option>
              <option>India</option>
            </select>
            <input
              type="text"
              placeholder="Street Address"
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:col-span-2"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <select className="border border-gray-300 rounded-md px-3 py-2 w-full">
              <option>Province</option>
              <option>Western Province</option>
              <option>Southern Province</option>
            </select>
            <input
              type="text"
              placeholder="ZIP Code"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:col-span-2"
            />
            <textarea
              placeholder="Additional Information"
              className="border border-gray-300 rounded-md px-3 py-2 w-full sm:col-span-2"
              rows={3}
            ></textarea>
          </form>
        </div>

        {/* Right side */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-5">
          <h2 className="text-lg font-bold mb-4">Product</h2>
          <div className="flex justify-between mb-2">
            <span>Asgaard sofa × 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Direct Bank Transfer</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="payment" />
              <span>Cash On Delivery</span>
            </label>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
          </p>
          
          <button  className="w-full py-3 bg-white border border-gray-300 rounded-md text-center font-bold hover:bg-gray-100">
            Place order
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default BillingDetails;
