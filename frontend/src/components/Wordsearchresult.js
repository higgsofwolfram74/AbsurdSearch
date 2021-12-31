import React from "react";
import { useEffect } from "react";
import { Paper, Grid, Typography } from "@mui/material";

function exportToJson(objectData) {
  let filename = "Wordsearch.json";
  let contentType = "application/json;charset=utf-8;";

  var a = document.createElement("a");
  a.download = filename;
  a.href =
    "data:" +
    contentType +
    "," +
    encodeURIComponent(JSON.stringify(objectData));
  a.target = "_blank";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default function Wordsearchresult(props) {
  useEffect(() => {
    exportToJson(props);
  });
  //console.log(props);

  return (
    <Paper>
      <br />
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography component="h4" variant="h4">
            Thanks for using AbsurdSearch. Please download your wordsearch and
            send it to your friends.
          </Typography>
        </Grid>
      </Grid>
      <br />
    </Paper>
  );
}
