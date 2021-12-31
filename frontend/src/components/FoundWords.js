import { Paper, Grid, Typography } from "@mui/material";
import React from "react";

export default function FoundWords(props) {
  return (
    <Paper>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h6" variant="h6">
            The results are in! Wordsearch solver found:{" "}
          </Typography>
          {props.wordsearchRes.map(function (res) {
            console.log(typeof res[1]);
            return (
              <Grid item xs={12} align="center">
                <Typography component="h6" variant="h6">
                  The word "{res[0]}" going {res[1].toLowerCase()} at{" "}
                  {res[2][1]} units right and {res[2][0]} units down.
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <br />
    </Paper>
  );
}
