import { motion } from "framer-motion";

export default function WelcomeSection() {
  return (
    <div className="p-4 flex flex-col items-center mt-20 font-[Poppins]">
      <div className="flex flex-row justify-center">
        <motion.p
          className="overflow-hidden text-[5rem] font-extrabold text-white leading-none whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Welcome,
        </motion.p>

        <div className="overflow-hidden flex gap-5 text-[5rem] text-white font-extrabold leading-none whitespace-nowrap">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }}
          >
            To
          </motion.p>
          <motion.p
            className="overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-[5rem] text-transparent"
            initial={{ opacity: 0, x: "-10%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
          >
            FoodSpace
          </motion.p>
        </div>
      </div>

      <motion.hr
        className="overflow-hidden bg-amber-500 border-amber-500 border h-1 mt-3 w-[60%]"
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 1, width: "60%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
      />

      <div className="flex gap-10 justify-center text-2xl mt-3 text-gray-300 font-[Lato] text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.5 }}
        >
          Amazing Recipes
        </motion.span>

        <motion.hr
          className="overflow-hidden bg-amber-500 border-amber-500 border h-8"
          initial={{ opacity: 0, height: "0px" }}
          animate={{ opacity: 1, height: "40px" }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 1.7 }}
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.9 }}
        >
          Healthy Choices
        </motion.span>

        <motion.hr
          className="overflow-hidden bg-amber-500 border-amber-500 border h-8"
          initial={{ opacity: 0, height: "0px" }}
          animate={{ opacity: 1, height: "40px" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 2.1 }}
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 2.3 }}
        >
          Vivid Experiences
        </motion.span>
      </div>
    </div>
  );
}
