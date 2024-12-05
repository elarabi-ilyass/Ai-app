import React from 'react';
import SendImage from '../Assets/chatgpt-logo-chat-gpt-icon-on-green-background-free-vector.jpg' ;

const MessageReceive = ({isOpen}) => {
  return (
    <>
      <div data-aos='fade-left' className='fixed'   >
        <div    className={`${isOpen ? 'ml-36':'-ml-10'} flex  w-2/3  fixed items-start space-x-4 p-4  rounded-lg `}>
          {/* Message Content */}
          <div className="flex-1 " >
            <div
              style={{
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '0',
                borderBottomLeftRadius: '30px',
                borderBottomRightRadius: '30px',
              }}
              className={`${isOpen ? 'ml-52':'ml-40'} message-send bg-gray-100  w-3/4 bg-white p-4 shadow-sm border border-gray-300`}
            >
              <p className="text-gray-700 text-sm">
                To display a tooltip when hovering over a button or any other element, you can use the title attribute in HTML. Here's how you can do it:
              </p>
            </div>
          </div>

          {/* Sender Image */}
          <div>
            <img
              src={SendImage}
              alt="Sender"
              className="w-10  h-10 rounded-full border-2"
              title="User Avatar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageReceive;
