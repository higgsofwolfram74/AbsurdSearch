import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
  Stack,
} from "@mui/material/";

//const useStyles = makeStyles((theme) => ({
//  appButton: {
//    [theme.breakpoints.down("sm")]: { display: "none" },
//  },
//  appMenu: {
//    [theme.breakpoints.up("sm")]: { display: "none" },
//  },
//}));

export default function Navbar() {
  //const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
          >
            Absurd Search
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="secondary"
              variant="outlined"
              component={Link}
              to="/"
            >
              About
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              component={Link}
              to="generator/"
            >
              Generator
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              component={Link}
              to="solver/"
            >
              Solver
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
