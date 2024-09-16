import {
    FaHome,
    FaUsers,
    FaFolder,
    FaRegCalendarAlt,
    FaChartPie,
    FaFileAlt,
    FaLayerGroup,
    FaImage,
    FaMoon,
    FaRegCommentAlt,
    FaWrench,
    FaPowerOff,
    FaCog,
    FaCreditCard,
    FaAngleRight,
    FaAngleDown,
    FaAngleUp,
    FaRegHeart,
    FaBookmark
  } from "react-icons/fa";
  import { MdDashboard, MdOutlineSms, MdAnalytics,MdLogout } from "react-icons/md";
  
  export const data = [
    {
      menu: "Profile",
      icon: <MdDashboard />,
      submenu: "",
      path: "/user",
      active: false
    },
    {
      menu: "My Orders",
      icon: <FaFileAlt />,
      path: "/user/myorder",
      active: false
    },
    {
      menu: "WishLists",
      icon: <FaUsers />,
      path: "/user/wishlist",
      active: false
    },
    {
      menu: "Manage Address",
      icon: <FaFolder />,
      path: "/user/address",
      active: false
    },

    {
      menu: " Coupons",
      icon: <FaImage />,
      path: "/user/coupons",
      active: false
    },
    {
      menu: "Payments",
      icon: <MdOutlineSms />,
      path: "/dashboard/studymaterial",
      active: false
    },
    {
      menu: "Settings",
      icon: <FaWrench />,
      path: "/dashboard/current-affairs",
      active: false
    }
    ,
    {
      menu: "Important contacts",
      icon: <FaWrench />,
      path: "/user/importantContacts",
      active: false
    }
  ];
  export const team = [
    { menu: "Heroicons", icon: <FaLayerGroup />, submenu: "", path: "" },
    { menu: "Tailwind Labs", icon: <FaImage />, submenu: "", path: "" },
    { menu: "Workation", icon: <FaMoon />, submenu: "", path: "" },
    { menu: "Frontend", icon: <FaRegCommentAlt />, submenu: "", path: "" }
  ];
  export const sidebarBottom = [
    { menu: "Setting", icon: <FaWrench />, submenu: "", path: "" },
    { menu: "Log Out", icon: "", submenu: "", path: "" }
  ];
  
  export const userprofile = [
    {
      id: 1,
      menu: "MY ORDERS",
      icon: <FaFolder />,
      submenu: [],
      path: "/myorder",
      active: false
    },
    {
      id: 2,
      menu: "MY Wishlist",
      icon: <FaRegHeart />,
      submenu: [],
      path: "/wishlist",
      active: false
    },
    {
      id: 3,
      menu: "ACCOUNT SETTINGS",
      icon: <FaCog />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "Profile Information", path: "/profile", active: false },
        { title: "Manage Address", path: "/address", active: false },
        { title: "PAN Card Information", path: "/pan", active: false }
      ],
      path: "null",
      active: false
    },
    {
      id: 4,
      menu: "PAYMENTS",
      icon: <FaCreditCard />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "Gift Cards", path: "/prof" },
        { title: "Saved UPI", path: "/address" },
        { title: "Saved Cards", path: "/savedcards" }
      ],
      path: "",
      active: false
    },
    {
      id: 5,
      menu: "MY STUFF",
      icon: <FaBookmark />,
      iconDown: <FaAngleDown />,
      iconUp: <FaAngleUp />,
      submenu: [
        { title: "MY Coupons", path: "/coupons", active: false },
        { title: "MY Reviews & Ratings", path: "/review", active: false },
        { title: "All Notifications", path: "/notifications", active: false }
      ],
      path: "null",
      active: false
    },
    // { menu: "Project", icon: <FaFolder />, submenu: "", path: "" },
    // { menu: "Calender", icon: <FaRegCalendarAlt />, submenu: "", path: "" },
    // { menu: "Documents", icon: <FaFileAlt />, submenu: "", path: "" },
    { id: 6, menu: "Logout", icon: <FaPowerOff />, submenu: [], path: "/logout" }
  ];
  