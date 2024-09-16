'use client'
import { useState, useEffect } from "react";

import { FaPlus } from "react-icons/fa";
import { AddnewAddressForm } from "./AddAddressForm";
import PersonalInfoCard from "./ProfileCard";
import NavbarUser from "./navbarUser";
import Sidebar1 from "./SidebarUser";


 const Address = () => {
  const [isactive, setIsActive] = useState(false);
//   const [showButtonsIndex, setShowButtonsIndex] = useState(-1);
//   const [user, setUsers] = useState();
//   const [addresses, setAddresses] = useState([]); // State to store fetched addresses

//   const handleMouseEnter = (index) => {
//     setShowButtonsIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setShowButtonsIndex(-1);
//   };

  // Address component
  const handleCancel = () => {
    console.log("Cancel button clicked");
    setIsActive(false);
    console.log(isactive);
  };
  // const addresses = [
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   },
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   },
  //   {
  //     name: "Md Moin Uddin Ansari",
  //     phone: "7079964034",
  //     address: "10, Near Imambara Bheraukhra, Masjid Road,",
  //     district: "Vaishali District, Bihar - 844112"
  //   }
  //   // Add more addresses here...
  // ];

  // Fetch addresses when the component mounts
//   useEffect(() => {
//     async function fetchAddresses() {
//       try {
//         const response = await fetch("http://localhost:3000/address");
//         if (response.ok) {
//           const data = await response.json();
//           setAddresses(data);
//         } else {
//           console.error("Failed to fetch addresses:", response.status);
//         }
//       } catch (error) {
//         console.error("Error fetching addresses:", error);
//       }
//     }

//     fetchAddresses();
//   }, [addresses]);

//   function updateAddress(addressId) {
//     const updatedData = {
//       // Populate this object with the updated address data
//       name: "Updated Name",
//       email: "updated@example.com"
//       // Add other fields here
//     };

//     fetch(`/api/address/${addressId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(updatedData)
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Address updated successfully
//           // You can update your UI or take any other actions as needed
//         } else if (response.status === 404) {
//           // Address not found, handle this case
//         } else {
//           // Handle other error cases
//         }
//       })
//       .catch((error) => {
//         console.error("Error updating address:", error);
//       });
//   }

//   function deleteAddress(addressId) {
//     fetch(`/api/address/${addressId}`, {
//       method: "DELETE"
//     })
//       .then((response) => {
//         if (response.status === 200) {
//           // Address deleted successfully
//           // You can update your UI or take any other actions as needed
//         } else if (response.status === 404) {
//           // Address not found, handle this case
//         } else {
//           // Handle other error cases
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting address:", error);
//       });
//   }

  return (
    <>
            <div className="w-full py-4   bg-white rounded-md shadow-md p-4 ">
                <PersonalInfoCard/>
            </div>

            {/* {isdeleteModalOpen && <DeleteItemModal closeModal={closeModal} />}  */}
    </>
  );
};
export default Address;