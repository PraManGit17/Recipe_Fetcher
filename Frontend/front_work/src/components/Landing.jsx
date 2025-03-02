import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Delicious Meals", "Fresh Ingredients", "Tasty Recipes", "Healthy Choices"];

export default function WelcomeSection() {
  const [index, setIndex] = useState(0);
  const [showWords, setShowWords] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowWords(true);
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length);
      }, 2000); // Change word every 2 seconds

      return () => clearInterval(interval);
    }, 2000); // Delay of 2 seconds after "FoodSpace" animation

    return () => clearTimeout(delayTimer);
  }, []);

  return (
    <div className="p-6 flex flex-col mt-10 mx-10">
      <motion.p
        className="overflow-hidden text-[6rem] font-extrabold text-white leading-none whitespace-nowrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Welcome,
      </motion.p>

      <div className="overflow-hidden flex gap-5 text-[6rem] font-extrabold text-white leading-none whitespace-nowrap">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          To
        </motion.p>
        <motion.p
          className="text-amber-600"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          FoodSpace
        </motion.p>
      </div>

      {/* Delayed Words Animation */}
      {showWords && (
        <div className="overflow-hidden h-[50px] text-4xl font-black uppercase text-white relative">
          <AnimatePresence mode="sync">
            <motion.div
              key={words[index]}
              initial={{ opacity: 0, x: "-20%" }} // Enter from the left
              animate={{ opacity: 1, x: "0%" }} // Settle in center
              exit={{ opacity: 0, x: "30%" }} // Exit to the right
              transition={{ duration: 0.9 }}
              className="absolute w-full"
            >
              {words[index]}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}