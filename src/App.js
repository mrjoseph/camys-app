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

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBarHeight: {
    height: "98px",
  },
  nav: {},
  toolbar: {
    color: "#fff",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroWindow: {
    backgroundColor: "#ffffff52",
    margin: "0 68px",
    borderRadius: "18px",
    color: "#fff",
    padding: "135px 0 0 84px",
  },
  heroContentBody: {
    backgroundImage: "url('/purple-clouds-header.jpg')",
    maxWidth: "1024px",
    backgroundSize: "100%",
    height: "640px",
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

  return (
    <React.Fragment>
      <main>
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
                <Typography variant="h6" color="inherit" noWrap>
                  CR/
                </Typography>
                <div className={classes.nav}>
                  <Typography className={classes.root}>
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      color="inherit"
                    >
                      Service
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      color="inherit"
                    >
                      About
                    </Link>
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      color="inherit"
                    >
                      Contact
                    </Link>
                  </Typography>
                </div>
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
    </React.Fragment>
  );
};

export default App;
