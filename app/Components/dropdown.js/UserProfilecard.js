import React from "react";

const UserProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200">
        <div aria-label="header" className="flex space-x-4 items-center p-4">
          <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
            <img
              src="https://avatars.githubusercontent.com/u/499550?v=4"
              alt="avatar Evan You"
              className="w-16 h-16 shrink-0 rounded-full"
            />
            <div className="space-y-2 flex flex-col flex-1 truncate">
              <div className="font-medium relative text-xl leading-tight text-gray-900">
                <span className="flex">
                  <span className="truncate relative pr-8">
                    Evan You
                    <span
                      aria-label="verified"
                      className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="w-6 h-6 ml-1 text-cyan-400"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          stroke-width="0"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </span>
              </div>
              <p className="font-normal text-base leading-tight text-gray-500 truncate">
                evanyou@gmail.com
              </p>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-400 shrink-0"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M8 9l4 -4l4 4"></path>
            <path d="M16 15l-4 4l-4 -4"></path>
          </svg>
        </div>
        <div aria-label="navigation" className="py-2">
          <nav className="grid gap-1">
            {/* Your navigation links go here */}
          </nav>
        </div>
        <div aria-label="account-upgrade" className="px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="mr-auto space-y-2">
              <p className="font-medium text-xl text-gray-900 leading-none">
                Free Plan
              </p>
              <p className="font-normal text-lg text-gray-500 leading-none">
                12,000 views
              </p>
            </div>
            <button
              type="button"
              className="inline-flex px-6 leading-6 py-3 rounded-md bg-indigo-50 hover:bg-indigo-50/80 transition-colors duration-200 text-indigo-500 font-medium text-lg"
            >
              Upgrade
            </button>
          </div>
        </div>
        <div aria-label="footer" className="pt-2">
          <button
            type="button"
            className="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-7 h-7"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
              ></path>
              <path d="M9 12h12l-3 -3"></path>
              <path d="M18 15l3 -3"></path>
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
