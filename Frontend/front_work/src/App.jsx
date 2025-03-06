import React from "react";
import Landing from "./components/Landing";
import Menu from "./components/Menu";
import Recipes from "./components/Recipes"
import Foody from "./components/Foody"
import Special from "./components/Special"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={   
              <Landing />
          }
        />
        <Route
          path="/menu"
          element={
              <Menu />
          }
        />
        <Route
          path="/recipes"
          element={
              <Recipes />
          }
        />

        <Route
          path="/foody"
          element={
              <Foody />
          }
        />

        <Route
          path="/special"
          element={
              <Special />
          }
        />
      </Routes>
    </Router>
  );
}
export default App
