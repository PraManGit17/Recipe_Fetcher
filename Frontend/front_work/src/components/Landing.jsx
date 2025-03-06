import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Header from "./Header";

export default function WelcomeSection() {
  const descriptions = [
    "FoodSpace provides a wide range of delicious recipes and culinary inspiration.",
    "Create AI-powered recipes and explore new flavors effortlessly.",
    "Join the community to share, download, and discuss amazing recipes."
  ];

  const [currentDescription, setCurrentDescription] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // Initial delay to show description after other animations
    const initialDelay = setTimeout(() => {
      setShowDescription(true);
    }, 3500); // Adjusted delay based on other animations

    const interval = setInterval(() => {
      setShowDescription(false); // Start exit animation
      setTimeout(() => {
        setCurrentDescription((prev) => (prev + 1) % descriptions.length);
        setShowDescription(true); // Start fade-in transition
      }, 1200); // Exit transition before switching text
    }, 5000); // Change text every 5 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="landing">
       
       
        <Header />

      <div className="relative p-4 flex flex-col items-center font-[Lato] overflow-hidden" >
  
        <div className="flex flex-row justify-center mt-12 relative">
          <motion.p
            className="overflow-hidden text-[4.5rem] font-extrabold text-white leading-none whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
          >
            Welcome,
          </motion.p>

          <div className="overflow-hidden flex gap-3 text-[4.5rem] text-white font-extrabold leading-none whitespace-nowrap">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              To
            </motion.p>
            <motion.p
              className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-[4.5rem] text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              FoodSpace
            </motion.p>
          </div>
        </div>

        <motion.hr
          className="overflow-hidden bg-amber-500 border-amber-500 border h-1 mt-8 w-[60%] relative"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "60%" }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        />

        <div className="flex gap-10 justify-center text-xl mt-8 text-gray-300 font-[Lato] text-center relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Variety of Recipes
          </motion.span>

          <motion.hr
            className="overflow-hidden bg-amber-500 border-amber-500 border h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            Download & Share
          </motion.span>

          <motion.hr
            className="overflow-hidden bg-amber-500 border-amber-500 border h-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
          />

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            Community Hub
          </motion.span>
        </div>

        <AnimatePresence mode="wait">
          {showDescription && (
            <motion.p
              key={currentDescription}
              className="text-center text-2xl text-gray-300 mt-20 font-[Lato] w-[80%] relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              {descriptions[currentDescription]}
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}