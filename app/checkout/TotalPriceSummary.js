'use client'
import React, { useState } from 'react';
import { useSelector,  } from "react-redux";
import { calculateSubtotal, calculateTotal, } from "../utility/cartUtils"; 


const TotalPriceSummary = () => {
  const cartItems = useSelector((state) => state.cart);

  const subtotal = calculateSubtotal(cartItems);
  const total = calculateTotal(cartItems);


  return (

        <div className="border-t pt-4 mt-4">
     
   
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            {/* <span>₹{item.price}</span> */}
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span className={`${subtotal>1000?'text-green-600 font-semibold text-lg':''}`}>{subtotal>1000?'Free':'₹50.00'}</span>
          </div>
          
          {/* taxes */}
          <div className="flex justify-between mb-2">
            <span>Taxes</span>
             <span>₹{(0.08 * subtotal).toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total</span>
            {/* <span>₹1100</span> */}
            <span>₹{total}</span>
          </div>
        </div>

  );
};

export default TotalPriceSummary;
