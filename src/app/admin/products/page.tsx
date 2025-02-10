"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SideBar from "../sidebar/page";

interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
  stock: number;
}

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/getProducts")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg font-semibold">Loading products...</p>;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Left Sticky */}
      <div className="w-64 bg-gray-800 text-white p-4 fixed h-full">
        <SideBar />
      </div>

      {/* Right Side Content */}
      <div className="ml-64 w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Product Stock Levels</h1>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">Image</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Price</th>
                <th className="border border-gray-300 p-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="text-center">
                  <td className="border border-gray-300 p-2">
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      width={50}
                      height={50}
                      className="w-16 h-16 object-cover mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">{product.name}</td>
                  <td className="border border-gray-300 p-2 font-bold">${product.price}</td>
                  <td className={`border border-gray-300 p-2 font-bold ${product.stock > 5 ? "text-green-500" : "text-red-500"}`}>
                    {product.stock} left
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
