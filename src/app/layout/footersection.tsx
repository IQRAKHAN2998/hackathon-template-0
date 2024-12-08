import React from 'react'

export const Footersection = () => {
  return (
    
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center bg-[#FAF4F4] py-32">
      <div>
        <h3 className="font-semibold text-lg">Free Delivery</h3>
        <p className="text-gray-600">
          For all orders over $50, consectetur adipim scing elit.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">90 Days Return</h3>
        <p className="text-gray-600">
          If goods have problems, consectetur adipim scing elit.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg">Secure Payment</h3>
        <p className="text-gray-600">
          100% secure payment, consectetur adipim scing elit.
        </p>
      </div>
    </div>
  )
}
