import React from 'react';
import { FaUserCircle, FaBell, FaEllipsisV } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 , y: "-100%"}}
      animate={{ opacity: 1 , y: 0}}
      transition={{ duration: 0.6, ease: "easeOut"  }}
      className="flex justify-between items-center overflow-hidden p-2  shadow-lg mx-5 mt-5 border-white border-2 rounded-2xl"
      style={{
        background: 'linear-gradient(90deg, #2D2D2D, #535353, #5B5B5B)',
      }}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <span className="text-white text-[1.6rem] font-extrabold font-[Instrument Sans]">
          FoodSpace
        </span>
      </div>

      {/* Center Navigation */}
      <nav className="flex gap-15">
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          Home
        </span>
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          Menu
        </span>
        <span className="text-white text-xl font-[Montserrat] cursor-pointer">
          Community
        </span>
      </nav>

      {/* Right Icons */}
      <div className="flex gap-10">
        <FaUserCircle className="text-white text-2xl cursor-pointer" />
        <FaBell className="text-white text-2xl cursor-pointer" />
        <FaEllipsisV className="text-white text-2xl cursor-pointer" />
      </div>
    </motion.header>
  );
};

export default Header;
