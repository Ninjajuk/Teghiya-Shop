'use client'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation';
import { calculateSubtotal, calculateTotal } from "../utility/cartUtils"; 
import TotalPriceSummary from '../checkout/TotalPriceSummary';
import { clearCart } from '../redux/cartSlice';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const OrderSuccessPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart);
  const subtotal = calculateSubtotal(cartItems);
  const total = calculateTotal(cartItems);

  // Example order details
  const order = {
    products: cartItems,
    total,
    deliveryAddress: {
      firstName: 'John',
      lastName: 'Doe',
      address: '123 Main St',
      city: 'Cityville',
      state: 'Stateland',
      pincode: '12345',
      country: 'Countryland',
    },
  };

  return (
    <div className="container mx-auto mt-8 px-4 md:px-12 lg:px-20">
      {/* Success Message */}
      <div className="flex flex-col items-center">
        <CheckCircleIcon className="h-16 w-16 text-green-600 mb-2" />
        <h2 className="text-2xl md:text-3xl font-bold text-green-600 text-center">
          Order Successful! 🎉 Thank you for your order!
        </h2>
      </div>

      {/* Order Details */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Order Details</h3>
        
        {cartItems.length > 0 ? (
          <div className="grid gap-4">
            {cartItems.map((product) => (
              <div key={product.id} className="flex items-center gap-4 border-b pb-4 last:border-none">
                <img src={product.thumbnail} alt={product.title} className="h-20 w-20 object-cover rounded-md shadow-md" />
                <div className="flex-1">
                  <h4 className="text-lg font-medium">{product.title}</h4>
                  <p className="text-gray-500">₹{product.price} x {product.quantity}</p>
                </div>
                <p className="font-semibold text-gray-900">₹{product.price * product.quantity}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>

      {/* Total Price Summary */}
      <TotalPriceSummary />

      {/* Delivery Address */}
      <div className="mt-6 bg-white shadow-md rounded-lg p-6">
        <h4 className="text-xl font-semibold mb-2">Delivery Address</h4>
        <p>{order.deliveryAddress.firstName} {order.deliveryAddress.lastName}</p>
        <p>{order.deliveryAddress.address}</p>
        <p>{order.deliveryAddress.city}, {order.deliveryAddress.state} {order.deliveryAddress.pincode}</p>
        <p>{order.deliveryAddress.country}</p>
      </div>

      {/* Continue Shopping Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
          onClick={() => {
            dispatch(clearCart());
            router.push('/');
          }}
        >
          Continue Shopping &rarr;
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
