'use client'
import React, { useState,useEffect } from "react";
import { FaCartPlus,FaUser,FaAngleDown } from "react-icons/fa";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LoginModal from "./Modal/LoginModal";
import SignUpModal from "./Modal/SignUpModal";
import ShoppingCart from "../cart/page";
import { useRouter } from 'next/navigation'
import { useSelector,  } from "react-redux";
import ShopHover from "./ShopbyCategoryHover";


const Navbar = ({ siebaropen }, open) => {
  const loginrouter = useRouter()
const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
const user=useSelector((state)=>state.auth.user)

  const [isShopHovered, setIsShopHovered] = useState(false);
  const[isCartOpen,setIsCartOpen]=useState(false)
  const [activeLink, setActiveLink] = useState("/dashboard"); 

  
  const handleLinkClick = (href) => {
    setActiveLink(href);
  };



  const navigationLeft = [
    { name: "Home", href: "/", current: false },
    { name: "Shop", href: "/shop", current: false },
    { name: "About us", href: "/about-us", current: false },

  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }



  const cartItems = useSelector((state) => state.cart);
  // const { cart, isAuthenticated, user } = useSelector((state) => state);
  // useEffect(() => {}, [cart]);

 

  const handlecartOpen = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };
  return (
    <>
      <nav className="bg-purple-600  sticky top-0 z-10 h-[4rem]">
        <div className=" flex justify-between items-center py-4">
          {/* Menu Toggle (visible in mobile view) */}
          <button
            className="sm:block md:hidden md text-white ml-2 "
            onClick={siebaropen}
          >
            {open ? (
              <Bars3Icon className="h-6 w-6" />
            ) : (
              <XMarkIcon className="h-6 w-6 " />
            )}
          </button>
          {/* Logo (visible in desktop view) */}
          <div className="hidden md:block">
            <p
              href="/"
              className="px-2 text-white font-semibold text-lg font-sans"
            >
              Yingkiong Store
            </p>
          </div>

          <div className="hidden lg:flex  px-2">
            {navigationLeft.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.name === "Shop" && setIsShopHovered(true)
                }
                onMouseLeave={() =>
                  link.name === "Shop" && setIsShopHovered(false)
                }
              >
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={classNames(
                    link.href === activeLink
                      ? "bg-gray-900 text-white font-sans"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-4 py-2 text-sm font-medium flex items-center"
                  )}
                >
                  {link.name}{" "}
                  {link.name === "Shop" && <FaAngleDown className="w-6 h-6" />}
                </a>
                {link.name === "Shop" && isShopHovered && <ShopHover />}
                {/* {link.name === "Shop" && isShopHovered && (
                  <ShopHover/>
                )} */}
              </div>
            ))}
          </div>

          {/* Search Input */}
          <div className="flex-grow md:w-1/2 mx-4 md:mx-0">
            <input
              type="text"
              className="w-full rounded-full px-4 py-2 bg-gray-700 text-white focus:outline-none"
              placeholder="Search..."
            />
          </div>

          {/* User PRofile */}
          {/* <div className="flex px-4 rounded-full">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div> */}
          <div className="lg:hidden px-4 relative">
            <button
              onClick={setIsCartOpen}
              className="w-8 h-8 text-white text-lg "
            >
              <span>
                <FaCartPlus />
              </span>

              <span className="absolute top-1 right-0  -mt-3 mr-3 bg-red-500 text-white rounded-full text-sm px-1 py-0.5">
                {/* {cart && Array.isArray(cart) ? cart.length : 0} */}
                {cartItems.length}
              </span>
            </button>
          </div>
          {/* User PRofile */}

          {/* Navigation Links (visible in desktop view) */}
          <div className="hidden lg:flex space-x-4 px-4 ">
            {isAuthenticated ? (
              <h1>{user.email.slice(0,6)}</h1>
            ) : (
              <button
                className="text-white flex items-center text-md px-4 relative"
                type="button"
                onClick={() => loginrouter.push("/login")}
              >
                <span className="px-1">Login</span>
                <span className="px-1">
                  <FaUser />
                </span>
              </button>
            )}
            <button
              type="button"
              className="text-white flex items-center text-md px-4 relative"
              onClick={handlecartOpen}
            >
              <span className="px-1">Cart</span>
              <span className="px-1">
                <FaCartPlus />
              </span>
            </button>

            <span className="absolute top-0 right-5 mt-1  bg-red-500 text-white rounded-full text-xxs px-2 py-0.5">
              {/* {cart && Array.isArray(cart) ? cart.length : 0} */}
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>
      {/* {isModalOpen ? (
          <LoginModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeLoginModal}
            onClick={openSignupModal}
           
          />
        ):null}
                {isSignupModalOpen ? (
          <SignUpModal
            // updateFormData={updateFormData}
            isOpen={isModalOpen}
            onClose={closeSignUpModal}
            onClick={openLoginModal}
      
          />
        ):null} */}
      {isCartOpen ? (
        <ShoppingCart isCartOpen={isCartOpen} handlecartOpen={handlecartOpen} />
      ) : null}
    </>
  );
};

export default Navbar;
