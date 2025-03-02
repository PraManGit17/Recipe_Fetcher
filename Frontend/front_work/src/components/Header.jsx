import React from 'react';
import { FaUserCircle, FaBell, FaEllipsisV } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header
      className="flex justify-between items-center p-2 shadow-lg mx-5 mt-5 rounded-2xl"
      style={{
        background: 'linear-gradient(90deg, #2D2D2D, #535353, #5B5B5B)',
      }}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-white text-2xl font-extrabold font-[Instrument Sans]">
          FoodSpace
        </span>
      </div>

      {/* Center Navigation */}
      <nav className="flex space-x-6">
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          About
        </span>
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          Menu
        </span>
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          Community
        </span>
      </nav>

      {/* Right Icons */}
      <div className="flex space-x-6">
        <FaUserCircle className="text-white text-2xl cursor-pointer" />
        <FaBell className="text-white text-2xl cursor-pointer" />
        <FaEllipsisV className="text-white text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
