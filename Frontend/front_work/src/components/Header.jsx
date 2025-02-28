import React from 'react';
import { FaBars, FaUserCircle, FaBell, FaEllipsisV } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-amber-500 text-white shadow-md mt-6 ml-6 mr-6 rounded-2xl">
      <nav className="flex items-center space-x-4">
        <FaBars className="text-xl cursor-pointer" />
        <span className="text-xl font-semibold cursor-pointer">Home</span>
      </nav>

      {/* FoodSpace with Void Effect */}
      <div className="relative">
        <div className="bg-white rounded-2xl px-4 shadow-lg">
          <span className="text-2xl font-bold text-amber-500">FoodSpace</span>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <span className="text-xl font-semibold cursor-pointer">About</span>
        <FaUserCircle className="text-2xl cursor-pointer" />
        <FaBell className="text-2xl cursor-pointer" />
        <FaEllipsisV className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
