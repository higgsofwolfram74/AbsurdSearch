import React from "react";
import About from "./components/About";
import Wordsearchgen from "./components/Wordsearchgen";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/generator"
            element={<Wordsearchgen submitted={false} />}
          />
          <Route exact path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
