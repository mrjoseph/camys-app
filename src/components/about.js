import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
const About = ({ content }) => {
  const { title, description } = content.about;
  return (
    <Box mb={5}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        gutterBottom={true}
      >
        {title}
      </Typography>
      <Typography component="p" align="center">
        {description}
      </Typography>
    </Box>
  );
};

export default About;
