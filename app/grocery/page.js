'use client'

import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import React, { useEffect, useState } from 'react';

import {fetchDataFromAPI} from '../../apiFunction'
import CategoryCard from "../Product/components/CardFruitsVeg";




const Grocery = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    async function getData() {
      try {
        const vegData = await fetchDataFromAPI('grocery');
        setData(vegData);
      } catch (error) {
        console.log('Error in fetching data:', error);
     
      }
    }

    getData();
  },[data])

  const weightOptions = [1, 2, 3, 5];
  
  return (
    <section className="w-full bg-gray-100">
      <div className="mx-auto max-w-2xl px-4  sm:px-6 py-4 lg:max-w-7xl lg:px-8">

        <div className="flex justify-between ">
          <h1 className="text-xl lg:text-2xl font-bold py-4   text-blue-800">
           Grocery
          </h1>
         
          {/* <div className='flex items-center space-x-4'>
            <a href='' className="hover:underline text-slate-900 font-semibold text-lg">View All</a>
            <button disabled={currentindex === 0} onClick={handlePrev} className={` hover:rounded-full  ${currentindex===0?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'}`}><FaAngleLeft className="w-6 h-6"/></button>
            <button onClick={handleNext} disabled={currentindex + itemsPerpage >= data.length} className={`cursor-pointer hover:rounded-full ${currentindex + itemsPerpage >= data.length?'opacity-25 pointer-events-none':'opacity-1 hover:bg-gray-400 cursor-pointer'} `}><FaAngleRight className="w-6 h-6"/></button>

          </div> */}
        </div>
        <p>Fresh Delights: A Bounty of Quality Groceries at Your Fingertips</p>


        <div>
          <CategoryCard visibleCards={data}/>
        </div>
      </div>
    </section>
  );
};

export default Grocery;
