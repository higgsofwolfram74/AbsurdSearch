import React from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button";

export default function MyButton(props) {
  useEffect(() => {
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
        <Button color="secondary" type="submit" variant="contained">
          Generate Wordsearch
        </Button>
      );
    }
  });
}
