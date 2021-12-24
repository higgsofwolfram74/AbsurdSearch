import React from "react";
import About from "./components/About";
import Wordsearchgen from "./components/Wordsearchgen";
import Navbar from "./components/Navbar";
import Wordsearchsolve from "./components/Wordsearchsolve";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { teal } from "@mui/material/colors";

const navtheme = createTheme({
  palette: {
    primary: {
      main: teal["600"],
    },
    secondary: {
      main: "#f8f0f3",
    },
  },
});

const darktheme = createTheme({
  palette: {
    type: "dark",
  },
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={darktheme}>
        <CssBaseline />
      </ThemeProvider>
      <ThemeProvider theme={navtheme}>
        <Navbar />
      </ThemeProvider>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            path="/generator"
            element={<Wordsearchgen submitted={false} />}
          />
          <Route path="/solver" element={<Wordsearchsolve />} />
          <Route exact path="/" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
