
'use client';

import { client } from '@/sanity/lib/client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SearchCode } from 'lucide-react';

interface IProducts {
  _id: string;
  name: string;
  imagePath: string;
  price: string;
  discountPercentage: string;
  tags: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

const Category = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Don't fetch if search is empty
    setLoading(true);
    try {
      const res = await client.fetch(
        `*[_type == "product" && category match $category]{
          _id,
          name,
          price,
          discountPercentage,
          tags,
          imagePath,
          isFeaturedProduct,
          stockLevel,
          category
        }`,
        { category: searchTerm }
      );
      setProducts(res); // Set products based on search
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setProducts([]); // Reset products if search term is empty
    }
  };

  return (
    <div className="max-w-screen-2xl mx-auto p-6">
      {/* Header with Search Bar */}
      <header className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            className="py-4 px-9 border border-gray-800 rounded-md"
            placeholder="Enter category (e.g., sofa)"
            value={searchTerm}
            onChange={handleInputChange} // Handle input change
          />
          <button
            className="px-4 py-2 text-black rounded-md"
            onClick={handleSearch}
          >
            <SearchCode />
          </button>
        </div>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <h2 className="col-span-full text-center text-xl">Loading...</h2>
        ) : products.length > 0 ? (
          products.map((item: IProducts) => (
            <div
              key={item._id}
              className="items-center justify-center hover:scale-110 max-w-screen-sm"
            >
              <Link href={`/prodynamic/${item._id}`}>
                <Image
                  src={item.imagePath ? item.imagePath : '/default-image.jpg'}
                  alt="product image"
                  width="200"
                  height={200}
                />
              </Link>

              <h2 className="font-bold text-xl">{item.name}</h2>
              <span className="flex space-x-5">
                <h3 className="font-semibold text-xl text-red-900">
                  ${item.price}
                </h3>
                <h3 className="font-semibold text-xl text-slate-500 line-through">
                  ${item.discountPercentage}
                </h3>
              </span>
            </div>
          ))
        ) : (
          searchTerm.trim() && (
            <h2 className="col-span-full text-center text-xl">
              No products found. Try another category.
            </h2>
          )
        )}
      </div>
    </div>
  );
};

export default Category;
