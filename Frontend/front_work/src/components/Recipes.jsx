import React, { useState, useEffect } from "react";
import Header from "./Header";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/random?number=8&apiKey=d834bbdf0f024ee2996ee71831a78ab8"
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.recipes);
      })
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div className="recipes">
      <Header />
      <div className="flex justify-center gap-10 w-full px-5 mt-4">
        
        {/* Left Section: Search Bar, Featured Recipes, Filters */}
        <div className="w-1/3 flex flex-col gap-5 bg-[rgba(47,56,66,0.5)] border-white border-4 p-5 rounded-2xl">
          {/* Search Bar */}
          <div className="w-full h-14 bg-white shadow-md rounded-lg flex items-center px-4 border border-gray-300">
            <input
              type="text"
              placeholder="Search Recipes..."
              className="w-full outline-none"
            />
          </div>

       
          <div className="flex flex-col items-start gap-4">
            <div className="w-80 h-12 px-10 bg-gray-200 rounded-lg border-gray-500 border-2 flex items-center">
              Recipe 1
            </div>
            <div className="w-80 h-12 px-10 bg-gray-200 rounded-lg border-gray-500 border-2 flex items-center">
              Recipe 2
            </div>
            <div className="w-80 h-12 px-10 bg-gray-200 rounded-lg border-gray-500 border-2 flex items-center">
              Recipe 3
            </div>
          </div>

          {/* Filters Section */}
          <div className="w-full h-80 bg-white shadow-md rounded-lg flex flex-col p-5 border border-gray-300">
            <h3 className="text-lg font-semibold mb-3">Filters</h3>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Vegetarian
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Vegan
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Under 30 mins
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> High Protein
            </label>
          </div>
        </div>

       
        <div className="w-2/3 flex flex-col items-center">
          <h2 className="flex justify-center text-2xl w-100 text-white font-medium mb-4 border-white border-2 bg-[rgba(62,78,95,0.52)] rounded-xl">Recommended Recipes</h2>

          <div className="flex flex-col gap-10">
            {/* Recipe Rows */}
            <div className="grid grid-cols-4 gap-5">
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <div
                    key={recipe.id}
                    className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-300"
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-40 object-cover"
                    />
                    <h3 className="text-center py-2 font-medium">{recipe.title}</h3>
                    <div className="flex justify-center pb-3">
                      <a
                        href={recipe.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-1 rounded-md"
                      >
                        View Recipe
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center col-span-4">Loading recipes...</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Recipes;
