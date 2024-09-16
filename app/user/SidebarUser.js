
'use client'

import { data } from "./dataDashboard";
import { usePathname } from 'next/navigation'
import { MdLogout } from "react-icons/md";

const Sidebar1 = ({isMobileSidebarOpen}) => {

  const pathname = usePathname()
  return (
    <>
      {/* <div  className="bg-white"> */}
        <div className={`hidden md:flex flex-col h-full hover:overflow-y-auto overflow-hidden `}>
            <div className="px-6 flex items-center min-w-full h-16">
              {/* <img
                className="max-w-full h-8"
                src="https://cdnstatic.nextias.com/assets/images/next_ias_logo.png"
                alt="hi"
              /> */}
              <h1 className=" whitespace-nowrap text-lg font-bold">Welcome User</h1>
            </div>
            <div className="flex flex-col gap-y-7" style={{ flex: "1 1 0%" }}>
              <div className="relative border-t-2 border-indigo-200 border-t-indigo-500">
                {/* <h1 className="px-6 font-medium text-black">Home</h1> */}
                {data.slice(0,5).map((item, index) => (
                  <div key={index}>
                    <a href={item.path} className={`flex items-center transition duration-600 hover:text-red-400 hover:scale-105 hover:text-lg ease-in-out no-underline ${pathname === item.path ? 'border-l-4 border-red-600 text-red-400 font-bold' : 'text-gray-600'}  p-3 space-x-2 text-sm  cursor-pointer   
                     `}
                    >
                     <span>{item.icon}</span> 
                      <span className="text-sm whitespace-nowrap">{item.menu}</span>    
                    </a>
                  </div>     
                ))}
                <h2 className="p-3 font-bold text-blue-800 text-md">Free Resources</h2>
                      {data.slice(5,8).map((item, index) => (
                  <div key={index}>
                    <a href={item.path}  className={`flex items-center transition duration-400 hover:text-red-400 hover:scale-105 hover:text-md no-underline ${pathname === item.path ? 'border-l-4 border-red-600 text-red-400 font-bold' : 'text-gray-600'}   p-3 space-x-2 text-sm  cursor-pointer  
                     `}
                    >
                     <span>{item.icon}</span> 
                      <span className="text-sm whitespace-nowrap">{item.menu}</span>
                    </a>
                  </div>     
                ))}
              </div>
            </div>
 {/* UserPanel placed outside the submenu section */}
        <div className="mt-12 mb-4 flex items-center px-6 cursor-pointer transition duration-400 hover:text-red-400 hover:scale-105">
          <MdLogout/>
          <span className="px-2 text-sm whitespace-nowrap">Logout</span>
        </div>
          </div>
{/* 
      </div> */}
    </>
  );
};
export default Sidebar1;


