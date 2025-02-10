"use client";
import { useEffect, useState } from "react";
import SideBar from "../sidebar/page";

export default function OverVeiw() {
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    pendingOrders: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getDashboardStats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dashboard stats:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center">Loading dashboard...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 fixed h-full">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6 w-full">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Orders */}
          <div className="p-4 bg-blue-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Orders</h2>
            <p className="text-2xl font-bold">{stats.totalOrders}</p>
          </div>
          {/* Total Revenue */}
          <div className="p-4 bg-green-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Revenue</h2>
            <p className="text-2xl font-bold">${stats.totalRevenue}</p>
          </div>
          {/* Total Products */}
          <div className="p-4 bg-yellow-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Products</h2>
            <p className="text-2xl font-bold">{stats.totalProducts}</p>
          </div>
          {/* Pending Orders */}
          <div className="p-4 bg-red-500 text-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Pending Orders</h2>
            <p className="text-2xl font-bold">{stats.pendingOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
