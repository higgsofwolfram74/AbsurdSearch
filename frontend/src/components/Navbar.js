import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ol>
        <li>
          <p>Absurd Search</p>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="generator/">Wordsearch Generator</Link>
        </li>
        <li>
          <p>Wordsearch Solver</p>
        </li>
      </ol>
    </nav>
  );
}
