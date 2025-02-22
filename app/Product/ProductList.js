'use client'
import { useEffect, useState, useRef } from "react";
import Bunks from "../Components/Slider";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFromCart } from '../utility/cartUtils';

export default function ProductList() {
  const [data, setData] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [limit, setLimit] = useState(20); // Fetch 20 products at a time
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    if (loading) return;
    setLoading(true);
    
    try {
      const resp = await fetch(`https://dummyjson.com/products?limit=${limit}`);
      const productData = await resp.json();

      setData((prevData) => [...prevData, ...productData.products]); // Append new data
      const categories = [...new Set(productData.products.map(item => item.category))];
      setUniqueCategories(categories);
    } catch (error) {
      console.log('Error in fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Infinite Scroll using Intersection Observer
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !loading) {
        setLimit((prevLimit) => prevLimit + 20); // Increase fetch limit
        fetchProducts();
      }
    }, { threshold: 1 });

    observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [loading]);

  const handleAddToCart = (product) => {
    addOrRemoveFromCart(dispatch, product, cartItems);
  };

  return (
    <div className="bg-gray-100">
      <Bunks />

      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Category Filter */}
        <div className="overflow-x-auto bg-gray-400">
          <ul className="flex items-center justify-center">
            {uniqueCategories.map((item, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-600 cursor-pointer rounded-md shadow-md">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        {/* Product List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((product) => (
            <div key={product.id} className="group relative px-2 py-2 shadow-md rounded-md">
              <Link href={`/shop/${product.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </Link>

              <div className="mt-4 flex flex-col">
                <Link href={`/shop/${product.id}`}>
                  <p className="text-sm font-medium text-gray-900">
                    {product.title}
                  </p>
                </Link>
                <p className="text-sm font-medium text-gray-900 flex items-center justify-between">
                  <span className="font-semibold text-lg">
                    ₹{product.price}
                  </span>
                  <span className="text-green-500">
                    {product.discountPercentage}% off
                  </span>
                </p>
              </div>

              <div className="text-center py-3 mb-3">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full text-white bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Loading Indicator & Intersection Observer Target */}
        <div ref={observerRef} className="w-full text-center py-5">
          {loading && <p>Loading more products...</p>}
        </div>
      </div>
    </div>
  );
}
