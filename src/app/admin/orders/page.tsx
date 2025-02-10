"use client";
import { useEffect, useState } from "react";
import SideBar from "../sidebar/page";

interface Order {
  _id: string;
  user: string;
  email: string;
  address: string;
  cartItems: {
    productId: string;
    name: string;
    image: string;
    price: number;
    quantity: number;
  }[];
  totalPrice: number;
  paymentStatus: string;
  createdAt: string;
}

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getOrder")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg font-semibold">Loading orders...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <SideBar />
      </div>

      {/* Right Content Area */}
      <div className="ml-64 w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Orders</h1>

        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-3 px-6 text-left">User</th>
                  <th className="py-3 px-6 text-left">Email</th>
                  <th className="py-3 px-6 text-left">Address</th>
                  <th className="py-3 px-6 text-center">Total Price</th>
                  <th className="py-3 px-6 text-center">Payment Status</th>
                  <th className="py-3 px-6 text-center">Created At</th>
                  <th className="py-3 px-6 text-center">Items</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-sm">
                {orders.map((order) => (
                  <tr key={order._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{order.user}</td>
                    <td className="py-3 px-6">{order.email}</td>
                    <td className="py-3 px-6">{order.address}</td>
                    <td className="py-3 px-6 text-center font-bold">${order.totalPrice}</td>
                    <td className="py-3 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-white text-xs ${
                        order.paymentStatus === "paid" ? "bg-green-500" : "bg-red-500"
                      }`}>
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center">{new Date(order.createdAt).toLocaleString()}</td>
                    <td className="py-3 px-6">
                      <ul className="list-disc pl-5 text-sm">
                        {order.cartItems?.length ? (
                          order.cartItems.map((item, index) => (
                            <li key={`${item.productId}-${index}`} className="text-gray-600">
                              {item.name} - ${item.price} x {item.quantity}
                            </li>
                          ))
                        ) : (
                          <li className="text-gray-500">No items found</li>
                        )}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
