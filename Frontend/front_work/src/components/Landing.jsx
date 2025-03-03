import { motion } from "framer-motion";
import recipe from '../assets/recipe.png';
import thali from '../assets/thali.png';
import masalas from '../assets/masalas.png';
import cook from '../assets/cook.png';
import south from '../assets/south.png';
import healthy from '../assets/healthy.png';
import food from '../assets/food.png';
import wood from '../assets/wood.jpeg';




export default function WelcomeSection() {
  return (
    <div className="p-6 flex flex-col items-center mt-6">
      <div className="flex flex-row justify-center">
        <motion.p
          className="overflow-hidden text-[6rem] font-extrabold text-white leading-none whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Welcome,
        </motion.p>

        <div className="overflow-hidden flex gap-5 text-[6rem] font-extrabold text-white leading-none whitespace-nowrap">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            To
          </motion.p>
          <motion.p
            className="text-amber-600"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            FoodSpace
          </motion.p>
        </div>
      </div>

      <motion.hr
        className="overflow-hidden bg-amber-500 border-amber-500 border h-1 mt-4"
        initial={{ opacity: 0, width: "0%" }}
        animate={{ opacity: 100, width: "70%" }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
      />

      <div className="flex gap-20 justify-center text-3xl mt-4 mr-5 text-white">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Amazing Recipes
        </motion.span>

        <motion.hr
          className="overflow-hidden bg-amber-500 border-amber-500 border h-10 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.8, delay: 2.1, ease: "easeOut" }}
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
        >
          Healthy Choices
        </motion.span>

        <motion.hr
          className="overflow-hidden bg-amber-500 border-amber-500 border h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeOut" }}
        />

        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          Vivid Expereinces
        </motion.span>

      </div>

      {/* <div className=" overflow-hidden relative w-full p-0 h-96 mt-5 flex">
        <img src={recipe} alt="Recipe Book" className="h-[300px] w-auto absolute bottom-50 left-[-5%] z-10" />
        <img src={thali} alt="Thali" className="h-[250px] w-auto absolute bottom-[-13%] left-[-6%] z-20" />
        <img src={masalas} alt="Masalas" className="h-[250px] w-auto absolute bottom-[-25%] left-[15%] z-10" />
        <img src={south} alt="South" className="h-[250px] w-auto absolute bottom-[-25%] left-[32%] z-10" />
        <img src={healthy} alt="healthy" className="h-[250px] w-auto absolute bottom-[-25%] left-[43%] z-10" />
        <img src={food} alt="food" className="h-[250px] w-auto absolute bottom-[-14%] left-[65%] z-10" />
        <img src={cook} alt="Cooking" className="h-[450px] w-auto absolute bottom-[-50px] left-[82%] z-20" />
        <img src={wood} alt="food" className="h-[300px] w-50 absolute bottom-[-40%] left-[15%] rotate-[-3deg]" />
      </div> */}

      <div className="flex flex-col mt-10">
          <p className="text-lg font-bold text-white text-center border-b border-gray-500 pb-2">
            What is FoodSpace ?
          </p>
              <div className="flex flex-row gap-30 mt-10">
                <div className="relative w-72 p-4 bg-white text-black rounded-md shadow-lg border border-gray-300 border-dashed font-mono before:content-[''] before:absolute before:bg-red-500 before:w-4 before:h-4 before:rounded-full before:top-[-10px] before:left-[50%] before:translate-x-[-50%]">
                  <h2 className="text-lg font-bold text-gray-800 text-center border-b border-gray-500 pb-2">🍽️ Order Slip</h2>
                  <p className="mt-3 text-sm">
                    FoodSpace is a platform where you can search, create, and share recipes of your choice.
                    It provides a wide range of recipes along AI-powered suggestions to improve your cooking experience.
                  </p>
                  <div className="border-t border-gray-300 mt-2 pt-2 text-center text-xs text-gray-500">
                    Space for food images 
                  </div>
                </div>

              
                <div className="relative w-72 p-4 bg-white text-black rounded-md shadow-lg border border-gray-300 border-dashed font-mono before:content-[''] before:absolute before:bg-red-500 before:w-4 before:h-4 before:rounded-full before:top-[-10px] before:left-[50%] before:translate-x-[-50%]">
                  <h2 className="text-lg font-bold text-gray-800 text-center border-b border-gray-500 pb-2">🍽️ Order Slip</h2>
                  <p className="mt-3 text-sm">
                    FoodSpace acts as a community platform for aspiring chefs to share their recipes and get feedback. 
                    Start exploring now and to unleash your inner chef!
                  </p>
                  <div className="border-t border-gray-300 mt-2 pt-2 text-center text-xs text-gray-500">
                    Space for food images 
                  </div>
                 </div>
                 </div>
      </div>







    </div>
  );
}
