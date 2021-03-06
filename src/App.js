import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import content from "./content.json";
import "./App.css";
import CardContainer from "./components/cardContainer";
import useStyles from "./styles.js";
import About from "./components/about";
import Contact from "./components/contact";
import Nav from "./components/nav";
import Hero from "./components/hero";

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

  const { title, metaContent } = content.head;
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <Helmet>
          <title>{title}</title>
          {metaContent.map(({ name, content }) => {
            return <meta name={name} content={content} />;
          })}
        </Helmet>
        <main className={classes.container}>
          <CssBaseline />
        </main>
        <Container maxWidth={false} disableGutters>
          <Box className={classes.appBackground} mb={7}>
            <Nav classes={classes} content={content} />
            <Hero classes={classes} content={content} />
          </Box>
          <Container maxWidth="md">
            <Box mb={7}>
              <div id="services">
                <CardContainer
                  classes={classes}
                  theme={theme}
                  content={content}
                />
              </div>
            </Box>
            <Box mb={7}>
              <div id="about">
                <About content={content} />
              </div>

              <div id="contact">
                <Contact content={content} />
              </div>
            </Box>
            <Box className={classes.footer}>empty</Box>
          </Container>
        </Container>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
