// src/app/admin/page.tsx

import { client } from '../../sanity/lib/client';  // apna sanity client import karein
export type orderSchema={
  _id :string,
      user:string,
      email:string,
      address:string,
      totalPrice:number,
      createdAt:"datetime"
}
const AdminPage = async () => {
  // Orders ko directly component mein fetch karein
  const orders = await client.fetch(
    `*[_type == "order"]{
      _id,
      user,
      email,
      address,
      totalPrice,
      createdAt
    }`
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h1>
        
        {/* Table for displaying order details */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-yellow-500">
                <th className="px-6 py-3 text-left text-gray-800">User</th>
                <th className="px-6 py-3 text-left text-gray-800">Email</th>
                <th className="px-6 py-3 text-left text-gray-800">Address</th>
                <th className="px-6 py-3 text-left text-gray-800">Total Price</th>
                <th className="px-6 py-3 text-left text-gray-800">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order: orderSchema) => (
                <tr key={order._id} className="border-t hover:bg-gray-100">
                  <td className="px-6 py-4">{order.user}</td>
                  <td className="px-6 py-4">{order.email}</td>
                  <td className="px-6 py-4">{order.address}</td>
                  <td className="px-6 py-4">{order.totalPrice}</td>
                  <td className="px-6 py-4">{order.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
