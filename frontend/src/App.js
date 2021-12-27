import React from "react";
import About from "./components/About";
import Wordsearchgen from "./components/Wordsearchgen";
import Navbar from "./components/Navbar";
import Wordsearchsolve from "./components/Wordsearchsolve";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { teal } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import { CssBaseline } from "@mui/material";

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

const darkTheme = makeStyles((theme) => ({
  darkMode: {
    background: "#000",
  },
}));

export default function App() {
  const classes = darkTheme();

  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={navtheme}>
        <Navbar />
      </ThemeProvider>
      <div>
        <Paper className={classes.darkMode}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/generator"
              element={<Wordsearchgen submitted={false} />}
            />
            <Route path="/solver" element={<Wordsearchsolve />} />
            <Route exact path="/" element={<About />} />
          </Routes>
        </Paper>
      </div>
    </div>
  );
}
