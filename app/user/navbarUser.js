import {  useState } from "react";

import { FaCartPlus } from "react-icons/fa";



const navigation = [
  { name: "Profile", href: "dashboard", current: true },
  { name: "Orders", href: "team", current: false },
  { name: "Address", href: "/user/address", current: false },
  { name: "Calendar", href: "#", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarUser() {
  const [searchInput, setSearchInput] = useState("");
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const { cart, isAuthenticated, user } = useSelector((state) => state.auth);
//   const cartItems = useSelector((state) => state.cart);
  // const { cart, isAuthenticated, user } = useSelector((state) => state);
//   useEffect(() => {}, [cart]);

//   const handleLogout = () => {
//     dispatch(logout()); // Dispatch the logout action
//     // You can also add a redirect here using react-router-dom or your preferred routing library.
//     // Example with react-router-dom:
//     // history.push('/login'); // Make sure to import history from your router setup.
//   };
  return (
    <>
      <div className="">
        <div className="relative flex flex-col   items-center ">
          <div className="flex flex-col items-center ">
            <button
              type="button"
              className=" hidden md:flex rounded-full  p-1 text-gray-800 mb-4  "
            >
              <span className="text-xl  font-medium flex items-center ">
                Welcome, User
              </span>
            </button>
            <div className="flex mb-4 ">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search"
                className="block w-full h-8 px-4 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-gray-800 "
              />
            </div>
          </div>
          <div className="flex flex-col ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white text-start"
                    : " hover:bg-gray-700 hover:text-white",
                  "rounded-md px-3 py-2 text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
