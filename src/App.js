import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import content from "./content.json";
import "./App.css";
import CardContainer from "./components/cardContainer";
import useStyles from "./styles.js";
import About from "./components/about";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Hero from './components/hero';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';

const App = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['"Montserrat"'].join(","),
      h3: {
        "@media (max-width:600px)": {
          fontSize: "2.0rem",
        },
      },
      h1: {
        fontSize: "4.0rem",
        "@media (max-width:600px)": {
          fontSize: "3.0rem",
        },
      },
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <main className={classes.container}>
        <CssBaseline />
      </main>
      <Container maxWidth={false} disableGutters>
        <Box className={classes.appBackground} mb={7}>
          <Nav classes={classes} content={content}/>
          <Hero classes={classes} content={content}/>
        </Box>
        <Container maxWidth="md">
          <Box mb={7}>
            <CardContainer classes={classes} theme={theme} content={content} />
          </Box>
          <Box mb={7}>
            <About content={content} />
            <Contact content={content} />
          </Box>
          <Box className={classes.footer}>empty</Box>
        </Container>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
