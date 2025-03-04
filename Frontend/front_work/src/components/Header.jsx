import React from 'react';
import { FaUserCircle, FaBell, FaEllipsisV } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center overflow-hidden p-1 mx-5 mt-5 border-white border-2 rounded-2xl"
      style={{
        background: 'linear-gradient(90deg, #1C1C1C, #2B2B2B, #3A2F2F)',
        background: 'rgba(28, 28, 28, 0.85)',
        backdrop_filter: 'blur(10px)',

      }}
    >


      <div className="flex items-center gap-6">
        <img src={logo} alt="Logo" className="h-10 w-10" />
        <span className="text-white text-[1.6rem] font-extrabold font-[Instrument Sans]">
          FoodSpace
        </span>
      </div>


      <nav className="flex gap-25">
        <span className="text-white text-[1.3rem] font-[Montserrat] font-bold cursor-pointer">
          Home
        </span>
        <span className="text-white text-[1.3rem]  font-[Montserrat] font-bold cursor-pointer">
          Menu
        </span>
        <span className="text-white text-[1.3rem]  font-[Montserrat] font-bold cursor-pointer">
          Community
        </span>
      </nav>

      <div className="flex gap-10">
        <FaUserCircle className="text-white text-2xl cursor-pointer" />
        <FaBell className="text-white text-2xl cursor-pointer" />
        <FaEllipsisV className="text-white text-2xl cursor-pointer" />
      </div>
    </motion.header>
  );
};

export default Header;
