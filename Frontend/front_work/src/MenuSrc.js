import recipe from "./assets/recipe.png";
import foody from "./assets/foody.png";
import special from "./assets/special.png";

const menuItems = [
  {
    id: 1,
    heading: "Around The World!!",
    image: recipe,  
    description: {
      p1: "Around 10,000 Recipes Available on FoodSpace",
      p2: "Apply Multiple Filters For Your Ease",
      p3: "Download Recipes ",
    },
    route: "/recipes",
  },
  {
    id: 2,
    heading: "Create Your Own Magic!!",
    image: foody, 
    description: {
      p1: "Explore New Recipes With The Help of Foody Ai",
      p2: "Just Add Ingredients and Experience The Magic Unveils",
      p3: "Customize According To Choice",
    },
    route: "/foody",
  },
  {
    id: 3,
    heading: "Today's Special",
    image: special, 
    description: {
      p1: "View What's Trending In Recipes",
      p2: "Try Recipes What People Recommend For Today",
      p3: "New Day, New Special!!",
    },
    route: "/special",
  },
];

export default menuItems;
