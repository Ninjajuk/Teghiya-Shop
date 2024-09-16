'use client'
import React, { useState } from "react";
import OrderForm from "@/app/dashboard/orders/orderForm";


export const OrderModal = ({ order, onSubmit, closeModal }) => {
    const [isOrderFormVisible, setIsOrderFormVisible] = useState(true);

    const handleFormSubmit = (editedOrder) => {
      setIsOrderFormVisible(false);
      onSubmit(editedOrder);
      closeModal();
    };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-700 opacity-75 "> </div>
        <div className="relative z-10 bg-white p-4 max-w-md rounded-lg">
        {isOrderFormVisible ? (
            <OrderForm
            closeModal={closeModal}
            initialOrder={order}
            onSubmit={onSubmit}
            />
          ) : null}

        </div>
      </div>
    </>
  );
};
