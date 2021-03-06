import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { HashLink as Link } from "react-router-hash-link";

const Nav = ({ classes, content }) => {
  const {
    navigation: { heading, links },
  } = content;
  return (
    <Box pt={2} pb={2} pr={2} pl={2}>
      <Container disableGutters maxWidth="md" className={classes.appBar}>
        <Grid direction="row" md={6} sm={12}>
          <Grid item>
            <Typography className={classes.logo}>{heading}</Typography>
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
            <Link to="#services">{links.services}</Link>
          </Grid>
          <Grid item>
            <Link to="#about">{links.about}</Link>
          </Grid>
          <Grid item>
            <Link to="#contact">{links.contact}</Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Nav;
