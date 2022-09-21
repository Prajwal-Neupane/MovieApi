import React from "react";
import Home from "./components/Home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
