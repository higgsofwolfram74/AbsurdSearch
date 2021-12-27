import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function About() {
  return (
    <div>
      <Typography variant="h5" component="div" align="center" className="stuff">
        <br />
        Hello! This is a fun website I made to practice exposing API's to <br />{" "}
        my other projects for my friends to use. Feel free to generate <br />
        wordsearches and use the solver on them as you please. <br /> If you
        have any problems, please go to{" "}
        <Link href="https://www.github.com/higgsofwolfram74">
          my github
        </Link>{" "}
        and create <br />
        an issue there.
      </Typography>
    </div>
  );
}
