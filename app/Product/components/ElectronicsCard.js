import { useDispatch, useSelector } from "react-redux";
import { addOrRemoveFromCart, isItemInCart } from '../../utility/cartUtils'
import { useState } from "react";
import Link from 'next/link';
// const categories = [
//   {
//     id: 101,
//     title: "Carrots",
//     description: "Explore the latest additions to our collection.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/l/10000070_15-fresho-carrot-orange.jpg?tr=w-640,q=80",
//     price: 25,
//     TotalPrice: 35,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 102,
//     title: "Capsicum",
//     description: "Boost your productivity with these essentials.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000067_23-fresho-capsicum-green.jpg?tr=w-1920,q=80",
//     price: 36,
//     TotalPrice: 50,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 103,
//     title: "Tomato",
//     description: "Create your ideal workspace with our curated selection.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000203_16-fresho-tomato-local.jpg?tr=w-3840,q=80",
//     price: 45,
//     TotalPrice: 70,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 104,
//     title: "Potato",
//     description: "Fresho Potato",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/l/40048459_8-fresho-potato-new-crop.jpg?tr=w-640,q=80",
//     price: 15,
//     TotalPrice: 35,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 105,
//     title: "Onion",
//     description: "Add a flavorful twist to your dishes with our premium onions.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/1201414_1-fresho-onion.jpg?tr=w-2048,q=80",
//     price: 20,
//     TotalPrice: 30,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 106,
//     title: "Cucumber",
//     description: "Stay cool and refreshed with our crisp cucumbers.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/40077518_1-fresho-cucumber.jpg?tr=w-2048,q=80",
//     price: 18,
//     TotalPrice: 25,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 107,
//     title: "Cauliflower",
//     description: "Enhance your meals with our fresh and tender cauliflower.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000074_19-fresho-cauliflower.jpg?tr=w-2048,q=80",
//     price: 30,
//     TotalPrice: 45,
//     brand: "yinkiong",
//     category: "vegetables"
//   },
//   {
//     id: 108,
//     title: "Lady's Finger",
//     description: "Experience the goodness of lady's finger in every bite.",
//     thumbnail: "https://www.bigbasket.com/media/uploads/p/m/10000142_17-fresho-ladies-finger.jpg?tr=w-2048,q=80",
//     price: 22,
//     TotalPrice: 32,
//     brand: "yinkiong",
//     category: "vegetables"
//   }
// ];

const weightOptions = [1, 2, 3, 5]; // You can modify the weight options as needed

function ElectronicsCard({visibleCards}) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);


  const handleAddToCart = (item) => {
    addOrRemoveFromCart(dispatch, item, cartItems);
  };
  
  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {visibleCards.slice(0, 16).map((product) => (
      <div
        key={product._id}
        className="group relative px-2 py-2 shadow-md rounded-md"
      >
        <Link href={`/shop/${product.id}`}>
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.thumbnail}
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
            onClick={() => handleAddToCart(product._id)}
            className={`w-full text-white bg-blue-700  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            <span className={`inline-block w-18 `}>
              {isItemInCart(product._id, cartItems)
                ? "Remove"
                : "Add to Cart"}
              {/* {isItemInCart(product.id,cartItems) ? "Remove" : "Add to Cart"} */}
            </span>
          </button>
        </div>
      </div>
    ))}
  </div>
  );
}

export default ElectronicsCard;


