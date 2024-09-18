
'use client'
import { useEffect, useState } from "react";
import Bunks from "../Components/Slider";
import ShopByCategory from "./ShopByCategory";
import FruitsVegetables from "./FriutsVegetables";
import Electronics from "./Electronics";
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFromCart, isItemInCart } from '../utility/cartUtils'

import {getallProducts, } from '../../apiFunction'

import TrendingProducts from "./components/TrendingProducts";
  
  export default function ProductList() {

    const [data, setData] = useState(null);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();


useEffect(()=>{
  async function getData() {
    try {
      const resp = await fetch('https://dummyjson.com/products');
      const product  =await resp.json()
      setData(product.products);
      console.log("Data is",product.products)
          // Extract unique categories
          const categories = [...new Set(product.map(item => item.category))];
          setUniqueCategories(categories);
    } catch (error) {
      console.log('Error in fetching data:', error);
   
    }
  }

  getData();
},[])


  const handleAddToCart = (product) => {
    addOrRemoveFromCart(dispatch, product, cartItems);
  };
const filterProductsData=['All','Electronics','Vegetables','Meats']


    return (
      <div className="bg-gray-100">
        <Bunks />

        <ShopByCategory />
        {/* <Electronics /> */}
        <TrendingProducts/>

        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6  lg:max-w-7xl lg:px-8">
          <div className="overflow-x-auto bg-gray-400">
            <ul className="flex items-center justify-center">
              {uniqueCategories.map((item,index) => (
                <li key={index}  className=" px-4 py-2  hover:bg-gray-600 cursor-pointer rounded-md shadow-md">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.slice(0,12).map((product) => (
              <div
                key={product.id}
                className="group relative px-2 py-2 shadow-md rounded-md "
              >
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
                    // onClick={() => handleAddToCart(product)}
                    className={`w-full text-white bg-blue-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    <span className={`inline-block w-18 `}>
                      {/* {isItemInCart(product.id, cartItems)
                        ? "Remove"
                        : "Add to Cart"} */}
                     Add to Cart"
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  