'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaCartPlus,FaUser,FaAngleDown } from "react-icons/fa";
import { useSelector,useDispatch  } from "react-redux";
import { useRouter } from 'next/navigation'
import React, { useState,useEffect } from "react";
import ShopHover from '../ShopbyCategoryHover'
import ShoppingCart from '@/app/cart/page'
import {logout} from '../../redux/authSlice'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Navbar1() {
  const pathname = usePathname()
  const loginrouter = useRouter()
  const dispatch=useDispatch()
const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
const user=useSelector((state)=>state.auth.user)
const cartItems = useSelector((state) => state.cart);
  const [isShopHovered, setIsShopHovered] = useState(false);
  const[isCartOpen,setIsCartOpen]=useState(false)


  const handlecartOpen = () => {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  };
  return (
    <>
      <Disclosure as="nav" className="bg-sky-800 sticky top-0 z-10">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center px-2 lg:px-0">
                  {/* <div className="flex-shrink-0"> */}
                    <h1 className="hidden lg:flex rounded-md px-3 py-2 text-lg font-bold text-gray-300">
                      Teghiya Store
                    </h1>
                  {/* </div> */}
                  <div className="hidden lg:ml-6 lg:block">
                    <div className="flex space-x-4">
                      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

                      <Link
                        href="/"
                        className={`rounded-md  px-3 py-2 text-sm hover:bg-gray-700 hover:text-white font-medium text-white  ${
                          pathname === "/" ? "bg-gray-900" : ""
                        }`}
                      >
                        Home
                      </Link>
                      {/* <Link
                        href="/shop"
                        onClick={() => setIsShopHovered(!isShopHovered)}
                        className={`flex rounded-md px-3 py-2 text-sm font-medium  text-gray-300 hover:bg-gray-700 hover:text-white ${
                          pathname === "/shop" ? "bg-gray-900" : ""
                        }`}
                      >
                        <span>Shop</span>
                        <span>
                          {" "}
                          <FaAngleDown className="w-6 h-6" />
                        </span>
                      </Link>
                      {isShopHovered && <ShopHover />} */}
                      <Link
                        href="/about-us"
                        className={`rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                          pathname === "/about-us" ? "bg-gray-900" : ""
                        }`}
                      >
                        About us
                      </Link>
                    </div>
                  </div>
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
                {/* <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="w-full max-w-lg lg:max-w-xs">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-transparent bg-gray-700 py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 focus:border-white focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-white sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div> */}


               <div className='flex items-center'>
                  <div className="hidden lg:ml-4 lg:flex items-center">
                    {isAuthenticated && user ? (
                      <h1>{user.email.slice(0, 6)}</h1>
                    ) : (
                      <button
                        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        type="button"
                        onClick={() => loginrouter.push("/login")}
                      >
                        Login
                      </button>
                    )}
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                      <div>
                        <Menu.Button className="flex rounded-full  text-white px-2 ">
                          {/* <span className="sr-only">Open user menu</span> */}
                          <span className="sr-only">Login</span>
                          {/* <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        /> */}
                          <FaUser />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Order History
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                My WishList
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Contact Us
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => dispatch(logout())}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-white flex items-center text-md px-4 relative"
                      onClick={handlecartOpen}
                    >
                      <span className="px-1">Cart</span>
                      <span className="">
                        <FaCartPlus />
                      </span>
                    </button>

                    <span className="absolute top-0 right-0 mt-1  bg-red-500 text-white rounded-full text-xxs px-1 py-0.5">
                      {cartItems.length}
                    </span>
                  </div>
                </div>


              </div>
            </div>
{/* Mobile Menu */}
            <Disclosure.Panel className="lg:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Shop
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  About us
                </Disclosure.Button>

                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Contact us
                </Disclosure.Button>
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  {/* <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div> */}
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {isAuthenticated &&user ? (
                        <h1> {user.email}</h1>
                      ) : (
                        <h1>Hi User</h1>
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {/* {user.email} */}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="a"
                    href="/profile"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Settings
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href="/"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {isCartOpen ? (
        <ShoppingCart isCartOpen={isCartOpen} handlecartOpen={handlecartOpen} />
      ) : null}
    </>
  );
}