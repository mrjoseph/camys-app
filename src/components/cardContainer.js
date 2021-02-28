import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
const CardContainer = ({ classes, theme, content }) => {
  const {
    cards: { cardsList, title },
  } = content;
  return (
    <MuiThemeProvider theme={theme}>
      <Box mb={7}>
        <Typography component="h2" variant="h3">
          {title}
        </Typography>
      </Box>
      <Grid container justify="space-evenly" spacing={3} alignItems="stretch">
        {cardsList.map((item) => {
          return (
            <Grid item key={item.title} xs={12} sm={4} alignItems="stretch">
              <Card className={classes.card}>
                <CardContent>
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
