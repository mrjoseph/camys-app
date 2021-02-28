import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const CardContainer = ({ classes, theme, content }) => {
    const { cards } = content;
    return (
      <MuiThemeProvider theme={theme}>
        <Grid container justify="space-evenly" spacing={3}>
          {cards.map((item) => {
            return (
              <Grid item key={item.title} xs={12} sm={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </MuiThemeProvider>
    );
  };

  export default CardContainer;