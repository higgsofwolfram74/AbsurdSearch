import React from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Grid, Paper, Typography } from "@mui/material";
import FoundWords from "./FoundWords";

export default function Wordsearchsolve(props) {
  const [wordsearchFile, setWordsearchFile] = useState({ selectedFile: null });
  const [wordsearchResult, setWordsearchResult] = useState({
    found_words: [],
    submitted: props.submitted,
  });

  const onFileChange = (event) => {
    setWordsearchFile({ selectedFile: event.target.files[0] });
  };

  const handleSubmit = () => {
    //holds fields for post request header
    const formData = new FormData();

    formData.append(
      "myFile",
      wordsearchFile.selectedFile,
      wordsearchFile.selectedFile.name
    );

    console.log(wordsearchFile.selectedFile);

    axios.post("/api/upload/", formData).then((res) => {
      setWordsearchResult({ found_words: res.data["words"], submitted: true });
    });
  };

  if (wordsearchResult["submitted"] === true) {
    return <FoundWords wordsearchRes={wordsearchResult["found_words"]} />;
  } else {
    return (
      <Paper>
        <Grid container spacing={1}>
          <Grid item xs={12} align="center">
            <Typography component="h4" variant="h4">
              Please upload JSON file of wordsearch you want to solve.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button>
              <input type="file" onChange={onFileChange} />
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              color="primary"
              type="submit"
              variant="contained"
              onClick={handleSubmit}
            >
              Solve It
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}
