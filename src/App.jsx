// System imports
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components import
import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <div className="main-page">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favourites" element={<Favourites />} />
      </Routes>
    </div>
  );
}

export default App;
