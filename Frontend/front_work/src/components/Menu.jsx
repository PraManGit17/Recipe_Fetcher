import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import plate from "./../assets/plate.png";
import forkImage from "./../assets/fork.png";
import spoonImage from "./../assets/spoon.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import menuItems from "../MenuSrc.js";
import Header from "./Header";



const Menu = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1));
  };

  return (
    <div className="menu relative h-screen">
      <Header />

      <div className="absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <img
          src={plate}
          alt="Plate"
          className="w-5/6 object-cover translate-y-30"
          style={{ filter: "drop-shadow(10px 10px 30px rgba(0, 0, 0, 1))" }}
        />
      </div>

      <div className="absolute bottom-[15%] left-1/2 flex justify-center gap-2">
        <img src={forkImage} alt="Fork" className="w-2/3 -translate-x-80 translate-y-30 " />
        <img src={spoonImage} alt="Spoon" className="w-2/3 -translate-x-90 translate-y-30" />
      </div>

      <div className="absolute inset-x-0 bottom-10 flex justify-center w-full overflow-hidden h-96">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={menuItems[index].id}
            initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 1 }}
            className="w-92 h-96 bg-[rgba(81,81,205,0.05)] border-2 border-white flex flex-col items-center p-2 rounded-4xl absolute"
          >
            <h2 className="text-white text-2xl font-bold mb-4">{menuItems[index].heading}</h2>
            
            <img
              src={menuItems[index].image}
              alt={menuItems[index].heading}
              className="w-70 h-40 bg-white rounded-3xl mb-4 object-cover border-2 border-white"
            />
            <p className="text-white text-md mt-5 text-center">
              {menuItems[index].description.p1} <br />
              {menuItems[index].description.p2} <br />
              {menuItems[index].description.p3}
            </p>

            {/* Rectangular Button for Navigation */}
            <button
              onClick={() => navigate(menuItems[index].route)}
              className="mt-4 w-40 h-10 bg-white text-black font-bold rounded-lg border-2 border-white hover:bg-gray-300 transition"
            >
              Explore
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute bottom-5 left-5 w-20 h-20 flex items-center justify-center rounded-full border-2 border-white bg-[#6A6A6A] text-white hover:bg-white hover:border-[#6A6A6A] hover:text-[#6A6A6A] transition"
      >
        <ArrowLeft size={35} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute bottom-5 right-5 w-20 h-20 flex items-center justify-center rounded-full border-2 border-white bg-[#6A6A6A] text-white hover:bg-white hover:border-[#6A6A6A] hover:text-[#6A6A6A] transition"
      >
        <ArrowRight size={35} />
      </button>
    </div>
  );
};

export default Menu;
