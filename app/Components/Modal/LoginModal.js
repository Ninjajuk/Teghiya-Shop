import React from "react";
import LoginForm from "../Form/LoginForm";
import { MdOutlineClear } from "react-icons/md";


const LoginModal = ({ isOpen, onClose,onClick}) => {
  const modalStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    display: isOpen ? "block" : "none",
    zIndex: 1000 // Adjust the z-index as needed
  };

  const modalContentStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    // padding: "16px",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    wididth: "350px"
  };

  return (
    <div style={modalStyles} className="overflow-y-auto ">
      <div style={modalContentStyles} className="relative ">
        {/* <h2 className="text-2xl font-semibold mb-4">Income Form</h2> */}
        {/* <LoginForm onClick={onClick} onClose={onClose}/> */}
        <button
          className="bg-gray-400  hover:bg-gray-600  font-semibold text-white   absolute top-0 right-0 h-8 w-8 rounded-full flex items-center justify-center"
          onClick={onClose}
        >
          <MdOutlineClear className="flex items-center justify-center"/>
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
