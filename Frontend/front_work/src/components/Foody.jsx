import React, { useState } from "react";

const Foody = () => {
  const [messages, setMessages] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <div className="flex justify-center items-start gap-6 bg-[#121212] min-h-screen p-10 text-white">
      <div className="w-1/2 bg-white/10 backdrop-blur-lg p-5 rounded-lg shadow-lg h-[500px] flex flex-col border border-white">
        <h2 className="text-xl font-semibold mb-3 border-b border-white pb-2">AI Chat</h2>
        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {messages.length === 0 ? (
            <p className="text-gray-400">Start by entering ingredients...</p>
          ) : (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md border ${
                  msg.sender === "user"
                    ? "bg-[#2c2c2c] text-right border-white"
                    : "bg-[#3a3a3a] border-white"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>
        <div className="mt-3 flex">
          <input
            type="text"
            placeholder="Enter ingredients..."
            className="flex-1 p-2 rounded-l-md bg-[#2c2c2c] text-white outline-none border border-white"
          />
          <button className="bg-gray-700 px-4 py-2 rounded-r-md border border-white hover:bg-gray-600">
            Send
          </button>
        </div>
      </div>

      <div className="w-1/2 bg-white/10 backdrop-blur-lg p-5 rounded-lg shadow-lg h-[500px] flex flex-col border border-white">
        <h2 className="text-xl font-semibold mb-3 border-b border-white pb-2">Recipes</h2>
        <div className="flex-1 overflow-y-auto p-2 space-y-3">
          {recipes.length === 0 ? (
            <p className="text-gray-400">No recipes yet...</p>
          ) : (
            recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-[#2c2c2c] p-3 rounded-md cursor-pointer border border-white hover:bg-[#3a3a3a]"
              >
                {recipe.title}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Foody;
