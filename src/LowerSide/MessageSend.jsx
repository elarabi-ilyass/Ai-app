import React from 'react';
import Avatar from "../Assets/OIP (1).jpeg";

const MessageSend = ({ isOpen }) => {
 
  return (
    <>
      <div className="fixed">
        <div
          className={`${
            isOpen ? 'ml-60' : 'ml-40'
          } flex w-2/3 fixed items-start space-x-4 p-4 rounded-lg`}
        >
          {/* Sender Image */}
          <div>
            <img
              src={Avatar}
              alt="Sender"
              className="w-10 h-10 rounded-full border-2"
              title="User Avatar"
            />
          </div>

          {/* Message Content */}
          <div className="flex-1">
            <div
              style={{
                borderTopLeftRadius: '0',
                borderTopRightRadius: '15px',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
              }}
              className="message-send w-3/4 bg-gray-100 p-4 shadow-sm border border-gray-300"
            >
              <p className="text-gray-700 text-sm">
                To display a tooltip when hovering over a button or any other element, you can use the title attribute in HTML. Here's how you can do it:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageSend;
