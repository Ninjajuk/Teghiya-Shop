
import React from 'react';

const ContactUs = () => {
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 py-4 lg:max-w-7xl lg:px-8 ">
      <h1 className="text-xl font-bold py-8 text-blue-800">For any Product related Query </h1>
        <div className='flex flex-col'>
            
        <div className='mx-auto'>
          <p className=' text-gray-500 text-lg font-semibold mb-2'>Contact Us</p>
          <h1 className="text-2xl font-bold  text-green-800 ">
          Mobile:- <span>7629826114</span>
        </h1>
        <p className='font-semibold mb-2'>Email:-<span className=' text-gray-500 '>yingkiongstore@gmail.com</span></p>
        <p className='font-semibold flex flex-col'><span className=' text-gray-500 text-sm'>Bentuk Village Near Baptism Church</span><span className=' text-gray-500 text-sm'>Arunachal Pradesh</span></p>
        </div>
        </div>
  
  
      </div>
    </section>
  );
};

export default ContactUs;
