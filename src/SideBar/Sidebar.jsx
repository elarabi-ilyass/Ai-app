import React, { useState } from "react";
import Logo from "../Assets/chatgpt-icon-logo.webp";
import { LuMessageSquare } from "react-icons/lu";
import { IoMdHome } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";

const Sidebar = ({ handleSideBar, isOpen }) => {
  const [click, setClick] = useState(null);

  const handleClick = (index) => {
    setClick(index);
  };

  return (
    <>
      <aside
      
         className={`${isOpen ? "hidden " : 'animate-slide-right '} 
          fixed top-0 left-0 w-64 h-full overflow-y-auto 
          bg-slate-100 p-4 shadow-md`}
      >
        <div className="flex flex-col space-y-4 flex-grow">
          <nav>
            <ul role="list" className="space-y-2">
              <li className="flex items-center">
                <img
                  src={Logo}
                  alt="ChatGpt Logo"
                  className="w-50 h-10"
                />
              </li>
              <li className="mt-2.5">
                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 mt-10 bg-emerald-600 rounded hover:bg-teal-600"
                >
                  <span className="ml-8 text-lg font-semibold">+ New Chat</span>
                </a>
              </li>
              <li className="mt-2.5">
                <a
                  href="#"
                  className="flex items-center space-x-2 p-2 pt-3 pb-3 mt-10 border-emerald-600 border-2 rounded hover:bg-slate-200"
                >
                  <span className="h-4 w-6 text-xl">
                    <LuMessageSquare className="text-emerald-600" />
                  </span>
                  <span className="ml-8 font-semibold">What Programming?</span>
                </a>
              </li>
              <li className="mt-2.5">
                <a
                  href="#"
                  className="flex items-center space-x-2 p-3 border-emerald-700 border-2 rounded hover:bg-slate-200"
                >
                  <span className="h-4 w-6 text-xl">
                    <LuMessageSquare className="text-emerald-600" />
                  </span>
                  <span className="ml-8 font-semibold">How to use API?</span>
                </a>
              </li>
            </ul>

            {/* Bottom-fixed link */}
            <ul className="mt-28 border-b-8">
              <hr className="border-slate-500" />
              <li className="mb-2 p-0 mt-4">
                <a
                  href="#"
                  onClick={() => handleClick(0)}
                  className={`${
                    click === 0 ? "bg-slate-300 rounded-lg" : ""
                  } flex items-center space-x-2 p-2`}
                >
                  <span className="h-4 w-6 text-xl">
                    <IoMdHome className="text-emerald-600" />
                  </span>
                  <span className="ml-8 font-semibold">Home</span>
                </a>
              </li>
              <li className="mb-2 p-0 mt-4">
                <a
                  href="#"
                  onClick={() => handleClick(1)}
                  className={`${
                    click === 1 ? "bg-slate-300 rounded-lg" : ""
                  } flex items-center space-x-2 p-2`}
                >
                  <span className="h-4 w-6 text-xl">
                    <MdSaveAlt className="text-emerald-600" />
                  </span>
                  <span className="ml-8 font-semibold">Saved</span>
                </a>
              </li>
              <li className="mb-2 p-0 mt-4">
                <a
                  href="#"
                  onClick={() => handleClick(2)}
                  className={`${
                    click === 2 ? "bg-slate-300 rounded-lg" : ""
                  } flex items-center space-x-2 p-2`}
                >
                  <span className="h-4 w-6 text-xl">
                    <IoRocketSharp className="text-emerald-600" />
                  </span>
                  <span className="ml-8 font-semibold">Upgrade to Pro</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
