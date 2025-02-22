import {footerdata,footerdata1} from '../Components/data'
import Link from 'next/link'
import { FaWhatsapp,FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
      <footer className="bg-[#f9f9f9]  py-4 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl  py-8">
          <div className="flex flex-col md:flex-row  w-full py-2">
            <div className="md:w-2/5  flex flex-col px-2 py-4">
              <div className="mb-4" >
                <h1 className='text-4xl font-bold text-purple-800'>Teghiya Store</h1>
              </div>
              <div className="mb-4">
                <p>Teghiya Store was born out of a love for our product and a commitment to what makes our brand unique</p>
              </div>
              <div className="flex "></div>
            </div>

            <div className="md:w-3/5  px-2 py-4">
              <h1 className=' text-2xl font-semibold'>Shop</h1>
              <div className="w-full flex flex-col md:flex-row pl-4 pr-1">
                <div className="md:w-1/5 flex flex-col flex-wrap pb-8">
                  <div className="flex flex-wrap">
                    {footerdata.map((item,index) => (
                      <Link href={item.href} key={index} className="py-2 w-1/2 md:w-full hover:underline">
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="md:w-2/5 pb-8 ">
                  <div className="flex flex-wrap">
                  {footerdata1.map((item,index) => (
                      <Link key={index} href={item.href} className="py-2 w-1/2 md:w-full hover:underline">
                        {item.title}
                      </Link>
                    ))}
                  </div>
            
                </div>


                <div className="w-full md:w-2/5">
                  <div className="w-full md:px-4">
                    <div>
                      <h5 className="my-2 font-bold text-lg text-purple-800">
                        Visit our store
                      </h5>
                      <ul>
                        <li className="mb-8">
                          <span>
                            C-165 Pandav Nagar
                            <br _ngcontent-serverapp-c9="" /> Delhi
                          </span>
                        </li>
                        <li className="flex items-center ">
                          <a href='tel:+917542067763' className='flex items-center hover:text-sky-800 hover:font-bold'>
                            <span>
                              <img
                                _ngcontent-serverapp-c9=""
                                width="12"
                                height="12"
                                alt="call"
                                class="  ng-lazyloaded"
                                src="https://cdnstatic.nextias.com/assets/images/icons/icon-call.svg"
                              />
                            </span>
                            <span
                              class="footer-text font-14 ms-1 mr_sp ps-1"
                            >
                              7542067763
                            </span>
                          </a>

                        </li>
                        <li className="flex items-center">
                          <a href='mailto:biosamsudddin@gmail.com' className='flex items-center hover:text-sky-800 hover:font-bold hover:transition-transform'>
                            <img
                              width="12"
                              height="12"
                              alt="mail"
                              class="  ng-lazyloaded"
                              src="https://cdnstatic.nextias.com/assets/images/icons/email.svg"
                            />
                            <span
                              class="footer-text font-14 ms-1 mr_sp ps-1"
                            >
                              biosamsudddin@gmail.com
                            </span>
                          </a>

                        </li>
                      </ul>
                      <h5 className="mb-4 font-medium text-lg pt-4">
                        Follow Us here
                      </h5>
                      <div className="flex items-center">
                        <span className="px-2 text-2xl  text-green-500 cursor-pointer">
                          <FaWhatsapp  className='w-[3rem] h-[3rem]'/>
                        </span>
                        <span className="px-2  text-2xl text-red-700 cursor-pointer">
                          <FaInstagram className='w-[3rem] h-[3rem]' />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex  items-center border-t-2 border-red-500 pt-4"></div>
          <div className='flex items-center justify-center'>
                <ul className='flex'>
                    <li className='px-2 hover:text-blue-400 text-xs lg:text-base'><a href=''>Terms & Conditions</a></li>
                    <li className='px-2 hover:text-blue-400 text-xs lg:text-base'><a href=''>Privacy Policy</a></li>
                    <li className='px-2 hover:text-blue-400 text-xs lg:text-base'><a href=''>Shipping & Payment Policy</a></li>
                </ul>
            </div>
          {/* <div className='flex items-center justify-center pt-4'>
            <h1 className=" text-purple-800 font-bold py-2"> @ Copyright 2023 Teghiya Store. All right reserved</h1>
          </div> */}
          <div className="py-10 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">&copy; 2024 All Rights Reserved Teghiya Store</p>
            </div>

            <div className="mt-4 flex items-center justify-center md:mt-0">
              <p className="text-sm text-gray-500 font-bold">Designed and Coded by <span className='text-sky-800 font-bold text-md'>Samsuddin Ansari</span></p>

            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  