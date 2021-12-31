import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";

const myStyle = createTheme({
  palette: {
    secondary: {
      main: "#f44336",
    },
  },
});

export default function MyButton(props) {
  if (!props.isFormInvalid) {
    return (
      <Button
        color="primary"
        type="submit"
        variant="contained"
        onClick={props.submitWordsearch}
      >
        Generate Wordsearch
      </Button>
    );
  } else {
    return (
      <ThemeProvider theme={myStyle}>
        <Button color="secondary" type="submit" variant="contained">
          Generate Wordsearch
        </Button>
      </ThemeProvider>
    );
  }
}
