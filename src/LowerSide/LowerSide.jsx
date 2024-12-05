import React from 'react';
import { IoMdArrowUp } from "react-icons/io";
import MessageSend from "../LowerSide/MessageSend"
import MessageReceive from "../LowerSide/MessageReceive"

const LowerSide = ({ isOpen }) => {
  return (
    <>
    <div
      
      className={`${
        isOpen ? 'w-full' : 'w-5/6 ml-64'
      }   mt-20 mx-auto p-4 bg-white rounded-md shadow-md animate-slide-fwd-center `}
    >
      <MessageSend data-aos='fade-left'  isOpen={isOpen}/>
      <br/><br/><br/><br/><br/>
      <MessageReceive  data-aos='fade-left' isOpen={isOpen}/>
      {/* Input Container */}
      <div className={`top-3/4 mt-10 ${!isOpen ? 'ml-28 w-3/5' : 'left-52'} fixed flex items-center w-4/5 mx-auto p-4`}>
      <input
          type="text"
          className="w-8/12 h-12 ml-12 bg-gray-100 px-4 pr-14 rounded-full border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-500 text-sm"
          placeholder="Type your message here..."
        />
        {/* Send Button */}
        <button 
          className={`absolute ${!isOpen ?  'right-96 translate-x-full' : ' left-2/3'}   h-10 w-10 bg-emerald-600 hover:bg-teal-600 rounded-full flex items-center justify-center text-white`}>
        <IoMdArrowUp />
        </button>
      </div>
    </div>
    </>
  );
};

export default LowerSide;
