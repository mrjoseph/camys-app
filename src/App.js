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
        {/* Hero unit */}
        <CssBaseline />
      </main>
      <Container maxWidth={false} disableGutters>
        <Box className={classes.appBackground} mb={7}>
          <Box pt={2} pb={2} pr={2} pl={2}>
            <Container disableGutters maxWidth="md" className={classes.appBar}>
              <Grid direction="row" md={6} sm={12}>
                <Grid item>
                  <Typography className={classes.logo}>CR/</Typography>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justify="flex-end"
                spacing={2}
                md={6}
                sm={12}
              >
                <Grid item>
                  <Link href="#">Services</Link>
                </Grid>
                <Grid item>
                  <Link href="#">About</Link>
                </Grid>
                <Grid item>
                  <Link href="#">Contact</Link>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Container disableGutters maxWidth="md">
            <Box className={classes.heroContent} p={7} mr={2} ml={2}>
              <Box mb={2}>
                <Typography
                  className={classes.h1}
                  component="h1"
                  variant="h1"
                  align="left"
                >
                  Heading
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography component="p" variant="h4">
                  This is going to be the subheading
                </Typography>
              </Box>
              <Box mb={2}>
                <Typography className={classes.heroButton}>
                  <Link className={classes.linkButton} href="#">
                    CONTACT
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="md">
          <Box mb={7}>
            <Typography component="h2" variant="h3">
              This is going to be the h2
            </Typography>
          </Box>
          <Box mb={7}>
            <CardContainer classes={classes} theme={theme} content={content} />
          </Box>

          <Box mb={7}>
            <Box mb={5}>
              <Typography
                component="h2"
                variant="h3"
                align="center"
                gutterBottom={true}
              >
                About
              </Typography>
              <Typography component="p" align="center">
                {content.about.description}
              </Typography>
            </Box>
            <Box mb={5}>
              <Typography
                component="h2"
                variant="h3"
                align="center"
                gutterBottom={true}
              >
                Contact
              </Typography>

              <Typography component="p" align="center">
                There is no denying the fact that the success of an
                advertisement lies mostly in the headline.
              </Typography>
              <Typography component="p" align="center">
                <Link href="#">email@me.com</Link>
              </Typography>
            </Box>
          </Box>
          <Box className={classes.footer}>empty</Box>
        </Container>
      </Container>
    </MuiThemeProvider>
  );
};

export default App;
