import React from "react";
import { Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function About() {
  return (
    <Paper>
      <Typography variant="h5" component="div" align="center" className="stuff">
        <br />
        Hello! This is a fun website I made to practice exposing API's to <br />{" "}
        my other projects for my friends to use. Feel free to generate <br />
        wordsearches and use the solver on them as you please. <br /> If you
        have any problems, please go to{" "}
        <Link href="https://github.com/higgsofwolfram74/AbsurdSearch">
          my github
        </Link>{" "}
        and create <br />
        an issue there.
      </Typography>
      <br />
    </Paper>
  );
}
