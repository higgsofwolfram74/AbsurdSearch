import React from "react";
import { useState } from "react";
import {
  FormHelperText,
  Paper,
  TextField,
  FormControl,
  Typography,
  Grid,
} from "@mui/material";
import MyButton from "./MyButton";

export default function Form(props) {
  const [wordList, setWordList] = useState({ words: "" });
  const [isFormInvalid, setIsFormInvalid] = useState(false);

  const isValid = (words) => {
    const pattern = /^[A-Za-z\s]+$/;

    if (
      !pattern.test(words) ||
      words.length > 100 ||
      words.split(" ").length > 10
    ) {
      setIsFormInvalid(true);
      return "";
    } else {
      setIsFormInvalid(false);
      return words.split(" ").join("-");
    }
  };

  const handleChange = (event) => {
    //console.log(event.target.value);
    const swords = isValid(event.target.value);

    if (swords.length > 0) {
      setWordList({ words: swords });
    }
  };

  const submitWordsearch = () => props.submitter(wordList["words"]);

  return (
    <Paper>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Generate a Wordsearch
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <FormControl>
            <TextField
              onChange={handleChange}
              error={isFormInvalid}
              required={true}
              margin="normal"
              defaultValue=""
            ></TextField>
            <FormHelperText>
              <div align="center">Words to put inside wordsearch</div>
            </FormHelperText>
            <FormHelperText color="secondary">
              <div align="center">
                No more than 10 words, 100 characters, and no numbers may be
                submitted
              </div>
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center">
          {isFormInvalid ? (
            <MyButton
              words={wordList}
              isFormInvalid={true}
              submitWordsearch={submitWordsearch}
            />
          ) : (
            <MyButton
              words={wordList}
              isFormInvalid={false}
              submitWordsearch={submitWordsearch}
            />
          )}
        </Grid>
      </Grid>
      <br />
    </Paper>
  );
}
