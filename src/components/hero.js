import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Hero = ({ classes, content }) => {
    const { hero: {
        title,
        description,
        link
    }} = content;
  return (
    <Container disableGutters maxWidth="md">
      <Box className={classes.heroContent} p={7} mr={2} ml={2}>
        <Box mb={2}>
          <Typography
            className={classes.h1}
            component="h1"
            variant="h1"
            align="left"
          >
            {title}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography component="p" variant="h4">
            {description}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography className={classes.heroButton}>
            <Link className={classes.linkButton} href="#">
              {link}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Hero;
