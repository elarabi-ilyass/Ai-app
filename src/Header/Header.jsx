import React from 'react';
import { LuPanelLeftClose } from "react-icons/lu";
import { FiEdit } from "react-icons/fi";
import Avatar from "../Assets/OIP (1).jpeg";
import { MdSaveAlt } from "react-icons/md";
import { LuPanelLeftOpen } from "react-icons/lu";

const Header = ({ handleSideBar,isOpen  }) => {
  return (
    <header   className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-4 ${!isOpen ? 'w-5/6 overflow-x-hidden left-64 ':'w-full '} `}>
      {/* Left Section */}
      <div className={`flex items-center  ${isOpen ? 'translate-x-0':'translate-x-0'}`}>
        <span
          onClick={handleSideBar}
          title={`${isOpen ? 'Close Sidebar' : 'Open Sidebar'}`}
          className="font-bold hover:bg-slate-200 rounded-xl focus:outline-none p-2 cursor-pointer"
        >
            {isOpen ? (
                <LuPanelLeftOpen className="w-6 h-6" />
              ) : (
                <LuPanelLeftClose   className="w-6 h-6" />
              )}
        </span>
        <span className={` font-bold hover:bg-slate-200 rounded-xl focus:outline-none p-2 cursor-pointer`}>
          <FiEdit className={` w-6  h-6`} />
        </span>
      </div>
      

      {/* Right Section */}
      <div className={`flex items-center  space-x-4 ${!isOpen ? 'mr-8' : 'left-0'}`}>
        <img
          src={Avatar}
          className="w-10 h-10 rounded-full"
          alt="User Avatar"
        />
        <button className="flex items-center space-x-2 rounded-2xl w-22 border-2 p-2 hover:bg-slate-200">
          <MdSaveAlt className="w-6 h-5" />
          <span>Share</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
