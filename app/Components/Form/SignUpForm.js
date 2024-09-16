
'use client'
import React, { useState } from "react";
// import { SnackbarProvider, useSnackbar } from "notistack";
import { useRouter } from 'next/navigation'
const initailUserState = {
  name: "",
  email: "",
  phone: "",
  password: ""
};
const SignUpForm = () => {

  const router = useRouter()
  const [user, setUser] = useState(initailUserState);
//   const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data submitted:", data);
        // You can perform further actions on success, such as redirecting the user.
      } else {
        console.error("Error:", response.status);
        // Handle errors (e.g., display an error message)
      }
    } catch (error) {
      console.error("Error:", error);
    }

    console.log(user);
    setTimeout(() => {
      enqueueSnackbar("User Added");
      setUser(initailUserState);
    }, 0); // You can adjust the delay as needed
  };
  const handleLogin = () => {
    // Add your login redirection logic here
    console.log("Redirecting to login page...");
  };
  return (
    <>
      <section className="w-full mx-auto">
      <div className="max-w-[1200px ] flex justify-center items-center py-4">
        <div className="w-full flex flex-col md:flex-row h-[500px]">
          <div className="  md:w-1/2 max-h-full overflow-hidden rounded-md shadow-md">
            <img
              src="https://cdnstatic.nextias.com/assets/images/login-signp-pop-up.png"
              alt="Your Image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-6  w-full md:w-1/2 ">
          <form
            className="bg-white p-4  w-full "
            onSubmit={handleRegister}
          >
            <h2 className="text-2xl font-semibold mb-2">Register</h2>
            <div className="mb-2">
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone" className="block text-gray-600">
                Phone
              </label>
              <input
                type="phone"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your Phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <button
              onClick={() =>
                enqueueSnackbar("I love hooks", { variant: "success" })
              }
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
            <div className="mt-4 flex justify-between items-center">
              <div className="border-t border-gray-400 flex-grow"></div>
              <p className="mx-2 text-gray-500">Or continue with</p>
              <div className="border-t border-gray-400 flex-grow"></div>
            </div>
            <div className="flex mt-4 text-center gap-4">
       <p className="text-center">Already have an account? <span><button onClick={()=>router.push('/login')} className="text-blue-600">Log In</button></span></p>
            </div>
          </form>
          </div>
     
        </div>
      </div>
      </section>
 
    </>
  );
};

export default SignUpForm;
