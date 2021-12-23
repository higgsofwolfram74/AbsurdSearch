import React from "react";
import { useState } from "react";
import Textfield from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Link } from "react-router-dom";
import axios from "axios";
import Wordsearchresult from "./Wordsearchresult";
import { useEffect } from "react";

export default function Wordsearchgen(props) {
  const [wordList, setWordList] = useState({
    words: "",
    wordslist: [],
    wordsearch: [[]],
    submitted: props["submitted"],
  });

  const handleChange = (event) => {
    setWordList({
      words: event.target.value.toLowerCase().split(" ").join("-"),
    });
  };

  const handleSubmit = (event) => {
    axios.get("/api/words=" + wordList["words"]).then(() => {
      setWordList({
        submitted: true,
      });
    });
  };

  if (wordList["submitted"] === true) {
    return <Wordsearchresult />;
  } else {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              Generate a Wordsearch
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <FormControl>
              <Textfield
                name="words"
                style={{ width: 700 }}
                variant="outlined"
                required={true}
                defaultValue={""}
                onChange={handleChange}
              />
              <FormHelperText>
                <div align="center">Words to put inside wordsearch</div>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} align="center">
            <Button color="primary" variant="contained" onClick={handleSubmit}>
              Generate
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
