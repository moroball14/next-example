import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black border-gray-400">
          ChitChat
        </div>
        <p className="text-gray-500">You have a new message!</p>
        <p>testsetstesatviow4tseb</p>
      </div>
      <button className="btn-indigo">Click me</button>
    </div>
  );
};
