import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Camille Roch
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {},
  appBarHeight: {
    height: "98px",
  },
  nav: {
    width: "500px",
  },
  navLink: {
    display: "inline-block",
    padding: "6px",
  },
  toolbar: {
    color: "#fff",
    display: "flex",
    alignContent: "center",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroWindow: {
    // [theme.breakpoints.up("sm")]: {
    //   backgroundColor: "green",
    // },
    backgroundColor: "#ffffff52",
    borderRadius: "18px",
    color: "#fff",
    padding: "0",
  },
  heroContentBody: {
    backgroundImage: "url('/purple-clouds-header.jpg')",
    maxWidth: "1024px",
    backgroundSize: "100%",
    paddingLeft: "0",
    paddingRight: "0",
  },
  heroContent: {
    padding: theme.spacing(0, 0, 0),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

const App = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: ['"Nunito"'].join(","),
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <main className={classes.root}>
        {/* Hero unit */}
        <CssBaseline />

        <div className={classes.heroContent}>
          <Container maxWidth="sm" className={classes.heroContentBody}>
            <AppBar
              position="relative"
              color="transparent"
              elevation={0}
              className={classes.appBarHeight}
            >
              <Toolbar className={classes.toolbar}>
                <Grid container justify="space-between" spacing={24}>
                  <Grid item>
                    <Typography variant="h6" color="inherit" noWrap>
                      CR/
                    </Typography>
                  </Grid>
                  <Grid>
                    <Typography className={classes.root}>
                      <Link
                        className={classes.navLink}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        color="inherit"
                      >
                        Service
                      </Link>
                      <Link
                        className={classes.navLink}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        color="inherit"
                      >
                        About
                      </Link>
                      <Link
                        className={classes.navLink}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        color="inherit"
                      >
                        Contact
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <div className={classes.heroWindow}>
              <Typography component="h1" variant="h2" align="left" gutterBottom>
                This is going to be the heading
              </Typography>
              <Typography variant="h5" align="left" paragraph>
                Here is going to be the subheading.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="left">
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Contact
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </MuiThemeProvider>
  );
};

export default App;
